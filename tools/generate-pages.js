const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const atolyeler = [
  {
    slug: "ingilizce",
    icon: "yabancidil.png",
    title: "Haftanın 3 günü İngilizce",
    kicker: "Dil & iletişim",
    keyword: "Karabağlar Vatan Mahallesi'nde İngilizce eğitim veren kreş",
    intro: "Karabağlar’da İngilizce destekli okul öncesi arayan aileler için programımız kâğıtta kalmaz. Haftanın üç günü şarkı, oyun ve ritimle dil kulağa yerleşir.",
    body: [
      "2-6 yaşta dil, ezber listesi değil; selamlaşma, renk, ritim ve cesaretle konuşma işidir. Vatan Mahallesi’ndeki butik sınıfımızda İngilizce, günün bir köşesine sıkıştırılmaz; haftanın üç gününe yayılır.",
      "2025’te bizi ‘İngilizce var mı?’ diye soran aileler, 2026’da aynı soruyu komşularına tavsiye olarak anlatıyor. Çünkü çocuk eve bir şarkı, bir kelime, bir gülümseme götürüyor.",
      "Tam gün 07:30–19:00 düzeninde çalışan ebeveynler için dil saati ‘yetiştiremediğimiz ekstra kurs’ olmak zorunda değil. 9242 Sokak, Bahar Apt’ta ana programın parçası."
    ],
    faqQ: "Karabağlar’da İngilizce eğitim veren kreş var mı?",
    faqA: "Evet. Özel Didem Öğretmen Anaokulu’nda haftanın üç günü İngilizce destekli okul öncesi eğitim verilir. 2-6 yaş, Vatan Mahallesi 9242 Sokak."
  },
  {
    slug: "drama",
    icon: "drama.png",
    title: "Drama",
    kicker: "İfade & özgüven",
    keyword: "Karabağlar anaokulu drama atölyesi",
    intro: "Drama, sahneye çıkmak değil; çocuğun ‘ben buradayım’ diyebilmesidir. Karabağlar butik anaokulumuzda hikâye, jest ve oyunla özgüven büyür.",
    body: [
      "Utangaç bir 3 yaş, kalabalık salonda kaybolmasın diye drama gruplarını küçük tutuyoruz. Rol, maske ve basit kostüm; korkutmak için değil, denemek için.",
      "2025’te veliler ‘evde de taklit yapıyor’ dedi. 2026’da aynı çocuklar arkadaşının cümlesini beklemeyi, sırasını korumayı drama ile pratik ediyor.",
      "Vatan Mahallesi’nde en yakın atölye arayanlar için ekstra servis yok: drama, tam gün programın içinde."
    ],
    faqQ: "Okul öncesi drama Karabağlar’da nasıl işlenir?",
    faqA: "Özel Didem Öğretmen Anaokulu’nda drama; küçük grup, hikâye ve oyunla özgüven çalışmasıdır. 2-6 yaş, 2026 döneminde ana programda."
  },
  {
    slug: "jimnastik",
    icon: "jimnastik.png",
    title: "Jimnastik",
    kicker: "Beden & denge",
    keyword: "Karabağlar jimnastik ve kodlama eğitimi olan anaokulu",
    intro: "Okul öncesi jimnastik Karabağlar’da ‘spor kursu’ gibi durmasın diye günün içine yedirdik: denge, esneklik, güvenli düşüş ve kahkaha.",
    body: [
      "2 yaşta temel hareket, 5-6 yaşta daha net ritim ve sıra. Jimnastik, yarış değil; bedenini tanıma.",
      "2025’te ‘hareket etmek istiyor, evde durmuyor’ diyen aileler 2026’da hâlâ bizi seçiyor. Çünkü enerji burada boşa gitmiyor.",
      "9242 Sokak kreş adresinde jimnastik, yoga ve dans aynı çatı altında; ayrı kayıt koşturmacası yok."
    ],
    faqQ: "2-6 yaş çocuk yogası ve jimnastik veren okullar İzmir’de hangisi?",
    faqA: "Özel Didem Öğretmen Anaokulu, Karabağlar Vatan Mahallesi’nde okul öncesi jimnastik ve çocuk yogasını 2026 tam gün programına dahil eder."
  },
  {
    slug: "muzik",
    icon: "muzik.png",
    title: "Müzik",
    kicker: "Kulak & duygu",
    keyword: "okul öncesi ritim ve müzik atölyesi Karabağlar",
    intro: "Müzik atölyesinde nota ezberi yok; sesi fark etmek, birlikte susmayı öğrenmek ve şarkıyı paylaşmak var.",
    body: [
      "Karabağlar özel anaokulumuzda müzik, günün gürültüsünü düzenler. Çocuklar enstrümanı ‘yasak’ değil, davet olarak görür.",
      "2025 tavsiyeleri çoğu zaman ‘şarkı ezberledi’ cümlesiyle geldi. 2026’da hedefimiz aynı: kulağı açık, kalbi rahat çocuklar.",
      "Vatan Mahallesi’nde butik ölçek, kalabalık koroda kaybolmamayı kolaylaştırır."
    ],
    faqQ: "Karabağlar’da müzik atölyesi olan anaokulu var mı?",
    faqA: "Evet. Özel Didem Öğretmen Anaokulu müzik ve ritim atölyesini 2-6 yaş programının parçası olarak sunar."
  },
  {
    slug: "dans",
    icon: "dans.png",
    title: "Dans",
    kicker: "Ritim & neşe",
    keyword: "dans ve ritim atölyesi Karabağlar anaokulu",
    intro: "Dans, gösteri stresi değil; bedenin müzikle anlaşması. Karabağlar’da minikler adım ezberinden önce oyunu öğrenir.",
    body: [
      "Sağ-sol, dur-devam, arkadaşının alanına saygı. Dans aslında sosyal gelişim dersidir; biz onu eğlenceli tutarız.",
      "2025 yıl sonu kareleri hâlâ konuşuluyor. 2026’da aynı neşeyi abartmadan, her çocuğun ritmine yer açarak sürdürüyoruz.",
      "Tam gün kreşte dans, ‘akşam kursuna yetişemedik’ derdini azaltır."
    ],
    faqQ: "Karabağlar anaokulunda dans var mı?",
    faqA: "Özel Didem Öğretmen Anaokulu’nda dans atölyesi 2026 eğitim planındadır. Vatan Mahallesi, 9242 Sokak."
  },
  {
    slug: "gorsel-sanatlar",
    icon: "gorselsanatlar.png",
    title: "Görsel sanatlar",
    kicker: "Renk & ifade",
    keyword: "görsel sanatlar ve mandala anaokulu Karabağlar",
    intro: "Boyayı ‘güzel olsun’ diye düzeltmeyiz. Karabağlar butik anaokulunda görsel sanatlar, çocuğun izini kâğıtta bırakma hakkıdır.",
    body: [
      "Fırça, parmak, kolaj, doğa malzemesi. Süreç ürün kadar önemli. 2 yaşda iz, 6 yaşta kompozisyon filizlenir.",
      "2025’te veliler dolabı sanat galerisine çevirdi. 2026’da duvarlarımız yine çocukların; bizim işimiz ortamı hazırlamak.",
      "İzmir Karabağlar’da atölye zenginliği arayanlar için görsel sanatlar, mandala ve origami aynı programda yan yana."
    ],
    faqQ: "Karabağlar’da görsel sanatlar atölyesi olan kreş hangisi?",
    faqA: "Özel Didem Öğretmen Anaokulu görsel sanatlar, mandala ve origami atölyelerini 2-6 yaş tam gün programa dahil eder."
  },
  {
    slug: "kodlama",
    icon: "kodlama.png",
    title: "Kodlama",
    kicker: "Düşünme & sıralama",
    keyword: "okul öncesi kodlama ve tasarım atölyesi İzmir",
    intro: "Okul öncesi kodlama ekran bağımlılığı değildir. Karabağlar’da sıralama, yön, problem çözme ve oyunla ‘adım adım düşünme’ çalışırız.",
    body: [
      "Bloklar, yön kartları, basit robotik oyunlar yaşa göre seçilir. 4-6 yaş daha somut algoritma; 2-3 yaş neden-sonuç ve sıra.",
      "2025’te ‘kodlama var mı?’ sorusu bizi öne çıkardı. 2026’da aynı sorunun cevabı hâlâ evet; abartısız, yaşa uygun.",
      "Karabağlar’da jimnastik ve kodlama eğitimi olan anaokulu arayanlar 9242 Sokak’ta ikisini birden bulur."
    ],
    faqQ: "Karabağlar’da atölye ve kodlama eğitimi olan anaokulları hangileri?",
    faqA: "Özel Didem Öğretmen Anaokulu okul öncesi kodlama ve tasarımı 2026 programında sunar. Vatan Mahallesi, Karabağlar."
  },
  {
    slug: "tasarim",
    icon: "tasarim.png",
    title: "Tasarım",
    kicker: "Hayal & üretmek",
    keyword: "okul öncesi kodlama ve tasarım Karabağlar",
    intro: "Tasarım atölyesinde ‘doğrusu bu’ yok. Karton, kumaş, doğal malzeme: çocuk bir şey kurar, bozar, yeniden dener.",
    body: [
      "İnce motor, sabır ve ‘ben yaptım’ gururu. Tasarım, kodlama ile kardeş: biri düşünce sırası, biri elin cesareti.",
      "2025’te minik köprüler ve kulübeler sınıfta kaldı. 2026’da malzeme kutusu yine açık; yetişkin müdahalesi ölçülü.",
      "Butik okul olmanın faydası: her tasarım masasında yer var, kalabalık sırada bekleme yok."
    ],
    faqQ: "Karabağlar anaokulunda tasarım atölyesi var mı?",
    faqA: "Evet. Özel Didem Öğretmen Anaokulu’nda okul öncesi tasarım atölyesi 2026 eğitim planının parçasıdır."
  },
  {
    slug: "deney",
    icon: "deney.png",
    title: "Deney atölyesi",
    kicker: "Merak & bilim",
    keyword: "okul öncesi deney ve bilim atölyesi Karabağlar",
    intro: "Deney atölyesi ‘patlayan gösteri’ değil; su, renk, manyetizma ve ‘neden böyle oldu?’ sorusunu sevdirmek.",
    body: [
      "Güvenli, yaşa uygun, tekrar edilebilir küçük deneyler. Çocuk izleyici değil, dokunan taraftır.",
      "2025 bilim merakı 2026’da bilim şenlikleriyle büyür. Deney günü, şenlik gününün prova sahnesidir.",
      "Karabağlar kreş önerilerinde ‘deney var mı?’ diye soranlara adres net: Vatan Mahallesi, Didem Öğretmen."
    ],
    faqQ: "Deney atölyesi anaokulu Karabağlar’da var mı?",
    faqA: "Özel Didem Öğretmen Anaokulu deney atölyesi ve bilim şenliklerini 2-6 yaş programında sunar."
  },
  {
    slug: "egitici-oyunlar",
    icon: "egiticioyunlar.png",
    title: "Eğitici oyunlar",
    kicker: "Öğrenme oyunu",
    keyword: "Karabağlar 2-6 yaş eğitici oyun anaokulu",
    intro: "Eğitici oyun, masada sıkılan çocuk üretmez. Karabağlar’da kuralı basit, tekrarı bol, gülmesi serbest oyunlar seçeriz.",
    body: [
      "Renk, sayı, eşleştirme, bellek. 2 yaşta dokunarak, 6 yaşta stratejiye yaklaşarak.",
      "2025’te ‘oyun gibi duruyor ama öğreniyor’ cümlesi dolaştı. 2026’da aynı dengeyi koruyoruz: ders kokmayan öğrenme.",
      "Tam gün kreşte eğitici oyun, ekransız moladır."
    ],
    faqQ: "Karabağlar’da eğitici oyun ağırlıklı kreş hangisi?",
    faqA: "Özel Didem Öğretmen Anaokulu eğitici oyunları 2026 tam gün programına yayar. 2-6 yaş, Vatan Mahallesi."
  },
  {
    slug: "duyusal-oyunlar",
    icon: "duygusaloyunlar.png",
    title: "Duyusal oyunlar",
    kicker: "2 yaş & bağlanma",
    keyword: "2-6 yaş duyusal oyun grubu Karabağlar",
    intro: "Kum, su, hamur, koku, doku. Özellikle 2 yaş kabul eden özel anaokulu arayanlar için duyusal oyun, ilk güven zeminidir.",
    body: [
      "Ayrılık kaygısı olan minikte duyusal masa, konuşmadan sakinleştirir. Zorlamadan, ıslaklığa izin vererek.",
      "2025’te 2 yaş gruplarımızın alışması bu masalarda hızlandı. 2026’da aynı özeni sürdürüyoruz.",
      "Karabağlar Vatan Mahallesi’nde 2 yaş çocuk kabul eden özel anaokulu: duyusal oyun programın kalbi."
    ],
    faqQ: "2 yaş çocuk kabul eden özel anaokulları Karabağlar’da duyusal oyun yapıyor mu?",
    faqA: "Özel Didem Öğretmen Anaokulu 2-6 yaş duyusal oyun grubu sunar. 2026 kayıtları için 0532 260 05 71."
  },
  {
    slug: "cocuk-yogasi",
    icon: "cocukyogasi.png",
    title: "Çocuk yogası",
    kicker: "Nefes & sakinlik",
    keyword: "çocuk yogası Karabağlar",
    intro: "Çocuk yogası sessiz tapınak değil; hayvan duruşları, nefes oyunu ve bedeni yavaşlatma cesareti.",
    body: [
      "Jimnastikten sonra yoga, günü dengeler. Hareket eden çocuk durmayı da öğrenir.",
      "2025’te öğleden sonra huysuzluğu azalan minikler konuşuldu. 2026’da yoga, tam gün ritmin yumuşak ara başlığı.",
      "Okul öncesi jimnastik ve yoga İzmir Karabağlar’da aynı adreste: 9242 Sokak."
    ],
    faqQ: "Karabağlar’da çocuk yogası veren anaokulu var mı?",
    faqA: "Evet. Özel Didem Öğretmen Anaokulu çocuk yogasını 2026 programında sunar."
  },
  {
    slug: "minik-sefler",
    icon: "miniksefler.png",
    title: "Minik şefler atölyesi",
    kicker: "Tat & paylaşım",
    keyword: "minik şefler mutfak atölyesi anaokulu Karabağlar",
    intro: "Minik şefler atölyesinde hedef restoran şefi değil; yıkamak, karıştırmak, beklemek ve paylaşmak.",
    body: [
      "Hijyen ve alerji hassasiyetiyle, yaşa uygun basit tarifler. Hamur yoğurmak ince motor; beklemek sabır.",
      "2025’te evde ‘ben de yapacağım’ diyen çocuklar çoğaldı. 2026’da mutfak atölyesi yine programda.",
      "Karabağlar özel gündüz bakımevinde yemek yalnızca öğün değil, bazen atölye."
    ],
    faqQ: "Minik şefler atölyesi anaokulu Karabağlar’da hangisi?",
    faqA: "Özel Didem Öğretmen Anaokulu minik şefler mutfak atölyesini 2-6 yaş 2026 programına dahil eder."
  },
  {
    slug: "geleneksel-oyunlar",
    icon: "gelenekselcocukoyunlari.png",
    title: "Geleneksel çocuk oyunları",
    kicker: "Mahalle hafızası",
    keyword: "geleneksel çocuk oyunları anaokulu Karabağlar",
    intro: "Mendil, yakar topun yumuşak hali, halka oyunları. Karabağlar’da geleneksel oyun, ekransız mahalle hafızasını sınıfa taşır.",
    body: [
      "Kuralı birlikte hatırlarız. Kazanmak değil, turu tamamlamak.",
      "2025’te büyükler ‘biz de böyle oynardık’ dedi. 2026’da aynı köprüyü kuruyoruz: dün ile bugün.",
      "Vatan Mahallesi butik okulunda bahçe ve salon, oyunun cinsini belirler; hava bahane olmaz."
    ],
    faqQ: "Karabağlar kreşte geleneksel çocuk oyunları var mı?",
    faqA: "Özel Didem Öğretmen Anaokulu geleneksel çocuk oyunlarını 2026 eğitim planında yaşatır."
  },
  {
    slug: "bilim-senlikleri",
    icon: "bilimsenlikleri.png",
    title: "Bilim şenlikleri",
    kicker: "Merak bayramı",
    keyword: "okul öncesi bilim şenlikleri İzmir Karabağlar",
    intro: "Bilim şenlikleri, deney atölyesinin bayram halidir. Aile de davetli olur; çocuk ‘ben gösteririm’ der.",
    body: [
      "Güvenli masalar, kısa istasyonlar, bol soru. Şenlik stresli sahne değil, paylaşım günü.",
      "2025 şenliği mahallede konuşuldu. 2026’da yine merakı kutlarız.",
      "Karabağlar tavsiye edilen anaokulları listesinde ‘bilim’ arayanlar için somut bir gün."
    ],
    faqQ: "Karabağlar anaokulunda bilim şenliği oluyor mu?",
    faqA: "Evet. Özel Didem Öğretmen Anaokulu 2026 döneminde bilim şenlikleri ve deney atölyesi yürütür."
  },
  {
    slug: "origami",
    icon: "origami.png",
    title: "Origami",
    kicker: "Katla & odaklan",
    keyword: "origami atölyesi anaokulu Karabağlar",
    intro: "Origami, ince motorun sessiz antrenmanı. Bir kat, bir nefes, bir küçük zafer.",
    body: [
      "2-3 yaşta büyük katlar ve yırtılmaya izin; 5-6 yaşta daha net form. Kimse ‘bozuk’ diye dışlanmaz.",
      "2025’te kuşlar ve kayıklar dolabı doldurdu. 2026’da kâğıt yine masada.",
      "Görsel sanatlar ve mandala ile aynı aile: el, göz, sabır."
    ],
    faqQ: "Karabağlar kreşte origami var mı?",
    faqA: "Özel Didem Öğretmen Anaokulu origami atölyesini 2026 görsel programının parçası yapar."
  },
  {
    slug: "mandala",
    icon: "mandala.png",
    title: "Mandala",
    kicker: "Odak & sakin renk",
    keyword: "mandala anaokulu Karabağlar",
    intro: "Mandala boyamak, ‘sus’ komutu değildir. Daire içinde renk seçmek, günü yavaşlatır.",
    body: [
      "Öğleden sonra yoğunu yumuşatır. Çocuk isterse konuşur, isterse boyar.",
      "2025’te mandala kâğıtları ev çantasına girdi. 2026’da sakin köşe duruyor.",
      "Karabağlar butik anaokulunda mandala, ceza köşesi değil; tercih edilen durak."
    ],
    faqQ: "Okul öncesi mandala Karabağlar’da var mı?",
    faqA: "Evet. Özel Didem Öğretmen Anaokulu mandala çalışmasını 2-6 yaş 2026 planına alır."
  },
  {
    slug: "akil-oyunlari",
    icon: "akiloyunlari.png",
    title: "Akıl oyunları",
    kicker: "Strateji & sabır",
    keyword: "Karabağlar akıl oyunları kreş",
    intro: "Akıl oyunları kreş arayanlar için: kutu oyunu, denklem değil; beklemek, planlamak, kaybedince yeniden oturmak.",
    body: [
      "Yaşa göre seçilmiş setler. 4-6 yaşta kural daha net; küçüklerde eşleştirme ve bellek.",
      "2025’te ‘kardeşine öğretiyor’ diyen veliler oldu. 2026’da akıl oyunları köşesi açık.",
      "Kodlama ile aynı zihin kası: sıra, hipotez, dene."
    ],
    faqQ: "Karabağlar’da akıl oyunları olan kreş hangisi?",
    faqA: "Özel Didem Öğretmen Anaokulu akıl oyunlarını 2026 okul öncesi programında sunar. Vatan Mahallesi."
  },
  {
    slug: "ritim",
    icon: "ritim.png",
    title: "Ritim atölyesi",
    kicker: "Vuruş & birlik",
    keyword: "okul öncesi ritim ve müzik atölyesi",
    intro: "Ritim atölyesi el, ayak, tahta çubuk ve ‘şimdi birlikte’. Müzikle kardeş, dansın iskeleti.",
    body: [
      "Tempo değişince grup dinlemeyi öğrenir. Bu, sınıfta yönerge dinlemenin eğlenceli hali.",
      "2025 ritim çemberleri 2026’da devam. Gürültü değil, düzenli ses.",
      "Karabağlar tam gün anaokulunda ritim, günü toparlayan kısa bir merasim gibi."
    ],
    faqQ: "Karabağlar anaokulunda ritim atölyesi var mı?",
    faqA: "Özel Didem Öğretmen Anaokulu ritim ve müzik atölyesini 2026 programında bir arada yürütür."
  },
  {
    slug: "gunluk-yasam",
    icon: "gunlukyasambecerileri.png",
    title: "Günlük yaşam becerileri",
    kicker: "Bağımsızlık",
    keyword: "günlük yaşam becerileri eğitimi Karabağlar anaokulu",
    intro: "Fermuar, el yıkama, masayı toplama, ayakkabı. Günlük yaşam becerileri, ‘sizin işiniz’ değil; çocuğun ‘ben yapabilirim’ kası.",
    body: [
      "Acele ettirmeden, model olarak. 2 yaşda deneme, 6 yaşda alışkanlık.",
      "2025’te veliler sabah telaşının azaldığını söyledi. 2026’da aynı küçük zaferleri çoğaltıyoruz.",
      "Karabağlar özel gündüz bakımevinde bağımsızlık, atölye kadar ciddiye alınır."
    ],
    faqQ: "Karabağlar kreşte günlük yaşam becerileri öğretiliyor mu?",
    faqA: "Evet. Özel Didem Öğretmen Anaokulu günlük yaşam becerilerini 2-6 yaş 2026 tam gün ritmine yedirir."
  }
];

