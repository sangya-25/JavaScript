
//DOM: Document object Model, when a web page is loaded, the browser creates a DOM of the pg which is basically an object having all the tags of html and css and their properties further classified in 'head' and 'body' tags
//window object: it represents an open window in a browser. It is browser's object (not javaScript's) and it is automatically created by browser
//It is a global object with lots of properties and methods(all)
//to print or display properties of object: console.dir(window.document)
//console.dir(document.body);   //to access the body tag of html 
//thus through java script we can access html code without linking any files
console.dir(document.body);
document.body.style.background='PINK';  //this statement will dominate css styling content
//this is used to dynamically change the page during run time using DOM without doing any changes in the html, css files
//DOM MANIPULATION:  There are three ways to access elements from page
//Selecting with Id:
let heading=document.getElementById("heading");   //h1 tag
console.dir(heading);
let button=document.getElementById("button");
console.dir(button);
let div1=document.getElementById('first_div');
console.dir(div1);
//id's of every element must be unique
//Selecting by Class:  using class we can access elements of html(more than one element can have same class)
//elements under same class will get same styling(css)
let div=document.getElementsByClassName("sec_div");
console.dir(div);
//Selecting with TAGS:
let para=document.getElementsByTagName('p');
console.dir(para);

//query selector: it is use to access the first occurence of the element by any of the above three methods
let elements=document.querySelector("p");  //accessing through tag here
console.dir(elements);
//to select all the elements under the same tag or class then we can use querry Selector all:
let all_elements=document.querySelectorAll(".sec_div");   //accessing through class name starting with .
console.dir(all_elements);

//Properties:
console.dir(elements.tagName);   //to get the tag name of the single element
console.dir(button.tagName);

//note: (parent)body--->(child)[div and script] ---->(siblings)[img, div, h1, p]   DOM TREE
//Firstchild node and last childNOde returns the first and last node of the parent in the tree respectively
//represents as: div.children[0] and div.children[n-1], where n is the total no. of children
console.dir(document.body.firstChild);   //this the child of body
console.dir(document.body.lastChild);
console.dir(button.innerText);    //to return the text content under the element 
console.dir(div1.innerText);   //to return all the text content under the id first_div including children text as well
//for the children of div:
let child=document.querySelector('div').children; //all the children of div parent
console.dir(child);
//innerHTML: returns the plain text or HTML content of elements
console.dir(div1.innerHTML);   //it also returns the text content but along with the html content(tags)
heading.innerText='Changing the previous text!';
console.dir(heading.innerText);  //this will get updated
//TEXT CONTENT: returns the textual content even for the hidden elements
console.dir(div1.innerText); //it will not display the hidden elements
console.dir(div1.textContent); //it will also like 'innertext' property but it will display hidden text as well
let new_tag=document.querySelector('h2');
console.dir(new_tag.innerText);
new_tag.innerText=new_tag.innerText+' from apna collage';  //to append text into existing element(concatenate)
console.dir(new_tag.innerText);
let box=document.getElementsByClassName('box'); //accessing div through class name
console.dir(box[0].innerText);   //to access elements under same class tag
for(b of box){   //using loop(alternative)
    console.dir(b.innerText);
}

//LECTURE 7: DOM(PART-2): DOM Manipulation
//attributes:
//get attribute:
let div_node=document.querySelector('#log');
console.dir(div_node);
let id_div=div_node.getAttribute("id");    //a get attribute to access the ['id','class','name','style',etc] of the element
console.dir(id_div);
let cl=document.querySelector('.para_cl');
console.dir(cl.getAttribute('class')); //to return the class attribute the element

//set attribute:  to set a new name to the attributes of elements
cl.setAttribute('class','new_class');  
console.dir(cl.getAttribute('class'));  //updated class attribute name

//style attribute: to change or return style attribute name or property directly through java script
let div_cl=document.querySelector('.div_class');
console.log(div_cl);
div_cl.style.background='magenta';
//Insert Elements:
//for creating new element: let el=document.createElement('div')
//node.append(el): add at the end of  node(inside)
first_div.style.background='yellow';
let new_btn=document.createElement("button");
let btn2=document.createElement("button");
let btn3=document.createElement("button");
let btn4=document.createElement("button");
btn4.innerText="Start downloading";
btn3.innerText='click here to go here';
new_btn.innerText='Click here to download';
btn2.innerText='click me';
console.log(new_btn);
//to append this button inside another element at the end using node.append(el)
first_div.append(new_btn);
//to insert/append this at the beginning:
first_div.prepend(btn2);
//to append it before the node:
first_div.before(btn3);
//to append it after the node:
first_div.after(btn4);
//to append new text just on the top of the body:
let new_text=document.createElement('h1');
new_text.innerHTML='<i>Java Script Basics</i>';   //itallic font
document.querySelector('body').prepend(new_text);

//to remove or delete node/element:
btn4.remove();
let class_new=document.querySelector('.pTag');
//class_new.setAttribute('class','p2Tag');  //this will truncate the previous css styling and will apply new styling (overwrite)
//thus to append the class into an existing one we use class list
console.log(class_new.classList);
class_new.classList.add('p2Tag');  //will update the class list
console.log(class_new.classList);







