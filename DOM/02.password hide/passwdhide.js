function showHidePassword(){
   var inputDomElement = document.querySelector("input");
   var buttonDomElementArray = document.querySelectorAll("button")
   inputDomElement.type = "text";

// var EmailDomElement = inputDomElementArray[1];
// EmailDomElement.type = "date"
   buttonDomElementArray[0].innerHTML = "Hide password"

}