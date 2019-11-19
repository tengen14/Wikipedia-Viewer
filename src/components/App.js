import React from "react";
import SearchBar from "./SearchBar";
import ArticleList from "./ArticleList";

class App extends React.Component {
  state = { articles: [] };

  onSearchSubmit = term => {
    fetch(
      // Wikipedia API call search params with prop 'term' specifying 'what is being searched'
      `https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrlimit=15&prop=extracts&exintro&explaintext&exsentences=1&origin=*&gsrsearch=${term}`
    )
      .then(response => response.json())
      .then(data => {
        if (!data.query) {
          // data returns empty array if search term doesn't match any article
          return this.setState({ articles: [] });
        } else {
          // array of data returned from API call assigned to 'articles' state key
          this.setState({ articles: data.query.pages });
        }
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
              <a
                id="random-search"
                /* Wikipedia URL that returns random article */
                href="https://en.wikipedia.org/wiki/Special:Random"
                rel="noopener noreferrer"
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

// edit Readme.txt file
