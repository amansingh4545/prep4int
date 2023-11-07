const but1= document.querySelector('.but1');
const but2= document.querySelector('.but2');
const but3= document.querySelector('.but3');
const send= document.querySelector('.submit-button');

but1.style.backgroundColor='rgb(243, 238, 231)';
but2.style.backgroundColor='rgb(243, 238, 231)';
but3.style.backgroundColor='rgb(243, 238, 231)';
send.style.backgroundColor='#F44770';

send.addEventListener('mouseover', ()=>{
  send.style.backgroundColor='#a167ed';
  send.style.transition='.2s ease';
})
send.addEventListener('mouseout', ()=>{
  send.style.backgroundColor='#F44770';
  send.style.transition='.2s ease';
})

but1.addEventListener('mouseover', ()=>{
  but1.style.backgroundColor='rgb(131, 245, 144)';
  // but1.style.boxShadow='0 0 40px #a167ed';
  but1.style.transition='.2s ease';
  
})
but2.addEventListener('mouseover', ()=>{
  but2.style.backgroundColor='rgb(131, 245, 144)';
  // but2.style.boxShadow='0 0 40px #a167ed';
  but2.style.transition='.2s ease';
})
but3.addEventListener('mouseover', ()=>{
  but3.style.backgroundColor='rgb(131, 245, 144)';
  // but2.style.boxShadow='0 0 40px #a167ed';
  but3.style.transition='.2s ease';
})
but1.addEventListener('mouseout', ()=>{
  but1.style.backgroundColor='rgb(243, 238, 231)';
  but1.style.boxShadow='0 0 40px white';
  but1.style.transition='.2s ease';
})
but2.addEventListener('mouseout', ()=>{
  but2.style.backgroundColor='rgb(243, 238, 231)';
  but2.style.boxShadow='0 0 40px white';
  but2.style.transition='.2s ease';
})
but3.addEventListener('mouseout', ()=>{
  but3.style.backgroundColor='rgb(243, 238, 231)';
  but3.style.boxShadow='0 0 40px white';
  but3.style.transition='.2s ease';
})



