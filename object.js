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
const students ={
    name:"lucky",
    age:"20",
    course:"bca"
} 
const b={
    city:"jamshedpur"
}
console.log(Object.keys(students));
console.log(Object.values(students));
console.log(Object.assign(students,b));
console.log(Object.fromEntries(Object.entries(students)));
console.log(Object.freeze(students));
console.log(Object.seal(students));
// console.log(Object.defineProperties());
console.log(Object.hasOwn(students,"name"));
//propeties of object

let object ={
    name:"sourav",
    age:23,
    isActive:true
};
console.log(object.age);
