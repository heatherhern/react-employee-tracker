import React from "react";
import "./search.css";

function Search(props) {
  return (
    <input
      type="text"
      onChange={props.handleInputChange}
      placeholder="Search Employees"
    ></input>
  );
}

export default Search;
