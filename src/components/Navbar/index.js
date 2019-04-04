import React, { Component } from "react";
import "./style.css";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li className="brand">
            <a href="/">{this.props.title}</a>
          </li>

          <li className="oops">{this.props.oops}</li>

          <li>Current Score: {this.props.currentScore}</li>

          <li>Top Score: {this.props.topScore}</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
