/*

author : Carlo O. Dominguez

*/

//
//speech synthesis

const asn = {
	
    offset: 0,

    shopCart: [],
    
    //online version socket.io
    //socket:io.connect("https://osndp.onrender.com"),

    socket:null,

    //=========================START VOICE SYNTHESIS ===============
    getVoice: async () => {
                
        voices = synth.getVoices()
        console.log( 'GETVOICE()')
                
        voices.every(value => {
            if(value.name.indexOf("English")>-1){
                console.log( "main.js bingo!-->",value.name, value.lang )
                
            }
        })
        
    },//end func getvoice

    //speak method
    speak:(theMsg)=> {
                        
        console.log("SPEAK()")
        
        // If the speech mode is on we dont want to load
        // another speech
        if(synth.speaking) {
            //alert('Already speaking....');
            return;
        }	

        const speakText = new SpeechSynthesisUtterance(theMsg);

        // When the speaking is ended this method is fired
        speakText.onend = e => {
            //synth.resume();
            console.log('Speaking is done!');
        };
        
        // When any error occurs this method is fired
        speakText.error = e=> {
            console.error('Error occurred...');
        };

        // Checking which voices has been chosen from the selection
        // and setting the voice to the chosen voice
        
        
        voices.forEach(voice => {
            if(voice.name.indexOf("English")>-1){	
                ///// take out bring back later, 
                //console.log("speaking voice is ",voice.name)
                speakText.voice = voice
                
            }
            
        });

        // Setting the rate and pitch of the voice
        speakText.rate = 1
        speakText.pitch = 1

        // Finally calling the speech function that enables speech
        synth.speak(speakText)

        synth.cancel()

    },//end func speak	
    //=======================END VOICE SYNTHESIS==========

    //===========================addtocart
    addtoCart:async (elemId, eqptId, nKey) =>{
        let qtys = document.getElementById(elemId)
        let adata = osndp.dataforTag[nKey].equipment_value
        const badge = document.getElementById('bell-badge')
            
        //console.log(nKey)

        if(osndp.shopCart.length > 0){
        
            let oFind = osndp.shopCart.find( (cart)=> cart.id == eqptId)
             
            if(oFind === undefined){
                osndp.shopCart.push({
                    id: eqptId, 
                    data: adata,
                    qty: qtys.value,
                    price: osndp.dataforTag[nKey].price,
                    sale: osndp.dataforTag[nKey].sale_price,
                    total: qtys.value * osndp.dataforTag[nKey].sale_price
                })

                badge.innerHTML = osndp.shopCart.length
                
                util.Toast("Item Successfully Added!",2000)
            }else{
                  
                console.log('present!,...ignore')
                util.Toast('THIS ITEM IS ALREADY IN CART!',2000)
                return true;  
            }
        
        }else{
            osndp.shopCart.push({
                id: eqptId, 
                data: adata,
                qty: qtys.value,
                price: osndp.dataforTag[nKey].price,
                sale: osndp.dataforTag[nKey].sale_price,
                total: qtys.value * osndp.dataforTag[nKey].sale_price
            })

            badge.innerHTML = osndp.shopCart.length
            
            util.Toast("Item Successfully Added!",2000)
        }
   
        console.log( '====TOTAL SHOPCART===',osndp.shopCart) 
    },


    showCartModal:()=>{
        const configObj = { keyboard: false, backdrop:'static' }
        
        let pocartmodal =  new bootstrap.Modal(document.getElementById('pocartModal'),configObj);
        
        let pocartModalEl = document.getElementById('pocartModal')

        if(osndp.shopCart.length == 0){
            util.Toast('SHOPPING CART EMPTY!',2000)
            e.preventDefault()
            e.stopPropagation()
            return false
        
        }else{
            osndp.showcart()
            pocartmodal.show()
          
        }//eif
        
    },

    //======================= show cart
    showcart:() => {
                
        if(osndp.shopCart.length > 0){
            
            document.getElementById('cart-content').innerHTML = ""
            
            for (let key in osndp.shopCart) {
                
                const info = JSON.parse(osndp.shopCart[key].data)

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
                Qty. ${osndp.shopCart[key].qty}<br>
                Price : &#8369;${ util.addCommas(parseFloat(osndp.shopCart[key].sale).toFixed(2)) }<br>
                TOTAL : &#8369;${ util.addCommas(parseFloat(osndp.shopCart[key].total).toFixed(2)) }<br></span>
                </div>
                </a>`
                
            }//===========end for next
        } 
    },

    getimagename:()=>{
        document.getElementById('serial_image').value = document.getElementById('client_po').value
    },
   
    //===========================show modal and iamge
    showPdf: async (src) => {
        console.log('*** showImage() ****')
        console.log(src)
      
        osndp.fileExists( src )
        
    },

    //=============== SHOW COMMENT MODAL ============//
    showIssue: async (id) => {
        console.log('==eo site number== ', id)
        util.modalShow('commentsModal')
    },

    //===check file exist in server
    fileExists:async (url, )=> {
        const configObj = { keyboard: false, backdrop:'static' }
        const ximagemodal =  new bootstrap.Modal(document.getElementById('imageModal'),configObj);
        const imageModalEl = document.getElementById('imageModal')
        let pdfprev = document.getElementById('pdf_iframe')

        console.log('=====osndp.fileExists()===',url)
        await fetch( `https://localhost:10000/fileexist/${url}`)
        .then(response => { 
            return response.json()
        })
        .then( (data)=>{
            if (data.status) { 
                console.log("File exists"); 
                pdfprev.src =`https://vantaztic.com/osndp/${url}`
                ximagemodal.show()
                pdfprev.width = window.innerWidth
    
            } else { 
                console.log("File does not exist"); 
                alert('ERROR, FILE NOT FOUND!')
                //document.getElementById('pdf-modal-body').innerHTML=""
                //osndp.alertMsg('File not Found!','danger','pdf-modal-body')
                ximagemodal.hide()
                pdfprev.src = ""
            } 
        }) 
        .catch(error => { 
            console.log("An error occurred: ", error); 
        })
        
        imageModalEl.addEventListener('hide.bs.modal', function (event) {
            pdfprev.src += '';
        })
         
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

    /*
    filterArr:(cSerial, aArrid, transtype) => {
       		
        //table
        const  tbodyRef = document.getElementById('dataTagTable').getElementsByTagName('tbody')[0];
        tbodyRef.innerHTML="" //RESET FIRST

        let newRow = tbodyRef.insertRow();
        // Insert a cell
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);
        
        let newArray = osndp.dataforTag.filter(function (el)
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
    */

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

            //this is for the next element to have focus
            //readonly field gets checked is-valid w/ chek icon
            document.getElementById("mall_description").focus()
            document.getElementById("mall_description").blur()

            //then moves the next field with focus()
            setTimeout(() => document.getElementById("business_name").focus(), 0)
            
        },false)
        
       document.getElementById('mall-label').innerHTML = "Select " + cTxt //cCategory 

        //DOM reference for select
        const categoryType = document.getElementById("categoryType");
        
        //reset select content
        categoryType.innerHTML = ""

        //get equipment type,
        osndp.getMall(`https://localhost:10000/getmall/${cCategory}`, categoryType)

        eqptcatmodal.show() /// show modal box

    },


    //=== FOR POPULATING DROPDOWN SELECT
    populate:async ( selectElement, department )=>{
        console.log( 'osndp.populate() ')
        osndp.removeOptions( selectElement) //restart

        let xurl
                
        switch(department){
            case "design":
                xurl = `https://localhost:10000/getProjectOwner/design` 
            break
            case "engineer":
                xurl = `https://localhost:10000/getProjectOwner/engineer` 
            break
        }


        await fetch( xurl )
        .then(response => { 
            return response.json()
        })
        .then( (data)=>{
            console.log('populate',data)

            let option = document.createElement("option")
            option.setAttribute('value', "")
            option.setAttribute('selected','selected')
              
            let optionText = document.createTextNode( "-- Pls Select --" )
            option.appendChild(optionText)
            
            selectElement.appendChild(option)
            
            for (let key in data.result) {
                let option = document.createElement("option")
                option.setAttribute('value', data.result[key].full_name.toUpperCase())
              
                let optionText = document.createTextNode( data.result[key].full_name.toUpperCase() )
                option.appendChild(optionText)
              
                selectElement.appendChild(option)
            }

            selectElement.focus()
        
        }) 
        .catch(error => { 
            console.log("An error occurred: ", error); 
        })        

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
            
            osndp.removeOptions( cSelect)

            let option = document.createElement("option")
            option.setAttribute('value', "")
            option.setAttribute('selected','selected')
              
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
        //eqptdesc.focus()
        
        const eqptdesc = document.getElementById('mall_description')
        eqptdesc.value = optionValue
        
        
       // document.getElementById("business_name").focus()
    },


    //filter mall
    filterMall:(url,cSelect)=>{
        console.log('===filterMall() osndp.filterMall()===')
        fetch(url)
        .then((response) => {  //promise... then 
            return response.json();
        })
        .then((data) => {
            //console.log( 'webmall ',data )
            
            osndp.removeOptions( cSelect)
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

        osndp.getAll("1", val )
        ///// temporarily out osndp.fetchBadgeData()
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
        osndp.socket.on('sales', (oMsg) => {
            let xmsg = JSON.parse(oMsg)

            util.speak( xmsg.msg )

            ///// temporarily out   osndp.fetchBadgeData()// update badges
        
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
                if (file >= 1000) {
                    const btnupload = document.getElementById('mall-save-btn')
                    btnupload.disabled = true

                    util.alertMsg("File too Big, please select a file less than 1mb","danger","size");
                    
                    fi.value=null
                    //go bottom page
                    util.scrollsTo('blindspot')

                    return false;

                }else{
                    
                    document.getElementById('size').innerHTML=""//reset
                    const btnupload = document.getElementById('mall-save-btn')
                    btnupload.disabled = false
                }
                /* turn off display of filesize */
                ///document.getElementById('size').innerHTML ='<b>'+ file + '</b> KB';
                
            }
        }
    },

    //======main func get all Claims per person =====
    getClaims: async (emp_id, emp_name)=>{
        console.log('==running getClaims()')
        
        await fetch(`${myIp}/getclaims/${emp_id}/${emp_name}/3/${nPage}`,{
            cache:'reload'
        })
        .then(res => res.text() )

        .then(text => {	
        
            util.scrollsTo('current_projects')
        })	
        .catch((error) => {
            //util.Toast(`Error:, ${error}`,1000)
            console.error('Error:', error)
        })    
    },

    notif:(msg,xclear)=>{
        if(!xclear){
            document.getElementById('p-notif').innerHTML = `<i id='i-notif' class='fa fa-spinner fa-pulse' ></i>
            &nbsp;<span id='s-notif'>${msg}</span>`
        }else{
            document.getElementById('p-notif').innerHTML = ""
        }
        
    },

    speaks:null,

    collapz: () =>{
        /// take out muna document.getElementById("sidebarCollapse").click()
        //focus on emp number claims filter

        document.getElementById('filter_number').focus()
    },

    getRecord: (e_num,e_name) =>{
        let xmsg
        
        asn.speaks('Searching...')

        if(e_num=="" && e_name==""){
            console.log('both blank')
            xmsg = "<div class='text-wrap' style='width: 20rem;'>PLS CHECK YOUR INPUT, YOU CAN SEARCH BY EMPLOYEE NUMBER OR BY EMPLOYEE NAME!</div>"
            Toastify({
                text: xmsg ,
                duration:6000,
                escapeMarkup:false, //to create html
                close:false,
                position:'center',
                offset:{
                    x: 0,
                    y:100//window.innerHeight/2 // vertical axis - can be a number or a string indicating unity. eg: '2em'
                },
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
            }).showToast();
            return false
        
        }

        let xclass = [], aForm = ['filter_number','filter_name']
        xclass.push(document.getElementById('filter_number').className ) 
        xclass.push(document.getElementById('filter_name').className)

        let nn = xclass.indexOf('form-control is-invalid')
        
        if ( nn > -1 ){
            xmsg = "<div class='text-wrap' style='width: 20rem;'>PLS CHECK YOUR INPUT, THERE'S ERROR!</div>"
            Toastify({
                text: xmsg ,
                duration:3000,
                escapeMarkup:false, //to create html
                close:false,
                position:'center',
                offset:{
                    x: 0,
                    y:100//window.innerHeight/2 // vertical axis - can be a number or a string indicating unity. eg: '2em'
                },
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
            }).showToast();

            document.getElementById( aForm[nn] ).classList.remove('is-invalid')
            document.getElementById( aForm[nn] ).value=""

            return false         
        }else{
            console.log('redy to search')
            let xurl = ""
            if(e_num!=="" && e_name==""){
                xurl = `${myIp}/getrecord/${e_num}/blank` 
            }else if (e_num=="" && e_name!==""){
                xurl = `${myIp}/getrecord/blank/${e_name}` 
            }else{
                xurl = `${myIp}/getrecord/${e_num}/${e_name}` 
            }

            fetch( xurl ,{
                cache:'reload'
            })
            .then(res => res.text() )

            .then(text => {	
            //    // console.log('what the text? ',text)
            //     osndp.notif('',true)
                let divchild = `   
                    <div class="row">
                    <div class="col-lg-8 d-flex ">
                    <div class="card w-100">
                        <div class="card-body p-4">
                        <div class="mb-4">
                            <h5 class="card-title fw-semibold"><i style="color:green;font-size:25px;" class="ti ti-list-search"></i>&nbsp;Search Result</h5>
                        </div>
                        <div id="claim_search">
        
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>`

                document.getElementById('search_claim' ).classList.add('container-fluid')
                document.getElementById('search_claim' ).classList.add('ms-3')
                
                document.getElementById('search_claim').innerHTML = divchild

                document.getElementById('claim_search').innerHTML = ""
                document.getElementById('claim_search').innerHTML = text
            //     document.getElementById('project-badge').innerHTML = parseInt(document.getElementById('reccount').innerHTML)
            //     console.log( '**rec count** ',document.getElementById('reccount').innerHTML)
                
                util.scrollsTo('search_claim')

                //asn.getTopRider()
            
            })	
            .catch((error) => {
                //util.Toast(`Error:, ${error}`,1000)
                console.error('Error:', error)
            })    
        }///eif
    },

    //download report
    createpdf: (e_num) =>{
        fetch(`${myIp}/createpdf/${e_num}`,{
            cache:'reload'
        })
        .then(response => { 
            return response.blob()
        })
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `ASN_${e_num}.pdf`; // Set the file name for the download
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url); // Clean up the URL object

            asn.deletepdf( e_num ) //cleanup pdf

            Toastify({
                text: 'PDF Ready for Download!!!' ,
                duration:3000,
                escapeMarkup:false, //to create html
                close:false,
                position:'center',
                offset:{
                    x: 0,
                    y:100//window.innerHeight/2 // vertical axis - can be a number or a string indicating unity. eg: '2em'
                },
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
            }).showToast();

            //delete pdf
        })
       
        .catch((error) => {
            //util.Toast(`Error:, ${error}`,1000)
            console.error('Error:', error)
        })    

    },

    //==== cleanup
    deletepdf:(e_num) =>{
        fetch(`${myIp}/deletepdf/${e_num}`,{
            cache:'reload'
        })
        .then(response => { 
            return response.json()
        })
        .then( (data ) => {
            if(data.status){
                Toastify({
                    text: 'PDF Ready for Download!!!' ,
                    duration:3000,
                    escapeMarkup:false, //to create html
                    close:false,
                    position:'center',
                    offset:{
                        x: 0,
                        y:100//window.innerHeight/2 // vertical axis - can be a number or a string indicating unity. eg: '2em'
                    },
                    style: {
                      background: "linear-gradient(to right, #00b09b, #96c93d)",
                    }
                }).showToast();
    
            }
            
        })
       
        .catch((error) => {
            //util.Toast(`Error:, ${error}`,1000)
            console.error('Error:', error)
        })    


    },

    //==get top 5 hub pasaway
    getTopHub: async()=>{
        await fetch(`${myIp}/gethub`,{
            cache:'reload'
        })
        .then(res => res.text() )

        .then(text => {	
        //    // console.log('what the text? ',text)
        //     osndp.notif('',true)
            document.getElementById('hub').innerHTML = ""
            document.getElementById('hub').innerHTML = text
        //     document.getElementById('project-badge').innerHTML = parseInt(document.getElementById('reccount').innerHTML)
        //     console.log( '**rec count** ',document.getElementById('reccount').innerHTML)
            
            util.scrollsTo('hub')

            asn.getTopRider()
        
        })	
        .catch((error) => {
            //util.Toast(`Error:, ${error}`,1000)
            console.error('Error:', error)
        })    
    },
    // get top 5 rider pasaway
    getTopRider: async() => {
        await fetch(`${myIp}/getrider`,{
            cache:'reload'
        })
        .then(res => res.text() )

        .then(text => {	
        //    // console.log('what the text? ',text)
        //     osndp.notif('',true)
            document.getElementById('rider').innerHTML = ""
            document.getElementById('rider').innerHTML = text
        //     document.getElementById('project-badge').innerHTML = parseInt(document.getElementById('reccount').innerHTML)
        //     console.log( '**rec count** ',document.getElementById('reccount').innerHTML)
            
            util.scrollsTo('current_projects')

        
        })	
        .catch((error) => {
            //util.Toast(`Error:, ${error}`,1000)
            console.error('Error:', error)
        })    
    },

	//==,= main run
	init : async () => {
        asn.getTopHub()
        
		//change form action 
		document.getElementById('claimsuploadForm').action=`${myIp}/claims`
        
		//change form action 
		document.getElementById('uploadForm').action=`${myIp}/postimage`

        asn.speaks = (txt) =>{
            let speechsynth = new SpeechSynthesisUtterance();
            speechsynth.text = txt
            speechsynth.lang = "en-US"
            speechSynthesis.speak( speechsynth )
        };    
        //yes

        let authz = []
        authz.push(util.getCookie('grp_id') )
        authz.push(util.getCookie('fname'))
        
        console.log(authz[1])

        //==HANDSHAKE FIRST WITH SOCKET.IO
        const userName = { token : authz[1] , mode: 1}//full name token

        asn.socket = io.connect(`${myIp}`, {
        // zonked.socket = io.connect("https://osndp.onrender.com", {
            //withCredentials: true,
            query:`userName=${JSON.stringify(userName)}`
            // extraHeaders: {
            //   "osndp-header": "osndp"
            // }
        });//========================initiate socket handshake ================
            
        console.log('main.js SPEAK()')
        //asn.speaks(  util.getCookie('f_voice')) //==FIRST welcome GREETING HERE ===

         //===first call load page 1
         //console.log('first osndp.getAll() index.js')
         //osndp.getAll("1","MALL001")
        
         document.getElementById('img-profile').src=`/assets/images/profile/${util.getCookie('f_pic')}`
        //pyright
       ////document.getElementById('copyright').innerHTML='Copyright Â© EO-OSNDP '+ new Date().getFullYear();

        //UPDATE DROPDOWN FOR FILTER
        //get equipment type,
        //osndp.filterMall(`https://localhost:10000/filtermall`, document.getElementById('filter_type'))
        
        //asn.getVoice()

        if(util.getCookie('grp_id')!=="1"){ //turn off the href link to javascript:void(0)
           // document.getElementById('nu-project').setAttribute("href", "javascript:void(0)")
        }else{
            
        }//endif

        //load the form to validate
        util.loadFormValidation('#newempForm')
        util.loadFormValidation('#searchForm')
        
        //load listeners
        util.modalListeners('claimsModal')
        util.modalListeners('newempModal')

	}//END init
} //======================= end admin obj==========//
//osndp.Bubbl
window.scrollTo(0,0);
asn.init()

