// const person={
//     name:'sinan haque',
//     age:18,
//     roll:22313,
//     section:'F',
//     email:'sinanhaque10@gmail.con',
//     address:'bangladesh, dhaka, narsingdi, shibour',
//     about:function(){
//         return `${this.name}age is ${age}`},
//         is18:function(){
//             return this.age>=18;
//         }
// }




// function createUser(name,age,roll,section,email,address){
//     const user={};
//     user.name=name;
//     user.age=age;
//     user.roll=roll;
//     user.section=section;
//     user.email=email;
//     user.address=address;
//     user.about=function(){
//         return `${this.name}age is ${age}`},
//      user.is18=function(){
//             return this.age>=18;
//         }
//         return user
// }
// const output = createUser('sinan haque',18,20211,'F','sinanhaque10@gmail.com');
// console.log( output);
// const is18=output.is18();
// console.log(is18);



//new example 



const methods={
    about:function(){
        return `${this.name} age is ${this.age}`
    },
    is18:function(){
            return this.age>=18;
        }
}

function createUser(name,age,roll,section,email,address){
    const user={};
    user.name=name;
    user.age=age;
    user.roll=roll;
    user.section=section;
    user.email=email;
    user.address=address;
    user.about=methods.about;
    user.is18=methods.is18;
    return user;
}
const user1=createUser('sinan',18,222171,'F','sinanhaque10@gmail.com','shibpur');
const user2=createUser('samin',18,222131,'A','saminalon10@gmail.com','shibpur')

const user3=createUser('siam',18,222173,'W','sisiam10@gmail.com','shibpur')

const user4=createUser('sajim',15,222871,'X','sajim10@gmail.com','shibpur')

console.log(user1.about());
console.log(user2.about());
console.log(user3.about());







const func4={
    about:function(){
       return `My name is ${this.name}.I am ${this.old} years old.I read in class ${this.xlass}.My group name is ${this.group} and my roll number ${this.roll}`
    },
    boyos:function(){
        return this.age>=18;
    }
}

function username(name,old,xlass,group,roll){
    const user={};
    user.name=name;
    user.old=old;
    user.xlass=xlass;
    user.group=group;
    user.roll=roll;
    user.about=func4.about;
    user.boyos=func4.boyos;

    return user
}
const user0=username('sinan',18,'12','science',222171);
const user9=username('siam',18,'12','science',222171);
const user8=username('sajib',18,'12','science',222171);
console.log(user0.about());
console.log(user8.about());
console.log(user9.about());







// (_ _)    __proto__ = [[prototype]];  2 tar theke alada 
// prototype


const obj={
    key1:'value1',
    key2:'value2'
}
const obj2=Object.create(obj);
obj2.key3='value3';
obj2.key2='unique';

console.log(obj2.key2);