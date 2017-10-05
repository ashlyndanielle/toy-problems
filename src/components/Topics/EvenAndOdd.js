import React, { Component } from 'react';

class EvenAndOdd extends Component {
  constructor() {
    super();
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ''
    }
  }
  updateInput = value => {
    this.setState({
      userInput: value
    })
  }
  sortInput = input => {
    var arr = input.split(',');
    var evens = [];
    var odds = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]%2 === 0) {
        evens.push( parseInt(arr[i], 10) );
      } else {
        odds.push( parseInt(arr[i], 10) );
      }
    }
    this.setState({
      evenArray: evens,
      oddArray: odds,
      userInput: ''
    })
  }
  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input className="inputLine" onChange={ e => this.updateInput(e.target.value) } value={this.state.userInput}/>
        <button className="confirmationButton" onClick={ () => this.sortInput(this.state.userInput) }>Split</button>
        <span className="resultsBox">Evens: { JSON.stringify(this.state.evenArray) }</span>
        <span className="resultsBox">Odds: { JSON.stringify(this.state.oddArray) }</span>
      </div>
    );
  }
}

export default EvenAndOdd;