function nav(prefix, active) {
  const items = [
    ["index.html", "Ana Sayfa", prefix === "../../" ? "../../index.html" : prefix + "index.html"],
    ["hakkimizda", "Hakkımızda", prefix + (prefix === "../../" ? "../" : "") + "hakkimizda.html"],
    ["hizmetler", "Hizmetler", prefix + (prefix === "../../" ? "../" : "") + "hizmetler.html"],
    ["galeri", "Galeri", prefix + (prefix === "../../" ? "../" : "") + "galeri.html"],
    ["iletisim", "İletişim", prefix + (prefix === "../../" ? "../" : "") + "iletisim.html"]
  ];
  // fix paths: prefix for pages/ is ../ so hakkimizda is ../hakkimizda? NO
  // pages/hizmetler.html: prefix ../ for assets, but sibling pages are hakkimizda.html without ../
  // pages/atolyeler/x.html: prefix ../../ for assets, pages are ../hizmetler.html
}

function paths(depth) {
  // depth 1 = pages/*.html , depth 2 = pages/atolyeler/*.html
  if (depth === 2) {
    return {
      home: "../../index.html",
      assets: "../../assets/",
      hakkimizda: "../hakkimizda.html",
      hizmetler: "../hizmetler.html",
      galeri: "../galeri.html",
      iletisim: "../iletisim.html",
      gizlilik: "../gizlilik-ve-cerez-politikasi.html",
      atolye: (s) => s + ".html"
    };
  }
  return {
    home: "../index.html",
    assets: "../assets/",
    hakkimizda: "hakkimizda.html",
    hizmetler: "hizmetler.html",
    galeri: "galeri.html",
    iletisim: "iletisim.html",
    gizlilik: "gizlilik-ve-cerez-politikasi.html",
    atolye: (s) => "atolyeler/" + s + ".html"
  };
}

