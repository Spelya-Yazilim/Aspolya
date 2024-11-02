import localization from "../js/localization.js";
import { staticData } from "./static.js";

const messages = {
  en: {
    ...staticData.en,
    submit: "Send",
    message: "Message",
    surname: "Surname",
    name: "Name",
  },
  ar: {
    ...staticData.ar,
    submit: "إرسال",
    message: "رسالة",
    surname: "الكنية",
    name: "الاسم",
  }
}

localization(messages);
