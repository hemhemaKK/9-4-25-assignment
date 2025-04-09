function timer(duration){
    setTimeout(()=>{
        console.log("Timer as been executed now calling onComplete method")
        onComplete(duration)
    },duration)
    function onComplete(duration){
        console.log("Oncomplete excuted with:",duration)
    }
}

let duration=2000
timer(duration)