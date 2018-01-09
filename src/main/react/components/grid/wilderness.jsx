import React from 'react';

export default function Wilderness (props) {
  console.log(props);
  return <div>
    <h1>{props.isEnglish ? "wilderness" : "vahsi doga"}</h1>
  </div>;
}