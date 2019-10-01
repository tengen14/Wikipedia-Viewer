import React from "react";
import ArticleCard from "./ArticleCard";

class ArticleList extends React.Component {
  componentDidMount() {}

  getIds = props => {
    console.log("GETIDS FUNCTION RUNS");
    const articles = this.props.articles;

    return articles.map(article => (
        <ArticleCard
          key={article.id}
          title={article.title}
          snippet={article.snippet}
          pageid={article.pageid}
        />
    ));
  };

  render() {
    return (
      <div>
        <h1>Articles</h1>
        <ul>{this.getIds()}</ul>
      </div>
    );
  }
}

export default ArticleList;
