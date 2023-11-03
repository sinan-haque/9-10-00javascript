//getter and setters

class person{
    constructor(fname,lname,age){
        this.fname=fname;
        this.lname=lname;
        this.age=age;
    }
    get fullname(){      
        
        
        
        //get use korle () deya lage na



        return `${this.fname} ${this.lname}`
    }
}

const person1=new person('sinan','haque',5);
console.log(person1.fullname);


class person3{
    constructor(collage,live){
        this.collage=collage;
        this.live=live;

    }
    get extra(){
        return `${this.collage},${this.live}`
    }
    set extra(extra){
        const [collage,live]=extra.split(' ');
        this.collage=collage;
        this.live=live;

    }
}
const output2=new person3('AKMCC','shibpur,narsingdi');

output2.extra='NMC DHAKA'
console.log(output2);
console.log(output2.extra);

