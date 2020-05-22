import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Card from './card/Card';
import {
  addCard
} from './columnSlice';

import styles from './Column.module.css';

export function Column(props) {

  const dispatch = useDispatch();

  return (
    <div>
      <section className="m-4">
        <h2>{props.col.name}</h2>
        <button
          onClick={() =>
            dispatch(addCard({ col_index: props.col_index }))
          }
        >Ajouter une carte
        </button>
        {
          props.col.cards.map((card, index) => (
            <Card key={card.id}
            card={card}
            card_index={index}
            col_index={props.col_index} />
          ))
        }
      </section>
    </div>
  );
}
