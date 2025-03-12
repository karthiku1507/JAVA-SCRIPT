function fnPromise(){
    let promiseobject = new Promise(function(resolve,reject){
        reject({
            ok:false,
            error:{
                msg:"someting went worng",
               statescode:404,
            }
        });
    });

    return promiseobject;
}

var promiseObject = fnPromise();

promiseObject.then(function(sucessData){
    console.log("then executed");
    console.log(successData);
})
.catch(function(errorData){
    console.log("then executed");
    console.log(errorData);

});