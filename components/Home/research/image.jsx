import React from "react";
import ResearchStyle from "./research.module.scss";

const Image = (props) => {
  return (
    <div id={ResearchStyle.image}>
      <img src={props.img} alt="leadertalks" />
    </div>
  );
};

export default Image;