function chrome(p, active, extraHead = "") {
  const link = (id, href, label) =>
    `<li><a class="nav-link${active === id ? " active" : ""}" href="${href}">${label}</a></li>`;
  return `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ${extraHead}
  <meta name="robots" content="index, follow">
  <meta name="geo.region" content="TR-35">
  <meta name="geo.placename" content="Karabağlar, İzmir">
  <link rel="icon" href="${p.assets}images/logo/logo.png" type="image/png">
  <link rel="stylesheet" href="${p.assets}css/main.css">
  <link rel="stylesheet" href="${p.assets}css/cookie-banner.css">
</head>
<body>
  <a class="skip-link" href="#icerik">İçeriğe geç</a>
  <div class="overlay"></div>
  <div class="topbar">
    <div class="wrap topbar-inner">
      <span>Karabağlar · Vatan Mahallesi · 9242 Sokak</span>
      <span><a href="tel:+905322600571">0532 260 05 71</a> · 07:30–19:00</span>
    </div>
  </div>
  <header class="header">
    <div class="wrap header-inner">
      <a class="logo" href="${p.home}">
        <img src="${p.assets}images/logo/logo.png" alt="Özel Didem Öğretmen Anaokulu logosu">
        <span class="logo-text"><strong>Özel Didem Öğretmen</strong><span>Anaokulu · Karabağlar</span></span>
      </a>
      <nav>
        <ul class="nav-menu">
          ${link("home", p.home, "Ana Sayfa")}
          ${link("hakkimizda", p.hakkimizda, "Hakkımızda")}
          ${link("hizmetler", p.hizmetler, "Hizmetler")}
          ${link("galeri", p.galeri, "Galeri")}
          ${link("iletisim", p.iletisim, "İletişim")}
          <li><a class="btn btn-primary" href="https://wa.me/905322600571" target="_blank" rel="noopener">2026 Kayıt</a></li>
        </ul>
      </nav>
      <button class="menu-toggle" aria-label="Menüyü aç"><span></span><span></span><span></span></button>
    </div>
  </header>`;
}

