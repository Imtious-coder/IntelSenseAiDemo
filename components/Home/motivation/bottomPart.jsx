import React from "react";
import Styles from "./bottomPart.module.scss";
import Link from "next/link";
import Image from "next/image";

const BottomPart = () => {
  return (
    <div className="container openSans py-5 px-md-5 px-4">
      <div className="row m-0 w-100">
        <div className="col-12 col-md-3 p-0">
          <Link exact href="/">
            <img
              src="/images/logo.svg"
              className={Styles.logo}
              alt="intensense.ai"
            />
          </Link>
          <p className={Styles.info}>An aspiring leader in machine translation, natural language processing and automated speech recognition technologies using artificial intelligence</p>
          <div className="d-flex">
            <a href="https://www.facebook.com/intelsenseai" target={"_blank"} rel="noreferrer">
              <img className={Styles.social} src="/images/facebook.png" alt="social"/>
            </a>
            <a href="">
              <img className={Styles.social} src="/images/twitter.png" alt="social"/>
            </a>
            <a href="">
              <img className={Styles.social} src="/images/youtube.png" alt="social"/>
            </a>
            <a href="">
              <img className={Styles.social} src="/images/Glossy-Instagram-logo-PNG.png" alt="social"/>
            </a>
          </div>
        </div>
        <div className="col-md-1"></div>
        <div className="col-6 col-md-2 pt-5 pt-md-0">
          <p>
            <strong>Pages</strong>
          </p>
          <Link exact href="/">
            <p className={Styles.links}>Home</p>
          </Link>
          <Link
              exact
              href="/products">
              <p className={Styles.links}>Products</p>
            </Link>
          <Link exact href="/careers">
            <p className={Styles.links}>Careers</p>
          </Link>
          <Link exact href="/blog">
            <p className={Styles.links}>Blog</p>
          </Link>
        </div>
        {/* <div className="col-4 col-md-1 pt-4 pt-md-0">
          <p>
            <strong>Pages</strong>
          </p>
          <p>How it work</p>
          <p>Pricing</p>
          <p>Blog</p>
          <p>Demo</p>
        </div> */}
        <div className="col-6 col-md-2 pt-5 pt-md-0">
          <p>
            <strong>Services</strong>
          </p>
          <p>Shopify</p>
          <p>Wordpress</p>
          <p>UI/UX Design</p>
        </div>
        <div className="col-12 col-md-4 pt-md-0 pt-4 pt-md-0">
          <p>
            <strong>Maps Location</strong>
          </p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.2191879780303!2d90.41309731538506!3d23.775207893744213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79cd0fc92e9%3A0x9a2be57b46720233!2sHouse-60%2C%201b%20Rd%2003%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1662820984035!5m2!1sen!2sbd" className={Styles.map} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        {/* <div className="col-6 col-md-3">
            <p className={` pt-2 ${Styles.address_link1}`}>
                INTELSENSE AI LIMITED
            </p>
            <p className={Styles.address_links}>
              House-60, Road-03, Block-B
            </p>
            <p className={Styles.address_links}>
              Niketon, Gulshan-1, Dhaka 
            </p>
            <p className={Styles.address_links}>
              Email: <span className={Styles.email_link}>info@intelsense.ai</span> 
            </p>
            <p className={Styles.address_links}>
              Contact: <span className="fw-bold">+880 1625-555007</span>
            </p>
        </div> */}
        {/* <div className="col-12 col-md-3">
        <p className={` pt-2 text-center ${Styles.address_link1}`}>
            We are on Facebook
        </p>
        <div className="d-flex justify-content-center">
          <a href="https://www.facebook.com/intelsenseai" target={"_blank"} rel="noreferrer">
            <img className={Styles.social} src="/images/facebook.png" alt="social"/>
          </a>
          <a href="">
            <img className={Styles.social} src="/images/twitter.png" alt="social"/>
          </a>
          <a href="">
            <img className={Styles.social} src="/images/youtube.png" alt="social"/>
          </a>
        </div>
        </div> */}
      </div>
    </div>
    // <div className={BottomPartStyle.outerDiv}>
    //   <img
    //     src="/images/logo.svg"
    //     className={BottomPartStyle.logo}
    //     alt="intensense.ai"
    //   />
    //   <div className={BottomPartStyle.list}>
    //     <div className={BottomPartStyle.listItem}>
    //       <p>AI Solutions+</p>
    //       <div>
    //         <div className={BottomPartStyle.varLine}>
    //           <ul className={BottomPartStyle.ulList}>
    //             <li>NPL Solutions</li>
    //             <li>Computer Vision Solutions</li>
    //             <li>Data Analytics Solutions</li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //     <div className={BottomPartStyle.listItem}>
    //       <p>Technologies+</p>
    //       <div>
    //         <div className={BottomPartStyle.varLine}>
    //           <ul className={BottomPartStyle.ulList}>
    //             <li>BOTS</li>
    //             <li>SenseBOTS</li>
    //             <li>Image</li>
    //             <li>Insights</li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //     <div className={BottomPartStyle.listItem}>
    //       <p>Industries</p>
    //       <div>
    //         <div className={BottomPartStyle.varLine}>
    //           <ul className={BottomPartStyle.ulList}>
    //             <li>Possibilities</li>
    //             <li>Information</li>
    //             <li>Working</li>
    //             <li>Connection Points</li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //     <div className={BottomPartStyle.listItem}>
    //       <p>Research</p>
    //       <div>
    //         <div className={BottomPartStyle.varLine}>
    //           <ul className={BottomPartStyle.ulList}>
    //             <li>Overview</li>
    //             <li>Oppertunities</li>
    //             <li>Publications</li>
    //             <li>Network</li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //     <div className={BottomPartStyle.listItem}>
    //       <p>Blog</p>
    //       <div>
    //         <div className={BottomPartStyle.varLine}>
    //           <ul className={BottomPartStyle.ulList}>
    //             <li>Research</li>
    //             <li>Technology</li>
    //             <li>News</li>
    //             <li>Industry Information</li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //     <div className={BottomPartStyle.listItem}>
    //       <p>Case Studies+</p>
    //       <div>
    //         <div className={BottomPartStyle.varLine}>
    //           <ul className={BottomPartStyle.ulList}>
    //             <li>Case Study</li>
    //             <li>Case Study</li>
    //             <li>Case Study</li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //     <div className={BottomPartStyle.listItem}>
    //       <p>Careers</p>
    //       <div>
    //         <div className={BottomPartStyle.varLine}>
    //           <ul className={BottomPartStyle.ulList}>
    //             <li>Mission</li>
    //             <li>Vision</li>
    //             <li>Terms</li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //     <div className={BottomPartStyle.listItem}>
    //       <p>Contact</p>
    //       <div>
    //         <div className={BottomPartStyle.varLine}>
    //           <ul className={BottomPartStyle.ulList}>
    //             <li>Find us in Dhaka</li>
    //             <li>Contact Info</li>
    //             <li>Map</li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //     <div className={BottomPartStyle.listItem}>
    //       <p>About Us</p>
    //       <div>
    //         <div className={BottomPartStyle.varLine}></div>
    //       </div>
    //     </div>
    //     <div className={BottomPartStyle.footerText}>
    //       <h5>
    //         Made With Love By <br /> <b>INTELSENSE AI</b>
    //       </h5>
    //     </div>
    //   </div>
    //   <hr />
    //   <div className={BottomPartStyle.link}>
    //     <a href="#">Press</a>
    //     <a href="#">Terms & Condition</a>
    //     <a href="#">Privacy Policy</a>
    //     <a href="#">INTELSENSE LIMITED</a>
    //   </div>
    // </div>
  );
};

export default BottomPart;
