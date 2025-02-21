var x = 10; //11 12 13
var y = 10; //11 12 13
var result = x++ + ++y + ++x + ++y * x++ + y++;
             //10+11+12+12*12+12
console.log(result);                                                    
console.log(x,y);
console.log(x);
console.log(y);

var x = 10; //11 12 13
var y = 10; //11 12 13
var result = x++ + ++y + ++x + y++ + y++ + x++;
           // 10 + 11 +12 +  11 + 12 + 12

console.log(result);