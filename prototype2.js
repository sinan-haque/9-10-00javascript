const func4={
    about:function(){
       return `My name is ${this.name}.I am ${this.old} years old.I read in class ${this.xlass}.My group name is ${this.group} and my roll number ${this.roll}`
    },
    boyos:function(){
        return this.age>=18;
    }
}
function username(name,old,xlass,group,roll){
    const user=Object.create(func4);
    user.name=name;
    user.old=old;
    user.xlass=xlass;
    user.group=group;
    user.roll=roll;
    return user
}
const user0=username('sinan',18,'12','science',222171);
const user9=username('siam',18,'12','science',222171);
const user8=username('sajib',18,'12','science',222171);
console.log(user0);
console.log(user0.about());
console.log(user8.about());
console.log(user9.about());


//prototype simple object
//proto just reference hea




