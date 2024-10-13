import localization from "../js/localization.js";
import { staticData } from "./static.js";
const messages = {
  en: {
   ...staticData.en,
   submit:"Send",
   message:"Message",
   surname:"Surname",
   name:"Name",
  }
}
localization(messages)

