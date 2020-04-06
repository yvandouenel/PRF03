import React, { Component } from 'react';
import Card from './Card';

class Table extends Component {
    state = {}
    render() {
        return (
            <>
                <header>
                    <h1>Logo</h1>
                    <nav>Navigation ici</nav>
                </header>
                <main>
                    {/* Les 4 colonnes */}
                    <section className="row">
                        {/* Colonne 1 */}
                        <section>
                            <Card question="Question" answer="Réponse" explanation="Explication" />

                        </section>
                        {/* Colonne 2 */}
                        <section></section>
                        {/* Colonne 3 */}
                        <section></section>
                        {/* Colonne 4 */}
                        <section></section>

                    </section>
                </main>
                <footer>Footer ici</footer>
            </>
        );
    }
}

export default Table;