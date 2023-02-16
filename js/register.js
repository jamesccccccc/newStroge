         //註冊功能
         let registerBtn=document.querySelector('.register');
         registerBtn.addEventListener('click',function(e){
              const myName=document.querySelector('.form-name').value;
              const myMail=document.querySelector('.form-email').value;
              const myPassword=document.querySelector('.form-password').value;
              if(document.querySelector('.form-name').value==""||
                 document.querySelector('.form-email').value==""||
                 document.querySelector('.form-password').value=="")
                {
                 alert('請輸入會員資料');
                 return;
                }
                //驗證註冊
                singup(myName,myMail,myPassword)
         })
         function singup(myName,myMail,myPassword){
              axios.post(`${_url}/signup`,{
                 "myname":myName,
                 "email":myMail,
                 "password":myPassword
              })
              .then(res=>{
                  console.log(res);
                  window.location.replace('https://jamesccccccc.github.io/newStroge/login.html');
              })
              .catch(err=>{
                  console.log(err)
                  if(err.response.data === "Email already exists"){
                    document.querySelector(`[data-message=Email]`).textContent=`此信箱已經有人使用過了`
                    return;
                  }
                  if(err.response.data === "Email format is invalid"){
                    document.querySelector(`[data-message=Email]`).textContent=`無效的電子信箱`
                    return;
                  }
              })
         }
         //驗證註冊 
         function verifyRegister(){
            const myName=document.querySelector('.form-name');
            myName.addEventListener("blur",e=>{
            if(validateName(myName.value)==false){
              document.querySelector(`[data-message=Name]`).textContent=`請輸入英文姓名`
              return;
            }else{
              document.querySelector(`[data-message=Name]`).textContent=""
            }
            })
            //驗證信箱
            const myMail=document.querySelector('.form-email');
            myMail.addEventListener("blur",e=>{
                if(validateEmail(myMail.value)==false){
                  document.querySelector(`[data-message=Email]`).textContent=`請輸入正確的電子信箱`
                  return;
                }else{
                  document.querySelector(`[data-message=Email]`).textContent=""
                }
            })
            //驗證密碼
            const myPassword=document.querySelector('.form-password');
            myPassword.addEventListener("blur",e=>{
              if(validatePassword(myPassword.value)==false){
                  document.querySelector(`[data-message=Password]`).textContent=`密碼至少包含字母,數字,至少8~12位`
                  return;
                }else{
                  document.querySelector(`[data-message=Password]`).textContent=""
                }
            })
          
         }   
         //名稱規則
         function validateName(name){
            const regexName=/^(?=.*[a-z])/;
            if(regexName.test(name)){
              return true
            }
              return false
          }
         //信箱規則
         function validateEmail(mail){
            const regexMail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            if (regexMail.test(mail)){
                return true
            }         
                return false
          }
         //密碼規則
         function validatePassword(password){
          const regexPassword=/^(?=.*[a-z])(?=.*\d)[a-z\d]{8,12}$/
          if(regexPassword.test(password)){
               return true
          }
               return false
         }
         verifyRegister();