import React from "react";
import Link from "next/link";

import NavbarMobile from "./NavbarMobile";
import NavbarStyles from "./Navbar.module.scss";
import { Button, makeStyles } from "@material-ui/core";
import AISolutionsMouseOverPopover from "./AISolPopover";
// import { getToken } from "../../utils/api";

const data = [
  {
    id: 0,
    title: "Sensevoice →",
    subtitle: "Transcription Platform supported by Custom Built Speech Recognition & Text To Speech Engine",
    link: "https://sensevoice.intelsense.ai/",
    logo: "/images/New_Images/SenseVoice.png",
  },
  {
    id: 1,
    title: "Sensebots →",
    subtitle: "Deep Learning Based Conversational AI Chatbot Platform.",
    link: "https://sensevoice.intelsense.ai/products",
    logo: "/images/New_Images/SenseBot.png",
  },
  {
    id: 2,
    title: "HIA →",
    subtitle:
      "Voice Based AI-powered virtual assistant of Intelsense AI, that combines ASR, TTS, NLP, & NLU.",
    link: "https://sensevoice.intelsense.ai/products",
    logo: "/images/New_Images/hia_img10.png",
    productLink: "",
  },
  {
    id: 3,
    title: "Airvoice →",
    subtitle: "AI Driven Voice Commerce service for e-commerce platforms",
    link: "https://sensevoice.intelsense.ai/products",
    logo: "/images/New_Images/Airvoice.png",
    productLink: "",
    
  },
  {
    id: 4,
    title: "InsideSense →",
    subtitle: "AI Driven Social Sentiment Analysis & Listening Platform.",
    link: "https://sensevoice.intelsense.ai/products",
    logo: "/images/New_Images/InsideSense.png",
    productLink: "",
  }
]

const useStyles = makeStyles(() => ({
  btn: {
    textTransform: "none",
    fontWeight: "bold",
    fontSize: 12,
    background: "orange",
    color: "black",

    "&:hover": {
      background: "white",
      color: "black",
    },
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  return (
    <div className={NavbarStyles.container}>
      {/* <div className="d-flex">
        <img
          src="/images/logo.svg"
          className={NavbarStyles.logo}
          alt="intensense.ai"
          />
          <div className="m-auto d-flex">
            <div className="m-auto">
              <p>Home</p>
            </div>
            <div className={`${NavbarStyles.test} m-auto`}>
              <p >Product</p>
              <div className={NavbarStyles.Megamenue}>
        <div className="container">
          <div className="row w-100 m-0 p-0">
            {data.map((item) => {
              return (
              <div className="col-6 d-flex mb-4">
                <img src={item.logo} alt="intensense.ai" /> 
                <div className="pe-4">
                  <p>{item.title}</p>
                  <small>{item.subtitle}</small>
                </div>
              </div>
             );
           })}
          </div>
        </div>
      </div>
            </div >
            <div className="mx-5 my-4">
              <p>Careers</p>
            </div>
            <div className="mx-5 my-4">
              <p>Blogs</p>
            </div>
            <div className="mx-5 my-4">
              <p>Contacts</p>
            </div>
          </div>
      </div> */}
      <div className={`px-5 ${NavbarStyles.Navbar}`}>
        <div>
          <Link exact href="/">
            <img
              src="/images/logo.svg"
              className={NavbarStyles.logo}
              alt="intensense.ai"
            />
          </Link>
        </div>
        <div>
          <ul className={` openSans ${NavbarStyles.NavItems}`}>
            <li>
              <Link exact activeClassName={NavbarStyles.activeLink} href="/">
                Home
              </Link>
            </li>
            <li className={NavbarStyles.Products}>
              <Link
                exact
                activeClassName={NavbarStyles.activeLink}
                href="/products"
              >
                <small className="Product">Products <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/> </svg></small>
              </Link>
              {/* MEGAMENUE */}
              <div className={NavbarStyles.Megamenue}>
                <div className="container">
                  <div className="row w-100 m-0 p-0">
                    {data.map((item) => {
                      return (
                        <div className="col-6 d-flex mb-4">
                          <img src={item.logo} alt="intensense.ai" /> 
                          <div className="pe-4">
                            <a href={item.link} target="_blank" className={NavbarStyles.Megamenue_a}>{item.title}</a>
                            <p className={NavbarStyles.Megamenue_p}>{item.subtitle}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link
                exact
                activeClassName={NavbarStyles.activeLink}
                href="/careers"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                exact
                activeClassName={NavbarStyles.activeLink}
                href="/investorRelation"
              >
                Investor Relation
              </Link>
            </li>
            <li>
              <Link
                exact
                activeClassName={NavbarStyles.activeLink}
                href="/blog"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                exact
                activeClassName={NavbarStyles.activeLink}
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className={NavbarStyles.NavbarMobile}>
        <NavbarMobile />
      </div>
    </div>
  );
};

export default Navbar;