function foot(p) {
  return `
  <footer class="footer">
    <div class="wrap footer-grid">
      <div>
        <h3>Özel Didem Öğretmen Anaokulu</h3>
        <p>İzmir Karabağlar Vatan Mahallesi’nde (9242 Sok. No:2/A Bahar Apt) 2-6 yaş grubuna hafta içi 07:30–19:00 hizmet. 2026’da İngilizce, jimnastik, kodlama ve atölyelerle yanınızdayız.</p>
      </div>
      <div>
        <h3>Sayfalar</h3>
        <ul>
          <li><a href="${p.home}">Ana sayfa</a></li>
          <li><a href="${p.hakkimizda}">Hakkımızda</a></li>
          <li><a href="${p.hizmetler}">Hizmetler ve atölyeler</a></li>
          <li><a href="${p.galeri}">Galeri</a></li>
          <li><a href="${p.iletisim}">İletişim</a></li>
          <li><a href="${p.gizlilik}">Gizlilik ve çerez politikası</a></li>
        </ul>
      </div>
      <div>
        <h3>İletişim</h3>
        <p>9242 Sokak No:2/A Bahar Apt<br>Vatan Mahallesi, Karabağlar, İzmir</p>
        <p><a href="tel:+905322600571">0532 260 05 71</a><br>
        <a href="tel:+902322451445">0232 245 14 45</a><br>
        <a href="mailto:didemsarkya@gmail.com">didemsarkya@gmail.com</a></p>
      </div>
    </div>
    <div class="wrap footer-bottom">
      <span>© 2026 Özel Didem Öğretmen Anaokulu</span>
      <span>Karabağlar · İzmir</span>
    </div>
  </footer>
  <a class="float-wa" href="https://wa.me/905322600571" target="_blank" rel="noopener" aria-label="WhatsApp"><img src="${p.assets}images/icons/whatsapp.png" alt=""></a>
  <div id="cookie-banner" class="cookie-banner">
    <p>Zorunlu çerezler kullanılır. Ayrıntı: <a href="${p.gizlilik}">gizlilik ve çerez politikası</a>.</p>
    <div class="cookie-actions">
      <button type="button" class="cookie-accept" id="cookie-accept">Kabul et</button>
      <button type="button" class="cookie-reject" id="cookie-reject">Sadece zorunlu</button>
    </div>
  </div>
  <script src="${p.assets}js/main.js"><\/script>
  <script src="${p.assets}js/cookie-consent.js"><\/script>
</body>
</html>`;
}

