function checkeven(no){
    if(no%2==0){
        console.log("even");
    }
     else{
        console.log("odd");
     }
}
 checkeven(17);
 checkeven(45);

 function sum2no(a,b){
    return a+b;
 }
 let n=sum2no (12,8);
 console.log(n);  

 //variable based function
 const checkEven=function(n){
 if(n%2==0){
    return true
 }
 }
 let result = checkEven(20)
 console.log(result)

 console.log(checkEven(40))

// arrow function
const ifeven=(no)=>{
    if(no%2==0){
        return true
    }
} 
 let output = ifeven(20)
 console.log (output)