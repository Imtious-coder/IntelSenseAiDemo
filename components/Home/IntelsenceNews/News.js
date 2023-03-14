import React from "react";
import style from "./news.module.scss";
import Carousel from "react-elastic-carousel";
// import "./style.css";
import Style from "./ourPartner.module.scss";
import { getNews } from "../../../utils/api";
import Link from "next/link";

// const breakPoint = [
//   { width: 1, itemsToShow: 1 },
//   { width: 550, itemsToShow: 2 },
//   { width: 768, itemsToShow: 3 },
//   { width: 1200, itemsToShow: 4 },
//   // {width: 1300, itemsToShow: 5}
// ];
// const breakPoint2 = [{ width: 1, itemsToShow: 1 }];
// const breakPoint3 = [
//   { width: 1, itemsToShow: 1 },
//   { width: 550, itemsToShow: 2, itemsToScroll: 2 },
//   { width: 850, itemsToShow: 3 },
//   { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
//   { width: 1450, itemsToShow: 5 },
//   { width: 1750, itemsToShow: 6 },
// ];

const NewsApp = () => {
  const [data, setData] = React.useState(true);

  // React.useEffect(() => {
  //   getNews()
  //     .then((res) => setData(res.data))
  //     .catch((e) => null);
  // }, []);

  return (
    <div>
      {/* REVIEW */}
      <div className={Style.Review}>
        <p className={Style.review_title}><b> What out </b> Partners Say</p>
        {/* CARDS */}
        <div className={Style.review_cards}>
          <Carousel enableAutoPlay autoPlaySpeed={2000} showArrows={true}>
            <div className="pt-5 mt-3">
              <div className={Style.review_card}>
                <img src="/images/Leader4.png"  alt="..." />
                <p className={Style.card_description}>From converting your voice messages to text, to recognizing your customers voice commands and working accordingly, our Speech Technologies are obliged to improve the customer experiences.</p>
                <p className="mb-0 mt-5"><b>Shyamol Saha</b></p>
                <p className="mb-0 text-secondary">COO, Transsion Bangladesh Limited</p>
              </div>
            </div>
            <div className="pt-5 mt-3">
              <div className={Style.review_card}>
                <img src="/images/Leader4.png"  alt="..." />
                <p className={Style.card_description}>From converting your voice messages to text, to recognizing your customers voice commands and working accordingly, our Speech Technologies are obliged to improve the customer experiences.</p>
                <p className="mb-0 mt-5"><b>Shyamol Saha</b></p>
                <p className="mb-0 text-secondary">COO, Transsion Bangladesh Limited</p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>

      {/* PARTNERS */}
      <div className={Style.Partners}>
        <p className={Style.Partners_title}><b> Partners </b>in our Portfolio!</p>
        <div className={Style.Partners_logos}>
            <img src="images/Partners Logo/index group.jpg" alt="" />
            <img src="images/Partners Logo/gale.png" alt="" />
            {/* <img src="images/Partners Logo/alphasense.png" alt="" /> */}
            <img src="images/Partners Logo/signature.jpg" alt="" />
            <img src="images/Partners Logo/index.jpg" alt="" />
            <img src="images/Partners Logo/bat.jpg" alt="" />
            <img src="images/Partners Logo/svp.jpg" alt="" />
            {/* <img src="images/Partners Logo/Headsbase-2.png" alt="" /> */}
            {/* <img src="images/Partners Logo/inzendio.jpg" alt="" /> */}
            <img src="images/Partners Logo/unilivr" alt="" />
            <img src="images/Partners Logo/Ignite Soft Logo.png" alt="" />
        </div>  
      </div>

      {/* LETS TALK */}
      <div className={Style.Lets_talk}>
        <div>
          <p className={Style.Lets_talk_title}>Arrange a demonstration</p>
          <p className={Style.Lets_talk_subtitle}>Are you interested to know how our awesome technologies work?</p>
          <button className={Style.button_dark}>Let's Talk</button>
        </div>
      </div>
    </div>
  );
};

export default NewsApp;
