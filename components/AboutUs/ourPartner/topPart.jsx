import React from "react";
import Link from "next/link";

import Style from "./ourPartner.module.scss";

const TopPart = () => {
  return (
    <div className={Style.main}>
      <div className={Style.mainContent}>
        <div className={Style.company}>
          <h1>Parterns in our Portfolio</h1>
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

        <div className={Style.middleContent}>
          <div className={Style.middle}>
            <h2>GET IN TOUCH WITH US</h2>
            <p>Get involved with intelsense AI, We can talk AI all day!</p>
            <Link href="/" style={{ textDecoration: "none" }}>
              WRITE TO US
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPart;
