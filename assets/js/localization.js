export default function localization(messages) {
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
}


