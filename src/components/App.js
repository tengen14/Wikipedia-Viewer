import React from "react";
import SearchBar from "./SearchBar";
//import fetchData from "../apis/wikipediaAPI";

class App extends React.Component {
  state = { titles: [], snippets: [] };

  onSearchSubmit = state => {
    const fetchPromise = fetch(
      "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=dogs&srlimit=20&format=json&origin=*"
    );

    fetchPromise
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => {
        console.log(data);
        const searchData = data.query.search;

        const titles = [];
        for (let data of searchData) {
          titles.push(data.title);
          this.setState({ titles: titles });
        }

        console.log("state", this.state.titles);
      });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ol>
          <li>{this.state.titles}</li>
        </ol>
      </div>
    );
  }
}

export default App;
