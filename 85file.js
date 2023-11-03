 //class are fake
 //class keyword


 //dog class

 class animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    about(){
        return `my dog name is ${this.name},my dog age is ${this.age}`
    }
    cute(){
        return this.age <=1;
    }
 }
//  const person1=new animal('tome',1);
//  console.log(person1.about());
//  console.log(person1.cute());

class dog extends animal{

}
const person2=new dog('likhon',2);
console.log(person2);
console.log(person2.about())
