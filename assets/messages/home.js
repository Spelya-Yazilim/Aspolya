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
    contact_paragraf:"You can quickly make a reservation or order for Aspolya using the shortcuts below.",
    subscribe_text:"By subscribing you can instantly receive news about current news.",
    lastest_blog: 'Latest Blogs',
    rezervasyon: "Make a reservation",
    bilgi: "Get information",
    load_more_text:"Load More",
    service1:"Fireside",
    service2:'Soup Man',
    blog1_tag1:"#HairLoss",
    blog1_tag3:"#HairTransplant",
    blog1_tag2:"#PRPTreatment",
    blog1:"The Most Effective Treatments Against Hair Loss",
    blog1_content:"Hair loss can be a serious concern for both men and women. Hair follicles can be strengthened and hair loss can be stopped with methods such as PRP, hair transplantation and mesotherapy.",
    blog2_tag1:"#TeethWhitening",
    blog2_tag2:"#LaserWhitening",
    blog2_tag3:"#SmileAesthetics",
    blog2:"Teeth Whitening Methods: Which One is Right for You?",
    blog2_content:"Teeth whitening is an effective way of removing teeth decay. It is also a good way to prevent teeth cancer. It is also a good way to prevent gum disease.",
    blog3_tag1:"#Rhinoplasty",
    blog3_tag2:"#BreathingProblem", 
    blog3:"Breathing is Now Easier with Nose Aesthetics (Rhinoplasty)", 
    blog3_content:"Rhinoplasty is not only an aesthetic intervention, but also an effective solution that eliminates breathing problems.",
    blog4_tag1:"##DentalImplant",
    blog4_tag2:"#MissingTooth", 
    blog4_tag3:"#OralHealth", 
    blog4:"Complete Your Missing Teeth with Dental Implants",
    blog4_content:"Dental implants provide natural appearance and function by completing your missing teeth and improving your oral health.",
    blog5_tag1:"#Ringworm",
    blog5_tag2:"#Breaker", 
    blog5_tag3:"#KıranHair",
    blog5:"What is Alopecia Areata and What are the Treatment Methods?",
    blog5_content:"Alopecia areata is a type of hair loss that can occur due to stress, immune system problems or genetic factors. In this disorder, hair loss occurs suddenly in round and circular areas on certain areas of the scalp. Treatment is usually done with methods such as topical medications, cortisone injections or PRP treatment."



  },
  tr: {
  }
}
localization(messages)

