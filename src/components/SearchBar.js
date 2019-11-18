import React from "react";
import "../styles/ArticleCard.css";

class SearchBar extends React.Component {
  state = { term: "" };

  onSubmitForm = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.onSubmitForm}>
          <div className="ui search">
            <input
              className="prompt"
              type="text"
              placeholder="Search"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
              required
            />
            <div className="results"></div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
