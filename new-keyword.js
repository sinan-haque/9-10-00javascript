
// function username(name,old,xlass,group,roll){
//     this.name=name;
//     this.old=old;
//     this.xlass=xlass;
//     this.group=group;
//     this.roll=roll;
// }
// username.prototype.about=function(){
//     return `My name is ${this.name}.I am ${this.old} years old.I read in class ${this.xlass}.My group name is ${this.group} and my roll number ${this.roll}`
// }
// username.prototype.is18=function(){
//     return this.age>=18;
// }
// username.prototype.sing=function(){
//     return 'la la la la la la';
// }
// const user2=new username('sinan',18,'12','science',222171);
// const user3=new username('siam',18,'12','science',222171);
// const user4=new  n  username('sajib',18,'12','science',222171);
// console.log(user2.about());
// console.log(user3.about());
// console.log(user4.about());

// console.log(user4.sing());

function username(name,age,address,read){
    this.name=name;
    this.age=age;
    this.address=address;
    this.read=read;
}
username.prototype.about=function(){
    return `my name is ${this.name}.i am ${this.age} years old.I live in ${this.address}.I read in class ${this.read}`
}
username.prototype.song=function(){
    return 'lalalalalalalala'
}
username.prototype.age=function(){
    return this.age>=19;
}
const user1=new username('sinan',20,'bsngladesh',12);
console.log(user1);
console.log(user1.about())
console.log(user1.song());
console.log(user1.age);


// for(let key in user1){
//     if(user1.hasOwnProperty(key)){
//         console.log(key);
//     }
// }
for(let key in user1){
    if(user1.hasownproperty(key)){
        console.log(key);
    }
}

//only ownproperty not prototype proterty

 let numbers=[1,2,3];
console.log(numbers);

console.log(Array.prototype);

function hello(){
    console.log('hello world');
}
console.log(hello.prototype);
