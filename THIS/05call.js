var obj1 = {
    c:100,
};
var obj2 = {
    c:500,
};

// function fnAdd(a,b) {
//  var result = a+b+obj1.c;
//  console.log(result);
// }

function fnAdd(a,b){
    var result = a+b+this.c;
    console.log(result)
}
// fnAdd(10,10);    //c ---onj1
// fnAdd(30,40)     // ----obj2


fnAdd.call(obj1,10,10);
fnAdd.call(obj2,10,10);