import React from "react";
import Link from "next/link";

import style from "./leader.module.scss";

const data = [
  {
    key: 1,
    img: "images/Leader1.png",
    name: "Mr. Person One",
    designation: "Deparment of HR",
  },
  {
    key: 2,
    img: "images/Leader2.png",
    name: "Mr. Person Two",
    designation: "Deparment of HR",
  },
  {
    key: 3,
    img: "images/Leader1.png",
    name: "Mr. Person Two",
    designation: "Deparment of HR",
  },
  {
    key: 4,
    img: "images/Leader4.png",
    name: "Mr. Person Two",
    designation: "Deparment of HR",
  },
];

const Leadership = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.mainContent}>
        <div className={style.line}></div>
        <div className={style.heading}>
          <h2>Our leadership</h2>
          <p>
            The vision of the future needs long terms and leadership qualities.{" "}
            <br /> Our leadership team works across every part of the company
            and beyond to help us navigate the right way.
          </p>
        </div>

        <div className={style.persons}>
          {data.map((item) => (
            <div className={style.eachPerson}>
              <img src={item.img} alt="" />
              <div className={style.personDetails}>
                <h4>{item.name}</h4>
                <p>{item.designation}</p>
              </div>
              <span className={style.smallLine}></span>

              <div className={style.moreInformation}>
                <Link href="/">More Information</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={style.line}></div>
    </div>
  );
};
export default Leadership;
