import React, { Component } from "react";
import Identicon from "./Identicon";
import "./App.css";
import github from "../images/github.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      usernames: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  handleSubmit(event) {
    const usernames = this.state.usernames.slice();
    usernames.push(this.state.input);
    this.setState({
      input: "",
      usernames: usernames
    });

    event.preventDefault();
  }

  render() {
    const identicons = this.state.usernames.map((username, i) => (
      <Identicon size={5} username={username} key={i} />
    ));

    return (
      <div className="app">
        <div className="header">
          <h1>
            <span role="img" aria-label="alien">
              👾
            </span>{" "}
            Identicon Generator
          </h1>
          <Identicon username={(Math.random() * 10000).toString()} />
          <p>
            "Our Identicons are simple 5x5 “pixel” sprites that are generated
            using a hash of the user’s ID. The algorithm walks through the hash
            and turns pixels on or off depending on even or odd values. These
            generated patterns, combined with hash-determined color values,
            ensures a huge number of unique Identicons." -{" "}
            <a href="https://blog.github.com/2013-08-14-identicons/">
              Github blog
            </a>
          </p>
          <div className="github">
            <a href="https://github.com/beneisnr/identicon">
              <img className="github" src={github} width="24" alt="github" />
            </a>
          </div>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.input}
              placeholder="Your username here..."
              onChange={this.handleChange}
            />
            <input type="submit" value="generate" />
          </form>
        </div>
        <div>
          <div className="identicons">{identicons.reverse()}</div>
        </div>
      </div>
    );
  }
}

export default App;
