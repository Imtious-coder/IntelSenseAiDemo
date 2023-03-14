import React from "react";
import ResearchStyle from "./research.module.scss";

const Content = ({ icon, number, discription, title }) => {
  return (
    <div id={ResearchStyle.content}>
      <div className={ResearchStyle.upper}>
        <img src={icon} alt="icon" />
        <div>
          <h1 className={ResearchStyle.number}>{number}</h1>
          <hr className={ResearchStyle.bar} />
        </div>
      </div>
      <div className={ResearchStyle.lower}>
        <p>{discription}</p>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Content;
