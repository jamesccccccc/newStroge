const allstars=document.querySelectorAll('.star');
const sendMessage=document.querySelector('.send-message');
let commentData=[];
let starNum=[];
//渲染留言內容
 function init(){
 axios.get(`${_url}/posts`)
   .then(res=>{
         commentData=res.data
         let str=''
         commentData.forEach(item=>{
         let starTatol=item.starNum.join(" ")
         str+=`
         <li class="d-flex my-3"> 
           <a href="#"><img class="rounded-pill"  src="https://ui-avatars.com/api/?name=${item.userName}&background=random&color=fff" width="32px" height="32px">
           </a>
          <div class="d-flex flex-column jsutify-content-start ml-2">
           <div class="comment-star d-flex ms-3">
               <div class="star">${starTatol}</div>
              
           </div>
               <span class="d-block fw-bold  fs-6 ms-3 ">${item.content} </span>
          </div>
    </li>    
         `
       })
       const commentList=document.querySelector(".commentList");
       commentList.innerHTML=str
     })
   .catch(err=>{
        
     })
}
 init();
//留言星星
 allstars.forEach((item,i)=>{
   item.addEventListener('click',function(e){
     allstars.forEach((item,j)=>{
          if(i>=j){
             item.innerHTML='&#9733';
             let star=item.innerHTML='&#9733';
             starNum.push(star);
          }else{
             item.innerHTML="&#9734";         
          }
          
     })
   
   })
})  
//發送留言
 sendMessage.addEventListener('click',function(e){
   e.preventDefault();
   let message=document.querySelector('.user-Message').value;
   axios.post(`${_url}/600/posts`,{
     "content":message,
     "userId":id,
     "userName":userName,
     "starNum":starNum,
     },{
     headers: {
       'Content-Type':'application/json',
       'Authorization': 'Bearer '+token  
       },      
     })
     .then(res=>{
        init();
     })
     .catch(err=>{
       
     })
   })
//搜尋欄位
const seacrhBtn=document.querySelector('.search-Btn');
seacrhBtn.addEventListener('click',e=>{
   e.preventDefault();
   const seacrhValue=document.querySelector('.search-value').value;
   if(seacrhValue === "出貨"||seacrhValue === "商品加工"||seacrhValue ==="儲位租用"){
     window.location.replace(' https://jamesccccccc.github.io/newStroge/consult.html');
   
   }return;

})