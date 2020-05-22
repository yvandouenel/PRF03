import React from 'react';
import { useDispatch } from 'react-redux';

import {
  modifyCardId
} from '../columnSlice';
import styles from './Card.module.css';

export default function Card(props) {

  const dispatch = useDispatch();


  return (
    <div>
      <div className={styles.row}>
        <article>
          <h3>{props.card.question}</h3>
        <button
            onClick={() =>
              dispatch(modifyCardId({
                col_index: props.col_index,
                card_index: props.card_index
              }))
            }
          >Modifier l'id de la carte
        </button>
        </article>
      </div>
    </div>
  );
}
