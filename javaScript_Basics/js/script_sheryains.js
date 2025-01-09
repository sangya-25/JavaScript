alert("hello");  //to display alert message 

var arr= [1,2,3,4];   //to create an array of multiple data type (int, dict, nested array, function, bool type...)
//forEach
arr.forEach(function(val){    //to traverse each elements of an array one by one like a for loop
    console.log(val + " hello");
})

//map
var arr2 = arr.map(function(val){ //array map is used to create a new blank array of same size as of original array
    return val+1;
})
console.log(arr2);

//filter: creating new array just like a map but will filter some elements (based on condition) from original array into new array
var arr3 =arr.filter(function(val){
    if(val > 0) {return true;} //if true then that element will get add into the new array else not
    else return false;
})
console.log(arr3);

//find: use to find the first occurence of an element from the original array itself
var ans= arr.find(function(val){
    if(val==2){    //if condition satisfied then the value will get returned else returns undefined
        return val;
    }
})
console.log(ans);

//indexOf: ise to return the index of the element from the array 
var ans1=arr.indexOf(3);
console.log(ans1);


//objects: it is a key value pair in js enclosed in curly braces
var obj= {
    name: 'sangya',
    Id: 43,
    surname: 'ojha'
}
//to access value of the object, we use key: (2 ways are there)
console.log(obj.name);
console.log(obj['name']);
//to modify the value of the key :
obj.surname='sharma';
console.log(obj);
//to freeze the content of an object:
Object.freeze(obj);
obj.name='kunal';
console.log(obj); //will not get modify due to freeze statement

//to get the length of the function: it returns the no of parameter a function have
function abs(){}  //function with 0 parameters
console.log(abs.length);   //here length=0
function abc(a,b,c){
}
console.log(abc.length);   //here lenght=3 
//returning a function!
function abcd(){
    return 'function is successfully returned!';
}
var ans2 = abcd();
console.log(ans2);

// async javascript; code which do not run line by line basically a async code is send into the side stack
// and then running the sync code from the ma
// 
// in stack. Once the main stack is empty then run the async code by taking it into the main stack   
async function bcd() {
    var blob = await fetch('https://randomuser.me/api/');
    var ret= await blob.json();
    console.log(ret);
}
bcd();  //note: here fetch is asynchronous which will move into the side stack and the remainding line codes will execute sequenatially in the main stack