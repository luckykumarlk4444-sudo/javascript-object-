const name="lucky"
let age="20"
const coursefee=5000;
const feepaid=true;
console.log(` name is:${name},age:${age}course fee:5000 feepaid{feepaid}`)
age +=5
const paid40percent = (40/100)*(5000/100)
const remainingfee=coursefee-paid40percent
console.log(`name ${name} course fee :&{coursefee}paid ${paid40percent} and remaining fee is{emainingfee}`)



//condition
 let marks=70;
 let attendance=75;
 let hassumittedproject=false;

 if(marks<0 ||marks>100){
    console.log(`invalid`)
 }
 else if(marks>=60 && attendance>=75 && hassumittedproject){
    console.log(`eligible for certificate`)
 }
 else if(marks>=60 && attendance>=75 && !hassumittedproject){
    console.log(`condition apprroval`)
 }
 else{
    console.log(`not eligible`)
 }

 //strings

 const student=['aniket','priya', 'rohit','neha']
 (student.toUpperCase())
 student.push("Aman");
 student.shift()
 console.log(student.includes("rohit"))
 console.log(student)

 //objects
 const a={
    name:"lucky",
    age:"20",
    course:"BCA",
    skills:["c++","java","c"],

 }
 delete a.name
 delete a.course
 console.log(a)