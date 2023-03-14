import React from "react";
// import 'bootstrap/dist/css/bootstrap.css'
import Carousel from "react-elastic-carousel";
import Link from "next/link";

import style from "./content.module.scss";

const breakPoint = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const OurSolution = () => {
  const [data, setData] = React.useState([
    {
      key: 1,
      title: "Banking",
      description: `Redefining user experience in the “bot-first era” with our
        revolutionar Conversational Banking solution.Enhanced user
        experience by state of the art AI system.`,
      img: "images/Asset_15.png",
    },
    {
      key: 2,
      title: "Insurance",
      description: `An AI-powered insurance solution can help improve sales while decreasing cycle times. They 
      not only address user inquiries but also handle more complex processes like claim filing and goal setting. An AI-powered insurance solution can help improve sales while decreasing cycle times. They not only address user inquiries but also handle more complex processes like claim filing and goal setting.
      `,
      img: "images/insurance.jpeg",
    },
    {
      key: 3,
      title: "Healthcare",
      description: `Making doctor appointments or buying medicines online painless for patients or concerned people through next-level AI-powered healthcare solutions. It can send useful notifications such as reminding which medicine to take. AI-powered healthcare solutions are helping bridge the gap between patients, healthcare providers and insurance companiesMaking doctor appointments or buying medicines online painless for patients or concerned people through next level AI-powered healthcare solutions. It can send useful notifications such as reminding which medicine to take. AI-powered healthcare solutions are helping bridge the gap between patients, healthcare providers and insurance companies.`,
      img: "images/healthcare.png",
    },
    {
      key: 4,
      title: "Retail",
      description: `Conversational Commerce is transforming the way people shop today. Conversational eCommerce is the next generation of current traditional eCommerce systems. People can shop by just sending a couple of text messages at one platform. Advanced everyday AI solutions  make the user experience better, thereby improving customer satisfaction.
      `,
      img: "images/retail.jpg",
    },
    {
      key: 10,
      title: "TELECOM",
      description:
        "Telecom service providers’ customers face a unique set of problems which can be solved by providing simple answers. AI-powered telecom solutions can easily increase retention, reduce customer service workload and enhance customer experience.",
      img: "images/telecom.jpg",
    },
    {
      key: 20,
      title: "HOSPITALITY",
      description:
        "AI-powered solutions can enhance your travel experience by helping with hotel and flight bookings, and it can also recommend the places you should visit and optimize travel plans. AI-powered solutions can be programmed to help travellers during their trip.",
      img: "images/Asset_17.png",
    },
    {
      key: 30,
      title: "EDUCATION",
      description:
        "AI based solutions can serve as a digital friend who keeps tabs on specific topics for students by reminding, taking interactive tests and keeping track of their progress. Institutions can offer better onboarding experience as well.",
      img: "images/education.webp",
    },
    {
      key: 40,
      title: "REAL ESTATE",
      description: `Shortening the sales cycle and boosting bottom-line revenue growth continue to be the significant challenges for real estate companies. After-sales services are also another challenge that they can make easier for customers with the help of solutions. A competitive and capable AI can help them face unique queries, brochure distribution, price estimation and many more. AI-powered real estate solutions help achieve this by automating routine tasks.    `,
      img: "images/realestate.jpeg",
    },
    {
      key: 50,
      title: "MANUFACTURING",
      description: `Connecting companies with dealers and vendors couldn't be even more comfortable by using AI-powered solutions. Reducing long, tedious steps and introducing more interactive options. In manufacturing, you're under pressure to improve quality while reducing costs and increasing productivity continuously. You also strive to right-size inventory and boost profitability while driving year-over-year cost improvements. Finding new ways to extract value from the deluge of sensor and IoT data would enable you to move from a reactive to a proactive approach to minimising unplanned downtime, reducing scrap and rework, and developing innovative new revenue streams.`,
      img: "images/manufacturing.jpeg",
    },
  ]);

  const getComponent = (item) => (
    <div
      key={"uniquu"}
      className={style.sliderBody}
      // style={{ width: 277, textAlign: "center" }}
    >
      <img
        style={{ width: 279, height: 160, marginBottom: -1 }}
        src={item.img}
        alt=""
      />
      <div
        className={style.slider}
        style={{
          color: "black",
          width: 278,
          textAlign: "center",
        }}
      >
        <h1 style={{ fontWeight: 600 }}>{item.title}</h1>
        {/* <p>{item.description}</p> */}
      </div>
      {/* <button>
        <Link href="/products">Learn More</Link>
      </button> */}
    </div>
  );

  return (
    <div className={style.container}>
      {/* <div className={style.content}>
        <h4>Building solutions that impact us all for the better</h4>
        <p>
          Our impact on the world is driven by what our products enable . Read
          our inaugural Environmental , Social and Governance(ESG) report to
          learn how we are driving positive change and taking action for our
          Healthcare and Enterprise customers - during three challenging time
          and always
        </p>
      </div> */}
      <div className={style.carousel}>
        <Carousel breakPoints={breakPoint} className={style.carBody}>
          {data.map((item) => getComponent(item))}

          {/* <div
            className={style.sliderBody}
            style={{ width: 277, textAlign: "center" }}
          >
            <img
              style={{ width: 279, height: 160, marginBottom: -1 }}
              src="images/Asset_15.png"
              alt=""
            />
            <div
              className={style.slider}
              style={{
                color: "black",
                width: 278,
                textAlign: "center",
              }}
            >
              <h1 style={{ fontWeight: 600 }}>Banking</h1>
              <p>
                Redefining user experience in the “bot-first era” with our
                revolutionar Conversational Banking solution.Enhanced user
                experience by state of the art AI system.
              </p>
            </div>
            <button>Learn More</button>
          </div>

          <div
            className={style.sliderBody}
            style={{ width: 277, textAlign: "center" }}
          >
            <img
              style={{ width: 279, height: 160, marginBottom: -1 }}
              src="images/Asset_21.png"
              alt=""
            />
            <div
              className={style.slider}
              style={{
                color: "black",
                width: 278,
                textAlign: "center",
              }}
            >
              <h1 style={{ fontWeight: 600 }}>Insurance</h1>
              <p>
                An Artifificial Intelligence-powered insurance chat- bot can
                help improve sales while decreasing cycle times. Insurance
                industries have use for other AI driven technology in many
                levels of servce.
              </p>
            </div>
            <button>Learn More</button>
          </div>
          <div
            className={style.sliderBody}
            style={{ width: 277, textAlign: "center" }}
          >
            <img
              style={{ width: 279, height: 160, marginBottom: -1 }}
              src="images/Asset_17.png"
              alt=""
            />
            <div
              className={style.slider}
              style={{
                color: "black",
                width: 278,
                textAlign: "center",
              }}
            >
              <h1 style={{ fontWeight: 600 }}>Healthcare</h1>
              <p>
                Making doctor appointments or buying medicines online painless
                for patients or concerned people through next level AI powered
                healthcare solutions.
              </p>
            </div>
            <button>Learn More</button>
          </div>

          <div
            className={style.sliderBody}
            style={{ width: 277, textAlign: "center" }}
          >
            <img
              style={{ width: 279, height: 160, marginBottom: -1 }}
              src="images/Asset_20.png"
              alt=""
            />
            <div
              className={style.slider}
              style={{
                color: "black",
                width: 278,
                textAlign: "center",
              }}
            >
              <h1 style={{ fontWeight: 600 }}>Retail</h1>
              <p>
                Conversational Commerce is transforming the way people shop
                today. AI and 4.0 technology driven eCommerce is the next
                generation of current tradi- tional eCommerce systems.
              </p>
            </div>
            <button>Learn More</button>
          </div> */}
        </Carousel>
      </div>

      {/* <div className={style.line}></div> */}
    </div>
  );
};

export default OurSolution;
