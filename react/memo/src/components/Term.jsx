import React, { Component } from 'react';

class Term extends Component {
    state = {}
    dumpTermClass = () => {
        console.log('dans dumpTermClass');
        /* if (this.props.term.selected == true) {
            return "btn ml-2 mr-2 btn-success";
        } else return "btn ml-2 mr-2 btn-warning"; */
        // opérateur ternaire
        const classes = "btn ml-2 mr-2 ";
        return ((this.props.term.selected)
            ? classes + "btn-success"
            : classes + "btn-warning");
    }
    render() {
        return (
            <button
                onClick={
                    e => {
                        this.props.onClickTerm(e, this.props.index);
                    }
                }
                className={this.dumpTermClass()}>
                {this.props.term.name}
            </button>
        );
    }
}

export default Term;