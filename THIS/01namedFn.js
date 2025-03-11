function myThisConcept() {
    console.log("named functions",this);  //global object

}

myThisConcept();


const myArrowFn = () => {
    console.log("Arro function",this);
};
myArrowFn();