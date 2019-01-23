
/**
 * 
 * Simple promise
 * 
 */
function isOdd(num){
    const simplePromise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            num % 2 ? resolve(1): reject(0);
        }, 2500)
    })

    return simplePromise;
}

function displayResult(result){
    return new Promise((res, rej)=>{
        result? res('Sucess Odd'): rej('Failure even');
    })
}

isOdd(3).then((res)=>{
   //console.log('SUCCESS',res);
   return displayResult(res);
},(res)=>{
    //console.log('SUCCESS',res);
    return displayResult(res);
}).then((res)=>{
    console.log("chanined success", res)
},(res)=>{
    console.log("chanined failure", res)
});



 /**
  * 
  * Promise chaining
  * 
  * Promise .then always checks the previous call depending on that it makes 
  * the decision
  */
  

addNums = (a, b) => {
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            
            if(typeof a ==='number' && typeof b === 'number'){
                res(a+b);
            }
            else{
                rej('Not numbers')
            }
        }, 2500);

        
    
    });

}


addNums('3', 4).then((res)=>{
    console.log('success', res);
    return addNums(res, 10)
}, (res)=>{
    console.log('failure', res);
}).then((res)=>{
    console.log('success2', res)
}, (res)=>{
    console.log('failure2', res)
})



