import React, { useState, useEffect } from "react";

function TweetButton({ content }) {
  const [tweetContent, setTweetContent] = useState(encodeURI(content));

  useEffect(() => {
    setTweetContent(encodeURI(content));
  }, [content, setTweetContent]);

  return (
    <a
      className="tweet-btn btn"
      target="_blank"
      rel="noopener noreferrer"
      href={"https://twitter.com/intent/tweet?text=" + tweetContent}
    >
      <i className="fa fa-twitter"></i>&nbsp;Tweet
    </a>
  );
}

export default TweetButton;
