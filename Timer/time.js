
{document.getElementById("start").addEventListener("click",combine)

function StartTime(){
   const startingDate = new Date();
   //var starting = startingDate.getTime();
   //alert("You've started studying! Hurray!");
   document.getElementById("startTimer").innerHTML = "You've started studying! Hurray!";

   return startingDate;
}};

//document.getElementById("end").addEventListener("click",EndTime)
function combine(){
   var dateS = StartTime();
   document.getElementById("end").addEventListener("click",function(){
      var dateE = new Date();
      //document.write(Date.parse(DateE.toString));
      let miliSec = dateE.getTime() - dateS.getTime();
      let elapsedTime = Math.round(miliSec/1000);
      document.getElementById("endTimer").innerHTML = "Wow! <br/> You've studied for: " + elapsedTime.toString() + " seconds <br /> From: " + dateS.toUTCString() + "<br/> To: " + dateE.toUTCString();

});
   //var dateE = EndTime();
   let miliSec = endingDate.getTime() - dateS.getTime();
   //let elapsedTime = miliSec/1000;
   //document.write(StartTime().toTimeString());
   document.getElementById("endTimer").innerHTML = "Wow! You've studied for: " + miliSec.toString() + "seconds. From:" + dateS.toTimeString() + "to" + dateE.toTimeString();
}

document.getElementById("end").addEventListener("click",EndTime)
function EndTime(){
   let endingDate = new Date();
   let ending = endingDate.getTime();
   //alert("You've started studying! Hurray!");
   //let miliSec = endingDate.getTime() - date.getTime();
   //let elapsedTime = miliSec/1000;
   //document.write(StartTime().toTimeString());
   //document.getElementById("endTimer").innerHTML = "Wow! You've studied for: " + miliSec.toString() + "seconds. From:" + date.toTimeString() + "to" + endingDate.toTimeString();
   return endingDate;
}

function parseDate(dateString){
   var time = Date.parse(dateString);
   if(!time){
       time = Date.parse(dateString.replace("T"," "));
       if(!time){
           bound = dateString.indexOf('T');
           var dateData = dateString.slice(0, bound).split('-');
           var timeData = dateString.slice(bound+1, -1).split(':');

           time = Date.UTC(dateData[0],dateData[1]-1,dateData[2],timeData[0],timeData[1],timeData[2]);
       }
   }
   return time;
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