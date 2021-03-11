import React, { useState } from "react";

const BasicTable = ({data, columns}) => {
const [q, setQ] = useState("");

  const filteredData = (data, key, filteredValue) => {
    return data.filter(item => {
      const value = item[key]
      return value.toLowerCase().includes(filteredValue.toLowerCase().indexOf(q)) > -1 
    })
  };
  
  return (
    <>
      {columns ? (
        <div>
          <table>
            <thead>
              <input type="text" value={q} onChange={(e) => setQ(e.target.value)} />
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
      ) : (
        <p>config has not been passed to table component</p>
      )}
    </>
  );
};

export default BasicTable;