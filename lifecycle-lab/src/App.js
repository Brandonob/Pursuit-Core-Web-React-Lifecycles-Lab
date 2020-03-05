import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import TodoList from "./Component/TodoList"
import Form from "./Component/Form"

class App extends React.Component {
  state = {
    list: []
  }
  render() {
    return (
      <div className="App">
        {/* <TodoList/> */}
        <Form />
  
      </div>
    );

  }
}

export default App;
