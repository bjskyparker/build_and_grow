import React, { useRef } from "react";
import mock_data from "./mock_data.json";
import { columns } from "./columns";
import { connect } from "react-redux";

const BasicTable = (props) => {
  const table = useRef(null);

  return (
    <div>
      {/* <columns 
        data={mock_data}
        tableRef={table} 
      /> */}

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
    </div>
  );
};

export default connect() (BasicTable);