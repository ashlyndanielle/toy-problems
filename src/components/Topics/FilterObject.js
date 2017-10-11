import React, { Component } from 'react';

class FilterObject extends Component {
  constructor(props){
    super(props);
    this.state = {
      unfilteredArray: [
        {
          color: 'black',
          size: 'small',
          hair: 'long'
        },
        {
          color: 'purple',
          age: 20,
          wage: 30,
        },
        {
          age: 34,
          name: 'Stephanie',
          shoe: 'large'
        }
      ],
      userInput: '',
      filteredArray: []
    }
  }

  handleInput = value => {
    this.setState({
      userInput: value
    })
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText"></span>
        <input 
          className="inputLine"
          onChange={ e => this.handleInput(e.target.value) }
          value={this.state.userInput}
        />
        <button className="confirmationButton"></button>
        <span className="resultsBox filterObjectRB"></span>
      </div>
    );
  }
}

export default FilterObject;