function who() {
    var promise1= new Promise(resolve => {
      setTimeout(() => {
        resolve('Hello,');
        console.log(promise1);
        
      }, 200);
    });
  }
  
  function what() {
    var promise2= new Promise(resolve => {
      setTimeout(() => {
        resolve('pop');
        console.log(promise2);
        
      }, 300);
    });
  }
  
  function where() {
   var promise3=new Promise(resolve => {
      setTimeout(() => {
        resolve('where are you');
        console.log(promise3);
        
      }, 5000);
    });
  }
  
  async function msg() {
    const a = await who();
    const b = await what();
    const c = await where();
    
  }
  
  msg();