import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import d'un composant (component)
import Table from './components/Table';
/* console.log('!'); */
ReactDOM.render(
  <React.StrictMode>
    {/*équivalent de new Table()*/}
    <Table />
  </React.StrictMode>,
  document.getElementById('root')
);

