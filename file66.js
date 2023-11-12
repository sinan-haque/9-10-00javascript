

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
console.log(user6.about());

const obj4={
    key1:'value1',
    key2:'value2'
}
const obj0=Object.create(obj4);
obj0.key3='value3';
console.log(obj0);