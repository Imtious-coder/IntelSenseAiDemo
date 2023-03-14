import React from "react";
import Link from "next/link";
import Style from "./ourPartner.module.scss";

export default function GetInTouch() {
  return (
    <div className={Style.main}>
      <div className={Style.mainContent}>
        <div className={Style.middleContent}>
          <div className={Style.middle}>
            <h2>GET IN TOUCH WITH US</h2>
            <p>Get involved with intelsense AI, We can talk AI all day!</p>
            <Link href="/contact" style={{ textDecoration: "none" }}>
              WRITE TO US
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
