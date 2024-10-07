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
    contact_paragraf:"You can quickly make a reservation or order for Aspolya using the shortcuts below.",
    blog1:`Selimiye Birtat Summer Schedule Announced`,
    blog1_text:`These are the summer fix menus that everyone is eagerly waiting for.`,
    blog2:`Here is the famous Turkish Delight at Birtat`,
    blog2_text:`Interest in Aspolya Turkish Delight Liver, a Place Where All of Turkey Comes and Eats with Love, Has Increased a Lot!`,
    blog3:`Appetizers: Indispensable Table Meals`,
    blog3_text:`Appetizers are one of the elements that best reflect the richness and diversity of Turkish cuisine. These flavors that adorn our tables are consumed both as appetizers and shared with guests before the main meal. Appetizers prepared with different ingredients and preparation methods vary according to each culture and recipe.`,
    blog4:`Wine: Culture, History and Taste`,
    blog4_text:`Wine is one of the oldest beverages in the world with thousands of years of history and rich cultural heritage. Intertwined with art, literature and gastronomy, wine is not just a beverage, but also a cultural product that strengthens human relationships. In this article, we will provide information about wine, its production processes and points to consider when choosing wine.`,
    service1:"Fireside",
    service2:'Soup Man'
  },
  tr: {
  }
}
localization(messages)

