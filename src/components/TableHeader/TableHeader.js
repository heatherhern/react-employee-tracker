import React from "react";

function TableHeader(props) {
  return (
      <tr>
        <th>Image</th>
        <th className="hover" onClick={props.sortNames}>Name</th>
        <th>Phone</th>
        <th>Email</th>
      </tr>
  );
}

export default TableHeader;