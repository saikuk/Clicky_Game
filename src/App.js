import React, { Component } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import origCards from "./cards.json";

function shuffleArray(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: origCards,
      topScore: 0,
      currentScore: 0,
      oops: ""
    };
  }

  handleClick = id => {

    let shuffledCards = shuffleArray([...this.state.cards]);
    let chosenCard = shuffledCards.find(element => element.id === id);

    if (!chosenCard.clicked) {
      chosenCard.clicked = true;
      let newcurrentScore = this.state.currentScore + 1;
      let newTopScore =
        newcurrentScore > this.state.topScore ? newcurrentScore : this.state.topScore;
      this.setState({
        cards: shuffledCards,
        currentScore: newcurrentScore,
        topScore: newTopScore,
        oops: ""
      });
    } else {
    
      shuffledCards.forEach(card => {
        card.clicked = false;
      });
      this.setState({
        cards: shuffledCards,
        currentScore: 0,
        oops: "Oops! Try again."
      });
    }
  };

  render() {
    return (
      <div className="container">
        <Navbar
          title="Clicky Game"
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
        />
        <Wrapper className="card-columns">
          {this.state.cards.map(element => {
            return (
              <Card
                {...element}
                key={element.id}
                handleClick={this.handleClick}
              />
            );
          })}
        </Wrapper>
        <footer className="text-center">
          Click on each box only once!
          <h3>{this.state.oops}</h3>
        </footer>
      </div>
    );
  }
}

export default App;
