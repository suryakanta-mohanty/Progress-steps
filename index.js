const prevBtn = document.querySelector('.js-prev-btn');
const nextBtn = document.querySelector('.js-next-btn');
const steps = document.querySelectorAll('.steps');
const progressBar = document.querySelector('.progress_bar');

const steps_length = steps.length - 1;
// console.log(steps_length);

const progress_bar_full = 100;
let progress_bar_final;

nextBtn.addEventListener('click', ()=>{
  progress_bar_final = `${progress_bar_full}`/`${steps_length}`;
  // console.log(progress_bar_final);
  progressBar.style.width = `${progress_bar_final}%`;

  steps[1].classList.add('active');
  prevBtn.removeAttribute('disabled');
});