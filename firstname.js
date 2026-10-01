//task 1.1
console.log("lucky")

//task 1.2
console.log(14)

//task 1.3
let a=12
b=4
console.log(a*b)

//task 1.4
//print my name.
console.log("rohan")

//task 2.1
const myName="lucky"
console.log(myName)

//task 2.2
let age=14;
console.log(age);
age=age+1;
console.log(age)

//task 2.3 --break a const on purpose

// const school="vivek vidyalaya";
// school= "vig engish school";

//taask 2.4 - add two variables

let c=7,d=3;
 sum=c+d;
console.log(sum)

//task 3.1

let city ="jaipur"; //string
let student=40;// number
let issunny=true;//boolean
console.log(typeof city)
console.log (typeof student)
console.log (typeof issunny)

//task 3.3

console.log(typeof "5");
console.log(typeof 5);

//task 3.4
let x;
console.log(x)

// task 4.1 power
console.log(2**8)

//task 4.2 is 17 even

console.log(17%2);
console.log(17%2===0)

//task 4.3 text 5 vs number 5

console.log("5" ===5);

//task 4.4 counter

let count =0
count++
count++
count++
console.log(count)

//task 5.1 full name with a template literal

let first ="lucky"
let last ="kumar"
console.log(`${first} ${last}`)

//task 5.2 count the letters
let firsts ="lucky"
console.log(firsts.length)

//task 5.3 capital letter

console.log("javascript".toUpperCase())

//task 5.4 first letter
let names="lucky"
console.log(names [0])

//task 6.1 adult or minor

let number=20;
if(number>=18){
    console.log("adult");
}
else{
    console.log("minor")
}

//tasks 6.2 postive, negative or zero

 let n=4;
 if(n>0){
    console.log("postive")
 }
  else if(n<0){
    console.log("negative")
  }
   else{
    console.log("zero")
   }

   //6.3 even or odd

   let r=7;
   if(r%2===0){
    console.log("even")
   }
    else{
        console.log("odd")
    }

    //task 6.4 fruit colour with switch

     let fruit ="grape"
     switch (fruit){
        case "apple":
            console.log("red")
            break;
        case "banana":
            console.log("yellow")
            break;
            default:
                console.log("unknown")
     }

     //task 7.1 print 1 to 10
     for(let i=1; i<=10; i++){
        console.log(i)
     }

     //task 7.2 even numbers 1 to 20
     for(let i=1; i<=20;i++){
        if(i%2===0){
            console.log(i)
        }
     }

     //task 7.3 5 time table
     for(let i=1; i<=10; i++)
        console.log(`5*${i} =${5*i}`)
    
     //task 7.4  total of 1 to 10

     let total =0;
     for(let i=1;i<=100;i++){
        total +=i;
     }
     console.log(total)

     //task 7.5  countdown

     let k=10;
     while(k>=1){
        console.log(k)
        k--;
    }
        console.log("blast off");
    
        //task 7.6  stop at 6
        for(let i=1;i<=10;i++){
            if(i===6){
                break;
            }
            console.log(i)
        }

        //task 8.1 say Hi()
        function sayhi(){
            console.log("Hi");
        }
        sayhi();
        sayhi();
        sayhi();
        
        //task 8.2 multiply (a,b)

        function multiply(a,b){
            return a*b;
        }
            console.log(multiply(4,5));

            //task 8.3-- iseven(n)

            function iseven(n){
                return n%2===0;
            }
           console.log(iseven(6));
           console.log(iseven(7));  

           //task 8.4 --tocelsius(f)as an arrow function

           const tocelsius=(f)=>(f-32)*5/9
           console.log(tocelsius(212));
           console.log(tocelsius(32));

           //task 8.5--biggest (a,b,c)

           function biggest (a,b,c){
            if(a>=b && a>=c){
                return a;
            }
            else if(b>=a && b>=c){
                return b;
            }
            else{
                return c;
            }
        }
            console.log(biggest(3,9,5))

            //task 9.1 --first and last food
            let foods=["pizza","dosa","pasta","momos","biryani"]
            console.log(foods[0]);
            console.log(foods[foods.length -1]);

            //task 9.2 --add one more
            foods.push("maggie");
            console.log(foods.length)

            //tasks 9.3 -- print every food

            for(let food of foods){
                console.log(food)
            }

            //tasks 9.4 -- total of an array
            let nums=[4,9,2,7]
            let totals=0;
            for(let n of nums){
                totals +=n;
            }
            console.log(totals)

           
     
        
    






