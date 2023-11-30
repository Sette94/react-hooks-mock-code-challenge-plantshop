import React from "react";

function Search({ searchHandler }) {


  function searchChangeHandler(e) {
    searchHandler(e.target.value)

  }


  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={searchChangeHandler}
      />
    </div>
  );
}

export default Search;
