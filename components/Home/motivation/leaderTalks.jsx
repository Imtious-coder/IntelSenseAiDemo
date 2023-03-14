import React from "react";
import Link from "next/link";
import LeaderTalksStyle from "./leaderTalks.module.scss";

const LeaderTalk = () => {
  return (
    <div className={LeaderTalksStyle.leaderTalk}>
      <div className={LeaderTalksStyle.slide}>
        <div className={LeaderTalksStyle.image}>
          <img
            className={LeaderTalksStyle.circle}
            src="images/motivation1-circle.png"
            alt="motivation-circle"
          />
          <img
            className={LeaderTalksStyle.message}
            src="images/motivation1-message.png"
            alt="motivation-message"
          />
          <img
            className={LeaderTalksStyle.man}
            src="images/motivation1-man.png"
            alt="motivation-man"
          />
        </div>
        <div>
          <h2>Industry Leader's Talkies</h2>
          <p>
            "Bots are like new applications, and digital assistants are meta
            apps or like a new browsers. And intelligence is infused into all
            yours interactions. That's the rich platform that we have."
          </p>
          <h5>-Satya Nadella, Microsoft</h5>
          <img
            className={LeaderTalksStyle.man2}
            src="images/motivation1-man.png"
            alt="motivation-man"
          />
        </div>
      </div>
    </div>
  );
};

export default LeaderTalk;
