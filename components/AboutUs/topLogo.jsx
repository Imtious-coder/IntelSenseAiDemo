import React, { Component } from "react";
import Style from "./topLogo.module.scss";

const TopLogo=()=> {

    return (
      <div>
        <a className={Style.aboutButton}>About Us</a>
      </div>
    );
}

export default TopLogo;
