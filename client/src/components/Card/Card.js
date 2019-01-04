import React, { Component } from "react";

class Card extends Component {
	
	render () {
		return (
				<div className="col s12 m6">
					<div className="card blue-grey darken-1">
						<div className="card-content white-text">
						<span className="card-title">{this.props.team} Team</span><span className="card-date">{this.props.date}</span>
						<p>Received {this.props.points} points for {this.props.description}</p>
						</div>
					</div>
				</div>
		)	
	}
}

export default Card;