function workshopCards(p, withAnim = true) {
  return `<div class="workshop-grid">${atolyeler
    .map(
      (a) =>
        `<a class="workshop" href="${p.atolye(a.slug)}"><img src="${p.assets}images/icons/${a.icon}" alt=""><span>${a.title}</span></a>`
    )
    .join("")}</div>`;
}

function write(rel, html) {
  const full = path.join(root, rel);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, html, "utf8");
}

const p1 = paths(1);
const p2 = paths(2);

// --- hakkimizda ---
write(
  "pages/hakkimizda.html",
  chrome(p1, "hakkimizda", `<title>Hakkımızda 2026 | Özel Didem Öğretmen Anaokulu Karabağlar</title>
  <meta name="description" content="Özel Didem Öğretmen Anaokulu: Karabağlar Vatan Mahallesi butik kreş. 2-6 yaş, 2025 tavsiyesi 2026 kaydı. 9242 Sokak Bahar Apt.">
  <link rel="canonical" href="hakkimizda.html">`) +
    `
<main id="icerik">
  <section class="page-hero">
    <div class="wrap">
      <nav class="crumbs"><a href="${p1.home}">Ana sayfa</a> · Hakkımızda</nav>
      <p class="kicker">Vatan Mahallesi’nden bir okul</p>
      <h1>Küçük okul, büyük özen — 2026’da hâlâ aynı kapı</h1>
      <p class="lead">Özel Didem Öğretmen Anaokulu, İzmir Karabağlar Vatan Mahallesi’nde 2-6 yaş için butik anaokulu ve gündüz bakımevidir. 2025’te komşular bizi fısıldadı; 2026’da aynı aileler kayıt yeniliyor.</p>
    </div>
  </section>
  <section class="section section-teal">
    <div class="wrap story">
      <div class="story-art">
        <figure class="photo-slot photo-slot--square is-empty">
          <img class="slot-photo" src="${p1.assets}images/content/hakkimizda.webp" alt="Didem Öğretmen Anaokulu ekibi ve çocuklar">
          <img class="slot-fallback" src="${p1.assets}images/deco/ogretmen-cocuk-1.png" alt="">
          <div class="slot-hint">📷 hakkimizda.webp<br><small>1000×1000</small></div>
        </figure>
      </div>
      <div class="prose">
        <h2>Neden butik?</h2>
        <p>Kalabalık koridorlarda isimler kaybolmasın diye ölçeği bilinçli küçük tutuyoruz. Didem Öğretmen’in adını taşıyan bir okulda her çocuk görünür; gün sonu size dürüstçe anlatılır.</p>
        <p>Adresimiz 9242 Sokak No:2/A Bahar Apt. Karabağlar civarı en yakın anaokulu arayan çalışan ebeveynler için kapı 07:30’da açılır, 19:00’da kapanır.</p>
        <p>Program vaadi net: haftanın üç günü İngilizce, jimnastik, yoga, kodlama, deney, minik şefler ve duyusal oyun. Extra kurs koşturmacası değil; tam günün içi.</p>
        <p><a class="btn btn-primary" href="${p1.iletisim}">Okulu ziyaret edin</a></p>
      </div>
    </div>
  </section>
</main>
` +
    foot(p1)
);

