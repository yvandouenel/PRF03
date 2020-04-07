import React, { Component } from 'react';

class Column extends Component {
    state = {}
    render() {
        return (
            <section className="col-3">
                <h2>{this.props.column.name}</h2>
            </section>
        );
    }
}

export default Column;