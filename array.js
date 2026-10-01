let fruits=["apple","mango","kiwi"];
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits.length)
console.log(fruits[fruits.length-1])

//change ,add,remove 
let fruit=["apple","mango","kiwi"];
fruit[0]="grape"
console.log(fruit[0])
fruit.push("banana");
fruit.pop();
fruit.unshift("fig");
fruit.shift();
console.log(fruit);
console.log(fruit.includes("kiwi")); //output: true

//loop through an array with for ...of
let pets=["dog","cat","parrot"];
for(let pet of pets){
console.log(`I like my ${pet}`);
}

//add up numbers in anm array
let prices=[20,50,30];
let total=0;
for(let p of prices){
    total +=p;
}
 console.log(total)