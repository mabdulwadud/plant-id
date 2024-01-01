// Home.jsx
import React from "react";
import Paragraph from "../components/Paragraph";
import About from "../fragments/About";
import HomeDesc from "../components/HomeDesc";

export default function Home() {
  return (
    <div>
      <h1 className="title">Home Page</h1>
      <article className="description">
        <h2 className="sub-title">Welcome to PlantID</h2>
        <Paragraph>
        <About description={<HomeDesc/>}/>
        </Paragraph> 
      </article>
    </div>
  );
}
