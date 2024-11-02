import localization from "../js/localization.js";
import { staticData } from "./static.js";
const messages = {
        en: {
          ...staticData.en,
          hero_title: `Working to create a cleaner, greener world`,
          hero_image: "Image from Unsplash",
          contact: "Contact Us",
          service1: "DESIGN-BUILD",
          service2: "EV YENİLEME",
          service3: "CITY SPACES",
          service4: "CIVIL ENGINEERS",
          aboutContext: "Our businesses stretch across construction and regeneration in the built environment.",
          aboutUs: "About Us",
          aboutContent: `Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.`,
          aboutContent2: `Oh feel if up to till like. He an thing rapid these after going drawn or. Timed she his law
                  the spoil round defer. In surprise concerns informed betrayed he learning is ye. Ignorant formerly so ye
                  blessing.`,
          aboutContentParagraph: `He as spoke avoid given downs money on we. Of properly carriage shutters ye as wandered up repeated
                  moreover.`,
          aboutContentService1: `  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
          `,
          aboutContentService2: `  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
          `,
          aboutContentService3: `  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
          `,
          galerySection: `Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Ipsam, perferendis adipisci ad ratione quam quibusdam`,
          aboutTeamTitle: `Our Team About`,
          aboutTeamContent: `Every project is undertaken with innovation, quality and customer expectations at the forefront of our collective minds. Continuous improvement is embedded within our company culture and we strive to exceed customer expectations in quality and response time. We are proud to present our achievements in three major markets.
          `,
          aboutCompany: "About Company",
          aboutCompanyContent: `Oh feel if up to till like. He an thing rapid these after going drawn or.
                  Timed she his law the spoil round defer. In surprise concerns informed betrayed he learning is ye. Ignorant
                  formerly so ye blessing.`,
          aboutCompanyContentParagraph: `He as spoke avoid given downs money on we. Of properly carriage
                  shutters ye as wandered up repeated moreover. `,
          aboutCompanyContent1:`Placerat orci nulla pellentesque dignissim enim sit. Cursus turpis massa tincidunt dui ut
                    ornare lectus. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Accumsan sit
                    amet nulla facilisi morbi tempus iaculis urna. Neque egestas congue quisque egestas diam in arcu.`,
          popupTitle:`Full-Service Engineering`,
          popupContent:`Sample text. Click to select the text box. Click again or double click
                    to start editing the text.`,
          popupButton:`Learn More`,
          submit:"Submit",
          callus:"Call Us",
          ourhours:"Our Hours",
        },
        ar: {
                ...staticData.ar,
          hero_title: `العمل من أجل خلق عالم أنظف وأخضر`,
          hero_image: "صورة من Unsplash",
          contact: "اتصل بنا",
          service1: "تصميم وبناء",
          service2: "تجديد المنزل",
          service3: "المساحات الحضرية",
          service4: "مهندسون مدنيون",
          aboutContext: "تغطي أعمالنا الإنشاءات وإعادة الإعمار في البيئة المبنية.",
          aboutUs: "معلومات عنا",
          aboutContent: `دويس اوت ايرور دولار في ريبرهينديريت في وولوبتات فيليت
                  ايس سيليوم دولار اي يو فويجيت نيلا بارياتور. اكسيبتيور سينت اوكيكات كيبيدتات نون برويدينت، سنت ان كولبا
                  كوي اوفيسيا ديسيرونت موليت انيم ايد ايست لابوروم.`,
          aboutContent2: `أوه يشعر إذا كان يصل إلى مثل. إنه شيء سريع بعد الذهاب أو. يتم توقيتها على قانونها
                  الإفساد الجولة يؤجل. في مفاجأة الشواغل التي أبلغت عنه أنه تعلم نعم. يجهل سابقا نعم نعمة.`,
          aboutContentParagraph: `هو كما تكلم تجنب إعطاء المال على نحن. من المصاريع المناسبة تحريك على النحو المتكرر
                  علاوة على ذلك.`,
          aboutContentService1: `دويس اوت ايرور دولار في ريبرهينديريت في وولوبتات فيليت ايس سيليوم دولار اي يو فويجيت نيلا بارياتور.
                    اكسيبتيور سينت اوكيكات كيبيدتات نون برويدينت، سنت ان كولبا كوي اوفيسيا ديسيرونت موليت انيم ايد ايست
                    لابوروم.`,
          aboutContentService2: `دويس اوت ايرور دولار في ريبرهينديريت في وولوبتات فيليت ايس سيليوم دولار اي يو فويجيت نيلا بارياتور.
                    اكسيبتيور سينت اوكيكات كيبيدتات نون برويدينت، سنت ان كولبا كوي اوفيسيا ديسيرونت موليت انيم ايد ايست
                    لابوروم.`,
          aboutContentService3: `دويس اوت ايرور دولار في ريبرهينديريت في وولوبتات فيليت ايس سيليوم دولار اي يو فويجيت نيلا بارياتور.
                    اكسيبتيور سينت اوكيكات كيبيدتات نون برويدينت، سنت ان كولبا كوي اوفيسيا ديسيرونت موليت انيم ايد ايست
                    لابوروم.`,
          galerySection: `لوريم ايبسوم دولار سيت أميت، كونسكتتور أديبيسكيينغ
                إيليت. إيبسام، بيرفيرينديس أديبيسكي أديبيسكي أدي راشيون كوام كويبوسدام`,
          aboutTeamTitle: `فريقنا`,
          aboutTeamContent: `كل مشروع يتم تنفيذه بالابتكار والجودة وتوقعات العملاء في طليعة أفكارنا الجماعية. التحسين المستمر مضمن في ثقافة شركتنا ونسعى جاهدين لتجاوز توقعات العملاء في الجودة ووقت الاستجابة. نحن فخورون بتقديم إنجازاتنا في ثلاثة أسواق رئيسية.`,
          aboutCompany: "حول الشركة",
          aboutCompanyContent: `أوه يشعر إذا كان يصل إلى مثل. إنه شيء سريع بعد الذهاب أو. يتم توقيتها على قانونها
                  الإفساد الجولة يؤجل. في مفاجأة الشواغل التي أبلغت عنه أنه تعلم نعم. يجهل سابقا نعم نعمة.`,
          aboutCompanyContentParagraph: `هو كما تكلم تجنب إعطاء المال على نحن. من المصاريع المناسبة تحريك على النحو المتكرر
                  علاوة على ذلك.`,
          aboutCompanyContent1: `بلاسرات اوركي نيلا بينينيكويل دينيجميم اينيم سيت. كرسيس تيربيس ماسا تينسيندونت دوى يوت
                    اورناري ليكتوس. التريسس مي تمبوس امبيردييت نيلا مالسادا بينينيكويلي إيليت ايجيت جرافيدا. أكومسان سيت
                    أميت نيلا فيسيليسي موربي تيمبوس ياكيوليس اورنا. نيكا اجيستياس كونجي كويشجي اجيستياس ديام في اركو.`,
          popupTitle: `خدمة هندسية شاملة`,
          popupContent: `نص تجريبي. انقر لتحديد مربع النص. انقر مرة أخرى أو انقر مرتين
                    لبدء تحرير النص.`,
          popupButton: `اعرف المزيد`,
          submit: "إرسال",
          callus: "اتصل بنا",
          ourhours: "ساعات العمل",
        }
      };
      
      localization(messages);
      