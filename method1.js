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