import React from "react";
import { columns } from "./columns";

const BasicTable = ({data}) => {

  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th>{column.Header}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row) => {
            return (
              <tr>
                {columns.map((column) => {
                  const key = column.Accessor;

                  return <td>{row[key]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BasicTable;