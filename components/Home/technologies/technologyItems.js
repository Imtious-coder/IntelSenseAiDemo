import React from "react";
import TechnologyStyle from "./technology.module.scss";
import Link from "next/link";

const TechnologyItem = (props) => {
  const { logo, title, discription, subtitle } = props.data;
  return (
    <div className={TechnologyStyle.item}>
      <img className={TechnologyStyle.logo} src={logo} alt="" />
      <h3 className={TechnologyStyle.title}>{title}</h3>
      <h3 className={TechnologyStyle.subtitle}>{subtitle}</h3>
      {/* <p className={TechnologyStyle.discription}>{discription}</p> */}
      {/* <Link href="/products">Learn More</Link> */}
    </div>
  );
};

export default TechnologyItem;
