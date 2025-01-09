//Asynchrounous programming in JS:
//note: async>>promise chains>> callback hell
//synchronous: the code runs in a particular sequence of instructions given in the program(linearly).Each instruction waits for the previous ones to complete its execution
//Asynchronous: Due to synchronous programming, sometimes imp instructions get blocked due to some previous instructions, 
// which causes a delay in the UI.Async code execution allows to execute next instructions immediately and doesn't block the flow
//in short: when some set of data is facing delay in fetching the required data then the successive line codes do not get affect of this delay(they execute instantly without relying upon delayed instructions)
function hello(){
    console.log('hello');
}
setTimeout(hello,2000); //timeout of 4sec(4000ms) i.e after 4 sec the function will get invoked
console.log('after timeout statement but will get print before that!');  //asynchronous programming
setTimeout(()=>{  //using arrow function
    console.log('this is my javascript code!');
},2000);
//callback:
function calculator(a,b,sum){  //sum here is a callback function(func being passed in another func as an arguement)
    sum(a,b);
}
calculator(1,2,(a,b)=>{
    console.log("sum is:",a+b);
})
// callback hell: nested callbacks stacked below one another forming a pyramid strcuture.(pyramide of doom)
// this style of programming becomes difficult to understand and manage
function getData(dataId, getNextData){   //getNextData is a callback function
    setTimeout(()=>{
        console.log('Data: ',dataId);
        if(getNextData){
            getNextData();
        }
    },2000);
}
getData('sangya@123',()=>{   //callback hell: not a good programming technique
    console.log('getting data2...');
    getData('sam@1324',()=>{
        console.log('getting data3...');
        getData('kunal@0225',()=>{
            console.log('getting data4...');
            getData('aashi@123');
        });
    });
});
//when we need delay in each output so that no data is returned one together we use callback function
//Promises are used to overcome the complexity and problm of callback hell
//Promises: it is for 'eventual' completion of task.It is an object in JS
let promise=new Promise((resolve,reject)=>{
    console.log("I'm a promise");
    //resolve('Your order has been delivered!');
    reject('Sorry! Unable to deliver!');  //error msg will get displayed
})
console.log(promise);
//resolve: promise is successfully fullfiiled
//reject: promise is not fullfilled
//promise has 3 states: 'Pending' , 'fullfilled', 'Rejcted'
function getData(dataId, getNextData){   //getNextData is a callback function
    //let say our API is fetching our data and is promising us that it will fetch the data in 5 secs
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Data: ',dataId);
            resolve('Successfully fetched!');
            if(getNextData){
                getNextData();
            }
        },5000);
    });
}
getData('12345@_');
function getPromise(){
    return new Promise((resolve, reject)=>{
        console.log('this is a promise function!');
        resolve('success!');
        //reject('cancelled due to technical error!');
    });
};
let new_promise=getPromise();
new_promise.then((res)=>{  //in case of promise is resolved
    console.log("Promise fulfilled!",res);
})
new_promise.catch((err)=>{  //in case promise is rejceted
    console.log('Error occured! Promise is not fulfilled',err);
})
//promise chain:
function asyn_data1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('data 1');   //data printed
            resolve('success!,fetched the data 1');
        },2000);
    });
}
console.log('fetching data');
let promise_ret=asyn_data1();
promise_ret.then((res)=>{
    console.log(res);
    console.log('fetching another data ');   //to fetch the another data after one another
    let prom=asyn_data2();  //promise chain( one after another)
    prom.then((res)=>{
    console.log(res);
})
})
function asyn_data2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{  
            console.log('data 2');
            resolve('success!,fetched the data 2');
        },2000);
    });
}
//solving the same function using promise chain instead of callback hell
function getData(dataId){  
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Data: ',dataId);
            resolve('success');
        },2000);
    })
}
getData('data1').then((res)=>{
    getData('data2').then((res)=>{
        getData('data3').then((res)=>{
            console.log(res);
        })
    })
})
//Async-Await: async func returns a promise(implicitly), await pauses the execution of its surrounding async function until the promise is settled
async function my_func() {
    console.log("Async function");
}
console.log(my_func());  //returns the promise

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('weather data!');
            resolve(200);
        },2000);
    });
}
//await is always used in async functions 
async function getWeatherData(){
    await api();  //call 1
    await api();   //call 2//this will execute after the 1st call is made
}
getWeatherData();
//solving the same function but now using await async(instead of callback hell and promise chains)
function getData(dataId){  
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Data: ',dataId);
            resolve('success');
        },2000);
    })
}
(async function() {
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
})(); 
//to get rid of this explicit function calling of async function we can use IIFE (since awaits cannot be called directly):
//IIFE: Immediately Invoked Function Expression, it is a function that is called immediately as soon as it is defined no need to call explicitly
(async ()=>{  //doesn't require any name to define
    setTimeout(()=>{
        console.log("calling the functions directly without invoking explicitely");
    },10000);
})();
//IIFE are functions which are meant to be called immediately they can be used once only since they don't have any name so canot be called again

