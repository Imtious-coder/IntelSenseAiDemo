import React, { Component } from "react";
import InNumberStyle from "./inNumber.module.scss";

const InNumber = () => {
  return (
    <div className={InNumberStyle.container}>
      <div className={InNumberStyle.header}>
        {/* <img src="/images/logo-white.png" width="100%" alt="logo" /> */}
        <h1>Intelsense AI in numbers</h1>
      </div>
      <div className={InNumberStyle.svgContainer}>
        <img src='/images/Unknown.svg' />
      </div>
      {/* <div className={InNumberStyle.hexagonGrid}>
        <ul className={InNumberStyle.hex_grid__list}>
          <li className={InNumberStyle.hex_grid__item}>
            <div className={InNumberStyle.hex_grid__content}>
              <img src="images/inNumber (1).svg" alt="logo" />
              <p>50+ authentic ai powered products</p>
            </div>
          </li>
          <li className={InNumberStyle.hex_grid__item}>
            <div className={InNumberStyle.hex_grid__content}>
              <h1>92%</h1>
              <h4>Semantic Accuracy</h4>
            </div>
          </li>
          <li className={InNumberStyle.hex_grid__item}>
            <div className={InNumberStyle.hex_grid__content}>
              <img src="images/inNumber (3).svg" alt="logo" />
              <p>11% up in seles</p>
            </div>
          </li>
          <li className={InNumberStyle.hex_grid__item}>
            <div className={InNumberStyle.hex_grid__content}>
              <h1>24</h1>
              <h4>Deep ASR LANGUAGES</h4>
            </div>
          </li>
          <li className={InNumberStyle.hex_grid__item}>
            <div className={InNumberStyle.hex_grid__content}>
              <img src="images/inNumber (5).svg" alt="logo" />
              <p>+45% self service usage saving 33% transport cost</p>
            </div>
          </li>
          <li className={InNumberStyle.hex_grid__item}>
            <div className={InNumberStyle.hex_grid__content}></div>
          </li>
          <li className={InNumberStyle.hex_grid__item}>
            <div className={InNumberStyle.hex_grid__content}>
              <img src="images/inNumber (2).svg" alt="logo" />
              <p>34 startup accelaration</p>
            </div>
          </li>
          <li className={InNumberStyle.hex_grid__item}>
            <div className={InNumberStyle.hex_grid__content}>
              <h1>96%</h1>
              <h4>Task Completion</h4>
            </div>
          </li>
          <li className={InNumberStyle.hex_grid__item}>
            <div className={InNumberStyle.hex_grid__content}>
              <img src="images/inNumber (4).svg" alt="logo" />
              <p>7.2 faster transaction</p>
            </div>
          </li>
          <li className={InNumberStyle.hex_grid__item}>
            <div className={InNumberStyle.hex_grid__content}>
              <h1>15</h1>
              <h4>Countries</h4>
            </div>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default InNumber;
