/*

author : Carlo O. Dominguez
*/
const login = {
	

	//==,= main run
	init : async () => {
		//change form action 
		document.getElementById('uploadForm').action=`http://${myIp}/postimage`

		util.loadFormValidation('#loginForm')
		util.loadFormValidation('#newempForm')
		util.modalListeners('newempModal')
        
		console.log('loadformValidation() loaded==')
	}//END MAIN
	
} //======================= end ajax obj==========//
//ajax.Bubbl
window.scrollTo(0,0);
login.init()
