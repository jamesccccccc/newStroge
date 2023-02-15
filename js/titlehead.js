//使用者頭像
let userHead=document.querySelector('.navbar-nav>.userHead');
function addUser(){
    let myname=localStorage.getItem('myname');
    let str=''
        str+=`
          <a href="#"><img class="rounded-pill" 
            src="https://ui-avatars.com/api/?name=${myname}&background=random&color=fff"width="32px" height="32px">
          </a>`
          userHead.innerHTML=str;
}
addUser();
 //登出
let logout=document.querySelector('.logout');
logout.addEventListener('click',function(e){
        e.preventDefault();
        localStorage.removeItem('myname');
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        window.location.replace('http://127.0.0.1:5501/index.html');
    })