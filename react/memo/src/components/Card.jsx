import React, { Component } from 'react';

class Card extends Component {

    render() {
        return (
            <>
                <h3>{this.state.question}</h3>
                <p>{this.state.answer}</p>
            </>
        );
    }

}

export default Card;