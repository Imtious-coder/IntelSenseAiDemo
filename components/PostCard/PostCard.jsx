import React from "react";
import Link from "next/link";

export default function PostCard({ posts, ...props }) {
  return (
    <div className="postcard-container" {...props}>
      {posts.map((post) => (
        <div className="postcard-post">
          <img src={post.thumbnail} />
          <div>
            <div className="dateArrow">
              <h3>{new Date(post.updated_on).toDateString()}</h3>
              <svg
                viewBox="0 0 33 27"
                width="31"
                class="arrowIcon arrowIcon--right "
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  fill-rule="nonzero"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="square"
                >
                  <path d="M31.396 13.396L20 2" class="arrowIcon__top"></path>
                  <path
                    d="M31.396 14L20 25.396"
                    class="arrowIcon__bottom"
                  ></path>
                  <path d="M29.645 13.676H1" class="arrowIcon__middle"></path>
                </g>
              </svg>
            </div>
            <Link key={post.slug} href={`/${post.type}/${post.slug}`}>
              <h1>{post.title}</h1>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
