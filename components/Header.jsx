import Head from "next/head";

const COVER_IMG = "https://intelsense.ai/cover.png"

export const HeaderMeta = () => {
  return (
    <Head>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://unpkg.com/nprogress@0.2.0/nprogress.css"
      />
      <link rel="stylesheet" href="/path/to/flickity.css" media="screen"></link>
      <script src="/path/to/flickity.pkgd.min.js"></script>
      <meta name="title" content="IntelsenseAI | Sense The Future" />
      <meta
        name="keywords"
        content="Ai, NLP, NLU, Algorithm, Voice Processing, HIA, SenseVoice, Artificial Intelligence"
      />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="1 days" />
      <meta name="author" content="IntelsenseAI" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://intelsense.ai" />
      <meta property="og:title" content="IntelsenseAI | Sense The Future" />
      <meta
        property="og:description"
        content="AI-Powered Voice Processing, Language Processing, Image Processing and Sentiment Analysis enabling companies to know customers better and provide the best possible services to them."
      />
      <meta
        property="og:image"
        content={COVER_IMG}
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://intelsense.ai/" />
      <meta
        property="twitter:title"
        content="IntelsenseAI | Sense The Future"
      />
      <meta
        property="twitter:description"
        content="AI-Powered Voice Processing, Language Processing, Image Processing and Sentiment Analysis enabling companies to know customers better and provide the best possible services to them."
      />
      <meta
        property="twitter:image"
        content={COVER_IMG}
      />
    </Head>
  );
};
