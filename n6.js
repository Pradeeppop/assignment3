
function*  mul(x){
    yield x*90;
    var y=90;
    console.log(x*y);
    }
    var value= mul(90);
    value.next();
    value.next();
    
    