import React, { Component } from 'react';

class Term extends Component {
    state = {}

    render() {
        return (
            <button
                onClick={
                    e => {
                        this.props.onClickTerm(e, this.props.index);
                    }
                }
                className="btn btn-warning  ml-2 mr-2" >
                {this.props.term.name}
            </button>
        );
    }
}

export default Term;