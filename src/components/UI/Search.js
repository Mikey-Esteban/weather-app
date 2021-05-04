import React from "react";

import SearchWrapper from "./styles/Search";

const Search = props => {
  return (
    <SearchWrapper>
      <input
        name="query"
        type="text"
        placeholder="...enter city here"
        value={props.query}
        onChange={props.handleInputChange}
      />
      <button onClick={event => props.handleSubmit(event, props.query)}>
        Search
      </button>
    </SearchWrapper>
  );
};

export default Search;
