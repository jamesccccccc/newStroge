const order=document.querySelector('.order-list');
const seletallBtn=document.getElementById('selectAll');
const deleteBtn=document.querySelector('.deleteAll-Btn');
const orderBtn=document.querySelector('.check-order');
const closeBtn=document.querySelector('.btn-close');
let orderData=[]
//渲染訂單內容
function render(){
  orderData.forEach((item,index)=>{
    if(item.userId!==id){
       return;
    }
    let str=''
    str+=`
    <tr>
        <th scope="col">
          <div class="d-flex ms-3 select-List">
            <input type="checkbox" id="${item.id}" style="width:30px;height:30px;" class="select-Num position-absolute " >
            <label for="${item.id} class="position-relative"></label>     
          </div>  
        </th>
        <td class="ps-3">${item.customerName}</td>
        <td>${item.demand}</td>
        <td>${item.deliveryDate}</td>
        <td class="ps-3">${item.deliveryTime}</td>
    
      </tr>
    `
    order.innerHTML+=str
  })
}
function init(){
  axios.get(`${_url}/shops`)
  .then(res=>{
  orderData=res.data
  render();
})
}
init();
//全選
seletallBtn.addEventListener('click',e=>{
  e.preventDefault();
  if(seletallBtn.checked === true){
      let selectList=document.querySelectorAll('.select-Num');
      selectList.forEach((item,i)=>{
          if(i<selectList.length){
             selectList[i].checked=true;
          }
          
      })
  }
  if(seletallBtn.checked === false){
      let selectList=document.querySelectorAll('.select-Num');
      selectList.forEach((item,i)=>{
          if(i<selectList.length){
             selectList[i].checked=false;

          }
      })

  }
})
//刪除訂單
deleteBtn.addEventListener('click',e=>{
    e.preventDefault();
    let seletallBtn=document.getElementById('selectAll');
    let selectAll=document.querySelectorAll('.select-Num');
    //刪除全部訂單
    if(seletallBtn.checked === true){
       axios.delete(`${_url}/600/shops/${id}`,{
        headers: {
          'Content-Type':'application/json',
          'Authorization': 'Bearer '+token  
       }
       })
       .then(res=>{
          console.log(res);
       })
    }
    ////刪除單筆訂單
    selectAll.forEach(item=>{
        if(item.checked===true){
          axios.delete(`${_url}/shops/${item.id}`)
          .then(res=>{
             alert('已刪除');
          })
          .catch(err=>{
             alert('請選擇要刪除的項目')
          })
        }
    })
    
})
//查看訂單
function renderOrder(){
  axios.get(`${_url}/shops`)
  .then(res=>{
    let orderData=res.data;
    let str=''
    orderData.forEach((item,i)=>{
        if(item.customerName!==userName){
           return;
        }
        if(item.demand==="出貨"){
          str+=`
          <h2 class="fs-3 fw-bold text-grey3">需求:${item.demand}</h2>
          <ul class="user-list list-unstyled border border-grey1 rounded border-2">
            <li class="user-item mt-3 ms-2 py-3 border border-2 border-grey border-top-0 border-start-0 border-end-0">
              <h3 class="fs-6 text-grey-2">會員名稱:</h3><span>${item.customerName}</span>
            </li>
            <li class="user-item mt-3 ms-2 py-3 border border-2 border-grey border-top-0 border-start-0 border-end-0">
              <h3 class="fs-6 text-grey-2 fw-bold">電話:</h3><span>${item.customerPhone}</span>
            </li>
            <li class="user-item mt-3 ms-2 py-3 border border-2 border-grey border-top-0 border-start-0 border-end-0">
              <h3 class="fs-6 text-grey-2 fw-bold">Email:</h3><span>${item.customerMail}</span>
            </li>
            <li class="user-item mt-3 ms-2 py-3 border border-2 border-grey border-top-0 border-start-0 border-end-0">
              <h3 class="fs-6 text-grey-2 fw-bold">貨物重量:</h3><span>${item.customerWeight}</span>
            </li>
            <li class="user-item mt-3 ms-2 py-3 border border-2 border-grey border-top-0 border-start-0 border-end-0">
              <h3 class="fs-6 text-grey-2 fw-bold">內裝物品:</h3><span>${item.customerItems}</span>
            </li>
            <li class="client-item mt-3 ms-2 py-3 border border-2 border-grey border-top-0 border-start-0 border-end-0">
              <h3 class="fs-6 text-grey-2 fw-bold">收件人名稱:</h3><span>${item.recipientName}</span>
            </li>
            <li class="client-item mt-3 ms-2 py-3 border border-2 border-grey border-top-0 border-start-0 border-end-0">
              <h3 class="fs-6 text-grey-2 fw-bold">收件人電話:</h3><span>${item.recipientPhone}</span>
            </li>
            <li class="client-item mt-3 ms-2 py-3 border border-2 border-grey border-top-0 border-start-0 border-end-0">
              <h3 class="fs-6 text-grey- fw-bold">Email:</h3><span>${item.recipientMail}</span>
            </li>
            <li class="client-item mt-3 ms-2 py-3 border border-2 border-grey border-top-0 border-start-0 border-end-0">
              <h3 class="fs-6 text-grey-2 fw-bold">派車日期:</h3><span>${item.deliveryDate}</span>
            </li>
            <li class="client-item mt-3 ms-2 py-3 border border-2 border-grey border-top-0 border-start-0 border-end-0">
              <h3 class="fs-6 text-grey-2 fw-bold">派車時間:</h3><span>${item.deliveryTime}</span>
            </li>
            <li class="client-item mt-3 ms-2 py-3 border border-2 border-grey border-top-0 border-start-0 border-end-0">
              <h3 class="fs-6 text-grey-2 fw-bold">取貨地址::</h3><span>${item.pickupArea+item.pickupAddres}</span>
            </li>
            <li class="client-item mt-3 ms-2 py-3 border border-2 border-grey border-top-0 border-start-0 border-end-0">
              <h3 class="fs-6 text-grey-2 fw-bold">送達地址:</h3><span>${item.sendArea+item.sendAddres}</span>
            </li>
          </ul>
          `
          const orderList=document.querySelector('.user-Demand');
          orderList.innerHTML=str;
        }
        if(item.demand==="倉儲服務"){
          str+=`
            <h2 class="fs-3 fw-bold text-grey3">需求:${item.demand}</h2>
              <ul class="user-list list-unstyled border border-grey1 rounded border-2">
                <li class="user-item mt-3 ms-2 py-3 border border-2 border-grey border-top-0 border-start-0 border-end-0">
                  <h3 class="fs-6 text-grey-2 fw-bold fw-bold">會員名稱:</h3><span>${item.customerName}</span>
                </li>
                <li class="user-item mt-3 ms-2 py-3 border border-2 border-grey border-top-0 border-start-0 border-end-0">
                  <h3 class="fs-6 text-grey-2 fw-bold fw-bold">加工服務:</h3><span>${item.work}</span>
                </li>
                <li class="user-item mt-3 ms-2 py-3 border border-2 border-grey border-top-0 border-start-0 border-end-0">
                  <h3 class="fs-6 text-grey-2 fw-bold fw-bold">客戶:</h3><span>${item.commerce}</span>
                </li>
                <li class="user-item mt-3 ms-2 py-3 border border-2 border-grey border-top-0 border-start-0 border-end-0">
                  <h3 class="fs-6 text-grey-2 fw-bold fw-bold">特殊需求或加工:</h3><span>${item.specaial}</span>
                </li>
                <li class="user-item mt-3 ms-2 py-3 border border-2 border-grey border-top-0 border-start-0 border-end-0">
                  <h3 class="fs-6 text-grey-2 fw-bold fw-bold">派車日期:</h3><span>${item.deliveryDate}</span>
                </li> 
                <li class="user-item mt-3 ms-2 py-3 border border-2 border-grey border-top-0 border-start-0 border-end-0">
                  <h3 class="fs-6 text-grey-2 fw-bold fw-bold">派車時間:</h3><span>${item.deliveryTime}</span>
                </li> 
                <li class="client-item mt-3 ms-2 py-3 border border-2 border-grey border-top-0 border-start-0 border-end-0">
                  <h3 class="fs-6 text-grey-2 fw-bold fw-bold">取貨地址:</h3><span>${item.area+item.addres}</span>
                </li>
              </ul>
          `
          const orderList=document.querySelector('.user-Demand');
          orderList.innerHTML=str;
        }
        if(item.demand==="儲位租用"){
            console.log(item);
            str+=`
            <h2 class="fs-3 fw-bold text-grey3">需求:${item.demand}</h2>
              <ul class="user-list list-unstyled border border-grey1 rounded border-2">
                <li class="user-item mt-3 ms-2 py-3 border border-2 border-grey border-top-0 border-start-0 border-end-0">
                  <h3 class="fs-6 text-grey-2 fw-bold fw-bold">會員名稱:</h3><span>${item.customerName}</span>
                </li>
                <li class="user-item mt-3 ms-2 py-3 border border-2 border-grey border-top-0 border-start-0 border-end-0">
                  <h3 class="fs-6 text-grey-2 fw-bold fw-bold">租放的原因:</h3><span>${item.work}</span>
                </li>
                <li class="user-item mt-3 ms-2 py-3 border border-2 border-grey border-top-0 border-start-0 border-end-0">
                  <h3 class="fs-6 text-grey-2 fw-bold fw-bold">需要空間:</h3><span>${item.pingNum}</span>
                </li>
                <li class="user-item mt-3 ms-2 py-3 border border-2 border-grey border-top-0 border-start-0 border-end-0">
                  <h3 class="fs-6 text-grey-2 fw-bold fw-bold">存放的時間:</h3><span>${item.place}</span>
                </li>
                <li class="user-item mt-3 ms-2 py-3 border border-2 border-grey border-top-0 border-start-0 border-end-0">
                  <h3 class="fs-6 text-grey-2 fw-bold fw-bold">派車日期:</h3><span>${item.deliveryDate}</span>
                </li>
                <li class="user-item mt-3 ms-2 py-3 border border-2 border-grey border-top-0 border-start-0 border-end-0">
                  <h3 class="fs-6 text-grey-2 fw-bold fw-bold">派車時間:</h3><span>${item.deliveryTime}</span>
                </li>  
                <li class="client-item mt-3 ms-2 py-3 border border-2 border-grey border-top-0 border-start-0 border-end-0">
                  <h3 class="fs-6 text-grey-2 fw-bold fw-bold">取貨地址:</h3><span>${item.area+item.addres}</span>
                </li>
              </ul>
            `
            const orderList=document.querySelector('.user-Demand');
            orderList.innerHTML=str;

        }
    })
  })
}
orderBtn.addEventListener('click',e=>{
  e.preventDefault();
  let exampleModal = new bootstrap.Modal(document.getElementById('exampleModal'));
  renderOrder();
  exampleModal.show();
  //關閉按鈕
  closeBtn.addEventListener('click',e=>{
    exampleModal.hide();
  })
      
})