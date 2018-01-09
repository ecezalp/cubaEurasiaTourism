import React from 'react';

export default function LodgeParadise({isEnglish}) {
  console.log(isEnglish);
  return <h1>{isEnglish ? "Lodge" : "loca"}</h1>
}