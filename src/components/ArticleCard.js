import React from "react";

const ArticleCard = props => {
  return (
    <div>
      <a
        href={`https://en.wikipedia.org/?curid=${props.pageid}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className="ui segment">
          <h2 className="ui left floated header">{props.title}</h2>
          <div className="ui clearing divider"></div>
          <p>{props.extract}</p>
        </div>
      </a>
    </div>
  );
};

export default ArticleCard;
