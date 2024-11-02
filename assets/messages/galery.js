import localization from "../js/localization.js";
import { staticData } from "./static.js";

const messages = {
  en: {
    ...staticData.en,
    title: "Our Gallery",
    desc: "I don't know"
  },
  ar: {
    ...staticData.ar,
    title: "معرضنا",
    desc: "لا أعرف"
  }
};

localization(messages);
