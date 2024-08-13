console.log(console)
console.log('js');

//value and variables ;
//data - types ;

//NOTE dataTypes

//NOTE PRIMITIVE 

//String 
//Number 
//BOOLEAN 
//NULL
//UNDEFINED
//BigInt 
//Symbol

//NOTE non-primivitve 
// array = []
//object = {}


//STRING 
//variable declaration 
//FIXME - always use camelCase ;

let firstName = 'ritesh' ;
console.log(firstName)

console.log(typeof firstName);

//NOTE NUMBER TYPE 

let age = 20 ;
console.log(typeof age)

//NOTE BOOLEAN TYPE 
let isJsFun = true ;
console.log(typeof isJsFun)

//NOTE UNDEFINED ;
//NOTE when you have declare the variable but not assign  a value in it
let college ;
console.log(college)
console.log(typeof college)

//NOTE NULL ;
let department = null ;
console.log(typeof department) ;

//TODO - KEYWORDS USED TO DECLARE THE VARIABLES ;

//NOTE VAR < LET < CONST

//NOTE - VAR 
//NOTE IN the case var we can ✅redeclare and ✅reassign the varibales

//REVIEW - REASSIGN
var lastName = 'singh' ;
lastName = 'sharma' ;
console.log(lastName)

//REVIEW - REDECLARE ;
var fruit = 'mango' ;
console.log(fruit)
var fruit = 'grapes';
console.log(fruit)


//NOTE LET  
//NOTE ✅reassign ❌redeclare ;
let company = 'meta' ;
company = 'netflix' ;
console.log(company)


//NOTE CONST 
//NOTE ❌reassign  ❌redeclare ;


//OPERATORS 

//NOTE AIRTHMATIC (+ ,- ,* , % , /, **)


//NOTE ASSIGNMENT(= , += , -= , *= , /=)
let x =5 ;
// x = x+ 5 ;
x += 5  //equivalent (x = x+5)
console.log(x)

//NOTE COMPARISON(==,===, != , !== > , < , <= , >= ) ;
//NOTE LOOSE EQUALITY (==) ;
const a= 5 ;
const b = '5' ;

//NOTE LOOSE EQUALITY
//❌ always aviod to use 
console.log(a==b)

//NOTE STRICT EQUALITY
console.log(a===b) ;

//NOTE !=
console.log(5 != '5') ; //❌

//NOTE !==
console.log(5 !== '5') ; //✅

//NOTE LOGICAL (|| , && , !)  ;

// prompt , alert

// const firstNamee = prompt('Enter you name')
// console.log(firstNamee)

// username='admin'
// password = 'admin123'

//NOTE  create two prompt one for username and other for password , use && logical operator to check if the username === 'admin' and password === "admin123" , if both conditions are true then  console.log('authentication successful) else console.log('authentication failed') ;

//NOTE TYPE COERSION AND TYPE  CONVERSION ;

//NOTE IMPLICIT(TYPE COERSION) when javascript internally convert the type of variable from one datatype to another ;

const c = 3 + '3' ;
console.log(typeof c) ;

const subs = 7 -'4' ;
console.log(subs)


const bol = true + 1 ;
console.log(bol)
console.log(typeof bol)

const d = +'5' ;
console.log(d)
console.log(typeof d) 

//NOTE TYPE CONVERSION
const num = 5 ;
console.log(typeof String(num))

const str = 'true' ;
console.log(typeof Boolean(str))