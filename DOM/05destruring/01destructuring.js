var student = {
    stdname:"Rohan",
    city: "Indore",
    id:10101,
    gender:"male",
    isPlaced:true,
};

var {stdname,id,gender} = student;

function displayStudentData(){
    // var name = student.stdname;
    // var city = student.city;
    // var id = student.id;
    // console.log(name,city,id);
    console.log(stdname,id,gender);
}

function changeStudentNameCity(...info){
    student.stdname = info[0];
    student.city = info[1];
    console.log(student);
}

function displayPlacementInfo() {
    if(student.isPlaced) {
        console.log("student is placed");
    } else {
        console.log("student is yet to place");

    }
}


displayStudentData();

// changeStudentNameCity("Aditya","pune");

// displayPlacementInfo();
