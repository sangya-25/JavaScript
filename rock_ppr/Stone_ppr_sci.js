//winning condition: 
//background: linear-gradient(to right, black, rgb(24, 105, 104));
/*rock-paper: paper wins
rock-scissor: rock wins
paper-scissor: scissor wins
*/
//computer vs user game:
let user_score=0;
let user_sc=document.querySelector('#user_score');
let comp_score=0;
let comp_sc=document.querySelector('#comp_score');
let rock=document.querySelector('#rock');
//to generate user's choice:
let choice=document.querySelectorAll('.choice');  //all the  possible choices
choice.forEach((ch)=>{
    ch.addEventListener('click',()=>{
        const user_choice=ch.getAttribute("id");
        win(user_choice);   //calling function to decide who wins!
    })
})

//chck winning condition:
let msg=document.querySelector('#msg');
const win=(user_choice)=>{
    //to generate a random choice of computer:
    let choices=['rock','paper','scissor'];
    let comp_choice=choices[Math.floor(Math.random()*choice.length)];  //floor function to get the discrete number(non decimal number)
    console.log(comp_choice);
    console.log(user_choice);
    if(user_choice==='rock'&&comp_choice==='paper'){
        comp_score++;
        comp_sc.innerText=comp_score;
        msg.style.background='red';
        msg.innerText=`You loose! ${comp_choice} beats ${user_choice}`;
    }else if(user_choice==='scissor'&&comp_choice==='rock'){
        comp_score++;
        comp_sc.innerText=comp_score;
        msg.style.background='red';
        msg.innerText=`You loose! ${comp_choice} beats ${user_choice}`
    }else if(user_choice==='paper'&&comp_choice==='scissor'){
        comp_score++;
        comp_sc.innerText=comp_score;
        msg.style.background='red';
        msg.innerText=`You loose! ${comp_choice} beats ${user_choice}`;
    }else if(user_choice===comp_choice){
        msg.style.background='rgb(114, 116, 110)';
        msg.innerText='Its a Draw!';
    }
    else{
        user_score++;
        user_sc.innerText=user_score;
        msg.style.background='green';
        msg.innerText='User Wins!';
    }
}