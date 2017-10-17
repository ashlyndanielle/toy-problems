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

  filteredDescription = property => {
    let person = this.state.unfilteredArray;
    let filteredPerson = [];
    for ( let x = 0; x < person.length; x++) {
      if ( person[x].hasOwnProperty(property) ){
        filteredPerson.push(person[x]);
      }
    }
    this.setState({
      filteredArray: filteredPerson
    })
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">Original: { JSON.stringify(this.state.unfilteredArray, null, 10) }</span>
        <input 
          className="inputLine"
          onChange={ e => this.handleInput(e.target.value) }
          value={this.state.userInput}
        />
        <button className="confirmationButton" onClick={ () => this.filteredDescription(this.state.userInput) } >Filter</button>
        <span className="resultsBox filterObjectRB">{ JSON.stringify(this.state.filteredArray, null, 10) }</span>
      </div>
    );
  }
}

export default FilterObject;