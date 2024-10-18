'use strict';


if (localStorage.getItem('theme') == 'dark') {
  document.body.classList.add('dark-theme');
  document.body.classList.remove('light-theme');

}
else {
  document.body.classList.add('light-theme');
  document.body.classList.remove('dark-theme');
  localStorage.setItem('theme', 'light');

}

