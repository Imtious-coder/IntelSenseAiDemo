import React from "react";

import FirstPage from "../components/AboutUs/firstPage/firstPage";
import SecondPage from "../components/AboutUs/secondPage/secondPage";
import OurStory from "../components/AboutUs/ourStory/ourStory";
import Team from "../components/AboutUs/Team/Team";

import WorkAreaApp from "../components/AboutUs/WorkArea/WorkArea";
import OurPartners from "../components/OurPartners/ourPartners";
import GetInTouch from "../components/AboutUs/ourPartner/getInTouch";
import Partners from "../components/Home/IntelsenceNews/ourPartner";

export default function About() {
  return (
    <div className="about">
      <FirstPage />
      <SecondPage />
      <OurStory />
      <WorkAreaApp />
      <Team />
      {/* <Partners /> */}
      <GetInTouch />
    </div>
  );
}
