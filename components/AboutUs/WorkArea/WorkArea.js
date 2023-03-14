import React from "react";
import style from "./workarea.module.scss";

const WorkAreaApp = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.line}></div>
      <div className={style.mainContent}>
        <div className={style.leftPart}>
          <img src="images/BitComputer.svg" alt="" />
          <h6>AREA OF OUR WORK</h6>
          <p>
            Composition of Machine Learning and Deep Learning Techniques in
            Computer Vision, Natural Language Processing productionalizing,
            Intelligence Chatbots. Domain Specific/Open Domain specific
            Recognition System . Virtual Assistance and Internet of things.
          </p>
        </div>
        <div className={style.middlePart}>
          <img src="images/Research1.png" alt="" />
        </div>
        <div className={style.rightPart}>
          <img src="images/BitComputer1.svg" alt="" />
          <h6>OUR FOCUS</h6>
          <p>
            Transforming Bangladesh with Artificial Intelligence. Enabling
            enterprises with AI Powered Intelligent Chatbot &amp; Computer
            Vision technology. AI-based end-to-end solutions, with the focus on
            computer vision, predictive analytics and natural language
            processing.
          </p>
        </div>
      </div>
      <div className={style.line}></div>
    </div>
  );
};

export default WorkAreaApp;
