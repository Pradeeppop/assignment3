function login(callback) {
    
    callback("LoggedIn for data file");
   }
   login(function(result) {
    console.log(result);
   });


   //callback hell
   var fs=require("fs");
fs.readFile("data.txt",function(error,result){
if(error){
    console.log(error);
    
}
else{
    fs.readFile("data.txt",function(error,result){
        if(error){
            console.log(error);
            
        }
        else{
            fs.readFile("data.txt",function(error,result){
                if(error){
                    console.log(error);
                    
                }
                else{
                    fs.readFile("data.txt",function(error,result){
                        if(error){
                            console.log(error);
                            
                        }
                        else{
                            console.log(result.toString());
                            
                        }
                        
                        })  
                }
                
                })
        }
        
        })
}

})
setTimeout(function(delay){
    console.log("program end")
    

},5000);
