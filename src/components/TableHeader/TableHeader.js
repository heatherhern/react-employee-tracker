import React from "react";
import "./tableheader.css";

function TableHeader(props) {
  return (
      <tr class="headerrow">
        <th>Image</th>
        <th className="hover" onClick={props.sortNames}>Name</th>
        <th>Phone</th>
        <th>Email</th>
      </tr>
  );
}

export default TableHeader;