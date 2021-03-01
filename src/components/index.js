import React from "react";

const BasicTable = ({data, columns}) => {
  return (
    <>
      {columns ? (
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
      ) : (
        <p>config has not been passed to table component</p>
      )}
    </>
  );
};

export default BasicTable;