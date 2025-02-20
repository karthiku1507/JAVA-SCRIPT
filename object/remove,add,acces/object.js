// var user = {
//     name : "karthik",
//     age : "22",
//     gender : "male",
// };

//         var value = user.gender;   /// .notation
//         var age = user["age"];    /// .bracket notation
//         console.log(value,age)  /// .




        var user = {
         name:"karthik",
          city:"bangulor",
          pincode:22222,
          gender:"mail"        }

        //access
        var namevalue = user.name;
        var city = user["city"];
        console.log(namevalue,city);


        ///insert

        user.id = 101;
        user["email"] = "kkks@hmailcom";

        console.log(user)


        ///modify

        user.city = "ongole"
        user.name = "ukvk"
        console.log(user)


        /// delete

        user.gender;
        delete user.id;
        console.log(user);
