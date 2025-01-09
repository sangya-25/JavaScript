var elem=document.querySelectorAll(".elem");
elem.forEach((evt)=>{
    evt.addEventListener("mouseenter",function(val){
        evt.childNodes[3].style.opacity=1;
        evt.style.backgroundColor="red"
    })
    evt.addEventListener("mouseleave",function(){
        evt.childNodes[3].style.opacity=0;
        evt.style.backgroundColor="transparent"
    })
    evt.addEventListener("mousemove",function(val){
        evt.childNodes[3].style.left=val.x+"px";
    })
})
