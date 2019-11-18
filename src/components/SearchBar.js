import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onSubmitForm = event => {
    // Prevent default action of 'onSubmit' such as refreshing page
    event.preventDefault();

    // term is passed as a prop of onSubmit(), used in parent component App.js
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
              // value attribute always matched to 'term'
              value={this.state.term}
              // state object key 'term' value set to whatever is inside searchbar
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
