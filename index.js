const prevBtn = document.querySelector('.js-prev-btn');
const nextBtn = document.querySelector('.js-next-btn');
const steps = document.querySelectorAll('.steps');
const progressBar = document.querySelector('.progress_bar');

let currentActive = 1;

nextBtn.addEventListener('click', ()=>{
  currentActive ++;
  
  if(currentActive > steps.length){
    currentActive = steps.length;
  }

  updateStep();
});

prevBtn.addEventListener('click', ()=>{

});

function updateStep(){
  steps.forEach((step, index) =>{
    if(index < currentActive){
      step.classList.add('active');

    }else{
      step.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');
  
  progressBar.style.width = (actives.length - 1) / (steps.length - 1) * 100 + '%';

  if(currentActive === 1){
    prevBtn.disabled = true;

  }else if(currentActive === steps.length){
    nextBtn.disabled = true;

  }else{
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
}