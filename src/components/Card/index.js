import React, { Component } from "react";
import "./style.css";

class Card extends Component {
  render() {
    return (
          <div className="card" onClick={() => this.props.handleClick(this.props.id)}>
          <div className="img-container">
            <img alt={this.props.name} src={this.props.image} />
          </div>
          <div className="card-body text-center">
            <ul>
              <li>
                <strong>Name:</strong> {this.props.name}
              </li>
            </ul>
          </div>
        </div>
    );
  }
}

export default Card;
