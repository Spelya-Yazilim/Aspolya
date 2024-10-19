import localization from "../js/localization.js";
import { staticData } from "./static.js";
const messages = {
  en: {
    ...staticData.en,
    blog4_tag1:"#DentalImplant",
    blog4_tag2:"#MissingTooth", 
    blog4_tag3:"#OralHealth", 
    blog4:"Complete Your Missing Teeth with Dental Implants",
    blog4_content:`Dental implants are an effective dental treatment option that replaces missing teeth and provides a natural appearance and function. With the advantages they provide in terms of oral health and aesthetics, they have become one of the most preferred methods in dentistry today. Dental implants are created with titanium screw-like structures placed in the jawbone and artificial teeth (prosthesis) are placed on them to complete missing teeth. Here are the main advantages offered by dental implants:

Natural Appearance
Dental implants allow individuals to reshape their smiles by restoring dental aesthetics. Implants look and feel like natural teeth, which gives people self-confidence. Achieving a natural appearance in terms of aesthetics is an important factor for many individuals.

Functional Advantages
Missing teeth can negatively affect basic functions such as chewing and speaking. Dental implants restore the functions provided by natural teeth, allowing individuals to chew and speak more comfortably. In addition, dental implants protect the jaw structure by preventing the surrounding teeth from shifting.`
  }
}
localization(messages)

