import React from "react";

function Quote({ content, author }) {
  return (
    <div className="quote-card">
      <i className="icon fa fa-quote-left"></i>
      <p id="text">{content}</p>
      <p id="author">{author}</p>
    </div>
  );
}

export default Quote;
