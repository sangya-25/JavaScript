//*Lecture 1*//
alert('js');
//basic of JavaScript:
console.log("hello world!");   //to print message or content
console.log("My first js code!");

//variables in js: These are containers for data
full_name="sangya ojha";
console.log(full_name);
age=19;
console.log(age);
designation="Btech aspirant";
console.log(designation);
//x=null;   //to assign a null/empty value to the variable(not decided yet)
//y=undefined;   //to be assigned later (type not defined)
is_student=true;  //boolean type data
console.log(is_student);
//note: js is "dynamically typed language" in which we don't have to specify the data type of the variable while declaring it (runtime interpretation)'
//variables can only contain letters, digits, underscore, and $ and it is case sensitive

//types of variables : let, const, var
/*var: variable can be re-declared and updated (global variable)
let: variable cannot be re-declared but can be updated (block variable i.e variable is created in a block)
const: variables cannot be re-declared or updated (block space)*/
{
    let name='sangya';
    console.log(name);
    //let name='aashi';  is not valid (re-declared) within the same block
}
{
    let name='aashi'; //is valid in a new block
    console.log(name);
}
var name_2='ojha';
console.log(name_2);
const x=25;
//x=24; is not possible(error);


//DATA TYPES in JS: Number, String(text), Boolean, Undefined, Null, Bigint, Symbol
//Primitive and Non-primitive data types 
console.log(typeof name_2);   //to get the type of the variable (here number)
let y= BigInt('1234557');  //'BigInt' type
let z= Symbol('Hello Js!'); //'symbol' type data
//Objects: Collection Of key-value pair (eg: Information of Student such as name, Id, Marks, Age...)
const Student = {
    stud_name:"Rahul",
    age:20,
    marks: 90.8,
    ispass: true
}   //object student 
//to access value of the key:
console.log(Student.age);
console.log(Student['age']);
//to modify the value:
Student['age']=Student['age']+1;
Student['stud_name']='Sangya';
//note: object of constant data type, their keys can be updated
//product object:
const product={
    pen_name: 'Parker Jotter Standard CT Ball Pen (Black)',
    rating: 4,
    price: "Rs 270",
    MRP: "Rs 285",
    deal: "5% off",
    isdeal: true
}

//lecture 2: Operators and conditional statements
//Arithmetic operators: +, -, %(division), *, ++, --, /(modulus), **(exponential)
//assignment operators: =,+=,-=,*=, %=, **=
/*comparison operators: ==(equal to), !=(not equal to), <=, >=, > (irrespective of the data type) 
===(equal to & type) it is use to compare data of same data type only unlike == , and !==(not equal & type)*/
//logical operators: &&(logical AND), ||(logical OR), !(logical NOT)
//ternary operators: requires 3 operands  ----> "condition? true: false" 
let a=34;
let b=25;
let c=a+b;
console.log("a+b =",c);
console.log("a*b =",a*b);
console.log("a/b =",a/b);
console.log("a%b =",a%b);
console.log("a**b=",a**b);  //exponent
console.log("a++=",a++);  //increment (unary operato)
console.log("a--=",a--);  //decrement (unary operator)
//CONDITIONAL STATEMENTS: to implement some condition
//if statement:
let color;
let mode='dark'
if(mode==='dark'){
    color='black';   //it will execute only when the above if condition is satified
}
//else statement:
let old=19;
if (old>=18){
    console.log("You can vote");
}
else{
    console.log("You cannot vote");   //this will execute only if the above b=
}
//else-if statement: to check for more than 2 conditions
let num=7;
if(num>0){
    console.log("Number is greater than 0!");
}
else if(num<0){
    console.log("Number is less than 0!");
}
else{
    console.log("Number is 0");
}
//ternary operator:
let ag=25;
console.log(ag>=18?"adult":"minor");
//switch statement: it will check each cases one by one and contains a break statement to terminate the case and get out of the loop
const exp='apples';
switch(exp){
    case 'papaya':
        console.log("Papayas are Rs 120/kg!");
        break;
    case 'Mango':
        console.log("Mangoes are Rs 200/kg!");
        break;
    case 'orange':
        console.log("Oranges are Rs 160/Kg!");
        break;
    default:   //executes only if above cases are not matched
        console.log("Sorry we are out of",exp);
}
//prompt input:
let user=prompt('enter number: ');  //it is use to take input from the user which can be stored in any variable!
if(user%5==0){
    console.log("Divisible by 5!");
}
else{
    console.log("Not divisible by 5!");
}
let marks_st=prompt('enter your marks=');
if(marks_st>=90 && marks_st<=100){
    console.log("Grade: A");
}else if(marks_st>=70 && marks_st<=89){
    console.log("Grade: B");
}else if(marks_st>=60 && marks_st<=69){
    console.log("Grade: c");
}else{
    console.log('Grade: Fail!');
}

