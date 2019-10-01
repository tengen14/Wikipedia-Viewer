import React from "react";
import SearchBar from "./SearchBar";
import ArticleList from "./ArticleList";
//import fetchData from "../apis/wikipediaAPI";

class App extends React.Component {
  state = { articles: [] };

  onSearchSubmit = term => {
    const fetchPromise = fetch(
      `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${term}&srlimit=15&format=json&origin=*`
    );

    fetchPromise
      .then(response => {
        return response.json();
      })
      .then(data => {
        const articles = data.query.search;
    
        this.setState({ articles: articles });

        console.log("state", this.state.articles);
      });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ArticleList articles={this.state.articles}/>
      </div>
    );
  }
}

export default App;
