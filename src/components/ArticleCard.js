import React from "react";
import "../styles/ArticleCard.css";

const ArticleCard = props => {
  return (
    <div>
      <a href={`https://en.wikipedia.org/?curid=${props.pageid}`} target="_blank">
        <div className="ui segment">
          <h2 className="ui left floated header">{props.title}</h2>
          <div className="ui clearing divider"></div>
          <p>{props.snippet}</p>
        </div>
      </a>
    </div>
  );
};

export default ArticleCard;
