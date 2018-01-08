import React from 'react';
import culturePic from '../../resources/static/images/sixGrid/culture.jpg';
import landscapePic from '../../resources/static/images/sixGrid/landscape.jpg';
import lodgePic from '../../resources/static/images/sixGrid/lodgeParadise.jpg';
import safariPic from '../../resources/static/images/sixGrid/safari.jpg';

export const namibiaDesc = {
  true: [
    "We travel looking for ourselves.",
    "We long for where we came from.",
    <b>Namibia is not just a place but it's a sensation</b>,
    "The touch of wilderness rekindles",
    "our sense of belonging to nature.",
    <b>Think about it. Things will not be same as before.</b>,
  ],
  false: [
    "Kendimize bakmak için seyahat ediyoruz.",
    "Nereden geldiğimizi uzun süre bekliyoruz.",
    <b>Namibya sadece bir yer değil, aynı zamanda bir sansasyon</b>,
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

export const activitiesHeader = {
  true: {
    0: "Cultural Excursions",
    1: "Wilderness",
    2: "Safari",
    3: "Lodge Paradise",
  },
  false: {
    0: "Kültür Gezintileri",
    1: "Doğa çöl",
    2: "Safari",
    3: "Lodge Paradise",
  },
};

export const gridHelper = [
  {src: culturePic, language: {true: "Cultural Excursions", false: "Kültür"}},
  {src: landscapePic, language: {true: "Wilderness", false: "Vahşi Doğa"}},
  {src: safariPic, language: {true: "Safari", false: "Safari"}},
  {src: lodgePic, language: {true: "Lodge Paradise", false: "Loca Cenneti"}},
];

export const scheduleHelper = {
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