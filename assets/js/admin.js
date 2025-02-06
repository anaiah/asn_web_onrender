/*

author : Carlo O. Dominguez

getAll()
util.speak()

*/
//var socket = io.connect("https://osndp.onrender.com");

let admin = {
	
	
    offset: 0,

    shopCart: [],
    
    dataforTag:null,

    //online version socket.io
    //socket:io.connect("https://osndp.onrender.com"),

    //localhost version socket.io
    socket: io.connect("http://localhost:10000", {
        withCredentials: true,
        extraHeaders: {
          "osndp-header": "osndp"
        }
    }),  
	//main func
    getAll: async (nPage,mall_id)=>{
        console.log('==runing GetAll()')
        //reset site_info div
        document.getElementById('site_info').innerHTML = ""

        await fetch(`http://localhost:10000/getall/${mall_id}/3/${nPage}`,{
            cache:'reload'
        })
        .then(res => res.text() )
        .then(text => {	
            document.getElementById('site_info').innerHTML = text
        })	
        .catch((error) => {
            util.Toast(`Error:, ${error}`,1000)
            console.error('Error:', error)
        })    
    },

    //===========================addtocart
    addtoCart:async (elemId, eqptId, nKey) =>{
        let qtys = document.getElementById(elemId)
        let adata = admin.dataforTag[nKey].equipment_value
        const badge = document.getElementById('bell-badge')
            
        //console.log(nKey)

        if(admin.shopCart.length > 0){
        
            let oFind = admin.shopCart.find( (cart)=> cart.id == eqptId)
             
            if(oFind === undefined){
                admin.shopCart.push({
                    id: eqptId, 
                    data: adata,
                    qty: qtys.value,
                    price: admin.dataforTag[nKey].price,
                    sale: admin.dataforTag[nKey].sale_price,
                    total: qtys.value * admin.dataforTag[nKey].sale_price
                })

                badge.innerHTML = admin.shopCart.length
                
                util.Toast("Item Successfully Added!",2000)
            }else{
                  
                console.log('present!,...ignore')
                util.Toast('THIS ITEM IS ALREADY IN CART!',2000)
                return true;  
            }
        
        }else{
            admin.shopCart.push({
                id: eqptId, 
                data: adata,
                qty: qtys.value,
                price: admin.dataforTag[nKey].price,
                sale: admin.dataforTag[nKey].sale_price,
                total: qtys.value * admin.dataforTag[nKey].sale_price
            })

            badge.innerHTML = admin.shopCart.length
            
            util.Toast("Item Successfully Added!",2000)
        }
   
        console.log( '====TOTAL SHOPCART===',admin.shopCart) 
    },


    showCartModal:()=>{
        const configObj = { keyboard: false, backdrop:'static' }
        
        let pocartmodal =  new bootstrap.Modal(document.getElementById('pocartModal'),configObj);
        
        let pocartModalEl = document.getElementById('pocartModal')

        if(admin.shopCart.length == 0){
            util.Toast('SHOPPING CART EMPTY!',2000)
            e.preventDefault()
            e.stopPropagation()
            return false
        
        }else{
            admin.showcart()
            pocartmodal.show()
          
        }//eif
        
    },

    //======================= show cart
    showcart:() => {
                
        if(admin.shopCart.length > 0){
            
            document.getElementById('cart-content').innerHTML = ""
            
            for (let key in admin.shopCart) {
                
                const info = JSON.parse(admin.shopCart[key].data)

                document.getElementById('cart-content').innerHTML += `
                <a class="dropdown-item d-flex align-items-center" href="javascript:void(0)">
                <div class="me-3">
                    <div class="bg-primary icon-circle"><i class="fas fa-file-alt text-white"></i></div>
                </div>
                <div>
                
                <span class=eqptno>
                ${info.equipment_type.toUpperCase()}<br>
                ${info.eqpt_description}<br>
                </span>
                <span class='eqptmain' >
                ${info.serial}<br>
                Qty. ${admin.shopCart[key].qty}<br>
                Price : &#8369;${ util.addCommas(parseFloat(admin.shopCart[key].sale).toFixed(2)) }<br>
                TOTAL : &#8369;${ util.addCommas(parseFloat(admin.shopCart[key].total).toFixed(2)) }<br></span>
                </div>
                </a>`
                
            }//===========end for next
        } 
    },

    getimagename:()=>{
        document.getElementById('serial_image').value = document.getElementById('client_po').value
    },

    //========CREATE PURCHASE ORDER ==============//
    purchaseOrder:async ()=>{

        util.hideModal('pocartModal',1000)    

        let shopitem =  document.getElementById('shop-item')
        shopitem.innerHTML =""
        
        let grandtotal = 0

        for (let key in admin.shopCart) {
                
            const info = JSON.parse(admin.shopCart[key].data)

            grandtotal += parseFloat(admin.shopCart[key].total)
            //console.log('total', grandtotal)

            // document.getElementById('shop-item').innerHTML += `
            // <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
            // <div class="d-flex w-100 justify-content-between">
            //   <h5 class="mb-1">xx ${info.equipment_type.toUpperCase()}</h5>
            // </div>
            // <p class="mb-1">${info.serial}</p>
            // <p class="mb-1">${info.eqpt_description}</p>
            // <p class="mb-1">Qty. ${admin.shopCart[key].qty}</p>
            // <p class="mb-1">Price : &#8369;${ util.addCommas(parseFloat(admin.shopCart[key].sale).toFixed(2)) }</p>
            // <p class="mb-1">TOTAL : &#8369;${ util.addCommas(parseFloat(admin.shopCart[key].total).toFixed(2)) }</p>
            
            // </a>`
            document.getElementById('shop-item').innerHTML += `
                <div id='itembuy' class='w-100 card shadow'>
                ${info.equipment_type.toUpperCase()}<br>
                ${info.serial}<br>  
                 ${info.eqpt_description}<br>  
                 Qty. ${admin.shopCart[key].qty}<br>  
                 Price : &#8369;${ util.addCommas(parseFloat(admin.shopCart[key].sale).toFixed(2)) }  <br>
                 TOTAL : &#8369;${ util.addCommas(parseFloat(admin.shopCart[key].total).toFixed(2)) }  <br>
                </div>`

        }//===========end for next

        let divrentsale = document.getElementById('div-rent-sale')
        divrentsale.innerHTML='' //reset
        
        divrentsale.innerHTML=`
            <div class="row">
            <div class="col">
                <label for="client_po">PO Number</label>
                <input onkeyup='javascript:admin.getimagename()' type="text" style="text-transform: uppercase" id="client_po" name="client_po" class="form-control equipmentxx"  required/>
            </div>           
            </div>
            <div class="row">
            <div class="col">
                <label for="client_invoice">Invoice Number</label>
                <input type="text" style="text-transform: uppercase" id="client_invoice" name="client_invoice" class="form-control equipmentxx" value="INV135"  required/>
            </div>           
            </div>
            <div class="row">
            <div class="col">
                <label for="client_transaction">Transaction</label>
                <select class="form-control equipmentxx" id="client_transaction" name="client_transaction" required>
                    <option value="PURCHASE" selected>PURCHASE</option>	
                    <option value="RENT">RENT</option>
					<option value="TERMS">TERMS</option>
				</select>
            </div>           
            </div>
            <div class="row">
            <div class="col">
                <label for="client_name">Client Full Name</label>
                <input type="text" style="text-transform: uppercase" id="client_name" name="client_name" class="form-control equipmentxx" value="ROBERT KENNEDY"  required/>
            </div>           
            </div>
            <div class="row">
            <div class="col">
                <label for="company_name">Company Name</label>
                <input type="text"  style="text-transform: uppercase" id="company_name" name="company_name" class="form-control equipmentxx" value="PREFAB WORKS"  required/>
            </div>           
            </div>
            <div class="row">
            <div class="col">
                <label for="delivery_site">Delivery Site</label>
                <input type="text" style="text-transform: uppercase" id="delivery_site" name="delivery_site" class="form-control equipmentxx" value="QC"  required/>
            </div>           
            </div>
            <div class="row">
            <div class="col">
                <label for="company_phone">Company Phone</label>
                <input type="text" id="company_phone" name="company_phone" value="0917-303-1078" placeholder="0917-123-1234" pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}" class="form-control equipmentxx" value=""  required/>
            </div>           
            </div>
            <div class="row">
            <div class="col">
                <label for="company_email">Company Email</label>
                <input type="email" style="text-transform: lowercase" id="company_email" name="company_email" value="m@m" class="form-control equipmentxx" value=""  required/>
            </div>           
            </div>
            <div class="row">
            <div class="col">
                <label for="trucking_name">Trucking</label>
                <input type="text" style="text-transform: uppercase" id="trucking_name" name="trucking_name" value="Vantaztic" class="form-control equipmentxx" value=""  required/>
            </div>           
            </div>
            <div class="row">
            <div class="col">
                <label for="driver_name">Driver's Name</label>
                <input type="text" style="text-transform: uppercase" id="driver_name" name="driver_name" class="form-control equipmentxx" value="REYGIN CIEZ"  required/>
            </div>           
            </div>
            <div class="row">
            <div class="col">
                <label for="plate_number">Plate No.</label>
                <input type="text" style="text-transform: uppercase" id="plate_number" name="plate_number" class="form-control equipmentxx" value="NDM5775"  required/>
            </div>           
            </div>
            <div class="row">
                <div class="col"><BR><br>
                    <span class='grandtotal'>&nbsp;&nbsp;Grand Total :  ${util.addCommas(grandtotal.toFixed(2))}</span>
                                       
                    <textarea class="lets-hide" id="post_data" name="post_data">${JSON.stringify(admin.shopCart)}</textarea>
                    <input type="number" min="100" step="0.01" placeholder="0.00" value="${grandtotal}" class="lets-hide form-control equipmentxx" id="grand_total" name="grand_total" required />
                </div>
            </div><br><br>
            <div class="row">
                <div class="col">
                    <label class="form-label " for="client_remarks">Remarks</label>
                    <textarea class="form-control equipmentxx" id="client_remarks" name="client_remarks" rows="4" required>dep slip attched.</textarea>
                </div>  
            </div>
            `
        //=== FOR PO ===//
        document.getElementById('client_po').value = `_${util.generateRandomDigits(5)}`
        document.getElementById('serial_image').value = document.getElementById('client_po').value    
        //=== FOR SALES INVOICE
        document.getElementById('client_invoice').value = `_${util.generateRandomDigits(4)}`
        //==load modal for tagging
        util.loadModals('equipmentTagModal','equipmentTagForm','#equipmentTagForm','equipmentTagPlaceHolder') //PRE-LOAD MODALS)
        util.modalShow('equipmenttagmodal')
           
    },

    //===========================show modal and iamge
    showPdf: async (src) => {
        console.log('*** showImage() ****')
        console.log(src)
        const configObj = { keyboard: false, backdrop:'static' }
        
        const ximagemodal =  new bootstrap.Modal(document.getElementById('imageModal'),configObj);
        
        const imageModalEl = document.getElementById('imageModal')

        let pdfprev = document.getElementById('pdf_iframe')

        let exist = admin.fileExists( src )
        //pdfprev.contentDocument.location.reload(true);

        if(exist){
            pdfprev.src = src
            ximagemodal.show()

        }else{
            alert('ERROR, FILE NOT FOUND!')
            //document.getElementById('pdf-modal-body').innerHTML=""
            //admin.alertMsg('File not Found!','danger','pdf-modal-body')
            ximagemodal.hide()
            pdfprev.src = ""
        }

        
        imageModalEl.addEventListener('show.bs.modal', function (event) {
        })
        
        imageModalEl.addEventListener('hide.bs.modal', function (event) {
            console.log('fani')
            pdfprev.src += '';
        })
    },

    //===check file exist in server
    fileExists:(url)=> {
        if(url){
            var req = new XMLHttpRequest();
            req.open('GET', url, false);
            req.send();
            if(req.status!==200){
                return false;
            }else{
                return true
            }
            
        } else {
            return false;
        }
    },

    //for badge countr
    fetchBadgeData: async()=>{ //first to fire to update badge
        fetch(`/fetchinitdata`).then((response) => {  //promise... then 
            return response.json();
        })
        .then((data) => {
            
            console.log(data)
            //==== update badage for pending approv
            const badge = document.getElementById('bell-badge')
            badge.innerHTML = data.result[2].status_count

            const rentbadge = document.getElementById('rent-badge')
            rentbadge.innerHTML = data.result[0].status_count
            
            const salebadge = document.getElementById('sale-badge')
            salebadge.innerHTML = data.result[1].status_count
            
        })
        .catch((error) => {
            util.Toast(`Error:,dito nga ${error}`,1000)
            console.error('Error:', error)
        })    

    },


    filterArr:(cSerial, aArrid, transtype) => {
       		
        //table
        const  tbodyRef = document.getElementById('dataTagTable').getElementsByTagName('tbody')[0];
        tbodyRef.innerHTML="" //RESET FIRST

        let newRow = tbodyRef.insertRow();
        // Insert a cell
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);
        
        let newArray = admin.dataforTag.filter(function (el)
        {
          return el.equipment_id  == aArrid //return object record if id matched with param ID
        }
        )
        let newVal = JSON.parse(newArray[0].equipment_value)
        
        ////console.log( newVal)
        //value
        cell1.innerHTML =   `<span class='eqptno' >${newVal.serial}<br>
        ${newVal.equipment_type.toUpperCase()}<br>${newVal.eqpt_description}</span>`
        
        cell2.innerHTML =   `&#8369;${util.addCommas(parseFloat(newVal.price).toFixed(2))}`
        cell2.style.textAlign = "right"
        
        cell3.innerHTML =   newVal.date_reg
        
        let divrentsale = document.getElementById('div-rent-sale')
        divrentsale.innerHTML='' //reset
        
        //=============template
        if(transtype=="rent"){
            divrentsale.innerHTML=`
            <div class="row">
            <div class="col">
                <label for="client_po">PO Number</label>
                <input type="text" onkeydown='javascript:imagepo()' style="text-transform: uppercase" id="client_po" name="client_po" class="form-control equipmentxx" value=""  required/>
            </div>           
            </div>
            <div class="row">
            <div class="col">
                <label for="client_invoice">Invoice Number</label>
                <input type="text" style="text-transform: uppercase" id="client_invoice" name="client_invoice" class="form-control equipmentxx" value=""  required/>
            </div>           
            </div>
            <div class="row">
            <div class="col">
                <label for="client_name">Client Full Name</label>
                <input type="text" style="text-transform: uppercase" id="client_name" name="client_name" class="form-control equipmentxx" value=""  required/>
            </div>           
            </div>
            <div class="row">
            <div class="col">
                <label for="company_name">Company Name</label>
                <input type="text" style="text-transform: uppercase" id="company_name" name="company_name" class="form-control equipmentxx" value=""  required/>
            </div>           
            </div>
            <div class="row">
            <div class="col">
                <label for="company_address">Company Address</label>
                <input type="text" style="text-transform: uppercase" id="company_address" name="company_address" class="form-control equipmentxx" value=""  required/>
            </div>           
            </div>
            <div class="row"> 
            <div class="col">
                <label for="company_phone">Company Phone</label>
                <input type="text" id="company_phone" name="company_phone" placeholder="0917-123-1234" pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}" class="form-control equipmentxx" value=""  required/>
            </div>           
            </div>
            <div class="row">
            <div class="col">
                <label for="company_email">Company Email</label>
                <input type="email" style="text-transform: lowercase" id="company_email" name="company_email" class="form-control equipmentxx" value=""  required/>
            </div>           
            </div>
            <div class="row">
            <div class="col">
                <label for="rent-price">Rent Price</label>
                <input type="text" id="eqpt_id" name="eqpt_id" value="${aArrid}" class="lets-hide">
                <input type="text" id="trans_type" name="trans_type" value="rent" class="lets-hide">
                <input type="number" step="0.01" placeholder="0.00" class="form-control equipmentxx" id="rent_price" name="rent_price" required  />
            </div>           
            </div>
            <div class="row">
                <div class="col">
                    <label for="rent-start">Rent Start</label>
                    <input type="date" class="form-control equipmentxx" id="rent_start" name="rent_start" required />    
                </div>           
            </div>
            <div class="row">
                <div class="col">
                    <label for="rent-end">Rent End</label>
                    <input type="date" class="form-control equipmentxx" id="rent_end" name="rent_end" required />    
                </div>           
            </div>
            <div class="row">
                <div class="col">
                    <label class="form-label " for="client_remarks">Remarks</label>
                    <textarea class="form-control equipmentxx" id="client_remarks" name="client_remarks" rows="4" required></textarea>
                </div>  
            </div>
            `
        }else{  //==============SALE
            divrentsale.innerHTML=`
            <div class="row">
            <div class="col">
                <label for="client_po">PO Number</label>
                <input type="text" style="text-transform: uppercase" id="client_po" name="client_po" class="form-control equipmentxx" value=""  required/>
            </div>           
            </div>
            <div class="row">
            <div class="col">
                <label for="client_invoice">Invoice Number</label>
                <input type="text" style="text-transform: uppercase" id="client_invoice" name="client_invoice" class="form-control equipmentxx" value=""  required/>
            </div>           
            </div>            
            <div class="row">
            <div class="col">
                <label for="client_name">Client Full Name</label>
                <input type="text" style="text-transform: uppercase" id="client_name" name="client_name" class="form-control equipmentxx" value=""  required/>
            </div>           
            </div>
            <div class="row">
            <div class="col">
                <label for="company_name">Company Name</label>
                <input type="text"  style="text-transform: uppercase" id="company_name" name="company_name" class="form-control equipmentxx" value=""  required/>
            </div>           
            </div>
            <div class="row">
            <div class="col">
                <label for="company_address">Company Address</label>
                <input type="text" style="text-transform: uppercase" id="company_address" name="company_address" class="form-control equipmentxx" value=""  required/>
            </div>           
            </div>
            <div class="row">
            <div class="col">
                <label for="company_phone">Company Phone</label>
                <input type="text" id="company_phone" name="company_phone" value="" placeholder="0917-123-1234" pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}" class="form-control equipmentxx" value=""  required/>
            </div>           
            </div>
            <div class="row">
            <div class="col">
                <label for="company_email">Company Email</label>
                <input type="email" style="text-transform: lowercase" id="company_email" name="company_email" value="" class="form-control equipmentxx" value=""  required/>
            </div>           
            </div>
            <div class="row">
                <div class="col">
                    <label for="sale-price">Sale Price</label>
                    <input type="text" id="eqpt_id" name="eqpt_id" value="${aArrid}" class="lets-hide">
                    <input type="text" id="trans_type" name="trans_type" value="sale" class="lets-hide">
                    <input type="number" min=1000 step="0.01" placeholder="0.00" value="9999" class="form-control equipmentxx" id="sale_price" name="sale_price" required />
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <label class="form-label " for="client_remarks">Remarks</label>
                    <textarea class="form-control equipmentxx" id="client_remarks" name="client_remarks" rows="4" required></textarea>
                </div>  
            </div>
            `
        }    
         //==load modal for tagging
        util.loadModals('equipmentTagModal','equipmentTagForm','#equipmentTagForm','equipmentTagPlaceHolder') //PRE-LOAD MODALS)
	    util.modalShow('equipmenttagmodal')

        
    },

    //===========OPEN MODAL FOR CATEGORY OF SELECTED EQUIPMENT===========
    showMallCategory:(cCategory,cTxt)=>{
        console.log('showmallcategory()',cTxt)
        if(cCategory==""){
            return false
        }
        ///console.log('chosen is ', cCategory)
        //off keyboard cofig
        const configObj = { keyboard: false, backdrop:'static' }

        const eqptcatmodal =  new bootstrap.Modal(document.getElementById('equipmentTypeModal'),configObj);
            
        let eqptcatModalEl = document.getElementById('equipmentTypeModal')

        eqptcatModalEl.addEventListener('hide.bs.modal', function (event) {
            
            //take away alert
            let cDiv = document.getElementById('equipmentTypePlaceHolder')
            cDiv.innerHTML=""

            // do something...
            //console.log('LOGIN FORM EVENT -> ha?')
        },false)
        
       document.getElementById('mall-label').innerHTML = "Select " + cTxt //cCategory 

        //DOM reference for select
        const categoryType = document.getElementById("categoryType");
        
        //reset select content
        categoryType.innerHTML = ""

        //get equipment type,
        admin.getMall(`http://localhost:10000/getmall/${cCategory}`, categoryType)

        eqptcatmodal.show() /// show modal box

    },
    
    removeOptions: (selectElement) => {
        var i, L = selectElement.options.length - 1;
        for(i = L; i >= 0; i--) {
           selectElement.remove(i);
        }
    },

    //===get Malls
    //esp getting values for SELECT DROPDOWNS
    getMall:(url,cSelect)=>{

        fetch(url)
        .then((response) => {  //promise... then 
            return response.json();
        })
        .then((data) => {
            //console.log( 'webmall ',data )
            
            admin.removeOptions( cSelect)

            let option = document.createElement("option")
            option.setAttribute('value', "")
            //option.setAttribute('selected','selected')
              
            let optionText = document.createTextNode( "-- Pls Select --" )
            option.appendChild(optionText)
          
            cSelect.appendChild(option)

            for (let key in data.result) {
                let option = document.createElement("option")
                option.setAttribute('value', data.result[key].mall_name)
              
                let optionText = document.createTextNode( data.result[key].mall_name )
                option.appendChild(optionText)
              
                cSelect.appendChild(option)
            }

            cSelect.focus()
            
        })
        .catch((error) => {
            util.Toast(`Error:, ${error}`,1000)
            console.error('Error:', error)
        })
    },
        
    updateMallDesc:(optionValue)=>{
        //dom reference
        const eqptdesc = document.getElementById('mall_description')
        eqptdesc.value = optionValue
    },


    //filter mall
    filterMall:(url,cSelect)=>{

        fetch(url)
        .then((response) => {  //promise... then 
            return response.json();
        })
        .then((data) => {
            //console.log( 'webmall ',data )
            
            admin.removeOptions( cSelect)
            /* TAKE OUT PLS SELECT VALUE
            let option = document.createElement("option")
            option.setAttribute('value', "")
            //option.setAttribute('selected','selected')
              
            let optionText = document.createTextNode( "-- Pls Select --" )
            option.appendChild(optionText)
          
            cSelect.appendChild(option)
            */

            for (let key in data.result) {
                let option = document.createElement("option")
                option.setAttribute('value', data.result[key].unique_id)
              
                let optionText = document.createTextNode( data.result[key].mall_name )
                option.appendChild(optionText)
              
                cSelect.appendChild(option)
            }

            cSelect.focus()
            
        })
        .catch((error) => {
            util.Toast(`Error:, ${error}`,1000)
            console.error('Error:', error)
        })
    },

    //===============filter method
    filterBy:(val)=>{

        //==========Filter By====
        
        console.log('==filterBy()===', val )

        admin.getAll("1", val )
        ///// temporarily out admin.fetchBadgeData()
    },

    //===== get transaction if rent or sale
    getTransact:(ctype)=>{
        const configObj = { keyboard: false, backdrop:'static' }
        const transModal =  new bootstrap.Modal(document.getElementById('msgModal'),configObj);
        
        const msg = document.getElementById('xmsg4')
        msg.innerHTML = `Are you sure this is for ${ctype.toUpperCase()}?`
        transModal.show()
        
    },

    //===========for socket.io
    getMsg:()=>{
        console.log( '====getMsg()=== ')
        
        /*
        admin.socket.on('sales', (oMsg) => {
            let xmsg = JSON.parse(oMsg)

            util.speak( xmsg.msg )

            ///// temporarily out   admin.fetchBadgeData()// update badges
        
        })
          */  
        
    },
    //=======check file size before upload
    //for now acceptable is 2mb max
    checkFileSize:()=>{
        const fi = document.getElementById('uploaded_file');
        // Check if any file is selected.
        if (fi.files.length > 0) {
            for (let i = 0; i <= fi.files.length - 1; i++) {

                const fsize = fi.files.item(i).size;
                const file = Math.round((fsize / 1024));
                // The size of the file.
                if (file >= 2000) {
                    const btnupload = document.getElementById('mall-save-btn')
                    btnupload.disabled = true

                    util.alertMsg("File too Big, please select a file less than 2mb","danger","size");
                    
                    fi.value=null
                    //go bottom page
                    util.scrollsTo('blindspot')

                    return false;

                }else{
                    
                    const btnupload = document.getElementById('mall-save-btn')
                    btnupload.disabled = false
                }
                /* turn off display of filesize */
                ///document.getElementById('size').innerHTML ='<b>'+ file + '</b> KB';
                
            }
        }
    },

	//==,= main run
	init : async () => {
		await new Promise( resolve =>{
			setTimeout( ()=>{
				
				//write name
                const xname = document.getElementById('xname')
                const xpic = document.getElementById('xpic')

                //get name of logged user
                xname.innerHTML = util.getCookie('fname')
                xpic.src = util.getCookie('pic')

                //get user's IP Addy
                const ipaddy = document.getElementById('ip')
                ipaddy.innerHTML = util.getCookie('ip_addy')
                                
                ///util.speak( util.getCookie('the_voice'))
				
                console.log('loadmodals() newsitemodal')
                util.loadModals('newsiteModal','newsiteForm','#newsiteForm','newsitePlaceHolder') //PRE-LOAD MODALS
				
                //util.Toast('System Ready', 2000)

                //// temporarily out    admin.fetchBadgeData()

                console.log('First getMsg()')
                admin.getMsg()

                const frmupload = document.getElementById('uploadForm')
                                
                frmupload.addEventListener("submit", e => {

                //    e.preventDefault()
                console.log('===FORM SUBMITTTTT===')
                //// keep this reference for event listener and getting value
                /////const eqptdesc = document.getElementById('eqpt_description')
                ////eqptdesc.value =  e.target.value
                })
                
				//proxy property
				//admin.test
								
				resolve()


                console.log('first getAll()')
                //console.log(document.getElementById('filter_type').value,document.getElementById('filter_status').value)
                
                //===first call load page 1
                admin.getAll("1","MALL001")
        			
			}, 1000)
		})

        //copyright
       
        document.getElementById('copyright').innerHTML='Copyright © EO-OSNDP '+ new Date().getFullYear();

        //UPDATE DROPDOWN FOR FILTER
        //get equipment type,
        admin.filterMall(`http://localhost:10000/filtermall`, document.getElementById('filter_type'))

        //================eventlistener for dropwdown

        // let dd = document.getElementById('ddown')
        // let drpdown =  document.getElementById('dropdowner')

        // dd.addEventListener('show.bs.dropdown',(e)=>{ 
        //     //IF SHOPCART IS EMPTY DONT SHOW LIST
        //     if(admin.shopCart.length == 0){
        //         util.Toast('SHOPPING CART EMPTY!',2000)
        //         e.preventDefault()
        //         e.stopPropagation()
        //         return false
            
        //     }
        // })

        // drpdown.addEventListener('click', (e)=>{
        //     e.stopPropagation()
        //     console.log('oops..')
        // })

        //==========eventlistener for poCart
        let pocartModalEl = document.getElementById('pocartModal')
       
        pocartModalEl.addEventListener('show.bs.modal', function (e) {
             //IF SHOPCART IS EMPTY DONT SHOW LIST
            //  if(admin.shopCart.length == 0){
            //     util.Toast('SHOPPING CART EMPTY!',2000)
            //     e.preventDefault()
            //     e.stopPropagation()
            //     return false
            
            // }
        },false)
       
	}//END MAIN
} //======================= end admin obj==========//
//admin.Bubbl
window.scrollTo(0,0);

admin.socket.on('logged', (msg) => {
    document.getElementById('logged_users').innerHTML = `<i class='fa fa-user'></i> ${msg}`
   console.log('socket.io()',msg)
})

admin.init()
