fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>res.json())
.then((res)=>{
    let names = res.map(ele=>ele.name)
    console.log(names)
})
.catch((err)=>{
    console.log("Not fetched",err)
})