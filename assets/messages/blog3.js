import localization from "../js/localization.js";
import { staticData } from "./static.js";
const messages = {
  en: {
    ...staticData.en,
    blog3_tag1:"#Rhinoplasty",
    blog3_tag2:"#BreathingProblem", 
    blog3:"Breathing is Now Easier with Nose Aesthetics (Rhinoplasty)", 
    blog3_content:"Rhinoplasty is not only an aesthetic intervention, but also an effective solution that eliminates breathing problems.",
  }
}
localization(messages)

