
{document.getElementById("start").addEventListener("click",Timer)

function StartTime(){
   const startingDate = new Date();
   document.getElementById("startTimer").innerHTML = "You've started studying! Hurray!";

   return startingDate;
}};

function Timer(){
   var dateS = StartTime();
   let elapsedTime;
   document.getElementById("end").addEventListener("click",function(){
      var dateE = new Date();
      let miliSec = dateE.getTime() - dateS.getTime();
      let totalSec = miliSec/1000; 
      let minutes = Math.round((totalSec/60) % 60);
      let hour = Math.round(totalSec / 3660);
      let Sec = Math.round(totalSec%60);
      // if(sec>= 3600){ //minutes
      //    hours = Math.round(elapsedTime/3600);
      //    document.getElementById("endTimer").innerHTML = "Wow! <br/> You've studied for: " + elapsedTime.toString() + " minutes <br /> From: " + dateS.toUTCString() + "<br/> To: " + dateE.toUTCString();
      //    return;
      // }
      document.getElementById("endTimer").innerHTML = "Wow! You've studied for: <br/>  " + hour+" hours, " + minutes + " minutes, " + Sec +  " seconds <br /> From: " + dateS.toUTCString() + "<br/> To: " + dateE.toUTCString();

});
}
