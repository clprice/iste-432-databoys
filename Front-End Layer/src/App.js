// these are imports needed for running react
import React, { Component } from 'react';
// this import is for https requests
import axios from 'axios';
//logo
import logo from './VBay logo.png';
// needed for css
import './App.css';

class App extends Component {
//globalize array for the items to be set to the app
state = {
    persons: [ ' name' , 'price', 'auction']
  }



// This is the API collect method	
	componentDidMount() {
	// where ever we have the stuff stored
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
		 // collect items
        const items = res.data;
		//something not entirely sure what
        this.setState({ items });
      })
  }
  render() {
    return (
	
	 //app so that it can be renders from the node modules
      <div className="App">
        <header className="App-header">
		// app logo
          <img src={logo} className="App-logo" alt="logo" />
        
    
        </header>
		//main menu at the top
		<nav className ="main-menu">
		<ul id="page-header">
				<li><a href="#">Home</a></li>
				<li><a href="#">Trade</a></li>
				<li><a href="#">User Profile</a></li>
				<li><a href="#">Login</a></li>

		</ul>
		</nav>
		// to create a repeatable div so that all the 
		<div id = repeatable>
		//react is weird like javascript so it allows looping...
		for (int i = 0; i < state.items.length ; i ++)
		{
			// this is to display name of that item in the array
		{ this.state.items.map(items => <p>{items.name[i]}</p>)}
		// to display the price
		{ this.state.items.map(items => <p>{items.price[i]}</p>)}
		//auction price
		{ this.state.items.map(items => <p>{items.auction[i]}</p>)}
		<button> Buy </button>
		}
		
		
		<div>
      </div>
    );
  }
}

export default App;
