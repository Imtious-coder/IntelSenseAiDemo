// import Link from "next/link";
import React from "react";
// import Loader from "../components/Loader/loader";
// import PostCard from "../components/PostCard/PostCard";
// import { getPosts } from "../utils/api";

// export const getStaticProps = async () => {
//   let data = null,
//     latest = null;

//   await getPosts()
//     .then((res) => {
//       data = res.data;
//       latest = res.data[Math.floor(Math.random()) % res.data.length];
//     })
//     .catch((e) => console.log(e.request));

//   return {
//     props: {
//       data: data,
//       latest: latest,
//     },
//   };
// };

const Page = (props) => {

  // const { data, latest } = props.pageProps;

  return (
    <></>
    // <div className="blogContainer">
    //   <div className="section1">
    //     <div className="title">
    //       <div className="titleLine1">The</div>
    //       <div className="titleLine2">intelsense</div>
    //       <div className="titleLine3">blog</div>
    //       <ul>
    //         <li>everything ai</li>
    //         <li>podcast</li>
    //         <li>research</li>
    //         <li>news</li>
    //       </ul>
    //     </div>
    //   </div>
    //   {latest && (
    //     <div className="section2">
    //       <div className="featured">
    //         <div className="featuredTop">
    //           <div className="featuredIntro">
    //             <div className="t2">FEATURED</div>
    //             <div className="t4">BLOG</div>
    //           </div>
    //           <img src={latest?.thumbnail} alt="blog" />
    //         </div>
    //         <div className="featuredBottom">
    //           {/* <div className="t1">LEARNING</div> */}
    //           <div className="t5">{latest?.title}</div>
    //           <div className="t3">{latest?.excerpt}</div>
    //           <button className="featuredButton">
    //             <Link href={`/blog/${latest?.slug}`}>Read</Link>
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    //   <div className="card-box-container">
    //     {!data ? (
    //       <Loader />
    //     ) : (
    //       <div className="card-box">{data && <PostCard posts={data} />}</div>
    //     )}
    //   </div>
    // </div>
  );
};

export default Page;
