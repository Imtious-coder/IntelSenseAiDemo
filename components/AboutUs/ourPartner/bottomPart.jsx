import React from "react";
import BottomPartStyle from "./bottomPart.module.scss";

import MobileFooter from "./MobileFooter";

const BottomPart = () => {
  return (
    <React.Fragment>
      <div className={BottomPartStyle.outerDiv}>
        <div className={BottomPartStyle.list}>
          <div className={BottomPartStyle.listItem}>
            <p>AI Solutions</p>
            <div>
              <div className={BottomPartStyle.varLine}>
                <ul className={BottomPartStyle.ulList}>
                  <li>NLP Solutions</li>
                  <li>Speech Solutions</li>
                  <li>Computer Vision Solutions</li>
                  <li>Big data and Analytics solution</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={BottomPartStyle.listItem}>
            <p>Technologies</p>
            <div>
              <div className={BottomPartStyle.varLine}>
                <ul className={BottomPartStyle.ulList}>
                  <li>SenseBots</li>
                  <li>SenseSpeech</li>
                  <li>HIA</li>
                  <li>ViSense</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={BottomPartStyle.listItem}>
            <p>Industries</p>
            <div>
              <div className={BottomPartStyle.varLine}>
                <ul className={BottomPartStyle.ulList}>
                  <li>Possibilities</li>
                  <li>Information</li>
                  <li>Working</li>
                  <li>Connection Points</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={BottomPartStyle.listItem}>
            <p>Research</p>
            <div>
              <div className={BottomPartStyle.varLine}>
                <ul className={BottomPartStyle.ulList}>
                  <li>Overview</li>
                  <li>Oppertunities</li>
                  <li>Publications</li>
                  <li>Network</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={BottomPartStyle.listItem}>
            <p>Blog</p>
            <div>
              <div className={BottomPartStyle.varLine}>
                <ul className={BottomPartStyle.ulList}>
                  <li>Research</li>
                  <li>Technology</li>
                  <li>News</li>
                  <li>Industry Information</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={BottomPartStyle.listItem}>
            <p>Case Studies+</p>
            <div>
              <div className={BottomPartStyle.varLine}>
                <ul className={BottomPartStyle.ulList}>
                  <li>Case Study</li>
                  <li>Case Study</li>
                  <li>Case Study</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={BottomPartStyle.listItem}>
            <p>Careers</p>
            <div>
              <div className={BottomPartStyle.varLine}>
                <ul className={BottomPartStyle.ulList}>
                  <li>Mission</li>
                  <li>Vision</li>
                  <li>Terms</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={BottomPartStyle.listItem}>
            <p>Contact</p>
            <div>
              <div className={BottomPartStyle.varLine}>
                <ul className={BottomPartStyle.ulList}>
                  <li>Find us in Dhaka</li>
                  <li>Contact Info</li>
                  <li>Map</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={BottomPartStyle.listItem}>
            <p>About Us</p>
            <div>
              <div className={BottomPartStyle.varLine}>
                <ul className={BottomPartStyle.ulList}>
                  <li>Who we are</li>
                  <li>What we do</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={BottomPartStyle.footerText}>
            <p>
              <b>INTELSENSE AI</b> <br /> INTELSENSE AI LIMITED House-60,
              Road-03, Block-B <br /> Niketon, Gulshan-1, Dhaka
            </p>
          </div>
        </div>

        <hr />
        <div className={BottomPartStyle.link}>
          <a href="#">Press</a>
          <a href="#">Terms & Condition</a>
          <a href="#">Privacy Policy</a>
          <a href="#">INTELSENSE LIMITED</a>
        </div>
        <div className={BottomPartStyle.footerText}>
          MADE WITH LOVE BY &nbsp;
          <b>
            INTELSENSE<span style={{ color: "dodgerblue" }}>AI</span>
          </b>
          <br />
          intelsense.ai &copy; 2018-2023
        </div>
      </div>
      <div className={BottomPartStyle.mobile}>
        <MobileFooter />
      </div>
    </React.Fragment>
  );
};

export default BottomPart;
