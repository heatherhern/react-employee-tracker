import React from "react";

function TableHeader(props) {
  return (
      <tr>
        <th className="hover" onClick={props.sortNames}>Name</th>
        <th>Image</th>
        <th>Email</th>
        <th>Phone</th>
      </tr>
  );
}

export default TableHeader;
