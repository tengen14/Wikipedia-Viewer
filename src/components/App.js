import React from "react";
import SearchBar from "./SearchBar";
import ArticleList from "./ArticleList";
//import fetchData from "../apis/wikipediaAPI";

class App extends React.Component {
  state = { articles: [] };

  onSearchSubmit = term => {
    const fetchPromise = fetch(
      `https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrsearch=${term}&gsrlimit=15&prop=extracts&exintro&explaintext&exsentences=1&origin=*`
    );

    fetchPromise
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        const articles = data.query.pages;
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


// make sure HTML doesn't show up in 'snippet' object key 
// refactor Wikipedia API
// understand lifecycle events, only display data once fetched, (componentdidmount?)
// refactor CSS file and proofread css
// proofread entire application (also check if components should be functional or class-based)
    // rename ArticleCard.js to ArticleSection.js
// add comments detailing work process
// edit Readme.txt file
