import React from "react";
import "./Table";

export const TableHead = props => (
  <thead className="head">
  <th>
    {props.children}
  </th>
  </thead>
);

export const TableRow = props => (
  
  <tbody className="body">
    <tr>
    {props.children}
    </tr>
  </tbody>
);
