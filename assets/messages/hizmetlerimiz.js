// assets/messages/hizmelerimiz.js
import localization from "../js/localization.js";
import { staticData } from "./static.js";

const messages = {
    en: {
      ...staticData.en,
      title: "Our Services",
      description: "Sac ekimi",
      service1: "Hair Transplant",
      service2: "Cosmetic Surgery",
      service3: "Skin Treatments",
      service4: "Dental Care",
      service5: "Physiotherapy",
      // Add more services as needed
    },
    ar: {
      ...staticData.ar,
      title: "خدماتنا",
      description: "",
      service1: "زراعة الشعر",
      service2: "الجراحة التجميلية",
      service3: "علاجات الجلد",
      service4: "رعاية الأسنان",
      service5: "العلاج الطبيعي",
      // Add more services as needed
    }
  };

localization(messages);
    