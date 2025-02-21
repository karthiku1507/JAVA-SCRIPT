var arr = [10,13,15,22,19,67,65,64];
var num = arr.filter(function(element){
    // return element%2==0;    ///  even numbers print
    return element%2!=0;     ///odd numbers print



})
console.log(num);