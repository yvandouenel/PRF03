import React from "react";
import { connect } from "react-redux";
// Appel de la fonction créatrice d'action addTodo depuis redux/actions
import { addTodo } from "../redux/actions";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </button>
      </div>
    );
  }
}
// Cet export va permettre au composant de récupérer via les props un accès
// à  l'action addTodo ce qui va enclencher automatiquement l'appel du reducer correspondant
/**
 * Because this is so common, connect supports an “object shorthand” form for the
 * mapDispatchToProps argument: if you pass an object full of action creators
 * instead of a function, connect will automatically call bindActionCreators
 * for you internally.
 * cf https://react-redux.js.org/using-react-redux/connect-mapdispatch#defining-mapdispatchtoprops-as-an-object
 */
export default connect(
  null,
  { addTodo }
)(AddTodo);
// export default AddTodo;
