// JavaScript
/*
    JavaScript was founded in 1996 by Brandon Eich
    - Client side language (runs in the browser)
    - interpreted (not complied)
    - object oriented 
    -ECMAScript which is an organization that sets language
    standards
*/

// comments
/*
    Lines or blocks of code that are not being interpreted by the
    parser.
    - denoted by // for single line
    - Or like the existing comment that allows many lines of code.
    - comments that get read but are not executed
    - Beneficial in documenting maintainable codebase
*/

// variables

/*
    Containers that store data in memory.
    -declaration
        - allowing the memory space to be reserved
        - declarations start with let or var
        - declarations cannot start with a number, or most 
        characters other than $ or _.
        - default value is undefined
        - loosely typed language (no need to declare data type)
    -initialization
*/

let firstname; 
// console.log(firstname)

var lastname;
// console.log(lastname)

// const age;
// Missing Initializer error, const must always be declared AND initialized.
// console.log(age)

// Coding Practices for variables
/*
    - Be concise (ex: firstname instead of userfirstname)
    - Be specific (ex: getvaule instead of i)
    - Utilize camelcase, snake_case, PascalCase, or skewer-case.
    - you can also utilize nocase or SCREAMING_CASE
*/

// Variable Initialization
/*
    The data value that is given to a variable declaration.
    - can be anything (string, integer, array, function, class,
    ect.)
    - Can be reassigned (apart from const)
*/

let address = "430 N Park";
/*
    (a) variable declaration
    (b) variable identifier
    (c) value or initializer
*/

// console.log(address)

// redeclare variables with different initializers

address = "157 w ohio st"
console.log(address)

console.log(firstname, lastname)

firstname = "summer"; 
lastname = "Kerekes";

console.log(firstname, lastname);

const ssn = 123456789

console.log(ssn)

// ssn = 559990000
// console.log(ssn)
// ! ERROR! TypeError: assignment to constant variable
// ! const variables cannot be reassigned! 

let text = "hey \"text\" "
console.log(text)

//data types
/*
    JavaScript has several data types that can be used. they are:
        -Boolean
        -Null
        -Underfined
        -string
        -Number
        -Array
        -object
*/

// String
/*
    Data type used to represent text in single or double quotes.
    Primitive Data Type
*/

let mystring = "This is a string data type"

mystring = `Can be in single quotes`

// Template Literal
mystring = `This is a template literal string`;

console.log(typeof mystring) // typeof returns data type

// Numbers 

let degrees = 90;
console.log(degrees)

let precise = 999999999999999;
// 15 didgits doesn't round up
console.log(precise)

let rounded = 9999999999999999;
//16 didgits round up
console.log(rounded);

let decimaladdition = 0.2 + 0.1;
console.log(decimaladdition)

// Redeclaration
let strToNum = "123";
console.log(strToNum)
let MyNumber = Number(strToNum)
console.log(MyNumber)
console.log(typeof strToNum)

// Boolean
// Two possible values: true (on) or false (off)

let on = true;
console.log(on)

let off = false;
console.log(off)

// Undefined
// no value is assigned and does not act as empty container

let undef = undefined;
console.log(undef)

let correct;
console.log(undef)

// Null
// Null is an empty value. Container with nothing in it.

let empty = null;
console.log(null)

// Null vs Undefined

/*
    - Null is like a container with nothing in it
    - Undefined means variable has never been set or created
*/

// Data Type Literals
// When developer inserts a value into a data type

let strLiteral = "This is a string literal"

// Arrays
// container holding a list of items

let students = ["dean", "cole", "kiersten"];

console.log(typeof students) // returns object

// object
// stores many values

let student = {
    name: "cole",
    age: 2,
    graduated: false,
}

console.log(typeof student)

// Operators

// Assignment Operator
// Assigns a value to the declaration (not "equal", but "is")

let r = 5;

// Comparison Operators
/*
    Compare values on either side of the operator
        - returns either a true or false
*/

// Equal to operator
console.log(3 = 3) // returns true

// Not equal to
console.log(3 != 5) // returns true because 3 is not equal to 5

// type coercion
/*
    Process of converting one data type into another
    Done automatically by the JS parser.
*/

console.log(3 = "3") // returns true because JS changes str data type to int data type before comparison operation.


// Strict equal or not equal operators
// Test for not only value but it's data type.

console.log(3 = 3) // returns tue because value & data type is same

console.log(3 = "3") // returns false because data types are different (int and str)

console.log(3 !== "3") // returns true because data types of both values differ

// Greater; Less; Greater & Equal; Less & Equal

console.log(5 > 3) // returns true

console.log(5 <=  5) // returns true

console.log(1 < 0) // returns false

console.log(0 < "1") // returns true because type coercion exists in these operators as well 

// Logical Operators NOT AND OR

/*
    AND Operator (&&)
        - True if both values result to true
    OR Operator (||)
        - true if one or the other value results in true
    NOT Operator (!)
        - Flips the resulting logical operation
*/

console.log(5 < 10 && 7 <10) // true; both sides are true
console.log(5 < 1 && 7 < 10) // flase; left side is false, right is true so overall false & true is false

console.log(5 < 10 || 7 < 10) // true; because both sides are true (only one needs to be true for Or)

console.log(5 < 1 || 7 < 10) // 
        // flase || true     // returns true because one of the sides remains true

console.log(5 < 1 || 7 > 10) // returns false (non is true)
          // flase || false

console.log(!(7 = 10)) // returns true because it flips the falsey value into truthy

// Add, Subtract, Multiply, Divide

console.log(5 + 5);
console.log(5 - 5);
console.log(5 * 5);
console.log(2 / 5);
console.log(2 ** 5);

let addNums = 5;

addNums = addNums * 2
console.log(addNum)

addNums *= 2 // shorthand operator (works for all + - / * ect)
console.log(addNums)

// Modulus Operator
// Checks for the remainder of long division

console.log(12 % 5)

// String Concatenation

let fName = "Kiersten";
let lName = "Gamby"

console.log(fName, LName)

let name ="Ms." + fName + " " + LName
console.log(name)

// Template literal

let templateliteralname = `ms. ${fName} %{IName} is ${20+1} years old.`
console.log(templateLiteraLName)

// Multi Line Strings

let multiline = "Once upon a time there was a guy who taught JS \n to students and lied about his age. \n He has a bulldog named bentley."

console.log(muliLine)

// Challenge 

/*
    Set7 to 8 variables:
    FName; Lname; houseNumber; aptNumber (if applicable); street;
    city; state; post code; and concatenate them together to creat you address stamp.
    Assign all of these values to console log to a new variable
*/

let fName = "Zach"
let LName = "Hatfield"
let hNumber = 120
let city = "Cicero"
let state = "IN"
let postcode = 46060

let address = FName + " " + LName + hNumber + " " + city + " " + students + " " + postCode

console.log(myaddress)

let myaddress = `${fiName} ${LaName} \n ${hNumber}`
console.log(myaddress)