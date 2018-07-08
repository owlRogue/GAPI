import React from "react";
import "./Table.css";

export const Table = ({ children }) => {
<div id="instructions"></div>


export const Table = ({ children }) => {
  return (
    <table className="table-responsive-lg">
        <thead className="head">
              {children}
        </thead>
        <tbody className="body">
            <tr>
              <td>
                {children}
            </td>
          </tr>
        </tbody>
    </table>
  );
};

