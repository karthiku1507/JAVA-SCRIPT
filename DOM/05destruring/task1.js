function ReturUsers(){
    var users = ["s1","s2","s3","s4"];
    return users;

}

// console.log(ReturUsers());

// let userArray = ReturUsers();
// console.log(userArray[0],userArray[1],userArray[2]);


// let [x,y,z] = userArray;
// console.log(x,y,z);

let[x,y] = ReturUsers();
console.log(x,y);
// var[state,setState] = useState()