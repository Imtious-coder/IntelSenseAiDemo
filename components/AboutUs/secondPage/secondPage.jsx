import React from "react";
import Style from "./secondPage.module.scss";

const SecondPage = () => {
  return (
    <div className={Style.content}>
      <div className={Style.line}></div>
      <div className={Style.container}>
        <p className={Style.heading}>WHO WE ARE</p>
        <img src="images/aboutUs/page2_logo.svg" alt="logo" />
        <h1 className={Style.secondary}>
          Artificial intelligence is a beacon leading to the future of humanity.
          We brainstorm, research and build AI systems that learn to solve
          problems and transform the the shape of the industries serving
          everyone everyday.
        </h1>
      </div>
      <div className={Style.line}></div>
    </div>
  );
};

export default SecondPage;
