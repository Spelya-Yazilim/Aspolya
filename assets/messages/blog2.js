import localization from "../js/localization.js";
import { staticData } from "./static.js";
const messages = {
  en: {
    ...staticData.en,
    blog2_tag1:"#TeethWhitening",
    blog2_tag2:"#LaserWhitening",
    blog2_tag3:"#SmileAesthetics",
    blog2:"Teeth Whitening Methods: Which One is Right for You?",
    blog2_content:"Teeth whitening is an effective way of removing teeth decay. It is also a good way to prevent teeth cancer. It is also a good way to prevent gum disease.",
  },
  tr: {
    
  }
}
localization(messages)

