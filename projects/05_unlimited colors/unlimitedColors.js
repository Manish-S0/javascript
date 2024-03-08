let color
function colorchange(){
  hex='0123456789ABCDEF';
  color='#'
  for (let index = 0; index < 6; index++) {
    color+=hex[(Math.floor(Math.random()*16))]
    
  }
  return color;
}
let change
let startChangingColor=function(){
  if (!change){
    change=setInterval(function(){
      document.body.style.backgroundColor=colorchange();
  },1000);
  }
    
}
let stopChangingColor=function(){
    clearInterval(change);
    change=null;
}

document.querySelector('.start').addEventListener('click',startChangingColor);

document.querySelector('.stop').addEventListener('click',stopChangingColor);