import React, { useMemo } from 'react';

import ReactDOM from 'react-dom';

import './index.css';

import mock_data from './mock_data.json';

import { columns } from './columns';

import { createStore } from 'redux';

 

const reducer = (state, action) => {

  switch (action.type) {

 

  }

  return state;

};

const store = createStore(counterReducer);

 

store.subscribe(render)

 

const valueEl = document.getElementById('value')

 

function render() {

  const state = store.getState()

  const newValue = state.value.toString()

  valueEl.innerHTML = newValue

}

 

document.getElementById('increment').addEventListener('click', function () {

  store.dispatch({ type: 'counter/incremented' })

})

 

render()

const basicTable = () => {

 

  const columns = useMemo(() => columns, [])

  const data = useMemo(() => mock_data, [])

 

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

        {data.map(row => {

            return (

              <tr>

                  {columns.map((column) => {

                    const key = column.Accessor

                    return (<td>{row[key]}</td>)

                  })}

              </tr>

            );

        })}

      </tbody>

    </table>

  );

}