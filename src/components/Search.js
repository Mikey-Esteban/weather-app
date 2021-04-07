import React, { useState } from "react";

import SearchWrapper from "./styles/components/Search";

const Search = props => {
  const [query, setQuery] = useState("");

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  return (
    <SearchWrapper>
      <input
        name="query"
        type="text"
        placeholder="...enter city here"
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={event => props.handleSubmit(event, query)}>
        Search
      </button>
    </SearchWrapper>
  );
};

export default Search;