// --- hizmetler ---
write(
  "pages/hizmetler.html",
  chrome(p1, "hizmetler", `<title>Hizmetler ve Atölyeler 2026 | Karabağlar Özel Anaokulu</title>
  <meta name="description" content="Karabağlar 2-6 yaş tam gün anaokulu hizmetleri: İngilizce, jimnastik, kodlama, duyusal oyun, minik şefler. 2026 eğitim planı, Özel Didem Öğretmen Anaokulu.">
  <link rel="canonical" href="hizmetler.html">`) +
    `
<main id="icerik">
  <section class="page-hero">
    <div class="wrap">
      <nav class="crumbs"><a href="${p1.home}">Ana sayfa</a> · Hizmetler</nav>
      <p class="kicker">2026 eğitim planı</p>
      <h1>Tam gün kreş, butik atölye, net ritim</h1>
      <p class="lead">Karabağlar özel gündüz bakımevi arayanlar için tek çatı: 07:30–19:00, 2-6 yaş, fiyat-performans ve %100 memnuniyet sözü. Kartlara tıklayınca her atölyenin sayfası açılır.</p>
    </div>
  </section>
  <section class="section section-gold">
    <div class="wrap center">
      ${workshopCards(p1)}
      <p class="muted" style="margin-top:1.2rem;">2026 kayıt ve güncel Karabağlar kreş fiyatları için WhatsApp: 0532 260 05 71</p>
    </div>
  </section>
  <section class="section section-pink">
    <div class="wrap prose">
      <h2>Neler dahildir?</h2>
      <p>Tam gün bakım, okul öncesi eğitim, atölye programı ve çalışan ebeveyn saatleri. Ücret yaş ve pakete göre değişir; sitede ezbere rakam yok, telefonda net anlatırız.</p>
      <p>2025’te bizi ‘en yakın ve en içten’ diye önerdiler. 2026’da aynı vaat: butik ölçek, zengin gün, anlaşılır fiyat.</p>
    </div>
  </section>
</main>
` +
    foot(p1)
);

