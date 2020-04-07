import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = { // dom virtuel
            "question": this.props.question,
            "answer": this.props.answer
        }
        // Le constructeur peut être l'endreoit (le moment) où
        // l'on va binder les méthodes au this
        // C'est aussi l'endroit (le moment ) où initialiser d'autres 
        // propriétés le cas échéant
    }

    handleClick = event => {
        // création d'un objet local qui va permettre de changer le state
        // en le passant en argument à la méthode setState
        const state_local = {
            question: "Autre question",
            answer: "Réponse"
        }
        // setState est une méthode prédéfinie héritée de la class Component
        // qui permet de modifier le state du composant en le comparant à 
        // un objet que l'on donne en argument (ici state_local).
        this.setState(state_local);
    }
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