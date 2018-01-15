import React from 'react';
import culturePic from '../../resources/static/images/sixGrid/culture.jpg';
import landscapePic from '../../resources/static/images/sixGrid/landscape.jpg';
import lodgePic from '../../resources/static/images/sixGrid/lodgeParadise.jpg';
import safariPic from '../../resources/static/images/sixGrid/safari.jpg';
import Culture from '../../react/components/grid/culture';
import Wilderness from '../../react/components/grid/wilderness';
import Safari from '../../react/components/grid/safari';
import LodgeParadise from '../../react/components/grid/lodgeParadise';

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

export const gridHelper = [
  {component: Culture, link: "culture", src: culturePic, language: {true: "Cultural Excursions", false: "Kültür"}},
  {component: Wilderness, link: "wilderness", src: landscapePic, language: {true: "Wilderness", false: "Vahşi Doğa"}},
  {component: Safari, link: "safari", src: safariPic, language: {true: "Safari", false: "Safari"}},
  {
    component: LodgeParadise,
    link: "lodge-paradise",
    src: lodgePic,
    language: {true: "Lodge Paradise", false: "Loca Cenneti"}
  },
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

export const safariHomeHelper = {
  true: {
    banner: "Safari in Namibia",
    caption: "Taking you to a safari is not just our job. It is our passion.",
    infoTitle: "Wildlife in Etosha National Park",
    infoCaption: "114 mammals, 340 birds, 110 reptiles, 16 amphibians, and 49 fish",
  },
  false: {
    banner: "Namibya'da Safari",
    caption: "Sizinle safariye cikmak bizim sadece isimiz degil, tutkumuz ve nesemiz.",
    infoTitle: "Etosha Milli Parkinda vahsi hayat",
    infoCaption: "114 memeli, 340 kus, 110 surungen, 16 sogukkanli hayvan ve 49 balik",
  }
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
    text: "Namibia is full of magnificent places, unique cultures and amazing people. Etosha National Park has countless indigenous species, and luxurious lodges for us to stay. Namib desert, the oldest UNESCO World Heritage Site, is home to wondrous safaris. Sossuvlei Dunes are a sight to see and photograph. Naukluft National Park has a fauna that seems extraterrestrial. Swakpomund is home to swathes of flamingos. There is no  shortage of destinations to add to your travel bucket list. Below are the destinations where we hold the most knowledge and experience. Where will the world take you?"
  },
  false: {
    title: "ISTIKAMETLERIMIZ",
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