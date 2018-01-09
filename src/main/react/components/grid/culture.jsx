import React from 'react';

export default function Culture({isEnglish}) {
  console.log(isEnglish);
  return <h1 style={{backgroundColor: "red", width: "300px", height: "400px"}}>{isEnglish ? "Culture" : "kultur"}</h1>
}