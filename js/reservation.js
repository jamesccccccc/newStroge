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
            item.classList.remove("form-step-active")
        }
    })
    formSteps[Num].classList.add('form-step-active')
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
 