import localization from "../js/localization.js";
import { staticData } from "./static.js";
const messages = {
  en: {
    ...staticData.en,
    hero_title: ` Hello <br> 
            <b>Aspolya  &nbsp; Treatment</b>
            <br>Welcome.`,
    subscribe:"Subscribe",
    current:"Current",
    subscribe_text:"By subscribing you can instantly receive news about current news.",
    lastest_blog: 'Latest Blogs',
    rezervasyon: "Make a reservation",
    bilgi: "Get information",
    load_more_text:"Load More",
    contact_paragraf:"You can quickly make a reservation or order for Aspolya using the shortcuts below."
  },
  tr: {
    ...staticData.tr,
    hero_title: ` Merhabalar <br> 
            <b>Aspolya  &nbsp; Tedavi</b>'ye
            <br>Hoşgeldiniz.`,
    lastest_blog: 'Güncel Bloglar',
    subscribe:"Abone Ol",
    subscribe_text:"Abone Olarak Güncel  Haberlerden Anında Haber Alabilirsiniz.",
    current:"Güncel",
    rezervasyon: "Rezervasyon Yap",
    bilgi: "Bilgi Al",
    hizmetlerimiz: "Hizmetlerimiz",
    load_more_text:"Devamı",
    contact_paragraf:"Aşşağıda Bulunan Kısa Yollardan Hızlı Bir Şekilde Aspolya İçin Rezervasyon Veya Sipariş Verebilirsiniz"
  }
}
localization(messages)

