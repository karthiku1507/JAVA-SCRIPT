var products = [
    {
        brandid : 101,
        brandname : "oppo",
        price : 10,
    },
    {
        brandid : 102,
        brandname : "redmi",
        price : 101,
    },
    {
        brandid : 103,
        brandname : "samsung",
        price : 11,
    },
    {
        brandid : 104,
        brandname : "nokya",
        price : 10000,
    },
    {
        brandid : 105,
        brandname : "lava",
        price : 1000,
    },
];

var applebrand = products.filter(function(element){
    return element.brandname == "lava";
});

console.log(applebrand);