import React, { Component, useContext } from "react";
import ProductContext from "../../App";

//https://dev.to/sage911/how-to-write-a-search-component-with-suggestions-in-react-d20

class Search extends Component {
  state = {
    query: ""
  };

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    });
  };

  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
        />
        <p>{this.state.query}</p>
      </form>
    );
  }
}

export default Search;
