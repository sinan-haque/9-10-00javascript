

const fullname=['sinan haque'];
for(let name of fullname){
    console.log(name);
} //array and string are iterables


//sets is iterables

const mySets= new Set();
mySets.add([123,4]);
mySets.add('hello');

mySets.add(100201);

mySets.add(['sinan','rahul']);
console.log(mySets);
mySets.delete('hello');
console.log(mySets);

const item=['item1','item2','itemX','item1'];
const seta=new Set();
seta.add(1);
seta.add(1);
seta.add(1);
seta.add(item);
seta.add('x');

console.log(seta);

const myarray=[13,4,5,46,32456,473,232,53,621,12,3,6,47,34,64,758,47636,4,5,53,1];
const howmuchlength=new Set(myarray);
let length=0;
for(let element of howmuchlength){
    length++
}
console.log(howmuchlength);


//map 

person1={
    id:101,
    class:12,
}
person2={
    id:102,
    class:13,
}
// const extrainfo=new Map();
// extrainfo.set(person1,{age:19,gender:'male'});
// extrainfo.set(person2,{age:18,gender:'female'});
// console.log(person1.class);
// console.log(extrainfo.get(person2).age);

const extrainfo=new Map();
extrainfo.set(person1,{age:12,gender:'male'});
extrainfo.set(person2,{age:22,gender:'female'});
console.log(extrainfo.get(person1).gender);

//clone using Object.assign
//memory

const obj={
    key1:'value1',
    key2:'value2'

}
// const obj2=Object.assign({},obj);
// obj.key3= 'value3';
// console.log(obj);
// console.log(obj2);

const obj2= Object.assign(obj);
obj.key3='value3';
console.log(obj);
console.log(obj2);

const user2={
    name:'sinan haque',
    address:{shibpur:1204}
}
console.log(user2?.name);
console.log(user2.address);



const person={
    name:'sinan haque',
    age:22,
    about:function(){
        console.log(`my name is ${this.name} and i am ${this.age} years old`)

    }
}
person.about();



const person0={
    name:'sinan haque',
    age:20,
    about:function(){
        console.log(`my name is ${this.name} and i am ${this.age} years old`)

    }
}


const person4={
    name:'sadbin haque',
    age:24,
    about:function(){
        console.log(`my name is ${this.name} and i am ${this.age} years old`)

    }
}

const person3={
    name:'addin haque',
    age:12,
    about:function(){
        console.log(`my name is ${this.name} and i am ${this.age} years old`)

    }
}
person0.about();
person3.about();
person4.about();






// console.log(window);


//strict
function thiss(){
    console.log(this);
}
thiss()




const user={
    name:'samin ',
    add:'shibpur',
    about:function(){
        console.log(`my name is ${this.name} and I live in ${this.add}`)
    } //function na banale run korbe na
    
}
const user1={
    name:'akbar ',
    add:'india'
}
user.about.call(user2);



function about(extraadd){
    console.log(`my name is ${this.name}.I am ${this.age} year old.I live in ${this.add}. i like `, extraadd)

}
const person6={
    name:'sinan haque',
    age:18,
    add:'shibpur'
}

const person7={
    name:'sadbin haque',
    age:28,
    add:'dhaka'
}
about.call(person6,'cabadi');
about.apply(person6,['football']);
const myfunc=about.bind(person7,'bat');
myfunc();


// call method = apply method are same and bind methods is different




const user0={
    name:'samin ',
    add:'shibpur',
    about:function(){
        console.log(`my name is ${this.name} and I live in ${this.add}`)
    }
}
user0.about.call(user0);
user0.about.apply(user0);



const func={
    about:function(){
        return `my name is ${this.name} and i am ${this.age} years old ,roll ${this.roll}`
    }
}

function username(name,age,roll){
    const user00={};
    user00.name=name;
    user00.age=age;
    user00.roll=roll;
    user00.about=func.about;
    
    return user00
}
const user6=username('sinan',13,23134);
console.log(user6)

const obj4={
    key1:'value1',
    key2:'value2'
}
const obj0=Object.create(obj4);
obj0.key3='value3';
console.log(obj0);



function username(name,add,roll,section){

    this.name=name;
    this.add=add;
    this.roll=roll;
    this.section=section;
}
username.prototype.about=function(){
    return `my name is ${this.name},I live in ${this.add},${this.roll},${this.section}`
} 
username.prototype.song=function(){
    return 'i love youu'
}
const output8=new username('sinan haque','narsigdi',222171,'flower');
console.log(output8.about());
console.log(output8.song());



//class


// class animal{
//     constructor(){
//         this.name=name;
//         this.age=age;
//     }
// }
class animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    about=function(){
       return `my dog name is ${this.name} and dog age is ${this.age}`
    }
    cute=function(){
        return this.age>=2;
    }

}
const output9=new animal('tomi',2);
console.log(output9.about());
console.log(output9.cute());



//class


class animal1{

    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    about(){
        return `${this.name},${this.age}`
    }
}
class dog extends animal1{
   constructor(name,age,speed){
    super(name,age);
    this.speed=speed;
   }
   run(){
    return `my dog name is ${this.name} and dog age is ${this.age} and dog speed per second ${this.speed}`
   }
}
const output10=new dog('toni',2,'45mps');
console.log(output10.run());




class animal2{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
   get about(){
       return `my dog name is ${this.name} and dog age is ${this.age}`
    }
}
const output11=new animal2('tomi',2);
console.log(output11.about);



class person10{
    constructor(fname,lname,roll){
        this.fname=fname;
        this.lname=lname;
        this.roll=roll;
    }
    get about(){
        return `${this.fname},${this.lname}`
    }
    set fullname(fullname){
        const [fname,lname]=fullname.split('')
        this.fname=fname;
        this.lname=lname;

    }
}
const output12=new person10('sinan','haque');

person10.fullname='sinan haque';
console.log(output12.about);
console.log(person10.fullname);
