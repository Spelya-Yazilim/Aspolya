import localization from "../js/localization.js";
import { staticData } from "./static.js";

const messages = {
  en: {
    ...staticData.en,
    title: "FAQ",
    faq_question1: "What is Aspolya?",
    faq_answer1: "I don't know",
    faq_question2: "What to do Aspolya?",
    faq_answer2: "I don't know",
    faq_question3: "What causes hair loss?",
    faq_answer3: "Factors such as genetics, stress, hormones, and nutritional deficiencies can cause hair loss.",
    faq_question4: "Is teeth whitening safe?",
    faq_answer4: "Whitening performed by a professional dentist is safe.",
    faq_question5: "What is the difference between PRP and hair transplantation?",
    faq_answer5: "PRP is used to treat hair loss. Hair transplantation is used to treat hair loss."
  },
  ar: {
    ...staticData.ar,
    title: 
    "الأسئلة الشائعة",
    faq_question1: "ما هو أسفوليا؟",
    faq_answer1: "لا أعرف",
    faq_question2: "ماذا تفعل أسفوليا؟",
    faq_answer2: "لا أعرف",
    faq_question3: "ما الذي يسبب تساقط الشعر؟",
    faq_answer3: "يمكن أن تتسبب عوامل مثل الوراثة، والإجهاد، والهرمونات، ونقص العناصر الغذائية في تساقط الشعر.",
    faq_question4: "هل تبييض الأسنان آمن؟",
    faq_answer4: "التبييض الذي يقوم به طبيب أسنان محترف آمن.",
    faq_question5: "ما الفرق بين PRP وزراعة الشعر؟",
    faq_answer5: "يستخدم PRP لعلاج تساقط الشعر. بينما تستخدم زراعة الشعر لعلاج تساقط الشعر."
  }
};

localization(messages);
