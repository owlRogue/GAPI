import React from "react";
import "./Table.css";

export const Table = ({ children }) => {
  return (
    <div className="table-responsive-lg">
        <div id="instructions"></div>
            <table className="table">
              <thead className="head">
                {children}
                </thead>
              <tbody className="body">
                <tr>
                <td>{children}
                </td>
                </tr>
                
            </tbody>
            </table>
    </div>
  );
};

