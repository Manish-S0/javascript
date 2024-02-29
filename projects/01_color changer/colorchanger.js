const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body');
buttons.forEach((button)=>{
  button.addEventListener('click',function(e){
    if (e.target.id==='white'){
      body.style.backgroundColor=e.target.id;
      body.style.color='black';
    }
    if (e.target.id==='blue'){
      body.style.backgroundColor=e.target.id;
    }
    if (e.target.id==='purple'){
      body.style.backgroundColor=e.target.id;
    }
    if (e.target.id==='red'){
      body.style.backgroundColor=e.target.id;
    }
  })
});

document.querySelector('.reset').addEventListener('click',()=>{
  
  body.style.backgroundColor='black';
  body.style.color='white';
});

