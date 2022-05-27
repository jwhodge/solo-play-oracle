import React from "react";

import { useSelector } from "react-redux";
import { selectFeed } from "./feedSlice";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypeRaw from "rehype-raw";

function FeedModule() {
  const feedSource = useSelector(selectFeed);
  return (
    <div className="feedWrapper">
      <h2>
        <i className="fa-solid fa-rss"></i> Feed
      </h2>
      <div className="gameFeed">
        <ReactMarkdown
          children={feedSource}
          remarkPlugins={([remarkGfm], [remarkBreaks])}
          rehypePlugins={[rehypeRaw]}
        />
      </div>
    </div>
  );
}

export default FeedModule;
