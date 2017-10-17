import React, { Component } from 'react';

class FilterString extends Component {
  constructor() {
    super()
    this.state = {
      groceryList: ['tempeh', 'apples', 'bananas', 'tofu', 'tahini', 'pasta', 'pasta sauce', 'protein powder', 'eggs', 'pancakes'],
      userInput: '',
      filteredList: []
    }
  }

  handleChange = value => {
    this.setState({
      userInput: value
    })
  }

  filterGroceries = input => {
    let filteredList = this.state.groceryList.filter( item => {
      return item.match(input);
    })
    this.setState({
      filteredList: filteredList
    })
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">{ JSON.stringify(this.state.groceryList, null, 10) }</span>
        <input className="inputLine" onChange={ e => this.handleChange(e.target.value) }/>
        <button className="confirmationButton" onClick={ () => this.filterGroceries(this.state.userInput) }>Filter</button>
        <span className="resultsBox filterStringRB">{ JSON.stringify(this.state.filteredList, null, 10) }</span>
      </div>
    );
  }
}

export default FilterString;