//EVENTS: the change in the 'state of an object' is known as an event
//Event are fired to notify code of "interesting changes" that may affect code execution
//eg: forms event(submit), mouse event(scroll, click, double click), etc
//inline event handling: inside html tag only handling events, such as mouseover, onclick, ondblclick
let btn=document.querySelector('#btn1');
btn.onclick=()=>{
    console.log('button was clicked');
}
let div=document.querySelector('div');
div.onmouseover=()=>{
    console.log('div hovering');
}
//java script code has higher precedence over html inline code
//event object: it's a special object that has details about the event
//all event handlers have access to the event obj's properties and methods.
/*node.event=(e)=>{
    //body
}*/
//where e(variable) can be e.target, e.type, e.clientX, e.clickY
let btn2=document.querySelector('#button2');
btn2.ondblclick=(e)=>{
    console.log(e);  //event object list will get print (collection of all the events)
    console.log(e.type);  //returns the type of the evnt
    console.log(e.target);  //target specify on which part the evnt has been trigerred
    console.log(e.clientX, e.clientY);  //width and height
}
//Event Listeners: throught event listeners we can operate the same event any time(like on click feature can occur more than once doing other function)
//to add a new event 
//node.addEventListener(event, callback)
//to remove an event;
//node.removeEventListener(event, callback), where callback reference should be same to remove the original function
btn2.addEventListener('click',()=>{
    console.log('Event Listener click');
    console.log('can add multiple event handlers!');
})
btn2.addEventListener('click',()=>{
    console.log('Event Listener click - handler 2');
})
const handler3=()=>{
    console.log('Event Listener click - handler-3');
}
btn2.addEventListener('click',handler3);
btn2.addEventListener('click',()=>{
    console.log('Event Listener click - handler-4');
})
//to remove the handler3 event listener:
btn2.removeEventListener('click',handler3);

//to toggle the mode:
let tog_btn=document.querySelector('#toggle');
let curr_mode="light";
tog_btn.addEventListener('click',()=>{
    if(curr_mode=='light'){
        curr_mode='dark';
        document.body.classList.add('dark');
        document.body.classList.remove('light');
    }
    else{
        curr_mode='light';
        document.body.classList.add('light');
        document.body.classList.remove('dark');
    }
})