const languages = ['en', 'tr'];
const messages = {
  en: {
    title:"Aspolya Treatment",
    kateori:"Categories",
    estetik:"Aesthetic",
    dis:"External",
    hero_title: ` Hello <br> 
            <b>Aspolya  &nbsp; Treatment</b>
            <br>Welcome.`,
    lastest_blog: 'Latest Blogs',
    rezervasyon: "Make a reservation",
    bilgi: "Get information",
    hizmetlerimiz: "Our Services",
    contact_text:"Contact",
    mainpage:"Home",
    about:"About us",
    lang_btn:"EN/TR",
    load_more_text:"Load More",
    contact_paragraf:"You can quickly make a reservation or order for Aspolya using the shortcuts below."
  },
  tr: {
    title:"Aspolya Tedavi",
    kateori:"Kategoriler",
    estetik:"Estetik",
    dis:"Diş",
    hero_title: ` Merhabalar <br> 
            <b>Aspolya  &nbsp; Tedavi</b>'ye
            <br>Hoşgeldiniz.`,
    lastest_blog: 'Güncel Bloglar',
    rezervasyon: "Rezervasyon Yap",
    bilgi: "Bilgi Al",
    hizmetlerimiz: "Hizmetlerimiz",
    contact_text:"Iletisim",
    mainpage:"Anasayfa",
    about:"Hakkımızda",
    lang_btn:"TR/EN",
    load_more_text:"Devamı",
    contact_paragraf:"Aşşağıda Bulunan Kısa Yollardan Hızlı Bir Şekilde Aspolya İçin Rezervasyon Veya Sipariş Verebilirsiniz"
  }
}

document.querySelector('.lang_btn').addEventListener('click', () => {
  let lang = localStorage.getItem('lang');
  if(!lang || lang == 'tr') {
    lang = 'en';
    localStorage.setItem('lang', lang);
  }
  else{
    lang = 'tr';
    localStorage.setItem('lang', lang);
  }
  window.location.reload();
}) 
if(!localStorage.getItem('lang')) {
  localStorage.setItem('lang', 'tr');
}
else{
  const lang = localStorage.getItem('lang');
  const message = messages[lang];
  for (let key in message) {
    let element = document.querySelectorAll(`.${key}`);
    for(let el of element) {
      el.innerHTML = message[key];
    }
  }
}

