function fntask(x){
    // console.log(x);
    x();


}

fntask(function(){
    console.log("callback function");
});

fntask(function f1(){
    console.log("named function")
})


fntask(()=>{
    console.log("arrow");
})