'use strict';


if (localStorage.getItem('theme') == 'dark') {
  document.body.classList.add('dark-theme');
}
else {
  document.body.classList.add('light-theme');
  localStorage.setItem('theme', 'light');
}



/* document.onload = () => {
  var links = document.querySelectorAll("a[href]");
  var cbk = function (e) {
    if (e.currentTarget.href === window.location.href) {
      e.preventDefault();
      e.stopPropagation();
    }
  };
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", cbk);
  }
}
 */
