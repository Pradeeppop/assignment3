var promise = new Promise((resolve, reject)=> {
    setTimeout(()=> {
        resolve('i am pop');

       

    }, 2000)
    if(false){
        console.log("pop");
    }else{
        console.log("who are you");


    }
    
});

promise.then((data)=> {
    console.log(data);
}).catch((error)=>{console.log(error)
});