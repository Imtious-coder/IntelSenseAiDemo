import React from "react";

// import { projects, case1, case2, case3 } from "../data/projectData";
// import PostCard from "../components/PostCard/PostCard";
import { getCaseStudies, getCategories } from "../utils/api.js";
// import Loader from "../components/Loader/loader";
import Link from "next/link";

const Project = ({ image, catagory, title, details }) => {
  return (
    <div className="project">
      <img src={image} alt="project" />
      <h2>{catagory}</h2>
      <div className="title">{title}</div>
      <div className="details">{details}</div>
      <button>learn more</button>
    </div>
  );
};

const Page = () => {
  const [data, setData] = React.useState();
  const [categories, setCategories] = React.useState();

  React.useEffect(() => {
    getCaseStudies()
      .then((res) => setData(res.data))
      .catch((e) => setData(null));

    getCategories()
      .then((res) => setCategories(res.data))
      .catch((e) => null);
  }, []);

  return (
    <React.Fragment>
      <div className="container">
        <section className="intro">
          <h2>Real world impact</h2>
          <q>
            The key to artificial intelligence has always been the
            representation.
          </q>
          <div className="author">—Jeff Hawkins</div>
          <p>
            At intelsense AI we work to shape the magic of AI to be
            representable for real life works. In business, day to day life
            activities, analysis and sometimes for fun we harness the potential
            of future technology to come to your life and make an impact. Your
            identity, service quality and ease of operations are our main focus.
            In each case study we demonstrate this philosophy and work hard to
            make your work easier.
          </p>
          <p>
            Want to know how your business can be benifitted with the work of
            Intelsense AI?
          </p>
          <button>
            <Link href="/contact">Ask for a demo</Link>
          </button>
        </section>

        {/* <section className="section2">
          <h2>Case studies</h2>
          <div className="cases">
            <div className="caserow">
              {categories
                ? categories.map((item) => (
                    <div className="caseItem" key={item}>
                      {item}
                    </div>
                  ))
                : "Nothing Here"}
            </div>
            <div className="caserow">
              {case2.map((item) => (
                <div className="caseItem secondColor" key={item}>
                  {item}
                </div>
              ))}
            </div>
            <div className="caserow">
              {case3.map((item) => (
                <div className="caseItem secondColor" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section> */}
      </div>

      {/* <div className="card-box-container">
        {!data ? (
          <Loader />
        ) : (
          <div className="card-box">{data && <PostCard posts={data} />}</div>
        )}
      </div> */}
      {/* <div className="container">
        <section className="projects">
          {projects.map((e) => (
            <div className="projectContainer">
              <Project
                image={e.image}
                catagory={e.catagory}
                title={e.title}
                details={e.details}
                key={e.id}
              />
            </div>
          ))}
        </section>
      </div> */}
      <div className="container last">
        <div className="lastTitle">THE CASE OF INTELSENSE AI</div>
        <div className="lastDetail">
          At <b>INTELSENSE AI</b>, Every case is also about our own case. Listen
          to our end of the story from our teams who are involved in solving
          diverse problem with the involvement of diverse people! The Intelsense
          team is proud to work with, for and towards a diverse and AI powered
          future!
        </div>
      </div>
    </React.Fragment>
  );
};

export default Page;
