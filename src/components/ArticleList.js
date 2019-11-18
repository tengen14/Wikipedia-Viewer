import React from "react";
import ArticleCard from "./ArticleCard";

const ArticleList = ({ articles }) => {
  console.log(articles);
  const mapArticles = Object.values(articles).map(article => (
    <ArticleCard
      key={article.pageid}
      title={article.title}
      extract={article.extract}
      pageid={article.pageid}
    />
  ));
  return (
    <div>
      <ul>{mapArticles}</ul>
    </div>
  );
};

export default ArticleList;
