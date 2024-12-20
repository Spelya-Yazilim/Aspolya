import localization from "../js/localization.js";
import { staticData } from "./static.js";
const messages = {
  en: {
    ...staticData.en,
    hero_title: ` Hello <br> 
            <b>Aspolya  &nbsp; Treatment</b>
            <br>Welcome.`,
    subscribe: "Subscribe",
    current: "Current",
    contact_paragraf: "You can quickly make a reservation or order for Aspolya using the shortcuts below.",
    subscribe_text: "By subscribing you can instantly receive news about current news.",
    lastest_blog: 'Latest Blogs',
    rezervasyon: "Make a reservation",
    bilgi: "Get information",
    load_more_text: "Load More",
    yirmisekiz_yillik_deneyim: "28 years of experience",
    hakkimizda: "About Us",
    hizmetlerimiz: "Our Services",
    yorumlarimiz: "Comments",
    yoltarifi: "Directions",
    musterihizmetleri: "Customer Services",
    service1: "Fireside",
    service2: 'Soup Man',
    blog1_tag1: "#HairLoss",
    blog1_tag2: "#PRPTreatment",
    blog1_tag3: "#HairTransplant",
    blog1: "The Most Effective Treatments Against Hair Loss",
    blog1_content: "Hair loss can be a serious concern for both men and women. Hair follicles can be strengthened and hair loss can be stopped with methods such as PRP, hair transplantation and mesotherapy.",
    blog2_tag1: "#TeethWhitening",
    blog2_tag2: "#LaserWhitening",
    blog2_tag3: "#SmileAesthetics",
    blog2: "Teeth Whitening Methods: Which One is Right for You?",
    blog2_content: "Teeth whitening is an effective way of removing teeth decay. It is also a good way to prevent teeth cancer. It is also a good way to prevent gum disease.",
    blog3_tag1: "#Rhinoplasty",
    blog3_tag2: "#BreathingProblem",
    blog3: "Breathing is Now Easier with Nose Aesthetics (Rhinoplasty)",
    blog3_content: "Rhinoplasty is not only an aesthetic intervention, but also an effective solution that eliminates breathing problems.",
    blog4_tag1: "#DentalImplant",
    blog4_tag2: "#MissingTooth",
    blog4_tag3: "#OralHealth",
    blog4: "Complete Your Missing Teeth with Dental Implants",
    blog4_content: "Dental implants provide natural appearance and function by completing your missing teeth and improving your oral health.",
    blog5_tag1: "#Ringworm",
    blog5_tag2: "#Breaker",
    blog5_tag3: "#KıranHair",
    blog5: "What is Alopecia Areata and What are the Treatment Methods?",
    blog5_content: "Alopecia areata is a type of hair loss that can occur due to stress, immune system problems or genetic factors. In this disorder, hair loss occurs suddenly in round and circular areas on certain areas of the scalp. Treatment is usually done with methods such as topical medications, cortisone injections or PRP treatment."
  },
  ar: {
    ...staticData.ar,
    hero_title: `مرحبا <br> 
            <b>علاج أسبوليا</b>
            <br>أهلا بك.`,
    subscribe: "اشترك",
    current: "الحالي",
    contact_paragraf: "يمكنك بسرعة حجز موعد أو طلب لأسبوليا باستخدام الاختصارات أدناه.",
    subscribe_text: "بالاشتراك، يمكنك تلقي الأخبار عن الأخبار الحالية على الفور.",
    lastest_blog: 'أحدث المدونات',
    rezervasyon: "احجز موعدًا",
    bilgi: "احصل على المعلومات",
    load_more_text: "تحميل المزيد",
    yirmisekiz_yillik_deneyim: "28 سنة من الخبرة",
    hakkimizda: "من نحن",
    hizmetlerimiz: "خدماتنا",
    yorumlarimiz: "تعليقاتنا",
    yoltarifi: "الاتجاهات",
    musterihizmetleri: "خدمة العملاء",
    service1: "مدفأة",
    service2: 'رجل الحساء',
    blog1_tag1: "#تساقط_الشعر",
    blog1_tag2: "#علاج_PRP",
    blog1_tag3: "#زرع_الشعر",
    blog1: "أكثر العلاجات فعالية ضد تساقط الشعر",
    blog1_content: "يمكن أن يكون تساقط الشعر مصدر قلق جدي لكل من الرجال والنساء. يمكن تعزيز بصيلات الشعر وإيقاف تساقط الشعر باستخدام طرق مثل PRP وزرع الشعر والعلاج الميزوثيرابي.",
    blog2_tag1: "#تبييض_الأسنان",
    blog2_tag2: "#التبييض_بالليزر",
    blog2_tag3: "#جمال_الابتسامة",
    blog2: "طرق تبييض الأسنان: أي منها يناسبك؟",
    blog2_content: "يعد تبييض الأسنان وسيلة فعالة لإزالة التسوس. كما أنها وسيلة جيدة للوقاية من سرطان الأسنان وأمراض اللثة.",
    blog3_tag1: "#تجميل_الأنف",
    blog3_tag2: "#مشكلة_التنفس",
    blog3: "التنفس أصبح أسهل الآن مع تجميل الأنف (رينوبلاستي)",
    blog3_content: "تجميل الأنف ليس فقط تدخلاً جمالياً، بل هو أيضًا حل فعال يلغي مشاكل التنفس.",
    blog4_tag1: "#زراعة_الأسنان",
    blog4_tag2: "#فقدان_الأسنان",
    blog4_tag3: "#صحة_الفم",
    blog4: "اكمل أسنانك المفقودة بزراعة الأسنان",
    blog4_content: "تقدم زراعة الأسنان مظهراً طبيعياً ووظائف متكاملة بإكمال الأسنان المفقودة وتحسين صحة الفم.",
    blog5_tag1: "#سعفة_الرأس",
    blog5_tag2: "#كسر",
    blog5_tag3: "#كسر_الشعر",
    blog5: "ما هي داء الثعلبة وما هي طرق العلاج؟",
    blog5_content: "داء الثعلبة هو نوع من تساقط الشعر يمكن أن يحدث بسبب التوتر أو مشاكل في الجهاز المناعي أو عوامل وراثية. في هذا الاضطراب، يحدث تساقط الشعر فجأة في مناطق دائرية على فروة الرأس. يتم العلاج عادة بطرق مثل الأدوية الموضعية وحقن الكورتيزون أو علاج PRP."
  }
}
localization(messages);
