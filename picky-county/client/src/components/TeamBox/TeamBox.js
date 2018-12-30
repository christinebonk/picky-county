import React, { Component } from "react";

class TeamBox extends Component {
	
	render () {
		return (
			<div className="team-box">
				<div className="team-box-top" style={{backgroundColor: this.props.color}}>
					<div className="ranking"># {this.props.index}</div>
					<h3>{this.props.name}</h3>
				</div>
				<div className="team-box-bottom">
					<span className="points">{this.props.points} pts</span>
				</div>
			</div>
		)	
	}
}

export default TeamBox;


