import React, { Component } from 'react';

class Card extends Component {

    render() {
        return (
            <>
                <h3>{this.props.question}</h3>
                <p>{this.props.answer}</p>
            </>
        );
    }

}

export default Card;