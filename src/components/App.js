import React, { Component } from "react";
import Identicon from "./Identicon";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Identicon size={5} username="lilpump" />
        <Identicon size={5} username="username40" />
        <Identicon size={5} username="yogaGirl2" />
        <Identicon size={5} username="yoooo" />
      </div>
    );
  }
}

export default App;
