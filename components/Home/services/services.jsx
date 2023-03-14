/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from 'next/image'
import { CardGroup, Card, Row, Col } from "react-bootstrap";
import Styles from './Services.module.scss';
import { Style } from "@material-ui/icons";

const data = [
  {
    id: 1,
    title: "Natural Language Processing",
    discription: `Our NLP capabilities ensure the utmost benefit to your business, helping your business communicate with your customers in their own languages, making it possible to interpret speech or texts intuitively, measure sentiment and enable you to take data driven decisions effectively.`,
    link: "#",
    logo: "/images/NLP Medium.jpeg",
  },
  {
    id: 2,
    title: "Speech Technologies",
    discription: `From converting your voice messages to text, to recognizing your customers voice commands and working accordingly, our Speech Technologies are obliged to improve the customer experiences.`,
    link: "#",
    logo: "/images/Speech Medium.jpeg",
  },
  {
    id: 3,
    title: "Computer Vision",
    discription:
      "By training your systems, our Computer Vision technologies can interpret and understand multifarious visual recognition patterns required for your business. Using digital images, videos or deep learning models, your platform can accurately identify, classify objects or people and respond accordingly with our technology",
    link: "#",
    logo: "/images/computer vision Medium.jpeg",
  },
  // {
  //   id: 4,
  //   title: "Big Data Analytics Solutions",
  //   discription:
  //     "Big data is a field that treats ways to analyze, systematically extract information from, or otherwise deal with data sets that are too large or complex to be dealt with by traditional data-processing application software",
  //   link: "#",
  //   logo: "images/aisolutions-da1.svg",
  // },
];

const Services = () => {
  return (
    <div className={Styles.Services}>
      {/* HEADING */}
        <p className={Styles.Services_title}><b>Services</b> we provide!</p>
        <p className={Styles.Services_description}>The Next Generation Language Processing & Voice AI Solutions </p>
      {/* CARDS */}
      <div className={Styles.Services_cards}>
        <div className={Styles.Services_card}>
          <img src="/images/NLP.svg"  alt="..." />
          <p className={Styles.card_title}>Speech Technologies</p>
          <p className={Styles.card_description}>From converting your voice messages to text, to recognizing your customers voice commands and working accordingly, our Speech Technologies are obliged to improve the customer experiences.</p>
        </div>
        <div className={Styles.Services_card}>
          <img src="/images/ST.svg"  alt="..." />
          <p className={Styles.card_title}>Natural Language Processing</p>
          <p className={Styles.card_description}>Our NLP capabilities ensure the utmost benefit to your business, helping your business communicate with your customers in their own languages, making it possible to interpret speech or texts intuitively, measure sentiment and enable you to take data driven decisions effectively.</p>
        </div>
      </div>
    </div>
    // <div className={`py-5 ${Styles.AISolution}`}>
    //   <div className="container py-5">
    //       <p className={`ps-2 ${Styles.heading}`}><b>Services</b> we provide! </p>
    //       <div className="row mx-0 gy-3 w-100">
    //         {/* Card 1 */}
    //             <div className={`col-md-12 ${Styles.cards}`} key="">
    //                 <div className="row mx-0 w-100">
    //                     <img src="/images/NLP Medium.jpeg" className={`col-md-6 ${Styles.card_image}`}  alt="..." />
    //                     <div className="col-md-1"></div>
    //                     <div className={`col-md-5 ${Styles.card_body}`}>
    //                         <div>
    //                             <h5 className="card-title fw-bold pt-4">Natural Language Processing</h5>
    //                             <p className={Styles.card_description}>Our NLP capabilities ensure the utmost benefit to your business, helping your business communicate with your customers in their own languages, making it possible to interpret speech or texts intuitively, measure sentiment and enable you to take data driven decisions effectively.</p>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>

    //             {/* Card 2 */}
    //             <div className={`col-md-12 py-4 ${Styles.cards}`} key="">
    //                 <div className="row mx-0 w-100">
    //                     <div className={`col-md-5 ${Styles.card_body}`}>
    //                         <div>
    //                             <h5 className="card-title fw-bold">Speech Technologies</h5>
    //                             <p className={Styles.card_description}>From converting your voice messages to text, to recognizing your customers voice commands and working accordingly, our Speech Technologies are obliged to improve the customer experiences.</p>
    //                         </div>
    //                     </div>
    //                     <div className="col-md-1"></div>
    //                     <img src="/images/Speech Medium.jpeg" className={`col-md-6 ${Styles.card_image}`}  alt="..." />
    //                 </div>
    //             </div>

    //             {/* Card 3 */}
    //             <div className={`col-md-12 ${Styles.cards}`} key="">
    //                 <div className="row mx-0 w-100">
    //                     <img src="/images/computer vision Medium.jpeg" className={`col-md-6 ${Styles.card_image}`}  alt="..." />
    //                     <div className="col-md-1"></div>
    //                     <div className={`col-md-5 ${Styles.card_body}`}>
    //                         <div>
    //                             <h5 className="card-title fw-bold pt-4">Computer Vision</h5>
    //                             <p className={Styles.card_description}>By training your systems, our Computer Vision technologies can interpret and understand multifarious visual recognition patterns required for your business. Using digital images, videos or deep learning models, your platform can accurately identify, classify objects or people and respond accordingly with our technology.</p>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //       </div>
    //   </div>
    // </div>
  );
};

export default Services;