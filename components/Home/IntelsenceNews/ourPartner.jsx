import React from "react";
import style from "./news.module.scss";
import Style from "./ourPartner.module.scss";

const breakPoint3 = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];
  

const Partners = () => {
  return (
    <div className={style.container}>
      {/*Footer part*/}
      <div className={Style.company}>
        <h1>Parterns in our Portfolio</h1>
        <div breakPoints={breakPoint3} className={Style.partnerWrapper}>
          <div className={Style.comLogo}>
            <img src="images/Partners Logo/alphasense.png" alt="" />
          </div>
          <div className={Style.comLogo}>
            <img src="images/Partners Logo/bat.jpg" alt="" />
          </div>
          <div className={Style.comLogo}>
            <img src="images/Partners Logo/gale.png" alt="" />
          </div>
          <div className={Style.comLogo}>
            <img src="images/Partners Logo/Headsbase-2.png" alt="" />
          </div>
          <div className={Style.comLogo}>
            <img src="images/Partners Logo/Ignite Soft Logo.png" alt="" />
          </div>
        </div>
        <div breakPoints={breakPoint3} className={Style.partnerWrapper}>
          <div className={Style.comLogo}>
            <img src="images/Partners Logo/index group.jpg" alt="" />
          </div>
          <div className={Style.comLogo}>
            <img src="images/Partners Logo/index.jpg" alt="" />
          </div>
          <div className={Style.comLogo}>
            <img src="images/Partners Logo/inzendio.jpg" alt="" />
          </div>
          <div className={Style.comLogo}>
            <img src="images/Partners Logo/signature.jpg" alt="" />
          </div>
          <div className={Style.comLogo}>
            <img src="images/Partners Logo/svp.jpg" alt="" />
          </div>
          <div className={Style.comLogo}>
            <img src="images/Partners Logo/unilivr" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
