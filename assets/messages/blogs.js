
import localization from "../js/localization.js";
import { staticData } from "./static.js";
document.querySelectorAll('.blog-card').forEach(element => {
  element.addEventListener('click', () => {
    window.location.href = '/blogs/selimiye-birtat-summer-schedule-announced.html';
  })
});
const messages = {
  en: {
    ...staticData.en,
    lastest_blog: 'Latest Blogs',
    current:"Current",
    blog_title:'Selimiye Birtat Summer Schedule Announced',
    blog_text:'These are the summer fix menus that everyone is eagerly waiting for.'
/*     current:"Current",
    blog:'Selimiye Birtat Summer Schedule Announced',
    blog_text:'These are the summer fix menus that everyone is eagerly waiting for.' */

  },
}
localization(messages)

