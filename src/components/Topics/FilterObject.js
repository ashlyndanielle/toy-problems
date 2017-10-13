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
  filterPeople = property => {
    var filteredArray = [];
    var people = this.state.unfilteredArray;
    for (let x = 0; x < people.length; x++){
      if (people[x].hasOwnProperty(property)){
        filteredArray.push(people[x])
      }
    }
    this.setState({
      filteredArray: filteredArray
    })
  }

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
        <button className="confirmationButton" onClick={ () => this.filterPeople(this.state.userInput) } >Filter</button>
        <span className="resultsBox filterObjectRB">{ JSON.stringify(this.state.filteredArray, null, 10) }</span>
      </div>
    );
  }
}

export default FilterObject;