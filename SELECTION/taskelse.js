function printSmallest(x,y,z){
    if(x<y && x<z){
        console.log("x is smaller");
    }else {
        if (y<x && y<z){
            console.log("y is smaller");
        }else{
            console.log("z is smaller")
        }
    }
}


printSmallest(10,20,40);
printSmallest(50,20,40);
printSmallest(50,20,10);