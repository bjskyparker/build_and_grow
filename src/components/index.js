import React, { useMemo } from "react";
import ReactDOM from "react-dom";
import mock_data from "./mock_data.json";
import { columns } from "./columns";

const BasicTable = () => {
  const columns = useMemo(() => columns, []);
  const data = useMemo(() => mock_data, []);

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
  );
};

export default BasicTable;