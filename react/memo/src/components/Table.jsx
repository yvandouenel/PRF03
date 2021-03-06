import React, { Component } from 'react';
import Term from './Term';
import Column from './Column';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Connection from '../services/Connection';

class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // Tableau des colonnes
            columns: [],
            // Tableau des termes (rubriques)
            terms: [],
            adding_a_term: false,
            index_column_adding_a_card: -1,
        };
        // instance de la classe Connection
        this.connection = new Connection();
        console.log('connection : ', this.connection);
    }

    /**
    * Gestionnaire d'événement click
    * le premier paramètre est par convention l'objet event
    */
    handleClickTerm = (event, term_index) => {
        console.log('Dans handleClickTerm de Table');
        console.log('Index du Term cliqué : ', term_index);
        // changement du state via setState
        const state_local = { ...this.state };

        // récupération de l'index de l'objet cliqué dans le state local
        console.log('index du Term cliqué : ', term_index);

        // changement de valeur du state local
        state_local.terms.forEach((element) => { element.selected = false })
        state_local.terms[term_index].selected = true;

        // Récupération des cartes concernant le terme qui vient d'être cliqué
        this.connection.getCards(
            state_local.terms[term_index].id,
            this.successGetCards,
            this.failedGetCards
        );

        this.setState(state_local);

    }
    /**
     * Gestionnaire d'événement click pour la création d'une carte
     * le premier paramètre est par convention l'objet event
     */
    handleClickAddCard = (event, column_index) => {
        console.log('Dans handleClickAddCard');

        const state_local = { ...this.state };
        state_local.index_column_adding_a_card = column_index;

        this.setState(state_local)
    }
    /**
     * Gestionnaire d'événement click
     * le premier paramètre est par convention l'objet event
     */
    handleClickAddTerm = (event) => {
        console.log('Dans handleClickAddTerm');
        // Quand on a cliqué sur le bouton, c'est que l'on veut afficher le formulaire
        // Il faut pour cela changer la propriété adding_a_term du state
        // Attention, on ne peut pas changer directement, le state, il faut passer par setState(obj)
        // Pour cela, on va faire une copie du state en utilisant le "spread operator"

        // copie du state
        const state_local = { ... this.state };
        // Modification de la copie du state
        state_local.adding_a_term = true;

        // comparaison des deux objets via la méthode setState
        // s'il y a une différence entre les deux objets, le state est modfié et la 
        // méthode "render" est à nouveau appelée
        this.setState(state_local);
    }
    handleCloseModal = () => {
        console.log('Dans handleCloseModal');
        // copie du state
        const state_local = { ... this.state };
        state_local.index_column_adding_a_card = -1;

        this.setState(state_local);

    }
    handleSubmitAddCard = (event) => {
        console.log('Dans handleSubmitAddCard');
        // Suppression du comportement par défaut des formulaires qui rechargent la page à la soumission
        event.preventDefault();

        // Récupération de la question et de la réponse
        const question = event.target.querySelector("#question-input").value;
        const answer = event.target.querySelector("#answer-input").value;

        console.log('question : ', question, 'réponse : ', answer);

        const state_local = { ... this.state };
        // Ajout dans le state local de ma carte
        state_local
            .columns[state_local.index_column_adding_a_card]
            .cartes.push({ "id": 1, "question": question, "reponse": answer });

        this.setState(state_local);

    }
    /**
     * Gestionnaire de l'événement "submit" du formulaire de modification
     * le premier paramètre est par convention l'objet event
     */
    handleSubmitEditTerm = (event, index) => {
        console.log('Dans handleSubmitEditTerm');
        // Suppression du comportement par défaut des formulaires qui rechargent la page à la soumission
        event.preventDefault();
        console.log(event.target);

        // Récupération de la valeur comprise dans l'input du formulaire
        // qui est à l'origine de l'événement grâce à querySelector
        const term_input_value = event.target.querySelector("input").value;
        console.log("term_input_value", term_input_value);

        // copie du state
        const state_local = { ... this.state };
        const term = state_local.terms[index];
        // Modification du state local
        state_local.terms[index].name = term_input_value;
        state_local.terms[index].selected = false;

        // on supprime le terme si la valeur du champ est vide
        if (!term_input_value) state_local.terms.splice(index, 1);

        // on enregistre en bd
        this.connection.editTerm(
            term_input_value,
            term.id,
            this.successEditTerm,
            this.failedEditTerm);

        // Changement du state de table
        this.setState(state_local);

    }
    /**
     * Gestionnaire de l'événement "submit" du formulaire d'ajout
     * le premier paramètre est par convention l'objet event
     */
    handleSubmitTerm = (event) => {
        console.log('Dans handleSubmitTerm');
        // Suppression du comportement par défaut des formulaires qui rechargent la page à la soumission
        event.preventDefault();

        // récupération de la donnée entrée dans le champ term-input
        const term_input = document.getElementById("term-input").value;
        console.log('input term : ', term_input);

        // copie du state
        const state_local = { ... this.state };
        state_local.terms.push({ id: state_local.terms.length + 1, name: term_input });
        state_local.adding_a_term = false;

        this.setState(state_local);
    }
    /**
     * Affichage du formulaire des termes
     */
    dumpFormAddTerm = () => {
        console.log('Dans dumpFormAddTerm');
        if (this.state.adding_a_term == true) {
            return (
                <form onSubmit={event => { this.handleSubmitTerm(event); }}>
                    <label>
                        Terme :
                    <input type="text" id="term-input" />
                    </label>
                    <input type="submit" value="Envoyer" />
                </form>
            );
        }
    }
    /**
     * Affichage d'un modal pour ajouter une carte (card)
     */
    dumpModal = () => {
        const show = (this.state.index_column_adding_a_card == -1)
            ? false
            : true;
        if (show) {
            return (
                <Modal show={show} onHide={this.handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Ajout d'une carte</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <form onSubmit={event => { this.handleSubmitAddCard(event); }}>
                            <label>
                                Question :
                                <input className="m-1 " type="text" id="question-input" />
                                <br></br>
                                Réponse :
                                <input className="m-1" type="text" id="answer-input" />
                            </label>
                            <input type="submit" value="Envoyer" />
                        </form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.handleCloseModal} variant="secondary">Fermer</Button>
                        <Button variant="primary">Enregistrer</Button>
                    </Modal.Footer>
                </Modal>
            );
        }

    }
    successGetToken = (data) => {
        console.log('dans successGetToken');

        // on va pouvoir aller chercher les termes puisqu'on est sûr 
        // d'avoir un token
        this.connection.getTerms(this.successGetTerms, this.failedGetTerms);

    }
    successEditTerm = (data) => {
        console.log('dans successEditTerm');
    }
    /**
     * Une fois que l'on a récupéré les colonnes et les cartes
     * qui correspondent au terme cliqué, il s'agit ici
     * de modifier le state via un setState pour obtenir l'affichage souhaité
     */
    successGetCards = (data) => {
        console.log('dans succesGetCards');

        const state_local = { ...this.state };
        state_local.columns = data;

        this.setState(state_local);

    }
    successGetTerms = (data) => {
        console.log('dans successGetTerms');
        // maintenant que l'on a les termes, il faut modifier le state
        const state_local = { ... this.state };
        state_local.terms = data;

        this.setState(state_local);

    }
    failedEditTerm = (msg) => {
        console.log('dans failedEditTerm : ', msg);
    }
    failedGetCards = (msg) => {
        console.log('dans failedGetCards : ', msg);
    }
    failedGetTerms = (msg) => {
        console.log('dans successGetTerms : ', msg);
    }
    failedGetToken = (msg) => {
        console.log('dans failedGetToken', msg);
    }

    render() {
        return (
            <div className="container">
                <header>
                    <h1 className="d-flex justify-content-center">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512"
                            className="icon-logo" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M209.5 18.66c-7.4-.02-14.8 1.93-19.2 6.96-3.1 3.59-4.8 8.46 0 19.19 5.2 8.08 9.3 19.06 12.9 33.12l-17.9 4.66c-6.1-23.73-13.8-33-18.5-35.1-2.4-1.04-4.7-1.14-8.3 0-3.7 1.11-8.4 3.68-13.5 7.47-7.9 5.8-12.6 13.22-12.4 19.25 3.7 12.42 13.1 18.6 25 24.19l-8 16.8c-4.6-2.1-8.7-4.4-12.4-6.8-13.3-7.3-23.1-10.38-28-9.97-2.6.22-4.1.85-6 2.77-2 2-4.4 5.7-6.5 11.6-3.5 9.9-4 17.7-1.5 21.8 2 3.2 7.2 6.9 20.1 8.2 3.3.1 6.7.2 10.4.4v.1h1.1l.2 18.7c-3.8 0-7.3-.1-10.6-.4-11.1-.1-17.7.8-20.2 2.1-1.6.8-2.1 1.3-2.9 3-.9 1.8-1.8 5.1-2.4 10-.6 4.5-.2 7.6.7 9.8.9 2.1 2.1 3.6 5.3 5.3 6.5 3.5 21.7 5.8 47.3 3.7l1.5 18.6c-17.2 1.5-30.7 1.5-41.5-.5 4.7 15.1 14.5 21.9 25.7 21.9h94c10.6 0 19.8-7.7 23.4-22.1l8.1-32.1 9.9 31.6c4.7 14.8 14.2 22.6 23.5 22.6H383c11.2 0 21.1-6.9 25.7-22-10.9 2.1-24.6 2.1-42.4.6l1.6-18.6c25.6 2.1 40.7-.2 47.2-3.7 3.2-1.7 4.4-3.2 5.3-5.3 1.4-6.3 2.1-19.3-4.5-22.8-2.5-1.2-9.1-2.2-20.2-2.1-3.3.3-6.8.4-10.6.4l.2-18.7h1v-.1c3.8-.2 7.2-.3 10.4-.4 12.9-1.3 18.2-5 20.2-8.2 2.5-4.1 2-11.9-1.6-21.8-2.3-6.2-6-13.77-12.4-14.37-17.1 2.07-29.1 9.67-40.4 16.77l-8-16.8c4.4-1.98 7.7-4.22 11.7-6.56 10.2-6.88 13-13.02 13.3-17.63.2-6.03-4.6-13.45-12.4-19.25-5.2-3.79-9.8-6.35-13.5-7.47-3.6-1.11-6-1.01-8.3 0-1.7.72-3.7 2.34-5.8 5.09-5.7 9.01-10.4 21.31-12.7 30l-18.1-4.66c4.1-15.76 8.8-27.65 15-35.93 3.3-8.79 1.7-13.12-1.1-16.38-9.4-7.73-28.3-9.73-38.7-1.99-4.5 3.34-8.1 8.5-10.9 15-5.5 12.97-7.1 30.87-7.1 43.99v.1l-.2 30.79v.1h-18.6v-.1l-.2-30.83v-.1c0-13.12-1.6-31.02-7.2-44.03-2.7-6.5-6.3-11.66-10.8-15-4.5-2.86-12-4.86-19.4-4.88zm47.2 217.94c-7.9 10.7-19.4 17.6-32.8 17.6h-42.8c2 4.3 5.4 8.2 10 11.8 11.8 9 32.1 15 53.6 16.4l-.6.6c-7.9 8.5-33.2 6.5-48 .9-35-12.8-67.9-21.9-101.28-11.1-43.77 17.3-74.86 66.9-65.53 113.1 10.36 51.3 66.85 124.2 121.11 99.8 61.3-27.6 11.4-114.5-25.3-132.1 8.5 23.2 39.8 79.9 11.4 91.9-34.2 14.4-81.56-43.6-69.48-86.9 20.71-57.4 66.08-49.5 99.38-37.5 60.3 21.7 31.2 169.9 95.2 167.1 38.9-1.7 85.4-60.7 48.7-106.3 3.9 28.6-20.4 75.5-42.9 63.4-33.8-18.1 12.2-84.5 43.7-106.6 24.4-17.1 70.6-28.1 89.5-3.7 29.8 38.6-53.2 74.2-27.7 118.3 22.5 39 75.7 47.4 117.6-10.8-29.1 17.4-68.6 25.8-79.6 1.6-14.1-31.1 62.7-35.3 69.1-76 5.8-36.7-18.3-73.9-49.6-93.9-39.9-25.6-109.3 30.9-160.3 7.7 19.7-2.1 37.9-8.1 48.6-16.7 4.2-3.4 7.3-7 9.3-11h-39.2c-12.9 0-24.2-7-32.1-17.6z"></path></svg>
                        <span>emo</span>
                    </h1>
                    <nav className="d-flex justify-content-center">
                        <button onClick={e => { this.handleClickAddTerm(e) }} className="btn btn-danger"> + </button>
                        {this.state.terms.map((term, index) =>
                            <Term
                                onClickTerm={this.handleClickTerm}
                                key={term.id}
                                term={term}
                                index={index}
                                onSubmitEditTerm={this.handleSubmitEditTerm}

                            />)}
                    </nav>
                    {this.dumpFormAddTerm()}
                </header>
                <main>
                    {/* Les 4 colonnes */}
                    <section className="row">
                        {this.state.columns.map(
                            (column, index) =>
                                <Column
                                    key={column.id}
                                    column={column}
                                    index={index}
                                    onClickAddCard={this.handleClickAddCard}
                                />
                        )}

                    </section>
                    {this.dumpModal()}
                </main>
                <footer>


                </footer>
            </div>
        );
    }
    componentDidMount() {
        console.log('Dans componentDidMount');
        // Récupération du token
        this.connection.getToken(this.successGetToken, this.failedGetToken);
    }
}

export default Table;