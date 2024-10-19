import localization from "../js/localization.js";
import { staticData } from "./static.js";
const messages = {
  en: {
   ...staticData.en,
   title:"FAQ",
   faq_question1:"What is Aspolya?",
   faq_answer1:"I don't know",
   faq_question2: "What to do Aspolya?",
   faq_answer2:"I don't know",
   faq_question3:"What causes hair loss?",
   faq_answer3:"Factors such as genetics, stress, hormones and nutritional deficiencies can cause hair loss.",
   faq_question4:"Is teeth whitening safe?",
   faq_answer4:"Whitening performed by a professional dentist is safe.",
   faq_question5:"What is the difference between PRP and hair transplantation?",
   faq_answer5:"PRP is used to treat hair loss. Hair transplantation is used to treat hair loss"





  }
}
localization(messages)

