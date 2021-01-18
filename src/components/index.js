import React from "react";
import mock_data from "./mock_data.json";
import { columns } from "./columns";
import Forms from "./Forms";

const BasicTable = () => {

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th>{column.Header}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {mock_data.map((row) => {
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
  );
};

export default BasicTable;