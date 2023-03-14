import React from "react";
import { Helmet } from "react-helmet";

export const fillMeta = ({ title, excerpt, url, thumbnail }) => (
  <Helmet>
    <meta property="og:title" content={title} />
    <meta property="og:image" content={thumbnail} />
    <meta property="og:description" content={excerpt} />
    <meta property="og:url" content={url} />

    <meta property="twitter:title" content={title} />
    <meta property="twitter:image" content={thumbnail} />
    <meta property="twitter:description" content={excerpt} />
    <meta property="twitter:url" content={url} />
  </Helmet>
);

export const getInitData = () => {
  if (typeof window === "undefined") return null;
  return window.__INITIAL_DATA__ ? window.__INITIAL_DATA__ : undefined;
};
