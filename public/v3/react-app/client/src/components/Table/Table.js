import React from "react";
import "./Table.css";

// export const Table = ({ children }) => {


export const Table = ({ children }) => {
  return (
    <table className="table-responsive-lg">
      <div id="instructions"></div>
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

