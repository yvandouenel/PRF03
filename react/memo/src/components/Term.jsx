import React, { Component } from 'react';

class Term extends Component {
    state = {}

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