var x = 10;
var result = x++ + ++x; 
            //10+1 + 1+10
console.log(result);

var x = 10;
var result = x++ + ++x + ++x + ++x;
            //10 + 12 + 13 +14 = 49
console.log(result);





var x = 10;                                    //11 12 13 14 15
var result = x++ + ++x + x++ + ++x + ++x;       //10+12+12+14+15

//
console.log(result);
console.log(x)