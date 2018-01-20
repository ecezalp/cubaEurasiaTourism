import React from 'react';
import etoshaPic from '../../resources/static/images/natureGrid/etosha.jpg'
import sossuvleiPic from '../../resources/static/images/natureGrid/sossuvlei.jpg'
import namibPic from '../../resources/static/images/natureGrid/namib.jpg'
import swapkomundPic from '../../resources/static/images/natureGrid/swapkomund.jpg'
import naukluftPic from '../../resources/static/images/natureGrid/naukluft.jpg'
import dolomitePic from '../../resources/static/images/stayGrid/dolomite.jpg'
import iremPic from '../../resources/static/images/stayGrid/irem.jpg'
import lodgeStayPic from '../../resources/static/images/stayGrid/lodge-stay.png'
import safariJeepPic from '../../resources/static/images/stayGrid/safari-jeep.jpg'
import swapkomundHotelPic from '../../resources/static/images/stayGrid/swapkomund-hotel.jpg'

import turkishFlag from '../../resources/static/images/flags/turkish_flag.png'
import englishFlag from '../../resources/static/images/flags/english_flag.png'

// Navbar

export const menuItemsHelper = {
  true: [
    {gridStart: 3, name: "destinations"},
    {gridStart: 6, name: "activities"},
    {gridStart: 11, name: "schedule"}],
  false: [
    {gridStart: 3, name: "goreceklerimiz"},
    {gridStart: 6, name: "aktivitelerimiz"},
    {gridStart: 11, name: "programimiz"}],
};

export const aboutHelper = {
  true: [
    {gridStart: 9, name: "about us"},
    {gridStart: 12, name: "contact us"}],
  false: [
    {gridStart: 9, name: "hakkimizda"},
    {gridStart: 12, name: "iletisim"}],
};

export const flagHelper = [
  {prefix: "tr", boolean: false, src: turkishFlag},
  {prefix: "en", boolean: true, src: englishFlag}
];


// Main

export const safariHomeHelper = {
  true: {
    banner: "Visit Namibia",
  },
  false: {
    banner: "Namibya'ya Gel",
  }
};


export const namibiaDesc = {
  true: [
    "We travel looking for ourselves.",
    "We long for where we came from.",
    <b>Namibia is not just a place but it's a sensation.</b>,
    "The touch of wilderness rekindles",
    "our sense of belonging to nature.",
    <b>Think about it. Things will not be same as before.</b>,
  ],
  false: [
    "Kendimize bakmak için seyahat ediyoruz.",
    "Nereden geldiğimizi uzun süre bekliyoruz.",
    <b>Namibya sadece bir yer değil, aynı zamanda bir sansasyon.</b>,
    "Vahşi doğanın dokunuşları yeniden canlanır",
    "doğaya aid olma duygumuz.",
    <b>"Bunu düşün. Her şey eskisi gibi olmayacak.</b>,
  ],
};

export const quoteHelper = {
  true: {
    0: "I never knew of a morning in Africa",
    1: "when I woke up that I was not happy.",
    2: "True at First Light",
    3: "by Ernest Hemingway"
  },
  false: {
    0: "Bir sabah bilmedim ki",
    1: "Afrika'da huzurla uyanmadığım.",
    2: "Günün İlk Işığında Gerçek",
    3: "Ernest Hemingway"
  },
};

export const onlyInNamibiaQuote = {
  true: {
    0: "Trip Inspirations",
    1: "Our Schedule",
  },
  false: {
    0: "Gezi İlhamları",
    1: "Programımız",
  }
};

export const natureGridHelper = [
  {title: "etosha", src: etoshaPic},
  {title: "namib", src: namibPic},
  {title: "sossuvlei", src: sossuvleiPic},
  {title: "naukluft", src: naukluftPic},
  {title: "swapkomund", src: swapkomundPic},
];

export const stayGridHelper = [
  {title: "Dolomite Hotel", src: dolomitePic},
  {title: "Meet Himba People", src: iremPic},
  {title: "Stay at Lodges", src: lodgeStayPic},
  {title: "Safari in Jeep", src: safariJeepPic},
  {title: "Swapkomund Hotel", src: swapkomundHotelPic},
];


export const scheduleBannerOverlay = {
  true: {
    0: "7 DAYS IN NAMIBIA",
    1: "Safari + Cultural Interactions",
    2: "Photograph UNESCO World Heritage Sossusvlei dunes, observe wild life during safari in Namib Desert, stay in luxurious lodges inside the National Parks, meet the local Himba people, wonder at the depths of the Milky Way.",
  },
  false: {
    0: "NAMIBYA'DA 7 GUN",
    1: "Safari + Kulturel Deneyimler",
    2: "UNESCO Dunya Mirasi Sossusvlei kumullarinda fotograf cek, Namib colunde safariye cikip vahsi hayati gozlemle, Milli Parklarin icerisindeki luks lodge\'larda konakla, Himba kabilesi ile tanis, Samanyolu'nun derinligini duyumsa.",
  },
};


export const emailHelper = {
  true: {
    label: "Join our mailing list to hear about our next tour"
  },
  false: {
    label: "Bir sonraki turumuzla ilgili bilgi almak icin email listemize katilin"
  }
};

export const destinationsHelper = {
  true: {
    title: "DESTINATIONS",
    text: <div>Namibia is magnificent. <strong>Etosha</strong> National Park has countless indigenous species. <strong>Namib
      desert</strong> is the oldest UNESCO World Heritage Site. <strong>Sossuvlei</strong> Dunes are a sight to see and
      photograph. <strong>Naukluft</strong> has a fauna that seems extraterrestrial. <strong>Swakpomund</strong> is home
      to swathes of flamingos. There is no shortage of destinations. Where will the world take you?</div>
  },
  false: {
    title: "ISTIKAMETLERIMIZ",
    text: "Tezatlarin ulkesi Namibya’yı keşfedeceğimiz bu unutulmayacak yolculuğumuzda Etosha Milli Parkindaki lüks lodge’larda konaklayacak, UNESCO Dünya Miras Listesindeki dünyanın en eski çölü olan Namib Çölü’nde safariye çıkacak, zarafetle kıvrılan Sossusvlei kumullarında fotoğraf çekecek, Naukluft Milli Parkinda sanki bu dunyaya ait olmayan dogaya tanik olacak, Swapkomund’daki flamingolara hayran kalacakyerlilerle birlikte olağanüstü saatler geçireceğiz..."
  }
};

export const stayHelper = {
  true: {
    title: "CULTURAL EXCURSIONS",
    text: <div>Namibia is a really cool place with a truly fantastic culture. <strong>Himba People</strong> are friendly
      and very eager to meet with interesting individuals who would like to visit them. Namibia also offers many
      luxurious getaways in beautiful resorts taht we will visit.</div>
  },
  false: {
    title: "KULTUREL AKTIVITELER",
    text: "Tezatlarin ulkesi Namibya’yı keşfedeceğimiz bu unutulmayacak yolculuğumuzda Etosha Milli Parkindaki lüks lodge’larda konaklayacak, UNESCO Dünya Miras Listesindeki dünyanın en eski çölü olan Namib Çölü’nde safariye çıkacak, zarafetle kıvrılan Sossusvlei kumullarında fotoğraf çekecek, Naukluft Milli Parkinda sanki bu dunyaya ait olmayan dogaya tanik olacak, Swapkomund’daki flamingolara hayran kalacakyerlilerle birlikte olağanüstü saatler geçireceğiz..."
  }
};

export const highlightsHelper = {
  true: {
    0: "Trip Highlights"
  },
  false: {
    0: ""
  }
};