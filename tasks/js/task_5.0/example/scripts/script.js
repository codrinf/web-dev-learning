import { getDataFromServer, logginUser} from '../libs/data-service.js';


function getData(){


 getDataFromServer()
 .then((result) => showUI(result))
 .catch((error) => console.log(error));

 // my result == unbdefin

// const user = {};
// logginUser(user).the

// // user login respionse!!!!!! 


}
// getData();

async function getDataAwait(){
  
  console.log('am inceput')
  const result = await getDataFromServer().catch((error) => error);


  showUI(result);

  console.log(result);

  if( typeof result === Error){

  }else{

  }


}

getDataAwait();


// lasndlkasd

// jQuery.getJSON("test.json", function(json) {
//   // Construct UI
//   showUI(json);
// });

// code care depinde de call-ull de mai sus



// Load pages.json

// var oReq = new XMLHttpRequest();
// // oReq.addEventListener("progress", updateProgress);
// oReq.addEventListener("load", transferComplete);
// oReq.addEventListener("loadend", loadEnd);
// oReq.addEventListener("error", transferFailed);
// // oReq.addEventListener("abort", transferCanceled);
// oReq.open("GET", "./assets/myfile.json");


// function transferComplete(evt) {
//   console.log("The transfer is complete.");
//   showUI(oReq.response)
// }

// function transferFailed(evt) {
//   console.log("An error occurred while transferring the file.");
// }

// function loadEnd(e) {
//   console.log("The transfer finished (although we don't know if it succeeded or not).");
// } 


function showUI(homePage){
  // continue the app

}