//LECTURE 3: Loops and String
//for loop
let count=10;
for(var i=0;i<count;i++){
    console.log(i);
}
//console.log(i);  //is not possible since i is declared locally in the for loop
console.log(i); //in case of var is possible since var declare the variable globally

//while loop:
let j=0;
while(j<=10){   //stoping condition
    console.log(j);
    j++;
}
//do while loop:
let k=20;
do{
    console.log("Apna collage!");   //atleast once the statement inside the do block will execute even if the while condition is not satisfied!
}while(k<=10);

//for of loop: it use to traverse each element of an array or a string
const strVar='Sangya Ojha';
for(let val of strVar){  
    console.log(val);
}
let size=0;
var str='coding';
for(let i of str){
    console.log(i);
    size++;   //to get the lenght of the string
}
console.log("Size of the give string is: ",size);

//for in loop: used in objects mainly or array
let obj={
    obj_name:'Sangya Ojha',
    obj_age:20,
    obj_bg:'O+',
    obj_cgpa: 9.6
}
for(let k in obj){
    console.log("Key:",k,",value:",obj[k]);
}
//practice ques: to guess the correct random number!
let rand_no=56;
let search=prompt("Guess the number!");
while(search!=rand_no){
    console.log('wrong!');
    search=prompt("Guess the number!");
}
console.log('Guessed the correct number!');

//STRING: it is a sequence of char used to represent text (IMMUTABLE DATA TYPE)
let str2='Apna Collage';
str2.length; //to fing the length of the string
str2[0]; //to get the element at the particular index
let spec_str=`this is also a string!`;
console.log(`the given string str2 lenght is: ${str2.length}`);  //template literals
console.log('sangya \n ojha'); //where \n is an escape character use to go to the next line
console.log('Apna\tCollage!'); //\t is a tab character use to add white spaces
//String methods: they don't modify the original string rather they create a new string
str2.toUpperCase();
str2.toLowerCase();
str2.trim(); //to remove whitespaces from front and rear end only
//to apply changes in actual string
str2=str2.toUpperCase();
console.log(str2);
console.log(str2.slice(4,));   //it will slice the given string here, starting from index 4 upto end index (when end index is not provided)
console.log(str2.concat(str));   //concatenates str with str2(append at the end)
console.log(str2.replace('Apna','APNA'));   //it will replace the very first occurence of the element/substring from the string
console.log(str2.replaceAll('a','A'));  //it will replace all the occurenec of  the text from the string 
console.log(str2.charAt(5));   //it is used to find the character at the particular index which is same as 'str2[5]'
console.log(str2[5]);

//problem: to generate a username for the user
let user_name=prompt('Enter your full name!');
console.log('Your username is: ');
console.log('@'+user_name+user_name.length);

