import React, { Component } from 'react';

class Column extends Component {
    state = {}
    render() {
        return (
            <section className="col-3 mt-3">
                <header className="d-flex align-items-center">
                    <button
                        onClick={e => { this.props.onClickAddCard(e) }}
                        className="btn btn-success mr-2"
                    >+</button>
                    <h2 className="h5">{this.props.column.name}</h2>
                </header>

            </section>
        );
    }
}

export default Column;