var user = {
    name: {
        tittle:"upputholla",
        firstname:"karthik",
        lastname:"kumar",

    },
    changename:function (x,y) {
        console.log("name is updated",x,y);
        return"hello world"
    },
};

var data = user.changename(10,20);
console.log(data);
