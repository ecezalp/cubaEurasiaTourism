import React from 'react';
// 1st 5grid
import etoshaPic from '../../resources/static/images/natureGrid/etosha.jpg'
import sossuvleiPic from '../../resources/static/images/natureGrid/sossuvlei.jpg'
import namibPic from '../../resources/static/images/natureGrid/namib.jpg'
import swapkomundPic from '../../resources/static/images/natureGrid/swapkomund.jpg'
import naukluftPic from '../../resources/static/images/natureGrid/naukluft.jpg'
// 2 5grid
import dolomitePic from '../../resources/static/images/stayGrid/dolomite.jpg'
import iremPic from '../../resources/static/images/stayGrid/irem.jpg'
import lodgeStayPic from '../../resources/static/images/stayGrid/lodge-stay.png'
import safariJeepPic from '../../resources/static/images/stayGrid/safari-jeep.jpg'
import swapkomundHotelPic from '../../resources/static/images/stayGrid/swapkomund-hotel.jpg'
// week
import joburg from '../../resources/static/images/schedule/joburg.jpg';
import safariAnimals from '../../resources/static/images/web/safari-animals.jpg';

import turkishFlag from '../../resources/static/images/flags/turkish_flag.png'
import englishFlag from '../../resources/static/images/flags/english_flag.png'

// Navbar
export const menuItemsHelper = {
  true: [
    {gridStart: 2, name: "destinations"},
    {gridStart: 6, name: "activities"},
    {gridStart: 9, name: "schedule"}],
  false: [
    {gridStart: 2, name: "goreceklerimiz"},
    {gridStart: 6, name: "aktivitelerimiz"},
    {gridStart: 9, name: "programimiz"}],
};

