let init = function() {
    let btn = document.querySelector('item1'),
    startTime = new Date();

    if(btn){
        btn.addEventListener('click',function() {
            let miliSec = new Date() - startTime;
            console.log(miliSec/1000 + "Seconds.")
        })
    }
}

document.addEventListener('DOMContentLoaded', function() {
    init();
},false);