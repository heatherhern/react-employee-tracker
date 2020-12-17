import React from "react";

function Search() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            aria-label="Search"
          />
          <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>

    </nav>
  );
}

export default Search;
