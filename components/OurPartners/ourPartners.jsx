import React from "react";
import Style from "./ourPartner.module.scss";

export default function OurPartners() {
  return (
    <div className={Style.company}>
      <h1>Partners in our Portfolio</h1>
      <div className={Style.partnerWrapper}>
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
        <div className={Style.comLogo}>
          <img src="images/Partners Logo/index group.jpg" alt="" />
        </div>
        <div className={Style.comLogo}>
          <img src="images/Partners Logo/index.jpg" alt="" />
        </div>
        <div className={Style.comLogo}>
          <img src="images/Partners Logo/inzendio.jpg" alt="" />
        </div>
        {/* <div className={Style.comLogo}>
          <img src="images/Partners Logo/ng.jpg" alt="" />
        </div> */}
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
  );
}
