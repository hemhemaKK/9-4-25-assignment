async function productsfetch(){
    try{
        let data = await fetch("https://fakestoreapi.com/products")
        let details = await data.json()
        console.log(details)
        
        let sum = details.reduce((acc,curr)=>acc+curr.price,0)
        console.log("Total price:", sum)
    }
    catch(err){
     console.log("Not fetched",err)
   }
   finally{
       console.log("All excuted no more code..")
   }
   
 }
 productsfetch()