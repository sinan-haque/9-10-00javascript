class person3{
    constructor(collage,live){
        this.collage=collage;
        this.live=live;
        

    }
    static classinfo(){
        return 'this is a anything'; //ok
    }
    static dase ='static property'; //ok
    get extra(){
        return `${this.collage},${this.live}` //ok
    }
    set extra(extra){
        const [collage,live]=extra.split(' ');  //ok
        this.collage=collage;
        this.live=live;

    }

}
const person1=new person3('AKMCC','DHAKA');
console.log(person1.extra);
person3.extra='NMC NARSINGDI';
console.log(person3.extra);




console.log(person3.dase);
const info= person3.classinfo;
console.log(info());