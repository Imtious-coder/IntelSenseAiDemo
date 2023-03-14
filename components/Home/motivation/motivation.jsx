import React, { Component } from "react";
import Link from "next/link";
// import LeaderTalk from "./leaderTalks";
import style from "./motivation.module.scss";
// import waveStyle from "./wave.module.scss";
// import BottomPart from "./bottomPart";

const Motivation = () => {
  return (
    <div className={style.Motivation}>
      {/* IMAGES */}
      <div className={style.Motivation_images}>
        <img
          className={style.Motivation_man}
          src="images/lawyer.png"
          alt="motivation-man" />
        <img
          className={style.Motivation_quote}
          src="images/quote.png"
          alt="motivation-man" />
      </div>
      {/* INFORMATIONS */}
      <div className={style.Motivation_info}>
        <p className={style.Motivation_title}>Industry Leaders Talkies</p>
        <p className={style.Motivation_subtitle}>Bots are like new applications, and digital assistants are meta apps or like a new browsers. And intelligence is infused into all yours interactions. That's the rich platform that we have.</p>
        <b>Saatiya Nadela</b>
        <p>Micrososft</p>
      </div>
    </div>
    // <div className={MotivationStyle.mainSection}>
    //   <LeaderTalk />
    //   {/* <BottomPart /> */}
    //   <div className={waveStyle.wrapper}>
    //     <div className={waveStyle.bg}>
    //       <h2>Arrange a demonstration</h2>
    //       <p>Are you interested to know how our awesome technologies work?</p>

    //       <Link href="/contact">
    //         <button>LET'S TALK</button>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Motivation;
