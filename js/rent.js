const send=document.querySelector('.send-Btn');
const rent=document.querySelectorAll('.lease');
let rentData=[]
rent.forEach(item=>{
    item.addEventListener('click',e=>{
       let rentNum=item.value;
       if(item.checked==true){
          rentData.push(rentNum);
       }else{
          rentData.length=0;
       }
    })
})
//發送服務
send.addEventListener('click',e=>{
    const pingNum=document.getElementById('ping-Number').value;
    const shipDate=document.getElementById('date').value;
    const shipTime=document.getElementById('time').value;
    const shipArea=document.getElementById('area').value;
    const shipAddres=document.getElementById('addres').value;
    const placeday=document.getElementById('depositDay').value;
    const placeTime=document.getElementById('depositTime').value;
    const placeDate=(placeday+placeTime);
    let rentList={}
    rentList.name=userName,
    rentList.id=id,
    rentList.demand="儲位租用",
    rentList.work=rentData,
    rentList.ping=pingNum,
    rentList.place=placeDate,
    rentList.date=shipDate,
    rentList.time=shipTime,
    rentList.area=shipArea,
    rentList.addres=shipAddres
    if(rentList.ping===""||rentList.date===""||rentList.date===""
     ||rentList.time===""||rentList.area===""||rentList.addres===""
     ||rentList.place==="")
     {
       alert('請輸入完整的資訊');
       return;
     }
    axios.post(`${_url}/600/shops`,{
      "customerName":rentList.name,
      "userId":rentList.id,
      "demand":rentList.demand,
      "work":rentList.work,
      "pingNum":rentList.ping,
      "place":rentList.place,
      "deliveryDate":rentList.date,
      "deliveryTime":rentList.time,
      "area":rentList.area,
      "addres":rentList.addres,

    },{
        headers: {
          'Content-Type':'application/json',
          'Authorization': 'Bearer '+token  
        }
    })
    .then(res=>{
      window.location.replace('https://jamesccccccc.github.io/newStroge/afterlogin.html');
    })
    .catch(err=>{
      console.log(err);
    })

  })