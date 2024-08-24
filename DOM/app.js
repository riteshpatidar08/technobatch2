//DOCUMENT OBJECT MODEL (DOM);

console.log(document)

//NOTE SELECT THE ELEMENT ;
//NOTE document.getElementById ;
// const heading = document.getElementById('heading') ;
// console.log(heading);
// console.dir(heading)

//NOTE document.getElementsByTagName
//REVIEW - getelementsbyTagName always returns htmlCollection which looks like an array but it is not an array 
const para = document.getElementsByTagName('p');
console.log(para)
console.log(para[0])

//TODO convert the html collection 'para' in to an array (use spread operator);
const newpara = [...para];
console.log(newpara) ;

newpara.forEach((el)=>{
    console.log(el.innerText)
})


//NOTE document.getElementsByClassName
const list = document.getElementsByClassName('special');
console.log(list) ;

//NOTE document.querySelector
const list2 = document.querySelector('.special');
console.log(list2);

//NOTE document.querySelectorAll
const list3 = document.querySelectorAll('.special')

list3.forEach((el)=>{
    console.log(el.innerText)
})
console.log(list3);

//NOTE  HTML COLLECTION RETURN BY getElementsByTagName and getElementsByClassName AND NODELIST return by querySelectorAll method ;

//NOTE READING TEXT FROM ELEMENTS;
//NOTE innerText , textContent , innerHTML properties available on the element

const heading = document.getElementById('heading') ;
console.log(heading);
console.dir(heading)

//textContent ;
//NOTE textContent gives the text as it is without applying any css or calculation
heading.textContent = 'dom' ;
//NOTE innerText always preverse the css
heading.innerText = 'dom2' ;

heading.innerHTML = `<span>hello</span>`
console.log(document.body.innerText)

const container = document.querySelector('#container');

// container.innerHTML = `<h1>Services</h1>`

//NOTE reading the href and src attributes of the anchor and img tag 

const a = document.querySelector('#address') ;
a.href = 'https://www.amazon.com';

const img = document.querySelector('#bear-photo');
img.src = './../Day01/images/1.png';

//NOTE changing style using js ;

heading.style.color = 'green' ;
heading.style.fontSize = '30px';
heading.style.textDecoration = 'underline'

//NOTE changing attributes using js
const input = document.querySelector('#bear') ;

input.setAttribute('placeholder','enter your name');

console.log(input.getAttribute('placeholder')) ;

//NOTE creating new elements using js ;

//NOTE first you have to create a new element
const h1 = document.createElement('h1') ;
//NOTE second you have to add content to  it 
h1.innerText = 'created using js'
console.log(h1)
//NOTE third you have to decide where to place in our html file
container.append(h1)
 


//events addEventListner
const btn = document.getElementById('btn') ;

btn.addEventListener('click',()=>{
    const p = document.createElement('p');
    p.innerText = `hello this is the para.`
    console.log(p) ;
    document.body.prepend(p)
})
//append add elements to the last
//prepend add elements to the start

document.addEventListener('keydown',(event)=>{
   if(event.key === 'b'){
    document.body.style.backgroundColor = 'blue'
   }else if(event.key === 'r'){
    document.body.style.backgroundColor = 'red'
   }

})