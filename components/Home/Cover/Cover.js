import React from "react";
import ReactElasticCarousel from "react-elastic-carousel";
import style from "./Cover.module.scss";
import Typewriter from "typewriter-effect";

const totalPages = 2;

let resetTimeout = null;

export default function Cover() {
  const carouselRef = React.useRef(null);

  const onNextStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      console.log(carouselRef.current.goTo(0));
    }
  };

  const onPrevStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      carouselRef.current.goTo();
    }
  };

  return (
    // <ReactElasticCarousel
    //   ref={carouselRef}
    //   focusOnSelect={true}
    //   autoPlaySpeed={4000} // same time
    //   onNextEnd={({ index }) => {
    //     if (!carouselRef.current) return;
    //     clearTimeout(resetTimeout);
    //     if (index + 1 === totalPages) {
    //       if (carouselRef) {
    //         resetTimeout = setTimeout(() => {
    //           carouselRef.current.goTo(0);
    //         }, 4000); // same time
    //       }
    //     }
    //   }}
    //   enableAutoPlay
    //   showArrows={false}
    // >
    <React.Fragment>
      <div className={style.container}>
        <div
          className={style.mainContainer}
          style={{ backgroundImage: 'url("/images/background.png")' }}
        >
          <div className={style.overlay}>
            <div className={style.heading}>
              <h1>
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 20,
                    cursor: " ",
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(100)
                      .typeString("Sense")
                      .callFunction(() => {
                        // console.log("String typed out!");
                      })
                      .pauseFor(60)
                      .typeString(" In")
                      .pauseFor(150)
                      .typeString("telligence")
                      .pauseFor(239203)
                      // .deleteAll()
                      .callFunction(() => {
                        // console.log("All strings were deleted");
                      })
                      .start();
                  }}
                />
              </h1>
              <h5>Use it to make the world a better place</h5>
            </div>
            <div className={style.contentBody}>
              Intelsence AI building world class team of AI Researchers, Data
              Scientists, Machine Learning Engineers, Software Engineers ,
              Product Managers, and Visionaries to help realize this potential ,
              pushing the boundaries of what AI can do and advancing the state
              of the art.
            </div>
            <div className={style.buttom}>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </div>

      {/* 
TODO:
  NEw COver: 
  Desc: About Us Cover
*/}

      {/* <div className={style.container}>
        <div
          className={style.mainContainer}
          style={{
            backgroundImage: 'url("../../AboutUs/firstPage/page1.png")',
          }}
        >
          <div className={style.heading}>
            <h1>Sense the Beyond</h1>
            <h5>
              Widening the boundary of Imagination Creating the outline of the
              future.
            </h5>
          </div>

          <div className={style.buttom}>
            <button>Learn More</button>
          </div>
        </div>
      </div> */}
    </React.Fragment>
    // </ReactElasticCarousel>
  );
}
