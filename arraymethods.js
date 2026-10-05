const a=[1,10,20]
const[a1,a2,a3]=a
console.log(a1,a2,a3)
const b=[10,20,30]
const [b1,b2]=b
const c=[1,10,20]
const [c1,...c2]=c
console.log(c1,c2)

const d=[1,10,20,30]
const [,d1,d2,...d3]=d
console.log(d1,d2,d3)

const e={
    name:"lucky",
    myclass:"v"
}
const{name,myclass}=e
console.log(name,myclass)
