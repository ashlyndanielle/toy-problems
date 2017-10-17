import React, { Component } from 'react';

class Palindrome extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      palindrome: ''
    }
  }

  handleChange = value => {
    this.setState({
      userInput: value
    })
  }

  checkForPalindrome = input => {
    
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input className="inputLine" onChange={ e => this.handleChange(e.target.value) } />
        <button className="confirmationButton" onClick={ () => this.checkForPalindrome(this.state.userInput) } ></button>
        <span className="resultsBox"></span>
      </div>
    );
  }
}

export default Palindrome;