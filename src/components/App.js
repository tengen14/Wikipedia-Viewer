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
        <div id="outer">
          <div id="middle">
            <div id="inner">
              <h1>Search below for Wikipedia articles</h1>
              <SearchBar onSubmit={this.onSearchSubmit} />
              <a id="random-search"
                href="https://en.wikipedia.org/wiki/Special:Random"
                target="_blank"
              >
                or click here for a random article
              </a>
            </div>
          </div>
        </div>
        <ArticleList articles={this.state.articles} />
      </div>
    );
  }
}

export default App;

//style searchbar to center viewport