// --- galeri ---
const galeriFallbacks = ["inek.png", "at.png", "ordek.png", "sincap.png", "tavuk.png", "tilki.png"];
const galeriSlots = [1, 2, 3, 4, 5, 6]
  .map(
    (n) => `<figure class="photo-slot photo-slot--wide is-empty">
          <img class="slot-photo" src="${p1.assets}images/content/sinif-${n}.webp" alt="Karabağlar anaokulu galeri ${n}">
          <img class="slot-fallback" src="${p1.assets}images/deco/${galeriFallbacks[n - 1]}" alt="">
          <div class="slot-hint">📷 sinif-${n}.webp<br><small>1200×800</small></div>
        </figure>`
  )
  .join("");

write(
  "pages/galeri.html",
  chrome(p1, "galeri", `<title>Galeri 2026 | Özel Didem Öğretmen Anaokulu Karabağlar</title>
  <meta name="description" content="Özel Didem Öğretmen Anaokulu galeri: Karabağlar Vatan Mahallesi kreş kareleri. Sınıf, atölye ve oyun fotoğrafları 2026.">
  <link rel="canonical" href="galeri.html">`) +
    `
<main id="icerik">
  <section class="page-hero">
    <div class="wrap">
      <nav class="crumbs"><a href="${p1.home}">Ana sayfa</a> · Galeri</nav>
      <p class="kicker">Okuldan kareler</p>
      <h1>Kreş fotoğrafları bu sayfada toplanır</h1>
      <p class="lead">Dosyaları <strong>assets/images/content/</strong> klasörüne belirtilen isimlerle koyun; çerçeveler otomatik dolar.</p>
    </div>
  </section>
  <section class="section section-purple">
    <div class="wrap">
      <div class="gallery-grid">${galeriSlots}</div>
    </div>
  </section>
</main>
` +
    foot(p1)
);

// --- gizlilik ---
write(
  "pages/gizlilik-ve-cerez-politikasi.html",
  chrome(p1, "gizlilik", `<title>Gizlilik ve Çerez Politikası | Özel Didem Öğretmen Anaokulu</title>
  <meta name="description" content="Özel Didem Öğretmen Anaokulu KVKK aydınlatma, gizlilik ve çerez politikası. Karabağlar, İzmir. 2026.">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="gizlilik-ve-cerez-politikasi.html">`) +
    `
<main id="icerik">
  <section class="page-hero">
    <div class="wrap">
      <nav class="crumbs"><a href="${p1.home}">Ana sayfa</a> · Gizlilik</nav>
      <h1>Gizlilik ve çerez politikası</h1>
      <p class="lead">Özel Didem Öğretmen Anaokulu (9242 Sok. No:2/A Bahar Apt, Vatan Mahallesi, Karabağlar / İzmir) 2026 itibarıyla site ziyaretçisi verilerini aşağıda özetlenen çerçevede işler.</p>
    </div>
  </section>
  <section class="section">
    <div class="wrap legal prose">
      <h2>Veri sorumlusu</h2>
      <p>İletişim: didemsarkya@gmail.com · 0232 245 14 45 · 0532 260 05 71</p>
      <h2>Hangi veriler?</h2>
      <p>Kayıt ve iletişim formunda ad, telefon, çocuk adı ve yaş grubu gibi verdiğiniz bilgiler WhatsApp veya e-posta yoluyla bize iletilir. Sunucuda ayrı bir üye veritabanı tutulmaz.</p>
      <h2>Çerezler</h2>
      <p>Zorunlu çerez: tarayıcınızda çerez tercihini (kabul / sadece zorunlu) saklamak için yerel depolama kullanılır. Reklam profilleme çerezi kullanılmaz. Tercihinizi banner üzerinden değiştirebilirsiniz.</p>
      <h2>Haklarınız</h2>
      <p>6698 sayılı KVKK kapsamındaki erişim, düzeltme, silme ve itiraz talepleriniz için didemsarkya@gmail.com adresine yazabilirsiniz. Ayrıntılı aydınlatma metni PDF’si hazırlandığında <code>assets/docs/kvkk-aydinlatma-metni.pdf</code> yoluna eklenecektir.</p>
      <p>Bu metin genel bilgilendirme amaçlıdır; güncel yasal metin imza altına alınan okul sözleşmesi ve resmi aydınlatma belgesidir.</p>
    </div>
  </section>
</main>
` +
    foot(p1)
);

