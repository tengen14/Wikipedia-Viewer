import React from "react";

class ArticleList extends React.Component {
  componentDidMount() {}

  getIds = props => {
    console.log("GETIDS FUNCTION RUNS");
    const articles = this.props.articles;
    console.log(articles.snippet);

    return articles.map(article => 
        <div>
          <li>{article.title}</li> 
            <span>{article.pageid}</span>
          <p>{article.snippet}</p>
        </div>
    );
  };

  render() {
    return (
      <div>
        <h1>Titles</h1>
        <ul>{this.getIds()}</ul>
      </div>
    );
  }
}



export default ArticleList;
