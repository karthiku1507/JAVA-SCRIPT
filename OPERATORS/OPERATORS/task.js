var productsdata = [
    {
        brandname:"apple",
        modalname:"iphone 15",
        price:90000,
    },
    {
        brandname:"apple",
        modalname:"iphone 14",
        price:70000,
    },
    {
        brandname:"samsung",
        modalname:"samsung s24",
        price:130000,
    },
    {
        brandname:"samsung",
        modalname:"samsung a32",
        price:50000,
    },
    {
        brandname:"oneplus",
        modalname:"oneplus 14",
        price:60000,
    },
    {
        brandname:"vivo",
        modalname:"vivo 14",
        price:40000,
    },
    {
        brandname:"oppo",
        modalname:"oppo 14",
        price:30000,
    },
];

function printproducts() {
    var appleData = productdata.filter(function(element) {
        return element.brandname === "apple" && element.print > 80000;
    });
    console.log(productdata);
}