//LECTURE 4:
//Array: collection of items,to store information
let arr=['Sangya',25,'Delhi']; //to store info of a student
let arr2=[78,89,34,67,90]; //marks of students
console.log(arr2);
console.log(arr2.length);   //array property
//array is an object type
arr2[5]; //array indexing
//array out of index will return undefined
arr2[3]=66;  //to chnge the element at that index
console.log(arr2);
//looping over an array:  to iterate over every element of the array
let heroes=['iron_man','batman','thor','hulk','spider_man','Mr_American'];
for(var i of heroes){  
    console.log(i.toUpperCase());
}
for(let j=0;j<heroes.length;j++){   //this will also work similar as of above
    console.log(heroes[j]);
}
//to print the average marks of the 
for(let i of arr2){
    var avg_marks=0;
    avg_marks=avg_marks+i;
}
console.log(avg_marks);
var avg=avg_marks/(arr2.length);
console.log(avg);
//array methods:
//push(): add to end
//pop(): delete from end and return
//toString(): converts array to string
let fooditems=['potato','onion','tomato','brinjal','carrot'];
fooditems.push('litchi','mango');  //will get pushed into the end
console.log(fooditems);
fooditems.pop();  //will delete the last element
console.log(fooditems);
console.log(fooditems.toString());  //will create a new string same as of array
let new_arr=['pink','yellow','black','orange'];
console.log(fooditems.concat(new_arr));  //to concatenate two or more arrays (creates a new array, don't change the original array)
//unshift(): add to start (similar to push)
fooditems.unshift(new_arr);
console.log(fooditems);
//shift(): to delete the first element from the array unlike pop method used to dlt the last element
let val=fooditems.shift();
console.log('deleted: ',val);
//slice(): returns a piece of the array, slice(startidx, endIdx)
console.log(heroes.slice(0,3));   //index 3 is excluded
//splice(): change original array (add, remove, replace)
heroes.splice(4,2,'captain American','thenox');  //from index 4, 2 elements i.e heroes[4],heroes[5] will get replaced by new element
console.log(heroes);
fooditems.splice(0,2,'kiwi','papaya');
console.log(fooditems);
//we can delete elements as well using splice:
heroes.splice(2,1);   //it will remove heroes[2]
console.log(heroes);
//problem ques;
let companies=['bloomberg','microsoft','uber','google','IBM','Netflix'];
companies.splice(0,1);
companies.splice(1,1,'Ola');
companies.push('Amazon');
console.log(companies);


//LECTURE 5: Functions and Methods
//function definition: 
function my_first(){
    console.log("Welcome to apna collage");
    console.log("We are learning Js");
}
my_first();   //function calling

//arrow function:
const sum=(a,b)=>{
    console.log('sum:',a+b);
}
sum(3,5);
function count_v(str){
    var count_vowel=0;
    str=str.toLowerCase();
    for(let i of str){
        if(i=='a'||i=='e'||i=="o"||i=="i"||i=="u"){
            count_vowel+=1;
        }
    }
    console.log("No. of Vowels in the given string is:",count_vowel);
}
count_v('Apna Collage');

//METHODS IN ARRAYS: 
//forEach loop in Arrays: (methods: it is a function only but it is associated with a data structure here Array)
//In JS, a function can be passed as an arguement into a another funtion, known as Callback
/*arr.forEach((val,idx,arr)=>{         //here val is a callback function
    console.log(val);
})*/
//forEach will execute for each element of an array as a loop and will be operated in functions
let array=[12,14,16,18];
array.forEach(function print(val,idx){
    console.log(val,idx);
})
//higher order fucntion(HOF): a fucntion which either takes another function as an arguement or returns another fucntion
//problem ques:
var number=[1,2,3,4,5,6];
number.forEach(function square(val){
    console.log(val*val);
})//need not to call the function
//Map: creates a new array with the results of some operations. The value is callback returns are used to form new array
//arr.map(callback(val,ind,arr){})
let newArr=array.map((val)=>{
    return val*val;
})
console.log(newArr);
//filter method: creates a new array of elements that give true for a condition/filter
let new_num=number.filter((val)=>{
    return val%2===0;
})
console.log(new_num);
//reduce: performs some operations and reduces the array to a single value.It returns that single value
const array1=[1,2,3,4,5];
let ans=array1.reduce((res,curr)=>{
    return res+curr;    //here (res = previous value, and curr = current value); initially res=arr[0] and curr=arr[1];
}); 
console.log(ans);
//factorail:
let fact=array1.reduce((res,curr)=>{
    return res*curr;
})
console.log(fact);
//problem questions;
let arr_marks=[45,67,89,92,97,35,96,42,23,93,92,12];
let output=arr_marks.filter((val)=>{
    return val>90;
})
console.log(output);  //new array consisting marks greater than 90

let n=prompt('enter the number n:');
var ans_arr=[];
for(let i=1;i<=n;i++){
    ans_arr[i-1]=i;
}
console.log(ans_arr);
let sum_arr=ans_arr.reduce((prev, curr)=>{
    return prev+curr;
})
console.log(sum_arr);

//Till lecture 5 of Java Script