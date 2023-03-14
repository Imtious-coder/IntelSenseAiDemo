import React from "react";
import Style from "./inToTheUnknown.module.scss";
import Item from "./items";

const data = [
  {
    id: 1,
    title: "Natural Language Processing",
    discription:
      "Document understanding, natural language interface, text representaion and generalization, systematic Generalization, language grounding.",
    link: "#",
    logo: "images/icon_page7_1.svg",
  },
  {
    id: 2,
    title: "Computer Vision",
    discription:
      "We integrate computer vision services as well as train models to identify specific places, people, and objects and categorize them to retrieve valuable information as well as analytics.",
    link: "#",
    logo: "images/icon_page7_2.svg",
  },
  {
    id: 3,
    title: "Machine Learing",
    discription:
      "Document understanding, natural language interface, text representation and generalization, systematic. Generalization, language grounding.",
    link: "#",
    logo: "images/icon_page7_3.svg",
  },
];

const InToTheUnknown = () => {
  return (
    <div className={Style.container}>
      <div className={Style.wrapper}>
        <h1 className={Style.headerText}>Into The Unknown</h1>
        <p className={Style.subHeader}>
          Our fundamental research teams work on problems with unknown
          solutions, where research is ongoing or where we want to push the
          state-of-the-art.
        </p>
        <div className={Style.content}>
          {data.map((item) => (
            <Item key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InToTheUnknown;
