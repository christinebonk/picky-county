import React, { Component } from "react";

class House extends Component {


	render () {
		return (
			<div className="display-house">
				<div className="display-house-top" style={{backgroundColor: this.props.color}}>
					<h3>{this.props.name}</h3>
					<a onClick={()=>this.props.deleteHouse(this.props.id)}>Delete House</a>
				</div>
			</div>
		)	
	}
}

export default House;