export const aboutHelper = {
  true: [
    {gridStart: 11, name: "about us"},
    {gridStart: 12, name: "contact us"}],
  false: [
    {gridStart: 11, name: "hakkimizda"},
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

export const scheduleHelper = [{
  // DAY 1
  picture: joburg,
  figCaption: "Johannesburg",
  entries: [{
    icon: "fa fa-map-marker fa-2x",
    label: {true: "Johannesburg", false: "Johannesburg"},
    time: "10:30"
  }, {
    icon: "fa fa-eye fa-2x",
    label: {true: "City Tour", false: "Sehir Turu"},
    time: "12:30"
  }, {
    icon: "fa fa-plane fa-2x",
    label: {true: "Windhoek", false: "Windhoek"},
    time: "17:50"
  }, {
    icon: "fa fa-bed fa-2x",
    label: {true: "Hilton Windhoek", false: "Hilton Windhoek"},
    time: "20:00"
  }]
}, {
  // DAY 2
  picture: safariAnimals,
  figCaption: "Etosha Park",
  entries: [{
    icon: "fa fa-binoculars fa-2x",
    label: {true: "Panoramic Tour", false: "Panoramik Tur"},
    time: "9:30"
  }, {
    icon: "fa fa-cutlery fa-2x",
    label: {true: "Turkish Embassy", false: "Buyukelcilik"},
    time: "12:30"
  }, {
    icon: "fa fa-bug fa-2x",
    label: {true: "Etosha Park", false: "Etosha Parki"},
    time: "15:00"
  }, {
    icon: "fa fa-bed fa-2x",
    label: {true: "NWR Dolomite", false: "NWR Dolomite"},
    time: "20:00"
  }]
},{
  // DAY 3
  picture: joburg,
  figCaption: "Johannesburg",
  entries: [{
    icon: "fa fa-map-marker fa-2x",
    label: {true: "Johannesburg", false: "Johannesburg"},
    time: "10:30"
  }, {
    icon: "fa fa-eye fa-2x",
    label: {true: "City Tour", false: "Sehir Turu"},
    time: "12:30"
  }, {
    icon: "fa fa-plane fa-2x",
    label: {true: "Windhoek", false: "Windhoek"},
    time: "17:50"
  }, {
    icon: "fa fa-bed fa-2x",
    label: {true: "Hilton Windhoek", false: "Hilton Windhoek"},
    time: "20:00"
  }]
}, {
  // DAY 4
  picture: safariAnimals,
  figCaption: "Etosha Park",
  entries: [{
    icon: "fa fa-binoculars fa-2x",
    label: {true: "Panoramic Tour", false: "Panoramik Tur"},
    time: "9:30"
  }, {
    icon: "fa fa-cutlery fa-2x",
    label: {true: "Turkish Embassy", false: "Buyukelcilik"},
    time: "12:30"
  }, {
    icon: "fa fa-bug fa-2x",
    label: {true: "Etosha Park", false: "Etosha Parki"},
    time: "15:00"
  }, {
    icon: "fa fa-bed fa-2x",
    label: {true: "NWR Dolomite", false: "NWR Dolomite"},
    time: "20:00"
  }]
}];


// export const scheduleHelper = {
//   true: {
//     title: "SCHEDULE",
//     week: [
//       {style: {gridColumn: "1/2", gridRow: "10/12", backgroundColor: "rgba(0,100,0,0.2)"}, text: "a", location: "", icons: ["", "", ""], dateAlignment: "right"},
//       {style: {gridColumn: "5/6", gridRow: "10/12", backgroundColor: "rgba(0,0,100,0.2)"}, text: "s", location: "", icons: ["", "", ""], dateAlignment: "right"},
//       {style: {gridColumn: "2/3", gridRow: "11/13", backgroundColor: "rgba(100,0,0,0.2)"}, text: "d", location: "", icons: ["", "", ""], dateAlignment: "right"},
//       {style: {gridColumn: "4/5", gridRow: "11/13", backgroundColor: "rgba(200,0,0,0.2)"}, text: "f", location: "", icons: ["", "", ""], dateAlignment: "right"},
//       {style: {gridColumn: "1/2", gridRow: "12/14", backgroundColor: "rgba(0,200,0,0.2)"}, text: "g", location: "", icons: ["", "", ""], dateAlignment: "right"},
//       {style: {gridColumn: "3/4", gridRow: "12/14", backgroundColor: "rgba(0,0,200,0.2)"}, text: "h", location: "", icons: ["", "", ""], dateAlignment: "right"},
//       {style: {gridColumn: "5/6", gridRow: "12/14", backgroundColor: "rgba(130,130,0,0.2)"}, text: "j", location: "", icons: ["", "", ""], dateAlignment: "right"},
//     ],
//    },
//   false: {
//     title: "PROGRAM",
//     week: [
//       {style: {gridColumn: "1/2", gridRow: "10/12", backgroundColor: "rgba(130,0,130,0.2)"}, text: "q", location: "", icons: ["", "", ""], dateAlignment: "right"},
//       {style: {gridColumn: "5/6", gridRow: "10/12", backgroundColor: "rgba(200,0,20,0.2)"}, text: "w", location: "", icons: ["", "", ""], dateAlignment: "right"},
//       {style: {gridColumn: "2/3", gridRow: "11/13", backgroundColor: "rgba(200,70,70,0.2)"}, text: "e", location: "", icons: ["", "", ""], dateAlignment: "right"},
//       {style: {gridColumn: "4/5", gridRow: "11/13", backgroundColor: "rgba(100,140,130,0.2)"}, text: "r", location: "", icons: ["", "", ""], dateAlignment: "right"},
//       {style: {gridColumn: "1/2", gridRow: "12/14", backgroundColor: "rgba(50,50,150,0.2)"}, text: "t", location: "", icons: ["", "", ""], dateAlignment: "right"},
//       {style: {gridColumn: "3/4", gridRow: "12/14", backgroundColor: "rgba(210,40,20,0.2)"}, text: "y", location: "", icons: ["", "", ""], dateAlignment: "right"},
//       {style: {gridColumn: "5/6", gridRow: "12/14", backgroundColor: "rgba(190,240,40,0.2)"}, text: "u", location: "", icons: ["", "", ""], dateAlignment: "right"},
//     ],
//   },
// };

// 1: "Safari + Cultural Interactions",
// 2: "Photograph UNESCO World Heritage Sossusvlei dunes, observe wild life during safari in Namib Desert, stay in luxurious lodges inside the National Parks, meet the local Himba people, wonder at the depths of the Milky Way.",

// 1: "Safari + Kulturel Deneyimler",
//   2: "UNESCO Dunya Mirasi Sossusvlei kumullarinda fotograf cek, Namib colunde safariye cikip vahsi hayati gozlemle, Milli Parklarin icerisindeki luks lodge\'larda konakla, Himba kabilesi ile tanis, Samanyolu'nun derinligini duyumsa.",


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
      to swathes of flamingos. There is no shortage of destinations. Where will the world take you? has a fauna that
      seems extraterrestrial. <strong>Swakpomund</strong> is home
      to swathes of flamingos. There is no shortage of destinations. Where will the world take
      you? <strong>Etosha</strong> National Park has countless indigenous species. <strong>Namib
        desert</strong> is the oldest UNESCO World Heritage</div>
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