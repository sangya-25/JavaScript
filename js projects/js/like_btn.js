let container=document.querySelector(".container");
let like=document.querySelector("#heart");
let red_btn=document.querySelector(".heart_btn i");
var count=0;
container.addEventListener("dblclick",function(){
    like.style.transform="translate(-50%,-50%) scale(1)";
    setTimeout(function(){
        like.style.transform="translate(-50%,-50%) scale(0)";
    },1000);
    red_btn.style.color="red";
    count=1;
})
red_btn.addEventListener("click",function(){
    if(count==1){
        red_btn.style.color="rgb(213, 196, 196)";
        count=0;
    }else{
        red_btn.style.color="red";
        count=1;
    }
})
