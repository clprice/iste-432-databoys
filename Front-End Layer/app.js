import React, { Component } from 'react'

class App extends Component {
	constructor(props) {
		super(props)
		
		this.removeBid = this.removeBid.bind(this)
		this.addGameBid = this.addGameBid.bind(this)
		this.tradeGame = this.tradeGame.bind(this)
		this.listGame = this.listGame.bind(this)
		this.biddingStatus = this.biddingStatus(this)
		this.bidGame = this.bidGame(this)
		this.cancelBid = this.cancelBid(this)
		this.removeBid = this.removeBid(this)
		
	}
	//Methods that do what they are labeled via name, code will be added once other parts are finished
	removeBid() {
		
	}
	addGameBid() {
		
	}
	tradeGame() {
		
	}
	listGame(){
	}
	biddingStatus(){
	}
	bidGame(){
	}
	cancelBid(){
	}
	removeBid(){
		
	}
	
	/*render() {
		return (
			Note Add the UI if needed in here
			<div className="app">
				<p></p>
				<span>

				</span>
			</div>
		)
	*/}
}

export default App