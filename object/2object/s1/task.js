function fntask(x) {
    console.log(x);
    x();
}
fntask(function () {
    console.log("callback");
});
fntask(function (){
    console.log("karthik");
});
fntask(() => {
    console.log("arrow");

});