var productName = "Trimmer";
var products = ["samsung galaxy", "macbook","asus vivobook","trimmer"];
function printProductIndexNumber(){
    if(productName==products[0]){
        console.log("0");
    }else if(productName==products[1]){
        console.log("1");
    }else if(productName==products[2]){
        console.log("2");
    }else{
        console.log("3");
    }

}

printProductIndexNumber();


var productName = "oneplus";
var products = ["oppo","samsung","oneplus","vivo"];
function printProductElement(){
    if(productName==products["oppo"]){
        console.log("oppo");
    }else if(productName==products["samsung"]){
        console.log("samsung");
    }else if(productName==products["oneplus"]){
        console.log("oneplus");

    }else if(productName==products["vivo"]){
        console.log("vivo");
    }
    else{
        console.log("not matching with any element")
    }
}


printProductElement();