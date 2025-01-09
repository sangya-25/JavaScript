var stories=document.querySelector(".stories");
var arr=[
    {dp: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D", story:"https://plus.unsplash.com/premium_photo-1675433344518-21eb72dfc7a5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8fDB8fHww"},
    {dp: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHx8MHx8fDA%3D", story:"https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fHww"},
    {dp: "https://plus.unsplash.com/premium_photo-1673757121102-0ca51260861f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVsfGVufDB8fDB8fHww", story:"https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW92aWV8ZW58MHx8MHx8fDA%3D"},
    {dp: "https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbnxlbnwwfHwwfHx8MA%3D%3D", story:"https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW92aWV8ZW58MHx8MHx8fDA%3D"},
    {dp: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lbnxlbnwwfHwwfHx8MA%3D%3D", story:"https://images.unsplash.com/photo-1727743013427-3750581d72d6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D"},
    {dp: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JvdXB8ZW58MHx8MHx8fDA%3D", story:"https://images.unsplash.com/photo-1735657061829-fc1b934035f9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D"},
]
var clutter="";
arr.forEach(function(elem,idx){
    clutter+=`<div class="story1">
    <img  id=${idx} src="${elem.dp}" alt="">
    </div>`;

})
stories.innerHTML=clutter;
var full_scrn=document.querySelector(".full_screen");
stories.addEventListener("click",function(evt){
    full_scrn.style.display="block";
    full_scrn.style.backgroundImage=`url(${arr[evt.target.id].story})`;
    setTimeout(function(){
        full_scrn.style.display="none";
    },3000);
    var select=document.querySelectorAll(".story1");
    select.forEach(function(elem,idx){
        elem.addEventListener("click",function(){
            elem.style.border="3px solid gray";
        })
    })
})