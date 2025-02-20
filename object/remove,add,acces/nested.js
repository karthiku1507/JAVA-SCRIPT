var user = {
    name: {
      firstName: "Siddharath",
      middleName: "Raj",
      lastName: "Jaiswal",
      address: {
        city: "hyd",
        state: "TG",
      },
    },
  };
  
  var firstName = user.name.firstName;

  var city = user.name.address.city;
  var pincode = user.name.address.pincode = 123323
  var name = delete user.name.firstName;
  console.log(firstName,city,pincode)
  console.log(user)
    //user.name.lastname
    //user.name.address.city                                       =>asses
    //user.name.address.pincode = 21313                            =>add proparty
    //user.name.adderss.city = "ongole waragal"                     =>add proparty
    //delete user.name.firstname                     =>remove name




   
  