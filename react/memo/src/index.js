import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import d'un composant (component)
import Card from './components/Card';

ReactDOM.render(
  <React.StrictMode>
    {/*équivalent de new Card("Question", "Réponse")*/}
    <Card question="Question" answer="Réponse" explanation="Explication" />
  </React.StrictMode>,
  document.getElementById('root')
);

