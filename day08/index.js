'use strict'
//NOTE USE STRICT MODE ;

// age = 5 ;
// console.log(age)

// function sum(a,a,b){
//     return a+a+b ;
// }

// console.log(sum(1,2,3))

//NOTE TYPE OF CONSOLE ;

console.error("this is an error") ;
console.warn('this is a warning');

//using console.time you can calculate the time of any operation
console.time('timeStamp');
console.log('hello')
console.timeEnd('timeStamp') ;

//NON PRIMITIVE DATA TYPES ;

const fruits = ['mango', 'papaya','grapes', 'guava','orange'] ; 
console.log(fruits.length)//5 
//last index 4 ; 5-1 
console.log(fruits[0]);
console.log(fruits[fruits.length-1])

//NOTE PUSH METHOD 
//REVIEW - ADD AN ELEMENT TO THE END OF THE ARRAY ,
//REVIEW ALWAYS RETURNS THE LENGTH OF NEW ARRAY 
//REVIEW IT MUTATES THE ORIGINAL ARRAY
const pushOutput = fruits.push('blueberry') ;

console.log(pushOutput);
console.log(fruits);


//NOTE POP METHOD :
//REVIEW - used to remove element from the last 
//REVIEW - always returns the popped or deleted element 
//REVIEW - always mutates the original array 
const output = fruits.pop() ;
console.log(output);
console.log(fruits)

//NOTE 3 UNSHIFT METHOD 
//REVIEW used to add element to the starting of the array
//REVIEW ALWAYS RETURNS THE LENGTH OF NEW ARRAY 
//REVIEW IT MUTATES THE ORIGINAL ARRAY

const unshiftOutput = fruits.unshift('pomengranate') ;

console.log(unshiftOutput);
console.log(fruits);

//NOTE SHIFT METHOD 
//REVIEW - Remove the element from the start of the array
const shiftOutput = fruits.shift();
console.log(shiftOutput);
console.log(fruits);

//NOTE INCLUDES METHOD 
//REVIEW - Check element is exists in an array , returns true or false ;
const includesOutput = fruits.includes('blueberry');
console.log(includesOutput)

//NOTE ----------- OBJECTS -----------
// key:value
const myDetails = {
    firstName : 'ritesh' ,
    age : 2024-1997 ,
    fullDetails : function(){
      console.log(`my name is ${this.firstName} and my age is ${this.age}`)
    }
  

}
//NOTE this keyword => in the case of the object it always point to the object in which it is used.

// console.log(myDetails.two hunderd)
// console.log(myDetails['two hundred'])

console.log(myDetails) ;
//update a keyvalue in the object
//NOTE DOT NOTATION 
myDetails.firstName = 'abc' ;
console.log(myDetails) ;

//NOTE to add a new property ;
myDetails.friend = 'xyz';
console.log(myDetails)


//DOT NOTATION ;
console.log(myDetails.firstName);
console.log(myDetails.friend);


//Bracket notation 
let a ='age'
console.log(myDetails['firstName']) ;
console.log(myDetails[a]) ;

myDetails.fullDetails(); 

//NOTE --Remaining arrays methods ;

const arr = [1,2,3,23,4,5,6] ;

//NOTE slice(startIndex , endIndex) to extract a part of the array  ;

//NOTE always get number of elements = lastindex - startIndex
const slicedOutput = arr.slice(1,5);
console.log(slicedOutput);
//NOTE slice method donot mutate original array
console.log(arr);


//NOTE SPLICE(index, deleteCount , newElement) add , remove elements ;
//NOTE always modify the original array
// const splicedOutput = arr.splice(2,2,8);
// console.log(splicedOutput);
// console.log(arr)

//NOTE - forEach (HIGHER ORDER METHOD)
//NOTE callback function
//NOTE the method which accepts a callback function is called higher order method
//NOTE arrow ()=>{}
//NOTE function(){}
//REVIEW forEach methods always return "undefined"
const forEachOutput = arr.forEach((el)=>{
console.log(el*2)
})
console.log(forEachOutput) ;

//NOTE - MAP(HIGHER ORDER METHODS)
//NOTE - used to perform some transformation on the array always accepts a callback and returns a new array which is the result of the transformation we applied in the callback;
//NOTE not modify the original array
const mappedOutput = arr.map((el)=>{
    return el*2 ;
})

console.log(mappedOutput);
console.log(arr)

//NOTE FILTER (HIGHER ORDER METHOD);
const filterOutput = arr.filter((el)=>{
 return el>2 ;
})
console.log(filterOutput);
console.log('orignal',arr)

const productss = [{
    name : 'tv',
    category : 'electronics'
},{
    name : 'tshirt',
    category : 'clothing'
}
,{
    name : 'roundneck t=shirt',
    category : 'clothing'
}]

const filteredProduct = productss.filter((product)=>{
    return product.category === 'clothing'

})

console.log(filteredProduct) ;

//NOTE FIND METHOD(HIGER ORDER METHOD);
const findOutput = arr.find((el)=>{
    return el>2
})
console.log(findOutput)

//NOTE Reverse ;

//NOTE SORT ;
const sortedOutput  = arr.sort((a,b)=>{
    return a-b ;
});
console.log(sortedOutput);
console.log(arr);

//NOTE findIndex(higher order method) ;
const findIndexOutput = arr.findIndex((el)=>{
    return el>2}
    )

 console.log(findIndexOutput)

 //EVERY (higer order method)
 const everyOutput = arr.every((el)=>{
    return el>2 ;
 })

 console.log(everyOutput)

//NOTE REDUCE METHOD ; 
//NOTE used to reduce the array in to single value  ;

const reducedOutput = arr.reduce((accumulator , el)=>{
    console.log(accumulator,el)
return accumulator + el
},0)

console.log(reducedOutput)

const items = [{
    name : 'tshirt' , quantity : 2 , price : 500
},{
    name : 'mobile' , quantity : 2 , price : 50000
}]

const reducedPrice = items.reduce((accumulator,item)=>{
    return accumulator + (item.quantity * item.price)
},0)

console.log(reducedPrice);

//NOTE OBJECT METHODS : 

const country = {
    name : 'India',
    capital : 'New delhi',
    language : "english"
}

//Object.keys() 

Object.keys(country).forEach((key)=>{
    console.log(`${key} : ${country[key]}`)
})

//Object.values()

const objectValues = Object.values(country);
console.log(objectValues)

 //object.assign(target , source);
 const country2 = {
   language : 'hindi'
 }

 Object.assign(country,country2) ;
 console.log(country) ;

 //Object.freeze 
 //NOTE when youuse object.freeze new properties cannot be added.
 //NOTE and existing properties are not modified ;
 Object.freeze(country);
//  country.name = 'us';
//  console.log(country) ;

 //NOTE Destructuring ES6 FEATURE ;
 const pro = ['tv','mobile','shirt'];

//  const tv = pro[0];
//  console.log(tv) 
//NOTe in the case of array ;

const [tv , , shirt] = pro ;
console.log(tv,  shirt) ;
