import localization from "../js/localization.js";
import { staticData } from "./static.js";
const messages = {
  en: {
    ...staticData.en,
  },
  tr: {
    ...staticData.tr,
  }
}
localization(messages)

