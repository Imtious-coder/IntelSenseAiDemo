import React from "react";
import Item from "../../Home/inToTheUnkownPage/items";
import Style from "./ourStory.module.scss";

const data = [
  {
    key: 1,
    left: {
      title: "OUR STORY",
      description: `Intelsense AI building a world class team of AI Researchers, Data
      Scientists, Machine Learning Engineers, Software Engineers, Product
      Managers, and Visionaries to help realize this potential, pushing
      the boundaries of what AI can do, and advancing the state of the art
      in AI.`,
    },
    mid: {
      img: "/images/aboutUs/page3.png",
    },
    right: {
      title: "WHAT WE DO",
      img: "images/aboutUs/page3_logo.svg",
      description: `Intelsense.ai provides AI services, solutions, and products to help
      organizations across different industries to implement AI today. Our
      AI research and development facilities in Bangladesh, US and Canada
      allow us to solve today’s complex problems, customize real-life AI
      applications for positive future impact, and drive future
      innovation.`,
    },
  },
  {
    key: 2,
    left: {
      title: "OUR PURPOSE",
      description: `We're optimistic for a future where people live healthier, more informed, more creative lives. We see a world where technology enhances human potential, and progress that everyone can benefit from. We let innovators create the next breakthroughs in machine intelligence.`,
    },
    mid: {
      img: "/images/aboutUs/page2_logo.svg",
    },
    right: {
      title: "OUR MISSION",
      img: "images/aboutUs/page3_logo.svg",
      description: `Our mission is to ensure that artificial general intelligence (AGI)-by which we mean highly autonomous systems that outperform humans at most humanity. We will attempt to directly build safe and beneficial AGI. but will also consider our mission fulfilled if our work achieve this outcome.`,
    },
  },
  {
    key: 3,
    left: {
      title: "DRIVEN TO WIN",
      description: `W're solving a hard problem that requires incredible focus and commitment. Success means doing a few things differently.`,
    },
    mid: {
      img: "/images/aboutUs/random.png",
    },
    right: {
      title: "LEADING THE MOVEMENT",
      img: "images/aboutUs/page3_logo.svg",
      description: `We're a team with a multitude of experience and perspective. With decades of engineering, science, and domain expertise, we're incorporating our best practices to create a company for the long-term and building AI driven products that will deliver the benefits to all of humanity.`,
    },
  },
];

const OurStory = () => {
  return (
    <React.Fragment>
      {data.map((item) => (
        <div className={Style.content} key={item.key}>
          <div className={Style.container}>
            <div className={Style.left}>
              <h1>{item.left.title}</h1>
              <p>{item.left.description}</p>
            </div>

            <div className={Style.mid}>
              {/* <img className={Style.image} src={item.mid.img} alt="pic" /> */}
            </div>

            <div className={Style.right}>
              <div className={Style.logoCon}>
                <img className={Style.logo} src={item.right.img} alt="logo" />
              </div>
              <h4>{item.right.title}</h4>
              <p>{item.right.description}</p>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};
export default OurStory;
