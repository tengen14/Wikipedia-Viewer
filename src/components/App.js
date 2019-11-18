import React from "react";
import SearchBar from "./SearchBar";
import ArticleList from "./ArticleList";

class App extends React.Component {
  state = { articles: [] };

  onSearchSubmit = term => {
    fetch(
      `https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrlimit=15&prop=extracts&exintro&explaintext&exsentences=1&origin=*&gsrsearch=${term}`
    )
      .then(response => response.json())
      .then(data => {
        const articles = data.query.pages;
        this.setState({ articles: articles });
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

// understand lifecycle events, only display data once fetched, (componentdidmount?)
// Push content up on submit
// refactor CSS file and proofread css - remane css files
// proofread entire application (also check if components should be functional or class-based)
// add cross-browser functionality
// add metadata
// add screenreader capability
// check media responsiveness
// rename ArticleCard.js to ArticleSection.js
// add comments detailing work process
// edit Readme.txt file
