import React, { Component } from 'react';

class Card extends Component {
    state = {}
    render() {
        return (
            <>
                <h1>{this.props.question}</h1>
                <p>{this.props.answer}</p>
            </>
        );
    }
}

export default Card;