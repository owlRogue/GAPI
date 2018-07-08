import React from "react";
import "./Table";

export const TableHead = props => (
  <thead className="head">
  <td>
    {props.children}
  </td>
  </thead>
);

export const TableRow = props => (
  
  <tbody className="body">
    <tr>
    <td>{props.children}</td>
    </tr>
  </tbody>
);
