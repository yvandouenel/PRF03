import React, { Component } from 'react';

class Term extends Component {
    state = {}
    dumpTermClass = () => {
        console.log('dans dumpTermClass');
        /* if (this.props.term.selected == true) {
            return "btn ml-2 mr-2 btn-success";
        } else return "btn ml-2 mr-2 btn-warning"; */
        // opérateur ternaire
        return ((this.props.term.selected)
            ? "btn-success"
            : "btn-warning");
    }
    dumpTermButtonOrForm = () => {
        if (this.props.term.selected) {
            return (
                <form onSubmit={e => {
                    this.props.onSubmitEditTerm(
                        e,
                        this.props.index)
                }}
                >
                    <label>
                        <input type="text"
                            defaultValue={this.props.term.name}
                        />
                    </label>
                    <input type="submit" value="Envoyer" />
                </form>
            );
        } else return (
            <button
                onClick={
                    e => {
                        this.props.onClickTerm(e, this.props.index);
                    }
                }
                className={"btn ml-2 mr-2 btn-warning"}>
                {this.props.term.name}
            </button>
        );
    }
    render() {
        return (<>{this.dumpTermButtonOrForm()}</>);
    }
}

export default Term;