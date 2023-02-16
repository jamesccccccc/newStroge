const selectAll=document.getElementById('select-All');
const process=document.querySelectorAll('.process');
const send=document.querySelector('.send-Btn');
const commerce=document.querySelectorAll('.commerce');
let selectData=[];
let commerceData=[];
//全選
 selectAll.addEventListener('click',e=>{
  if(selectAll.checked == true){
        const selectItem=document.getElementsByName('radio');
        selectItem.forEach((item,i)=>{
        if(i<selectItem.length){
            selectItem[i].checked=true;
            let seletctList=selectItem[i].value
            selectData.push(seletctList);
          }
       })  
    }
  if(selectAll.checked==false){
        selectData.length=0;
        const selectItem=document.getElementsByName('radio');
        selectItem.forEach((item,i)=>{
        if(i<selectItem.length){
            selectItem[i].checked=false;
          }
       })              
  } 
  }
 );
//選擇服務
process.forEach(item=>{
item.addEventListener('click',e=>{
  if(item.checked==true){
     let choose=item.value;
     selectData.push(choose);
   }else{
      selectData.length=0;
    }
  })
})     
//電子商務
commerce.forEach(item=>{
   item.addEventListener('click',e=>{
       if(item.checked==true){
          let commerceList=item.value;
          commerceData.push(commerceList);             
       }else{
          selectData.length=0;
       }
   })
})
//送出訂單
send.addEventListener('click',e=>{
    const shipDate=document.getElementById('date').value;
    const shipTime=document.getElementById('time').value;
    const pickupArea=document.getElementById('area').value;
    const pickupAddres=document.getElementById('addres').value;
    const specaial=document.querySelector('.special-Service').value;
    let order={}
    order.name=userName;
    order.id=id;
    order.demand="倉儲服務";
    order.work=selectData;
    order.commerce=commerceData;
    order.specaial=specaial;
    order.date=shipDate;
    order.time=shipTime;
    order.area=pickupArea;
    order.addres=pickupAddres;
    if(order.work===""||order.specaial===""||order.commerce===""||
       order.area===""||order.addres===""
      ){
       alert('請輸入完整的資訊')
       return;
    }
    axios.post(`${_url}/600/shops`,{
       "customerName":order.name,
       "userId":order.id,
       "demand":order.demand,
       "work":order.work,
       "commerce":order.commerce,
       "specaial":order.specaial,
       "deliveryDate":order.date,
       "deliveryTime":order.time,
       "area":order.area,
       "addres":order.addres,
    },{
      headers: {
        'Content-Type':'application/json',
        'Authorization': 'Bearer '+token  
         }
    })
    .then(res=>{
        window.location.replace('https://jamesccccccc.github.io/newStroge/afterlogin.html');
    })
})