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

