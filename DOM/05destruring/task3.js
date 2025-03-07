function f1(){
    return [{name:"s1",city:"c1"},
        {name:"s2",city:"c2"},
    ];
}

// const[x,y] = f1();
// console.log(x);

const[x,y] = f1();
let{name,city} = x;
console.log(city);