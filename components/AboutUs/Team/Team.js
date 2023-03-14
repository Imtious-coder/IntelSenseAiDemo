import React from "react";
import Link from "next/link";

import style from "./team.module.scss";

// import './leader_style.css'

const TeamApp = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.mainContent}>
        <div className={style.heading}>
          <h2>Teams</h2>
          <p>
            Our success depends on many teams joining togather for a shared goal
            . No signal discipline has all the answer needed to build AI, <br />
            and we have found that many exciting news ideas come from dedicated
            collaboration between different fields. <br /> Learn more about
            dedicated teams and people below.
          </p>
        </div>

        <div className={style.teams}>
          <div className={style.eachTeam}>
            <h6>Research</h6>
            <img src="images/aboutUs/research.jpg" alt="" />
            <p>
              <small>
                Our teams work on cutting-edge computer science, neuroscience,
                ethics, and public policy to responsibly pioneer AI systems.
                Research scientists and engineers collaborate across DeepMind
                and with partners to create designs that can benefit all parts
                of society. IntelsenseAI’s R&D team is extremely productive and
                result oriented. Our research teams come up with product
                structures, frameworks & policies of development work.
              </small>
            </p>
            <div className={style.teamLink}>
              <Link href="/" style={{ textDecoration: "none" }}>
                See Details
              </Link>
            </div>
          </div>
          <div className={style.eachTeam}>
            <h6>ENGINEERING</h6>
            <img src="images/aboutUs/engineering.jpeg" alt="" />
            <p>
              <small>
                Engineers help accelerate our research by building, maintaining,
                and optimising products, tools and environments. From scaling
                research prototypes to developing bespoke environments, our
                engineers enable us to perform safe, rigorous experimentation at
                scale. Finally, the development part of the engineering team
                finalises the product to use.
              </small>
            </p>
            <div className={style.teamLink}>
              <Link href="/" style={{ textDecoration: "none" }}>
                See Details
              </Link>
            </div>
          </div>
          <div className={style.eachTeam}>
            <h6>DESIGN</h6>
            <img src="images/Design.png" alt="" />
            <p>
              <small>
                We are committed to delivering the best possible AI experience
                for our clients. So with engineering & Development, we focus
                rigorously on Design research & knowledge. UX, user mobility,
                flexibility, attention to detail, artistry & aesthetics are the
                core focus of our well equipped and diverse design team.
              </small>
            </p>
            <div className={style.teamLink}>
              <Link href="/" style={{ textDecoration: "none" }}>
                See Details
              </Link>
            </div>
          </div>
          <div className={style.eachTeam}>
            <h6>OPERATIONS</h6>
            <img src="images/aboutUs/operations.jpeg" alt="" />
            <p>
              <small>
                Our dedicated teams include experts from program management,
                people development, travel, property, public engagement and more
                who work together to maintain, optimise, and nurture our culture
                and world-leading research.
              </small>
            </p>
            <div className={style.teamLink}>
              <Link href="/" style={{ textDecoration: "none" }}>
                See Details
              </Link>
            </div>
          </div>
          <div className={style.eachTeam}>
            <h6>BUSINESS</h6>
            <img src="images/Research.png" alt="" />
            <p>
              <small>
                Our business team- analyses customer demands and propositions to
                realise the potential of any product we decide to work with. The
                business side of an AI company requires diversity, humane
                decision making and innovative approach. We at intelsense take
                pride in these specialities as a leading AI company in
                Bangladesh.
              </small>
            </p>
            <div className={style.teamLink}>
              <Link href="/" style={{ textDecoration: "none" }}>
                See Details
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={style.line}></div>
    </div>
  );
};

export default TeamApp;
