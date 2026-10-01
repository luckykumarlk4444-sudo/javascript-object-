const a={
    name:"lucky",
    roll:"28",
    class: "IV"
}
console.log(a.name)
a.name="aditya"
console.log(a.name)
a.section="c"
console.log(a)

//remove value

let student ={
    name:"lucky",
    roll:"28",
    course:"bca"
}
delete student.roll;
console.log(student)

// method of object
let students ={
    name:"lucky",
    age:"20",
    course:"bca"
}
console.log(Object.entries(students))

//propeties of object

let object ={
    name:"sourav",
    age:23,
    isActive:true
};
console.log(object.age);
