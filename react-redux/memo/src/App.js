import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Counter } from './features/counter/Counter';
import { Column } from './features/column/Column';
import { callApi } from './features/column/columnSlice';
import {
  selectColumns
} from './features/column/columnSlice';
import './App.css';

function App() {
  const columns = useSelector(selectColumns);
  const dispatch = useDispatch();
  // Similaire à componentDidMount et componentDidUpdate :
  useEffect(() => {
    // Appel de l'api locale. Le second argument représente les options ou les
    // dépendances. Le fait de donner un tableau vide nous assure que dispatch
    // ne sera appelée qu'une seule fois après que "function component" est monté
    // on pourra plus tard se servir de ce tableau pour faire en sorte que ce
    // hook soit rappelé en cas de mofication du theme par exemple
    dispatch(callApi("html"));
  }, []);
  return (
    <div className="App">

      <main>
        <section id="section-columns" className="d-flex justify-content-center">
          {
            columns.map((col, index) => (
              <Column key={col.id} col={col} col_index={index} />
            ))
          }
        </section>

      </main>
      <footer className="App-header">
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </footer>
    </div>
  );
}

export default App;
