import React, { Component } from "react";
import "./Identicon.css";

/*
"Our Identicons are simple 5x5 “pixel” sprites that are generated using a hash
of the user’s ID. The algorithm walks through the hash and turns pixels on or
off depending on even or odd values. These generated patterns, combined with
hash-determined color values, ensures a huge number of unique Identicons."
  - https://blog.github.com/2013-08-14-identicons/
*/

const IDENTICON_SIZE = 5; // if you change this, adjust height and width
// of pixelOn and pixelOff
const IDENTICON_COLORS = [
  "#68CC83",
  "#E5DD72",
  "#FFBB80",
  "#BF58FF",
  "#68B8CC"
];

class Identicon extends Component {
  constructor(props) {
    super(props);
    const hash = this.getHashFromUsername(this.props.username);
    this.parities = this.getParitiesFromHash(hash);
    this.color = this.getPixelColorFromHash(hash);
  }

  getHashFromUsername(user) {
    // https://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-
    // string-hashcode-method/
    let hash = 0;
    if (user.length === 0) return hash;
    for (let i = 0; i < user.length; i++) {
      let ch = user.charCodeAt(i);
      hash = (hash << 5) - hash + ch;
      hash |= 0; // convert to 32 bit int
    }

    return Math.abs(hash);
  }

  getParitiesFromHash(hash) {
    const hashString = hash.toString();
    const numParities = IDENTICON_SIZE ** 2;
    const parities = Array(numParities).fill(null);
    for (let i = 0; i < numParities; i++) {
      let j = (i + hashString.length - 1) % hashString.length;
      // makes it a little bit more interesting to switch parity each row
      i % 2 === 0
        ? (parities[i] = parseInt(hashString[j]) % 2 === 0)
        : (parities[i] = parseInt(hashString[j]) % 2 === 1);
    }

    return parities;
  }

  getPixelColorFromHash(hash) {
    return IDENTICON_COLORS[hash % IDENTICON_COLORS.length];
  }

  render() {
    let identicon = [];
    for (let i = 0; i < IDENTICON_SIZE; i++) {
      identicon.push(
        <div className="row" key={i}>
          {this.parities
            .slice(i * IDENTICON_SIZE, (i + 1) * IDENTICON_SIZE)
            .map((isOn, j) => {
              return (
                <div
                  style={{ background: isOn ? this.color : "" }}
                  className={isOn ? "pixelOn" : "pixelOff"}
                  key={j}
                />
              );
            })}
        </div>
      );
    }
    return <div className="container">{identicon}</div>;
  }
}

export default Identicon;
