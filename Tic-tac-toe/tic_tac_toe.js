//winning patters: (8 patterns)                                    ___|____|____
//horizontal orientation: (0-1-2), (3-4-5), (6-7-8)                ___|____|____  
//vertical orientatino: (0-3-6),(1-4-7),(2-5-8)                       |    |         
//diagonal orientation: (0-4-8),(2-4-6)    
var btn=document.querySelectorAll('.box'); 
let reset_btn=document.querySelector('.reset');
let new_game=document.querySelector('.restart');
let msg_container=document.querySelector('.message-cont');
let msg=document.querySelector('#msg');
let turnO=true;  //when true: player O and when false: player X
const patterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]; //all possible winning condition/patterns
var count=0;
btn.forEach((box)=>{   //for each of the 9 buttons(boxes)
    box.addEventListener('click',()=>{  //alternative chances of 'X'and 'O'
        if(turnO){   //player O's turn 
            box.classList.add("colorO");
            box.innerText='O';
            turnO=false;
        }else{       //player X's turn
            box.classList.remove("colorO");
            box.innerText='X';
            turnO=true;
        }
        box.disabled=true;
        count++;
        let winner=chck_winner();
        //condition for draw:
        if(count==9 && !winner){
            msg.innerText="It's a Draw!";
            msg_container.classList.remove('hide');
            disable_btn();
        }
    });
})
const disable_btn=()=>{   //to disable all the buttons after the winner is shown
    for(let box of btn){
        box.disabled=true;
    }
} 
const enable_btn=()=>{    //to enable the buttons again when the game restarts
    for(let box of btn){
        box.disabled=false; 
        box.innerText=""; //empty
    }
}
//a function to display the winner and message content
const show_winner=(winner)=>{
    msg.innerText= `congratulation! Winner is ${winner}`;
    msg_container.classList.remove('hide');   //to show the hidden message!
}
//stoping condition:
const chck_winner=()=>{
    for(let pattern of patterns){
        let pos1=btn[pattern[0]].innerText;
        let pos2=btn[pattern[1]].innerText;
        let pos3=btn[pattern[2]].innerText;
        if(pos1!=="" && pos2!=="" && pos3!==""){  //boxes shouldn't be empty in order to declare the winner
            if(pos1==pos2 && pos2==pos3){
                disable_btn();
                show_winner(pos1);
                return true;
            }
        }
    }
};
//to reset the boxes to empty text:
const reset_gm=()=>{
    turnO=true;
    enable_btn();  
    msg_container.classList.add('hide');
}
reset_btn.addEventListener('click',reset_gm);
new_game.addEventListener('click',reset_gm);


