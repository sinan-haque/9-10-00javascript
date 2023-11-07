const numbers=[2034,56,325,46,68,4,74,94,3,43457,359,2,34,624,725,8,2456,5,673,568,22,4756,3,568,67,832,54672,54,678,358];
function output(number,index){

    console.log(`index is ${index} and number is ${number}`)

}
 numbers.forEach(output);


//another way 

numbers2=[,8,2456,5,673,568,22,4756,3,568,67,832,54672,54,678,358]
numbers2.forEach(function(number,index){
    console.log(`index is ${index} and number is ${number}`);
})



const users=[
    {fname:'sinan',age:23},
    {fname:'san',age:43},
    {fname:'nan',age:33},
    {fname:'sina',age:3},
];
users.forEach(function(username){console.log(username.fname)});

users.forEach(function(agecount){
    console.log(agecount.age)
})


const user2=[
    {name:'sinan haque', age:4},
    {name:'samin' ,age:5},

    {name:'siam' ,age:78},

    {name:'faique' ,age:43},

    {name:'ifaz' ,age:64},
]
for(user of user2){
    console.log(user.name)
};
for(user of user2){
    console.log(user.age)
};
user2.forEach(user3=>{
    console.log(user3.age);

})
const number20=[23,34,46,57];
number20.forEach(output=>{console.log(output*200)});


//map merthods
const number1=[2,34,46,57];

const math=function(number){
    return number * number/2
}
const output1=number1.map(math);
console.log(output1);




//shortcut

const number2=[2,34,46,57];
const output2=number2.map((number)=> `${ number*number/5}`);
console.log(output2);


//realistic example

const user9=[
    {fname:'sinan',roll:222171},
    {fname:'samin',roll:222471},
    {fname:'siam',roll:229171},
];
const output3=user9.map(userA=>userA.fname);
console.log(output3);


//reduce methods

const userCard=[
    {Productid:1,ProductName:'tv',price:12000},
    {Productid:1,ProductName:'Mobile',price:16000},
    {Productid:1,ProductName:'Ac',price:14000},
]
const output4=userCard.reduce(
    function(totalamount,pricevalue){
        return totalamount+pricevalue.price;
    },0
)
console.log(output4);


//filter methods
const number5=[2,34,46,57,466,35,6,75,4,56,765,7,5,64];
const output5=number5.filter(number=>number<10);
console.log(output5);


//sort metrhod

const number6=[2,34,46,57,466,35,6,75,4,56,765,7,5,64];
const output6=number6.sort((a,b)=>b-a);
console.log(output6);
