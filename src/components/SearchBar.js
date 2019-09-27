import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onSubmitForm = event => {
    event.preventDefault();
    ////////////////////////////////////
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        <div className="ui huge icon input">
          <input
            type="text"
            placeholder="Search"
            value={this.state.term}
            onChange={e => this.setState({ term: e.target.value })}
          />
          <i className="search icon"></i>
        </div>
      </form>
    );
  }
}

export default SearchBar;
