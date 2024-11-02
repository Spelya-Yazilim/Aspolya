export default function localization(messages) {
  const button = document.querySelectorAll('.lang_btn')
  let lang = localStorage.getItem('lang');
  const tr = document.querySelectorAll('.tr')
  const en = document.querySelectorAll('.en')
  const ar = document.querySelectorAll('.ar')

  console.log(tr,en,ar)
  tr.forEach(element => {
    element.addEventListener('click', () => {
      lang = 'tr';
      localStorage.setItem('lang', lang);
      window.location.reload();
    })
  })
  en.forEach(element => {
    element.addEventListener('click', () => {
      lang = 'en';
      localStorage.setItem('lang', lang);
      window.location.reload();
    })
  })
  ar.forEach(element => {
    element.addEventListener('click', () => {
      lang = 'ar';
      localStorage.setItem('lang', lang);
      window.location.reload();
    })
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


