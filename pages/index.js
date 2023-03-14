import React from "react";

import Cover from "../components/Home/Cover/Cover";
import Cover2 from "../components/Home/Cover/Cover2";
import Services from "../components/Home/services/services";
import Technology from "../components/Home/technologies/technology";
import OurSolution from "../components/Home/OurSolution/OurSolution";
import Research from "../components/Home/research/research";
import NewsApp from "../components/Home/IntelsenceNews/News";
import Motivation from "../components/Home/motivation/motivation";
import InNumber from "../components/Home/IntelsenseInNumber/IntensenseInNumber";
import InToTheUnknown from "../components/Home/inToTheUnkownPage/inToTheUnknown";
import Head from "next/head";

import TheMap from "../components/Home/Map/Map";
import SenseCover from "../components/Home/Cover2.0/SenseCover";
import OurTech from "../components/Home/OurTech/OurTech";
import IntelsenseAI from "../components/Home/Cover2.0/IntenlsenseAI";

export default function Home() {
  return (
    <React.Fragment>
      <div className="home">
        <Head>
          <title>IntelsenseAI | Sense The Future</title>
          <meta
            name="description"
            content="Intelsense AI building world class team of AI Researchers, Data Scientists, Machine Learning Engineers, Software Engineers , Product Managers, and Visionaries to help realize this potential , pushing the boundaries of what AI can do and advancing the state of the art."
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="IntelsenseAI | Sense The Future" />
          <meta
            property="og:image"
            content="https://intelsense.ai/images/logo.svg"
          />
          <meta
            property="og:description"
            content="Intelsence AI building world class team of AI Researchers, Data Scientists, Machine Learning Engineers, Software Engineers , Product Managers, and Visionaries to help realize this potential , pushing the boundaries of what AI can do and advancing the state of the art."
          />

          <meta
            property="twitter:title"
            content="IntelsenseAI | Sense The Future"
          />
          <meta
            property="twitter:image"
            content="https://intelsense.ai/images/logo.svg"
          />
          <meta
            property="twitter:description"
            content="Intelsence AI building world class team of AI Researchers, Data Scientists, Machine Learning Engineers, Software Engineers , Product Managers, and Visionaries to help realize this potential , pushing the boundaries of what AI can do and advancing the state of the art."
          />
        </Head>
        <SenseCover />
        <Services />
        {/* <OurTech /> */}
        <IntelsenseAI />
        <Technology />
        {/* <TheMap /> */}
        <Cover2 />
        <OurSolution />
        <Research />
        {/* <InToTheUnknown /> */}
        <Motivation />
        <InNumber />
        <NewsApp />
      </div>
    </React.Fragment>
  );
}
