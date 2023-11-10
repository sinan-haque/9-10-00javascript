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
const output3=person1.every(PersonValue=>PersonValue.model<100000);
console.log(output3);

