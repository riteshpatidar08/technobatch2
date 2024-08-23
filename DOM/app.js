//DOCUMENT OBJECT MODEL (DOM);

console.log(document)

//NOTE SELECT THE ELEMENT ;
//NOTE document.getElementById ;
const heading = document.getElementById('heading') ;
console.log(heading);
console.dir(heading)

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

//NOTE document.querySelectorAll
