const previousBtns=document.querySelectorAll('.Previous-Btn');
const nextBtn=document.querySelectorAll('.Next-Btn');
const progress=document.getElementById('progress');
const formSteps=document.querySelectorAll(".form-step");
const progressbarStep=document.querySelectorAll('.progressbar-step');
let Num=0
//下一步按鈕
nextBtn.forEach(btn=>{
    btn.addEventListener('click',function(e){
        e.preventDefault();
        Num++;
        if(Num>2){
            return
        }
        updatenextBtn();
        progressbarStepbar();
    })
})
function updatenextBtn(){
    formSteps.forEach(item=>{
        if(item.classList.contains("form-step-active")){
            item.classList.remove("form-step-active")
        }
    })
    formSteps[Num].classList.add('form-step-active')
 }
//上一步按鈕
previousBtns.forEach(btn=>{
    btn.addEventListener('click',function(e){
        e.preventDefault();
        Num--;
        updateprevious();
        progressbarStepbar();
    })
})
function updateprevious(){
    formSteps.forEach(item=>{
        if(item.classList.contains("form-step-active")){
            item.classList.remove("form-step-active");
        }
    })
    formSteps[Num].classList.add('form-step-active');
 }
 //進度條
 function progressbarStepbar(){
    progressbarStep.forEach((item,index)=>{
          if(index< Num + 1){
             item.classList.add('progressbar-step-active')
          }else{
             item.classList.remove('progressbar-step-active')
          }
    });
    const progressMove=document.querySelectorAll('.progressbar-step-active');
    progress.style.width =((progressMove.length - 1) / (progressbarStep.length - 1)) * 100 + '%'
    console.log(progress)
}
//送出訂單
const sendOut=document.querySelector('.sendout-Btn');
sendOut.addEventListener('click',e=>{
        e.preventDefault();
        const customerMail=document.querySelector('.customerMail').value;
        const customerWeight=document.querySelector('.customerWeight').value;
        const customerItems=document.querySelector('.customerItems').value;
        const customerPhone=document.querySelector('.customerPhone').value;
        const recipientName=document.querySelector('.recipientName').value;
        const recipientPhone=document.querySelector('.recipientPhone').value;
        const recipientMail=document.querySelector('.recipientMail').value;
        const deliveryDate=document.querySelector('.deliveryDate').value;
        const deliveryTime=document.querySelector('.deliveryTime').value;
        const pickupArea=document.getElementById('pickupArea').value;
        const pickupAddres=document.querySelector('.pickupAddres').value;
        const sendArea=document.getElementById('sendArea').value;
        const sendAddres=document.querySelector('.sendAddres').value;
        if(customerMail===''||customerWeight===''||customerItems===''||customerPhone===''||
           recipientName===''||recipientPhone===''||recipientMail===''||deliveryDate===''||
           deliveryTime===''||pickupArea===''||pickupAddres===''||sendArea===''||sendAddres==='' ){
            alert('資訊不完整請重新輸入');
            return;
        }
         axios.post(`${_url}/600/shops`,{
            "userId":id,
            "demand":"出貨",
            "customerName":userName,
            "customerMail":customerMail,
            "customerWeight":customerWeight,
            "customerPhone":customerPhone,
            "customerItems":customerItems,
            "recipientName":recipientName,
            "recipientPhone":recipientPhone,
            "recipientMail":recipientMail,
            "deliveryDate":deliveryDate,
            "deliveryTime":deliveryTime,
            "pickupArea":pickupArea,
            "pickupAddres":pickupAddres,
            "sendArea":sendArea,
            "sendAddres":sendAddres
         },{
            headers: {
              'Content-Type':'application/json',
              'Authorization': 'Bearer '+token  
               }

         })
         .then(res=>{
            window.location.replace('http://127.0.0.1:5501/afterlogin.html');
         })
})
//驗證表單
const inputs=document.querySelectorAll('input[name],select[name]');
const form=document.querySelector('.order');
const constraints={
        "連絡電話":{
            presence: {
            message: "是必填欄位"
            },
            length: {
            minimum: 8,
            message: "需超過 8 碼"
            }
       },
       "信箱":{
            presence: {
            message: "是必填欄位"
            },
            email: {
            message: "格式錯誤"
            }
       },
       "重量":{
            presence: {
            message: "是必填欄位"
            },
            format: {
               pattern: "[kg 0-9]+", 
               message: "格式錯誤",
             }
       },
       "內裝物品":{
            presence: {
            message: "是必填欄位"
            },
       },
       "收件人名稱":{
           presence: {
           message: "是必填欄位"
           },
       },
       "收件人電話":{
          presence: {
          message: "是必填欄位"
          },
          length: {
          minimum: 8,
          message: "需超過 8 碼"
         },
       },
       "收件人email":{
          presence: {
          message: "是必填欄位"
        },
          email: {
          message: "格式錯誤"
         }
       },
       "日期":{
          presence: {
          message: "是必填欄位"
          },
       },
       "時間":{
          presence: {
          message: "是必填欄位"
          },
       },
       "取貨地區":{
         presence: {
          message: "是必填欄位"
          },
        
       },
       "取貨地址":{
          presence: {
          message: "是必填欄位"
          },
       },
       "送達地區":{
          presence: {
          message: "是必填欄位"
          }, 
       },
       "送達地址":{
          presence: {
          message: "是必填欄位"
          },
       }
       
}      
inputs.forEach(item=>{
         item.addEventListener('change',function(){
             item.nextElementSibling.textContent= "";
             let errors=validate(form, constraints);
             if(errors){
                Object.keys(errors).forEach(keys=>{
                    document.querySelector(`[data-message="${keys}"]`).textContent = errors[keys];
                })
             }
         })
})
 