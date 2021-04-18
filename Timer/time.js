document.getElementById("start").addEventListener("click",StartTime)

function StartTime(){
   var starting = new Date().getTime();
   //alert("You've started studying! Hurray!");
   document.getElementById("startTimer").innerHTML = "You've started studying! Hurray!";
   return{starting};
}

document.getElementById("end").addEventListener("click",EndTime)

function EndTime(){
   //let ending = Date();
   //alert("You've started studying! Hurray!");
   let miliSec = new Date().getTime() - StartTime;
   let elapsedTime = miliSec/1000;
   document.getElementById("endTimer").innerHTML = "Wow! You've studied for: " + elapsedTime.toString() + "seconds.";
}
// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('start').addEventListener('click',
//     onclick, false)

//     function onclick() {
//         let startTime = new Date();
//         chrome.tabs.query({currentWindow: true, active: true},
//         function(tabs) {
//             chrome.tabs.sendMessage(tabs[0].id, "You've started studying! Hurray!")
//         })
//     }
// }, false)