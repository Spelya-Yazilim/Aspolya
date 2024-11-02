const footer = document.querySelector("footer");
footer.insertAdjacentHTML('beforeend',`
<div class="w-full flex justify-center items-center ">
  <div class="container ">
    <div class="wrapper pl-6 ">
      <a href="/" class="footer-logo ">
        <img src="/assets/images/logolight.png" alt="SimpleBlog Logo" width="150" class="logo-light">
        <img src="/assets/images/logolnight.png" alt="SimpleBlog Logo" width="150" class="logo-dark">
      </a>
      <h2 class="footer-title socialmedia">Sosyal Medyada Biz</h2>
      <div class="flex space-x-4 text-gray-400 text-2xl pt-4 w-full justify-center md:justify-start">
      
        <a href="https://facebook.com" target="_blank" class="hover:text-blue-500">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" target="_blank" class="hover:text-blue-400">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" class="hover:text-pink-500">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" class="hover:text-blue-700">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>

    <div class="wrapper">
      <p class="footer-title kurumsal">Kurumsal</p>
      <ul>
        <li><a href="/" class="footer-link mainpage">Anasayfa</a></li>
        <li><a href="/hakkımızda.html" class="footer-link about">Hakkımızda</a></li>
        <li><a href="/iletişim.html" class="footer-link contact_text">İletişim</a></li>
      </ul>
    </div>

    <div class="wrapper">
      <p class="footer-title socialmedia">Sosyal Medya</p>
      <ul>
        <li><a href="#" class="footer-link">İnstagram</a></li>
        <li><a href="#" class="footer-link">Whatsap</a></li>
        <li><a href="#" class="footer-link">Mail</a></li>
      </ul>
    </div>

    <div class="flex flex-col items-center p-0 ">
      <h2 class="text-xl font-bold mb-6 footer-title musterihizmetleri">Müşteri Hizmetleri</h2>

      <div class="flex flex-col items-center rounded-lg p-4 ">
        <div class="flex items-center">
          <button class="flex items-center justify-center w-[250px] py-4 px-8 bg-[#26C99B] rounded-lg hover:bg-[#22b48c] transition duration-300" id="phoneButton">
            <i class="fas fa-phone mr-2 text-white"></i>
            <span class="text-sm mr-2 text-white">+90 123 456 7890</span>
          </button>
        </div>
      </div>

      <div class="flex items-center mb-2 w-[250px] py-4 px-8 rounded-lg hover:bg-gray-400 transition duration-300" id="emailButton">
        <button class="flex items-center" onclick="copyEmail()">
          <i class="fas fa-envelope mr-2"></i>
          <span class="text-sm mr-2 ">email@example.com</span>
        </button>
      </div>
    </div>
  </div>
</div>

<p class="copyright">
  &copy; Copyright 2024 <a href="#">Sprole </a>
</p>
`);

// Function to copy phone number to clipboard
document.getElementById('phoneButton').onclick = function() {
  navigator.clipboard.writeText('+90 123 456 7890').then(() => {
    alert('Telefon numarası kopyalandı!');
  });
};

// Function to copy email to clipboard
function copyEmail() {
  navigator.clipboard.writeText('email@example.com').then(() => {
    alert('E-posta kopyalandı!');
  });
}
