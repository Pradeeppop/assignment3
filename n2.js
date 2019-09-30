var async = require('async');
async.series([
    function(backend)
    {
        console.log('hey there');
        backend(null,'backend');
    },
    function(backend)
    {
        console.log("all right");
        backend(null,'okay');
    }
],function(err,result){
if(err) 
   console.log("there is error");
console.log(result);
});
