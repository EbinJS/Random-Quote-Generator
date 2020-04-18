import React, { useState, useEffect } from "react";
import Quote from "./components/Quote";
import TweetButton from "./components/TweetButton.js";
import "./App.css";

function App() {
  const [jsonResponse, setJsonResponse] = useState({
    content: "Loading...",
    author: "",
  });

  const fetchQuote = async () => {
    let response = await (await fetch("https://api.quotable.io/random")).json();
    response.content=response.content.replace(/[;]/g, "");
    if(response.content.length>240){
      console.log('Content exceeds character limit');
      fetchQuote()
    }
    else{
      setJsonResponse(response);
    }
  };

  useEffect(() => {
    fetchQuote();
  },[]);

  const getTweetContent = () =>
    `"${jsonResponse.content}" are the famous words of ${jsonResponse.author}.
For more quotes visit ${window.location.hostname} made by  @AromalAnil5`;

  return (
    <main>
      <div id="quote-box">
        <Quote content={jsonResponse.content} author={jsonResponse.author} />
        <div className="bottom-row">
          <button id="new-quote" onClick={fetchQuote} className="btn">
            New Quote
          </button>
          <TweetButton content={getTweetContent()} />
        </div>
      </div>
    </main>
  );
}

export default App;
