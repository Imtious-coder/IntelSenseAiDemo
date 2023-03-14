/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import ReactElasticCarousel from "react-elastic-carousel";
import { useOnScreen } from "../../../utils/hooks";
import Styles from "./technology.module.scss";
import TechnologyItem from "./technologyItems";
import Image from "next/image";

const data = [
  {
    id: 0,
    title: "Sensebots",
    subtitle: "Deep Learning Based Conversational AI Chatbot Platform.",
    discription:
      "Our Automatic Speech Recognition engine leverages the most advanced forms of Deep Learning.",
    link: "#",
    logo: "/images/New_Images/SenseBot.png",
  },
  {
    id: 1,
    title: "HIA",
    subtitle:
      "Voice Based AI-powered virtual assistant of Intelsense AI, that combines ASR, TTS, NLP, & NLU.",
    discription:
      "Intelsense's HIA is the first technology that can understand and assess information in Bengali. By using a smartphone, a user can carry out transactions, communicate, seek medical aid, etc. ",
    link: "#",
    logo: "/images/New_Images/hia_img10.png",
    productLink: "",
  },
  {
    id: 2,
    title: "Airvoice",
    subtitle: "AI Driven Voice Commerce service for e-commerce platforms",
    discription:
      "Intelsense's HIA is the first technology that can understand and assess information in Bengali. By using a smartphone, a user can carry out transactions, communicate, seek medical aid, etc. ",
    link: "#",
    logo: "/images/New_Images/Airvoice.png",
    productLink: "",
    
  },
  {
    id: 3,
    title: "InsideSense",
    subtitle: "AI Driven Social Sentiment Analysis & Listening Platform.",
    discription:
      "Intelsense's HIA is the first technology that can understand and assess information in Bengali. By using a smartphone, a user can carry out transactions, communicate, seek medical aid, etc. ",
    link: "#",
    logo: "/images/New_Images/InsideSense.png",
    productLink: "",
  },
  // {
  //   id: 2,
  //   title: "SenseSpeech",
  //   subtitle: "Automatic Speech Recognition and Text to Speech",
  //   discription:
  //   "SenseSpeech can help companies achieve high levels of accuracy in transcribing speech to text in the form of phone calls, voicemail, natural conversations, and more.",
  //   link: "#",
  //   logo: "images/technology2.svg",
  // },
  // {
  //   id: 3,
  //   title: "SenseInsight",
  //   subtitle:
  //   "AI Powered Social Media Analytics and Business Intelligence Service",
  //   discription:
  //   "SenseInsight users to create and manage content, improve customer service and experience, gather insights through social listening, analyse competitors, advertise on social media, and analyse customer sentiment. ",
  //   link: "#",
  //   logo: "images/technology3.svg",
  // },

  // {
  //   id: 6,
  //   title: "SenseScore",
  //   subtitle: "Voice Based AI Driven Credit Scoring System",
  //   discription:
  //   "Build brand-unique natural language applications for customer care with highly engaging user experiences and human-like conversational interactions.",
  //   link: "#",
  //   logo: "images/sense score.png",
  // },
  // {
  //   id: 5,
  //   title: "SenseDrive",
  //   subtitle: "AI Powered Driver Monitoring System",
  //   discription: "",
  //   link: "#",
  //   logo: "images/sense drive.png",
  // },

  // {
  //   id: 4,
  //   title: "ViSense",
  //   subtitle: "AI Powered Visual Recognition and Authentication Solutions",
  //   discription:
  //     "This AI-powered visual recognition solution uses computer vision and deep learning algorithms to recognise faces and objects in real time and a lot others",
  //   link: "#",
  //   logo: "images/Sense Vi.png",
  // },
  // {
  //   id: 7,
  //   title: "SenseTrade",
  //   discription:
  //     "Build brand-unique natural language applications for customer care with highly engaging user experiences and human-like conversational interactions.",
  //   link: "#",
  //   logo: "images/sense trade.png",
  // },
];

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 1 },
  { width: 850, itemsToShow: 3 },
  { width: 1150, itemsToShow: 3, itemsToScroll: 1 },
  { width: 1450, itemsToShow: 3 },
  { width: 1750, itemsToShow: 4 },
];

const Technology = () => {
  const ref = useRef();
  const carousel = useRef();

  return (
    <div className={Styles.Product}>
      {/* HEADING */}
        <p className={Styles.Product_title}><b> Products </b> we are proud of!</p>
        <p className={Styles.Product_description}>The Next Generation Language Processing & Voice AI Solutions </p>
      {/* CARD1 */}
      <div className={`${Styles.Product_cards} pt-5 pb-4`}>
        <div className={Styles.Product_card}>
        <Image
          src="/images/New_Images/SenseVoice.png" alt="Picture of the author" width={200} height={150} />          
          <p className={Styles.card_description}>Transcription Platform supported by Custom Built Speech Recognition & Text To Speech Engine</p>
          <button className={Styles.button_dark}>Learn more</button>
        </div>
      </div>
      <div className={Styles.Product_cards}>
          {data.map((item) => {
            return (
              <div className={Styles.Product_card}>
                <img src={item.logo} alt="Picture of the product" /> 
                <p className={Styles.card_description}>{item.subtitle}</p>
                <button className={Styles.button_white}>Learn more</button>
              </div>
             );
           })}
      </div>
    </div>
    // <div className={Styles.products}>
    //   <div className="container py-5">
    //     <p className={`py-5 ${Styles.heading}`}>Our Products</p>
    //     <div className="row m-0 w-100">
    //       <div className={`col-12 p-4 pb-5 w-100 ${Styles.card}`} key="">
    //         <Image
    //           src="/images/New_Images/SenseVoice.png"
    //           alt="Picture of the author"
    //           width={200}
    //           height={150}
    //         />{" "}
    //         <p className={`openSans ps-5 ${Styles.card_description}`}>
    //           Sensevoice is a transcription platform where any user can input any
    //           Bengali or English audio or video file, which will automatically
    //           generate text from the speech found in the uploaded files. The
    //           platform is supported by our Custom Buit Speech Recognition & Text
    //           To Speech Engine
    //         </p>
    //         <p className="openSans ps-5">
    //           To learn more -{" "}
    //           <a href="https://sensevoice.intelsense.ai/" target="{_blank}">
    //             https://sensevoice.intelsense.ai/
    //           </a>
    //         </p>
    //       </div>{" "}
    //       <div className="col-md-12 p-0">
    //         <div className="row w-100 m-0 g-4">
    //           {data.map((item) => {
    //             return (
    //               <div className={`col-12 col-md-6 p-4 ${Styles.cards}`} key="">
    //                 <img src={item.logo} alt="product-image" />
    //                 <p className="openSans ps-3">{item.subtitle}</p>
    //               </div>
    //             );
    //           })}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>



    // <div className={TechnologyStyle.container}>
    //   <h1 className={TechnologyStyle.headerText}>Our Products</h1>
    //   <p className={TechnologyStyle.subHeader}>
    //     Intelsense has developd an entire stack of AI driven innovative
    //     technologies that allow enterprises to realize the digital
    //     transformation of business model.
    //   </p>
    //   <div className={TechnologyStyle.carouselContainer} ref={ref}>
    //     <ReactElasticCarousel
    //       breakPoints={breakPoints}
    //       itemsToShow={3}
    //       focusOnSelect={true}
    //       className={TechnologyStyle.content}
    //     >
    //       {data.map((item) => (
    //         <TechnologyItem key={item.id} data={item} />
    //       ))}
    //     </ReactElasticCarousel>
    //   </div>
    // </div>
  );
};

export default Technology;
