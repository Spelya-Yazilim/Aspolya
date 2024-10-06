import localization from "../js/localization.js";
import { staticData } from "./static.js";
const messages = {
  en: {
   ...staticData.en,
   content1:`  Birtat Meyhanesi, 1956 yılında Üsküdar'ın şirin mahallesi Selimiye'de İhsan Solmaz tarafından kurulmuştur. O dönemde, 
        mahallenin sakin atmosferinde misafirlerine samimi ve sıcak bir ortam sunan bu küçük aile işletmesi, kısa sürede çevrede 
        yaşayanlar ve diğer semtlerden gelen müşteriler tarafından çok sevilen bir mekan haline gelmiştir.`,
  content2:`Konum olarak Selimiye Camii ile Selimiye Kışlası'nın hemen karşısında bulunan bu aile meyhanesi, yıllar boyunca bölgenin 
        önemli simgelerinden biri haline gelmiştir. Ancak yasal düzenlemeler ve ruhsat değişiklikleri nedeniyle, Selimiye'deki 
        orijinal mekanını 2003 yılı sonlarına doğru kapatmak zorunda kalmıştır. Birtat ailesi bu süreci Kadıköy'de ilk şubesini 
        açarak atlatmış ve burada hizmet vermeye devam etmiştir. Kadıköy'ün canlı ve dinamik atmosferi, işletmeye yeni bir soluk 
        getirmiştir.`,
  content3:`Bugün itibariyle, Birtat Meyhanesi sadece Kadıköy'de değil, aynı zamanda Koşuyolu'ndaki şubesiyle de misafirlerine 
        hizmet vermektedir. Geleneksel lezzetleri, nostaljik dokusu ve sıcak aile ortamıyla, kuşaklar boyunca müdavimlerin 
        vazgeçilmezi olmuştur. Özellikle Selimiye'den bu yana değişmeyen aile bağları ve müşteri odaklı hizmet anlayışı, 
        meyhanenin başarısının temel taşlarıdır`,
  content4:` Birtat ailesi olarak, sadece lezzetli yemekler sunmayı değil, aynı zamanda misafirlerimize unutulmaz anılar yaşatmayı 
        hedefliyoruz. Yıllardır süregelen misyonumuz, her gelen müşterimizi ailemizden biri gibi hissettirmek ve Selimiye'deki 
        o nostaljik ortamı yeni nesillere de taşımaktır.`
  },
  tr: {
    ...staticData.tr
  }
}
localization(messages)

