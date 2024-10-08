'use strict';
const dropdownButton = document.getElementById('dropdownButton');
const dropdownContent = document.getElementById('dropdownContent');

dropdownButton.addEventListener('click', function () {
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
});

document.addEventListener('click', function (event) {

    if (dropdownButton.contains(event.target) || dropdownContent.contains(event.target)) {
        return;
    }
    dropdownContent.style.display = 'none';
});
if(localStorage.getItem('theme') == 'dark') {
  document.body.classList.add('dark-theme');
}
else{
  document.body.classList.add('light-theme');
  localStorage.setItem('theme', 'light');
}

const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');


// navToggle function
const navToggleFunc = function () { nav.classList.toggle('active'); }

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);

// theme toggle variables
const themeBtn = document.querySelectorAll('.theme-btn');
themeToggleFunc()
function themeToggleFunc() {
  for (let i = 0; i < themeBtn.length; i++) {
    if(document.body.classList.contains('dark-theme')){
      themeBtn[i].classList.remove('light');
      themeBtn[i].classList.add('dark');
    }
    else{
      themeBtn[i].classList.remove('dark');
      themeBtn[i].classList.add('light');
    }
    
  }
}

for (let i = 0; i < themeBtn.length; i++) {
  console.log(themeBtn[i]);
  themeBtn[i].addEventListener('click', function () {

    // toggle `light-theme` & `dark-theme` class from `body`
    // when clicked `theme-btn`
    document.body.classList.toggle('light-theme');

    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
      localStorage.setItem('theme','dark')
    }
    else{
      localStorage.setItem('theme','light')
    }

    /* Fonkiyon */
    themeToggleFunc()

  })
  

}


