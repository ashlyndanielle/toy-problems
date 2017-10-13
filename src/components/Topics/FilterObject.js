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
  filterThings = input => {}

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">{ JSON.stringify(this.state.unfilteredArray, null, 10) }</span>
        <input 
          className="inputLine"
          onChange={ e => this.handleInput(e.target.value) }
          value={this.state.userInput}
        />
        <button className="confirmationButton" onClick={ this.filterThings(this.state.userInput) } >Filter</button>
        <span className="resultsBox filterObjectRB">{ this.state.filteredArray }</span>
      </div>
    );
  }
}

export default FilterObject;