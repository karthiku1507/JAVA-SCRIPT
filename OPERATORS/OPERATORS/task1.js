var productsData = [{
    brandName:"Apple",
    modelName:"Iphone 15",
    price:90000
},{
    brandName:"vivo",
    modelName:"vivo 14 pro",
    price:70000
},{
    brandName:"Samsung",
    modelName:"Samsung A32",
    price:50000
},{
    brandName:"Oppo",
    modelName:"Oppo 23pro",
    price:130000
},{
    brandName:"oneplus",
    modelName:"oneplus 15",
    price:40000
}]




// function printProducts(){
//     var appleData = productsData.filter(function(element){
//         return element.brandName==="Apple"&& element.price>80000;
//     })
//     console.log(appleData);

// }
// printProducts();

// function printProducts(){
//      var samsungData = productsData.filter(function(element){
//         return element.brandName==="Samsung"&&element.price<200000;
//     })
//     console.log(samsungData);

// }
// printProducts();


function printAllProducts(){
    var Data = productsData.filter(function(element){
        return element.brandName != "Apple"&& element.brandName != "Samsung"
    })
    console.log(Data);

}

printAllProducts();