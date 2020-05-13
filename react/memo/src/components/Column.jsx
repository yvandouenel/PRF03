import React, { Component } from 'react';
import Card from './Card';

class Column extends Component {
    state = {}
    render() {
        return (
            <section className="col-3 mt-3">
                <header className="d-flex align-items-center">
                    <button
                        onClick={e => { this.props.onClickAddCard(e, this.props.index); }}
                        className="btn btn-success mr-2"
                    >+</button>
                    <h2 className="h5">{this.props.column.name}</h2>
                </header>
                {this.props.column.cartes.map(card => {
                    return <Card
                        question={card.question}
                        answer={card.reponse}
                    />
                })}

            </section>
        );
    }
}

export default Column;