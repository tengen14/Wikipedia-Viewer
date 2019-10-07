import React from "react";
import ArticleCard from "./ArticleCard";

class ArticleList extends React.Component {
  componentDidMount() {}

  getIds = props => {
    console.log("GETIDS FUNCTION RUNS");
  
    const articles = Object.values(this.props.articles);

    console.log(articles);

    return articles.map(article => (
        <ArticleCard
          key={article.id}
          title={article.title}
          extract={article.extract}
          pageid={article.pageid}
        />
    ));
  };

  render() {
    return (
      <div>
        <ul>{this.getIds()}</ul>
      </div>
    );
  }
}

export default ArticleList;