document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button1').addEventListener('click',
    onclick, false)

    function onclick() {
        let btn = document.querySelector('item1'),
        startTime = new Date();

        if(btn){
            btn.addEventListener('click',function() {
                let miliSec = new Date() - startTime;
                let elapsedTimed = miliSec/1000;
                document.write(elapsedTime + "Seconds.")
            })
            //document.write(elapsedTime)
        } 
    }
        
    }

let init = function() {
    let btn = document.querySelector('item1'),
    startTime = new Date();

    if(btn){
        btn.addEventListener('click',function() {
            let miliSec = new Date() - startTime;
            var elapsedTime = miliSec/1000;
            write(elapsedTime + "Seconds.")
        })
    }
}

//document.addEventListener('click',function())

document.addEventListener('DOMContentLoaded', function() {
    init();
},false);