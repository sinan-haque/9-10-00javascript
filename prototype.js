

const func5={
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
    user.about=func5.about;
    user.boyos=func5.boyos;

    return user
}
const user2=username('sinan',18,'12','science',222171);
const user3=username('siam',18,'12','science',222171);
const user4=username('sajib',18,'12','science',222171);
console.log(user2);
console.log(user2.about());
console.log(user3.about());
console.log(user4.about());


//prototype provide only functions ;prototype is empty object  {}   ;