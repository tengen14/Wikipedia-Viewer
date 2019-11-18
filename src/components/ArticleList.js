import React from "react";
import ArticleCard from "./ArticleCard";

const ArticleList = ({ articles }) => {
  // repeat for every object within parent object 'articles'
  const mapArticles = Object.values(articles).map(article => (
    // pertinent data of each article object extrapolated and passed as props to ArticleCard.js
    <ArticleCard
      key={article.pageid}
      title={article.title}
      extract={article.extract}
      pageid={article.pageid}
    />
  ));
  return (
    <div>
      {/*  Return full list of articles as lis  */}
      <ul>{mapArticles}</ul>
    </div>
  );
};

export default ArticleList;
