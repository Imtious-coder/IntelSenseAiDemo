import React from "react";
import {
  getCaseStudies,
  getNews,
  // getPosts,
  getSinglePost
} from "../../utils/api";

// import Image from "../../assets/images/blog/blog.webp";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton
} from "react-share";
import readingTime from "reading-time";
import Loader from "../../components/Loader/loader";
import PostCard from "../../components/PostCard/PostCard";
import ScrollToTop from "../../components/scrollToTop";

export const getStaticPaths = async () => {
  let paths = [];

  // await getPosts().then((res) => {
  //   paths = res.data.map((data) => `/blog/${data.slug}`);
  // });

  console.log("Paths", paths);

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { slug } = params;

  let blog = null;

  await getSinglePost(slug)
    .then((res) => {
      blog = res.data;
    })
    .catch((e) => null);

  return {
    props: { blog, revalidate: 10 },
  };
}

export default function SinglePost(props) {
  const router = useRouter();
  const [data, setData] = React.useState();

  const { blog } = props.pageProps;

  const type = "blog";

  const url = `https://intelsense.ai${props?.router?.asPath}`;

  React.useEffect(() => {
    if (type === "news")
      getNews()
        .then((res) => setData(res.data))
        .catch((e) => setData(null));
    else if (type === "blog")
      getPosts()
        .then((res) => setData(res.data))
        .catch((e) => setData(null));
    else
      getCaseStudies()
        .then((res) => setData(res.data))
        .catch((e) => setData(null));
  }, [type]);

  return blog?.author ? (
    <div className="blog-container">
      <ScrollToTop />
      <div className="header">
        <Head>
          <title>{blog.title}</title>
          <meta property="og:type" content="article" />
          <meta property="og:title" content={blog.title} />
          <meta property="og:image" content={blog.thumbnail} />
          <meta property="og:description" content={blog.excerpt} />
          <meta property="og:url" content={url} />

          <meta property="twitter:title" content={blog.title} />
          <meta property="twitter:image" content={blog.thumbnail} />
          <meta property="twitter:description" content={blog.excerpt} />
          <meta property="twitter:url" content={url} />
        </Head>

        <img src={blog.thumbnail} className="thumbnail" />
        <div className="meta">
          <h4>
            <AccountCircleOutlinedIcon
              style={{ fontSize: 24, marginRight: 10, width: 24 }}
            />
            {blog?.author.username || ""}
          </h4>
          <h4>
            <QueryBuilderIcon
              style={{ fontSize: 24, marginRight: 10, width: 24 }}
            />
            {readingTime(blog.content).text || ""}
          </h4>
        </div>
      </div>

      <div className="body">
        <h1 className="blog-title">
          {blog.title}
          <br />
          <span className="tag-type">
            INTELSENSE &nbsp;
            {blog.type.replace("_", " ").toUpperCase()} &nbsp; • &nbsp;{" "}
            {new Date(blog.updated_on).toDateString()}
          </span>
        </h1>

        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        {/* <hr /> */}
      </div>

      <div className="sharer-buttons">
        <h1>SHARE THIS ARTICLE</h1>
        <LinkedinShareButton
          title={blog.title}
          summary={blog.excerpt}
          source={url}
          url={url}
        >
          <LinkedinIcon size={32} />
        </LinkedinShareButton>

        <TwitterShareButton
          title={blog.title}
          url={url}
          className="Demo__some-network__share-button"
        >
          <TwitterIcon size={32} />
        </TwitterShareButton>

        <WhatsappShareButton url={url} title={blog.title}>
          <WhatsappIcon size={32} />
        </WhatsappShareButton>

        <RedditShareButton url={url} title={blog.title}>
          <RedditIcon size={32} />
        </RedditShareButton>

        <FacebookShareButton url={url} title={blog.title}>
          <FacebookIcon size={32} />
        </FacebookShareButton>
      </div>

      <div className="related-posts">
        <h1 className="sec-like">You might also like</h1>
        <div>
          {data && (
            <PostCard posts={data.filter((it) => it.slug !== blog.slug)} />
          )}
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
}
