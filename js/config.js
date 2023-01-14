let _url=`http://localhost:3000`;
let token=localStorage.getItem('token');
let id=localStorage.getItem('userId');
let userName=localStorage.getItem('myname');
//編輯使用者圖像
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

