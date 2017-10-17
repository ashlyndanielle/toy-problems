import React, { Component } from 'react';

class Sum extends Component {
  constructor() {
    super();
    this.state = {
      number1: 0,
      number2: 0,
      total: null
    }
  }
  updateNumber1 = value => {
    this.setState({
      number1: Number(value)
    })
  }
  updateNumber2 = value => {
    this.setState({
      number2: Number(value)
    })
  }
  addNumbers = (one, two) => {
    this.setState({
      total: one+two
    })
  }
  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input className="inputLine" onChange={ e => this.updateNumber1(e.target.value) }/>
        <input className="inputLine" onChange={ e => this.updateNumber2(e.target.value) }/>
        <button className="confirmationButton" onClick={ () => this.addNumbers(this.state.number1, this.state.number2) } >Add</button>
        <span className="resultsBox">Total: { this.state.total }</span>
      </div>
    );
  }
}

export default Sum;