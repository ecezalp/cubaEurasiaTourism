import React from "react";

export default function Home ({isEnglish}) {
    return (<h1 className="home-container">{isEnglish ? "THIS IS ENGLISH HOME" : "BURASI TURKCE EV"}</h1>);
}