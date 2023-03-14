import React from "react";
import Link from "next/link";
import Style from "./inToTheUnknown.module.scss";

const Item = (props) => {
  const { logo, title, discription } = props.data;
  return (
    <div className={Style.item}>
      <img className={Style.logo} src={logo} alt="logo" />
      <p className={Style.title}>{title}</p>
      <p className={Style.discription}>{discription}</p>
      <Link href="/products">Learn More</Link>
    </div>
  );
};

export default Item;
