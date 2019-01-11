import React, { Component } from "react";
import Identicon from "./Identicon";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Identicon size={5} username="farghoooo98" />
        <Identicon size={5} username="yoonga" />
        <Identicon size={5} username="yogaGirl27" />
        <Identicon size={5} username="balong" />
      </div>
    );
  }
}

export default App;
