import React, { Component } from 'react';

class Term extends Component {
    state = {}
    render() {
        return (
            <button className="btn btn-warning  ml-2 mr-2" >{this.props.name}</button>
        );
    }
}

export default Term;