//slice methods
const userCard=[
    {Productid:1,ProductName:'tv',price:12000},
    {Productid:1,ProductName:'Mobile',price:16000},
    {Productid:1,ProductName:'Ac',price:14000},
]
const output0=userCard.slice(0).sort((a,b)=> b.price-a.price);
console.log(output0);

//find methods
const person =[
    {userId:101,username:'sinan haque',add:'shibpur'},
    {userId:103,username:'sunny ',add:'cummilla'},
    {userId:1045,username:'sadbin haque',add:'dhaka'},
    {userId:105,username:'addin haque',add:'narsingdi'},
    {userId:106,username:'samin haque',add:'boirob'},

];
const findPerson=person.find(name=>name.userId===1045);
console.log(findPerson);


// every method
const person1 =[
    {userId:101,username:'sinan haque',add:'shibpur',model:22000},
    {userId:103,username:'sunny ',add:'cummilla',model:44000},
    {userId:1045,username:'sadbin haque',add:'dhaka',model:32000},
    {userId:105,username:'addin haque',add:'narsingdi',model:66000},
    {userId:106,username:'samin haque',add:'boirob',model:77000},

];
const output3=person1.every(findPerson1=>findPerson1.model<=79000);//beshi ba soram hole ture and kom hole flase
console.log(output3)

//some methods
const user1=[34,56,68,532,34,35,456453];
const output4=user1.some(math=>math%2===0);
console.log(output4);


//filter methods 
const number1=[34,56,68,532,34,35,456453];
const output5=number1.filter(number=>number%2===0);
console.log(output5);

//splice methods


const item=['item1','item2','item3','item4'];
const output6=item.splice(2,1,'itenmmm');
console.log(item);
console.log(output6);
