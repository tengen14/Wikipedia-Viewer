import _ from "lodash";
import React from "react";
import SearchBar from "./SearchBar";
//import fetchData from "../apis/wikipediaAPI";

class App extends React.Component {
  state = { titles: null, snippets: null };

  onSearchSubmit = term => {
    const fetchPromise = fetch(
      `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${term}&srlimit=20&format=json&origin=*`
    );

    fetchPromise
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);

        const searchData = data.query.search;

        //function that sorts api data into 2 separate arrays of data, 'titles' and 'snippets'
        const titles = [];
        const snippets = [];
        for (let entry of searchData) {
          console.log(entry);
          const title = _.pick(entry, ["title"]).title;
          const snippet = _.pick(entry, ["snippet"]).snippet;

          titles.push(title);
          snippets.push(snippet);
        }
        this.setState({ titles: titles, snippets: snippets });

        console.log("state", this.state.titles, this.state.snippets);
        console.log(term);
      });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <h1>{this.state.titles}</h1>
        <p>{this.state.snippets}</p>
      </div>
    );
  }
}

export default App;
