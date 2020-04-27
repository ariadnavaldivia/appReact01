import React from "react";
import { render } from "react-dom";

import "./styles.css";
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
/* const App = props => (
  <div style={styles}>
    <h2>Hola {props.count}</h2>
  </div>
); */
let id = 0;
const Todo = props => (
  <li>
    <input type="checkbox" />
    <button>Delete</button>
    <span>{props.todo.text}</span>
  </li>
);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  addTodo() {
    const text = prompt("TODO text please");
    this.setState({
      todos: [...this.state.todos, { id: id++, text: text }]
    });
  }

  deleteTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }
  render() {
    return (
      <div style={styles}>
        <button onClick={() => this.addTodo()}>Add TODO</button>
        <ul>
          {this.state.todos.map(todo => (
            <Todo todo={todo} onDelete={() => this.deleteTodo(todo.id)} />
          ))}
        </ul>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
