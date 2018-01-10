import React from 'react';

export default function Safari({isEnglish}) {
  console.log(isEnglish);
  return <h1>{isEnglish ? "safari en" : "safari tr"}</h1>
}