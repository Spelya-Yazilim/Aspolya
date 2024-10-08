export default function localization(messages) {
  const button = document.querySelectorAll('.lang_btn')
  const tr = document.querySelector('.tr')
  const en = document.querySelector('.en')
  
  tr.addEventListener('click', () => {
    localStorage.setItem('lang', 'tr');
    window.location.reload();
  })
  en.addEventListener('click', () => {
    localStorage.setItem('lang', 'en');
    window.location.reload();
  })
  button.forEach(element => {
    element.addEventListener('click', () => {
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
  });
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
}


