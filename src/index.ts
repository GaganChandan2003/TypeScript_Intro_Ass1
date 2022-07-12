//String
let Name:string
Name="Gagan";



//Number
let Age:number;
Age=19;



//Boolean
let isFeatching:boolean;
isFeatching=true;



//Array Of Numbers
let arrNumber:number[];
arrNumber=[1,2,3,4];



//Array of String
let arrStrings:string[]
arrStrings=["Gagan","Chandan"];



//Tuples
let tuple:[string,boolean];
tuple=["Gagan",true];



//Enum
enum Data{
   User,
   SuperUser,
   Admin,
   SuperAdmin,
}



//Function 

//Product
const Product=(x:number,y:number):number=>
{
      return x*y;
}

console.log(Product(2,4));



//Divide
const Divide=(x:number,y:number):number=>
{
    return x/y;
}

console.log(Divide(4,2));



//Name
const Person=(name:string):void=>
{
  console.log(name);
}

Person("Gagan");


