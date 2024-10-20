const footer = document.querySelector("footer");
footer.insertAdjacentHTML('beforeend',`

<div class="w-full flex justify-center items-center ">
  <div class="container ">
    <div class="wrapper">
      
  
      <a href="/" class="footer-logo">
        <img src="/assets/images/logolight.png" alt="SimpleBlog Logo" width="150" class="logo-light">
        <img src="/assets/images/logolnight.png" alt="SimpleBlog Logo" width="150" class="logo-dark">
      </a>
  
    </div>
  
    <div class="wrapper">
  
      <p class="footer-title kurumsal">Kurumsal</p>
  
      <ul>
  
        <li>
          <a href="/" class="footer-link mainpage">Anasayfa</a>
        </li>
  
        <li>
          <a href="/hakkımızda.html" class="footer-link about">Hakkımızda</a>
        </li>
  
        <li>
          <a href="/iletişim.html" class="footer-link contact_text">İletişim</a>
        </li>
  
      </ul>
  
    </div>
  
    <div class="wrapper">
  
      <p class="footer-title socialmedia">Sosyal Medya</p>
  
      <ul>
  
        <li>
          <a href="#" class="footer-link">İnstagram</a>
        </li>
  
        <li>
          <a href="#" class="footer-link">Whatsap</a>
        </li>
  
        <li>
          <a href="#" class="footer-link">Mail</a>
        </li>
  
      </ul>
  
    </div>
  
  </div>
</div>



<p class="copyright">
  &copy; Copyright 2024 <a href="#">Sprole </a>
</p>

  `)
