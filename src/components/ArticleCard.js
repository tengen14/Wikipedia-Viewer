import React from "react";
import "../styles/ArticleCard.css";

const ArticleCard = props => {
  return (
    <div>
        <div class="ui segment">
            <h2 class="ui left floated header">{props.title}</h2>
            <div class="ui clearing divider"></div>
            <p>{props.snippet}</p>
        </div>
    </div>
  );
};

export default ArticleCard;
