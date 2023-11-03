//same method in subclass


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

 class dog extends animal{
    constructor(name,age,speed){
        super(name,age);
        this.speed=speed;
    }
    run(){
        return `my dog name is ${this.name}. koko age is ${this.age} years old.kokos running speed is ${this.speed}kmph`
    }
 }
 const person=new dog('koko',5,45);
 console.log(person);
 console.log(person.run())
 console.log(person.cute()) //cute na tai false
