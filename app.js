
var myInfo = {
    name: "Muhammad Muddassir Raza",
    fatherName : "Muhammad Khalid",
    dob: "22-June-2004",
    age : 19,
};
// Add Property
myInfo.CNIC= "42201-7604325-9";
console.log(myInfo)

document.getElementById("username").innerText=myInfo.name;
document.getElementById("fathername").innerText=myInfo.fatherName;
document.getElementById("dob").innerText=myInfo.dob;
document.getElementById("age").innerText=myInfo.age;