// --- workshop pages ---
atolyeler.forEach((a, i) => {
  const related = [atolyeler[(i + 1) % atolyeler.length], atolyeler[(i + 2) % atolyeler.length], atolyeler[(i + 3) % atolyeler.length]];
  const head = `<title>${a.title} 2026 | ${a.keyword} · Didem Öğretmen Anaokulu</title>
  <meta name="description" content="${a.intro.slice(0, 155)}">
  <link rel="canonical" href="${a.slug}.html">
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":${JSON.stringify(a.faqQ)},"acceptedAnswer":{"@type":"Answer","text":${JSON.stringify(a.faqA)}}}]}
  </script>`;
  const decoPets = ["kelebek.png","kus-1.png","kus-3.png","yusufcuk.png","karinca.png","keci.png","hindi.png","kostebek.png","tirtil.png","tirtil-2.png","at-2.png","kopek.png","agac-3.png","agac-4.png","yaprak-4.png","yaprak-5.png","ordek.png","sincap.png","tavuk.png","tilki.png"];
  const pet = decoPets[i % decoPets.length];
  const html =
    chrome(p2, "hizmetler", head) +
    `
<main id="icerik">
  <section class="page-hero">
    <div class="wrap">
      <nav class="crumbs"><a href="${p2.home}">Ana sayfa</a> · <a href="${p2.hizmetler}">Hizmetler</a> · ${a.title}</nav>
      <p class="kicker">${a.kicker} · Karabağlar 2026</p>
      <h1>${a.title}</h1>
      <p class="lead">${a.intro}</p>
    </div>
  </section>
  <section class="section section-gold">
    <div class="wrap detail-grid">
      <div class="prose">
        ${a.body.map((para) => `<p>${para}</p>`).join("")}
        <p class="pill-list"><span class="chip">2–6 yaş</span><span class="chip">07:30–19:00</span><span class="chip">Vatan Mahallesi</span><span class="chip">9242 Sokak</span></p>
        <p style="margin-top:1.2rem;"><a class="btn btn-primary" href="https://wa.me/905322600571?text=${encodeURIComponent("Merhaba, " + a.title + " ve 2026 kayıt için yazıyorum.")}" target="_blank" rel="noopener">WhatsApp’tan sorun</a>
        <a class="btn btn-ghost" href="${p2.iletisim}">İletişim</a></p>
      </div>
      <div class="detail-side">
        <figure class="photo-slot photo-slot--wide is-empty">
          <img class="slot-photo" src="${p2.assets}images/content/atolyeler/${a.slug}.webp" alt="${a.title} atölyesi Karabağlar">
          <img class="slot-fallback" src="${p2.assets}images/deco/${pet}" alt="">
          <div class="slot-hint">📷 ${a.slug}.webp<br><small>assets/images/content/atolyeler/ · 1200×800</small></div>
        </figure>
        <div class="hours-banner">
          <div>
            <p><strong>${a.faqQ}</strong></p>
            <p>${a.faqA}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section section-pink">
    <div class="wrap center">
      <p class="kicker">Birlikte yürüyen atölyeler</p>
      <h2>Bunlara da bakın</h2>
      <div class="workshop-grid" style="grid-template-columns:repeat(auto-fit,minmax(160px,1fr));">
        ${related
          .map(
            (r) =>
              `<a class="workshop" href="${r.slug}.html"><img src="${p2.assets}images/icons/${r.icon}" alt=""><span>${r.title}</span></a>`
          )
          .join("")}
      </div>
      <p style="margin-top:1rem;"><a href="${p2.hizmetler}">Tüm hizmetler</a></p>
    </div>
  </section>
</main>
` +
    foot(p2);
  write(`pages/atolyeler/${a.slug}.html`, html);
});

// sitemap
const urls = [
  "/",
  "/pages/hakkimizda.html",
  "/pages/hizmetler.html",
  "/pages/galeri.html",
  "/pages/iletisim.html",
  "/pages/gizlilik-ve-cerez-politikasi.html",
  ...atolyeler.map((a) => `/pages/atolyeler/${a.slug}.html`)
];
const sm =
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls
    .map(
      (u) => `  <url>
    <loc>${u}</loc>
    <lastmod>2026-08-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${u === "/" ? "1.0" : "0.8"}</priority>
  </url>`
    )
    .join("\n") +
  `\n</urlset>\n`;
fs.writeFileSync(path.join(root, "sitemap.xml"), sm, "utf8");

const redirects = [
  "/iletisim /pages/iletisim.html 200",
  "/iletisim.html /pages/iletisim.html 301",
  "/hakkimizda /pages/hakkimizda.html 200",
  "/hizmetler /pages/hizmetler.html 200",
  "/galeri /pages/galeri.html 200",
  "/gizlilik /pages/gizlilik-ve-cerez-politikasi.html 200",
  ...atolyeler.map((a) => `/atolyeler/${a.slug} /pages/atolyeler/${a.slug}.html 200`)
].join("\n");
fs.writeFileSync(path.join(root, "_redirects"), redirects + "\n", "utf8");

console.log("OK pages:", 4 + atolyeler.length);
