import React from "react";
import ResearchStyle from "./research.module.scss";
import Content from "./content";
import Image from "./image";

const Research = () => {
  return (
    <div className={ResearchStyle.container}>
      <h1 className={ResearchStyle.head}>Research</h1>
      <p className={ResearchStyle.subTitle}>
        Our researches pursue novel research in the lab and the use the best
        ideas to power solutions that deliver real impact
      </p>
      <div className={ResearchStyle.wrap}>
        <div className={ResearchStyle.row}>
          <Content
            icon="images/research1.svg"
            number="01"
            discription="Pursing novel avenues in key AI research areas including computer vision, natural language processing and machine learing."
            title="Fundamental Research"
          />
          <Image img="images/re2.png" />
          <Content
            icon="images/research3.svg"
            number="03"
            discription="Studying the impact of AI on the world, including ethics and explainability, as well the potential for using AI to tackle challengs."
            title="Impact Assessment"
          />
          <Image img="images/re4.png" />
        </div>
        <div className={ResearchStyle.row}>
          <Image img="images/re1.png" />
          <Content
            icon="images/research2.svg"
            number="02"
            discription="Studying the impact of AI on the world, including ethics and explainability, as well the potential for using AI to tackle challengs."
            title="Applied Research"
          />
          <Image Image img="images/re3.png" />
          <Content
            icon="images/research4.svg"
            number="04"
            discription="Studying the impact of AI on the world, including ethics and explainability, as well the potential for using AI to tackle challengs."
            title="Unlocking Possibilities"
          />
        </div>
      </div>
      {/* <div className={ResearchStyle.button}>
        <a href="#" >
          See Details
        </a>
      </div> */}
      <div style={{width: "100px"}}>
        .
      </div>
    </div>
  );
};

export default Research;
