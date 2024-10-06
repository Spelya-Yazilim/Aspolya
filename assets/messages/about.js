import localization from "../js/localization.js";
import { staticData } from "./static.js";
const messages = {
  en: {
   ...staticData.en,
   content1:` Birtat Meyhanesi was founded in 1956 by İhsan Solmaz in the cute neighborhood of Selimiye in Üsküdar. At that time, this small family business, which offered its guests a friendly and warm atmosphere in the quiet atmosphere of the neighborhood, quickly became a place much loved by the people living in the area and customers from other neighborhoods.`,
  content2:`Located right across from the Selimiye Mosque and Selimiye Barracks, this family tavern has become one of the important symbols of the region over the years. However, due to legal regulations and license changes, it was forced to close its original location in Selimiye towards the end of 2003. The Birtat family overcame this process by opening its first branch in Kadıköy and continued to provide service there. The lively and dynamic atmosphere of Kadıköy brought a new breath to the business.`,
  content3:`As of today, Birtat Meyhanesi serves its guests not only in Kadıköy but also in Koşuyolu. With its traditional flavors, nostalgic texture and warm family atmosphere, it has become an indispensable place for generations of regulars. Especially the family ties that have not changed since Selimiye and the customer-oriented service approach are the cornerstones of the tavern's success.`,
  content4:`As the Birtat family, we aim not only to serve delicious food, but also to create unforgettable memories for our guests. Our mission for years is to make every customer feel like a member of our family and to carry that nostalgic atmosphere in Selimiye to new generations.`
  },
  tr: {
    ...staticData.tr
  }
}
localization(messages)

