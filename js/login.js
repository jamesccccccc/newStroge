   //記住電子信箱
   const remeberMail=document.querySelector('.login-mail');
   const record=document.querySelector('#record');
   record.addEventListener('change',e=>{
       e.preventDefault();
       if(record.checked){
          localStorage.setItem('email',remeberMail.value);
       }else{
         localStorage.removeItem('email');
       }
   })
   if(localStorage.getItem('email')){
     remeberMail.value=(localStorage.getItem('email'));
     record.checked=true
   } 
   //登入功能
   const login=document.querySelector('.login-btn')
   login.addEventListener('click',function(e){
       e.preventDefault();
       let loginMail=document.querySelector(".login-mail").value
       let loginPassword=document.querySelector(".login-password").value
       if(loginMail===""||loginPassword===""){
           alert('請輸入會員資訊');
           return
       }
       searchName(loginMail);
       memberLogin(loginMail,loginPassword);
   })
   function memberLogin(loginMail,loginPassword){
       axios.post(`${_url}/login`,{
           "email":loginMail,
           "password":loginPassword
       })
       .then(response=>{
           localStorage.setItem('userId',response.data.user.id);
           localStorage.setItem('token',response.data.accessToken);
           window.location.replace('https://jamesccccccc.github.io/newStroge/afterlogin.html');
       })
       .catch(error=>{
           alert('電子郵件和密碼錯誤請重新輸入');
           document.querySelector(".login-mail").value="";
           document.querySelector(".login-password").value="";
           return;
       })

   }
   //取得使用者姓名
   let nameData=[]
   function searchName(loginMail){
       axios.get(`${_url}/users`)
       .then(res=>{
          nameData=res.data
          nameData.forEach(item=>{
             if(item.email==loginMail){
                 localStorage.setItem('myname',item.myname);
             }
          })
       })
       .catch(err=>{
         console.log(err)
       })
   }
   searchName();