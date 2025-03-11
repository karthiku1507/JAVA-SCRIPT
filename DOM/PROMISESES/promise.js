// var promiseObject = new Promise(function(resolve,reject){
//     resolve([{name:"sager",gender:"male"},
//         {name:"sager",gender:"male"}
//     ]);
// });

// console.log(promiseObject);



var promiseObject = new promise (function (resolve,reject){
    reject({
        ok:false,
        error:"database server is down",
    });
});

console.log(promiseObject);