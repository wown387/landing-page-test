let running = true

setTimeout(()=>{
    console.log("hello")
},500)

while (true){
    if (!running){
        break
    }
    console.log("running....")
}