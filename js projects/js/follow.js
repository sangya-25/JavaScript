let request=document.querySelector("#msg");
let is_status=document.querySelector('h6');  //stranger 
let remove=document.querySelector('.remove');
let add=document.querySelector('.add');
add.addEventListener("click",function(){
    is_status.innerText="Friends";
    is_status.style.color='green';
    remove.innerText="Unfollow";
    add.innerText="Following";
    request.innerText="Request Accepted!";
    request.style.color="green";
})
remove.addEventListener("click",function(){
    is_status.innerText="Stranger";
    is_status.style.color='red';
    remove.innerText="Remove";
    add.innerText="Add Friend"
    request.innerText="Friend Request!";
    request.style.color="black";
})
