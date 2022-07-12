//String
var Name;
Name = "Gagan";
//Number
var Age;
Age = 19;
//Boolean
var isFeatching;
isFeatching = true;
//Array Of Numbers
var arrNumber;
arrNumber = [1, 2, 3, 4];
//Array of String
var arrStrings;
arrStrings = ["Gagan", "Chandan"];
//Tuples
var tuple;
tuple = ["Gagan", true];
//Enum
var Data;
(function (Data) {
    Data[Data["User"] = 0] = "User";
    Data[Data["SuperUser"] = 1] = "SuperUser";
    Data[Data["Admin"] = 2] = "Admin";
    Data[Data["SuperAdmin"] = 3] = "SuperAdmin";
})(Data || (Data = {}));
//Function 
//Product
var Product = function (x, y) {
    return x * y;
};
console.log(Product(2, 4));
//Divide
var Divide = function (x, y) {
    return x / y;
};
console.log(Divide(4, 2));
//Name
var Person = function (name) {
    console.log(name);
};
Person("Gagan");
