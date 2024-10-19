const header = document.querySelector("header");
header.insertAdjacentHTML(
  "beforeend",
  `
  <nav class="navbar px-5">
    <div class="container flex justify-between items-center">
      <a href="/index.html">
        <img src="/assets/images/logolight.png" alt="SimpleBlog logo" width="150" class="logo-light">
        <img src="/assets/images/logolnight.png" alt="SimpleBlog logo" width="150" class="logo-dark">
      </a>
  
      <div class="btn-group">
  
        <button class="theme-btn theme-btn-mobile light">
          <ion-icon name="moon" class="moon"></ion-icon>
          <ion-icon name="sunny" class="sun"></ion-icon>
        </button>
  
  
        <button class="nav-menu-btn">
          <ion-icon name="menu-outline"></ion-icon>
        </button>
  
      </div>
  
      <div class="flex-wrapper">
  
        <ul class="desktop-nav">
  
          <li>
            <a href="/" class="nav-link mainpage ">Anasayfa</a>
          </li>
          <li>
            <a href="/galery.html" class="nav-link galery">Galeri</a>
          </li>
          <li>
            <a href="/sss.html" class="nav-link faq">SSS</a>
          </li>
          <li>
            <a href="/hakkımızda.html" class="nav-link about">Hakkımızda</a>
          </li>
  
          <li>
            <a href="/iletisim.html" class="nav-link contact_text">İletişim</a>
          </li>
  
  
        </ul>
  
        <button class="theme-btn theme-btn-desktop light">
          <ion-icon name="moon" class="moon"></ion-icon>
          <ion-icon name="sunny" class="sun"></ion-icon>
        </button>
        <div class="dropdown relative z-20 inline-block" >
          <button class="text-white text-2xl border-none cursor-pointer outline-none dropdown-button" id="dropdownButton" tabindex="0">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" height="1em"
              width="1em" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z">
              </path>
            </svg>
          </button>
          <div class="dropdown-content absolute rounded-2xl min-w-40 z-20 bg-white xl:left-[-500%] xl:top-[105%] 2xl:left-[-300%] 2xl:top-[155%]  shadow-lg" id="dropdownContent">
            <span class="tr">Türkçe</span>
            <span class="en">İngilizce</a>
          </div>
        </div>
  
  
      </div>
  
      <div class="mobile-nav">
  
        <button class="nav-close-btn">
  
          <ion-icon name="close-outline"></ion-icon>
        </button>
  
        <div class="wrapper">
  
          <p class="h3 nav_title kateori">kategori</p>
  
          <ul>
            <li class="nav-item">
              <a href="#" class="nav-link mainpage">Anasayfa</a>
            </li>
            <li class="nav-item">
              <a href="/galery.html" class="nav-link galery">Galeri</a>
            </li>
            <li class="nav-item">
              <a href="/sss.html" class="nav-link faq">SSS</a>
            </li>
  
            <li class="nav-item">
              <a href="hakkımızda.html" class="nav-link about">Hakkımızda</a>
            </li>
  
            <li class="nav-item">
              <a href="iletisim.html" class="nav-link contact_text">İletişim</a>
            </li>
          </ul>
  
        </div>
  
        <div>
  
          <p class="h3 nav-title contact_text">Hİzmetlerimiz</p>
  
          <ul>
            <li class="nav-item">
              <a href="#" class="nav-link estetik">Estetik</a>
            </li>
  
            <li class="nav-item">
              <a href="#" class="nav-link dis">Diş </a>
            </li>
            <li class="nav-item">
                      <div class="dropdown relative z-20 inline-block" >
          <button class="text-white text-2xl border-none cursor-pointer outline-none dropdown-button" id="dropdownButton1" tabindex="0">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" height="1em"
              width="1em" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z">
              </path>
            </svg>
          </button>
          <div class="dropdown-content absolute rounded-2xl min-w-40 z-20 bg-white xl:left-[-500%] xl:top-[105%] 2xl:left-[-300%] 2xl:top-[155%]  shadow-lg" id="dropdownContent">
            <span class="tr">Türkçe</span>
            <span class="en">İngilizce</a>
          </div>
        </div>
            </li>
  
          </ul>
  
        </div>
  
      </div>

    </div>



  </nav>


`
)



document.addEventListener("DOMContentLoaded", function() {
  const dropdownButton = document.querySelector('#dropdownButton');
  const dropdownButton1 = document.querySelector('#dropdownButton1');
  const dropdownContent = document.querySelectorAll('.dropdown-content');
  const langSpans = document.querySelectorAll('.dropdown-content span');

  let activeLang = localStorage.getItem('lang') || 'tr'; 
  function setActiveLang(lang) {
    langSpans.forEach(span => {
      console.log(span)
      if (span.classList.contains(lang)) {
        span.classList.add('active'); // 
      } else {
        span.classList.remove('active'); // 
      }
    });
  }
  setActiveLang(activeLang);

  
  langSpans.forEach(span => {
    span.addEventListener('click', function() {
      
      const selectedLang = this.classList.contains('tr') ? 'tr' : 'en'; 
      localStorage.setItem('lang', selectedLang);
      setActiveLang(selectedLang);
    });
  });

  dropdownButton1.addEventListener('click', function () {
    if (dropdownContent[1].style.display === 'block') {
      dropdownContent[1].style.display = 'none';
    } else {
      dropdownContent[1].style.display = 'block';
    }
  });

  dropdownButton.addEventListener('click', function () {
    if (dropdownContent[0].style.display === 'block') {
      dropdownContent[0].style.display = 'none';
    } else {
      dropdownContent[0].style.display = 'block';
    }
  });

  document.addEventListener('click', function (event) {
    if (dropdownButton.contains(event.target) || dropdownContent[0].contains(event.target)) {
      return;
    }
    dropdownContent[0].style.display = 'none';
  });
  document.addEventListener('click', function (event) {
    if (dropdownButton1.contains(event.target) || dropdownContent[1].contains(event.target)) {
      return;
    }
    dropdownContent[1].style.display = 'none';
  });
});
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
    if (document.body.classList.contains('dark-theme')) {
      themeBtn[i].classList.remove('light');
      themeBtn[i].classList.add('dark');
    }
    else {
      themeBtn[i].classList.remove('dark');
      themeBtn[i].classList.add('light');
    }

  }
}

for (let i = 0; i < themeBtn.length; i++) {
  console.log(themeBtn[i]);
  themeBtn[i].addEventListener('click', function () {

    document.body.classList.toggle('light-theme');

    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark')
    }
    else {
      localStorage.setItem('theme', 'light')
    }

    /* Fonkiyon */
    themeToggleFunc()
    

  })


}
