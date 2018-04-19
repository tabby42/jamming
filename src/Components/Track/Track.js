import React, { Component } from 'react';
import './Track.css';

class Track extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			isRemoval: false,
			trackAction: '+'
		};
		this.renderAction = this.renderAction.bind(this);
	}

	renderAction() {
		if (this.state.isRemoval) {
			this.setState({ trackAction: '-' });
		} else {
			this.setState({ trackAction: '+' });
		}
	}

	render() {
		return (
			<div className="Track">
	            <div className="Track-information">
	              <h3>Tiny Dancer</h3>
	              <p>Elton John | Madman Across The Water</p>
	            </div>
	            <a className="Track-action">{this.state.trackAction}</a>
	        </div>
		);
	}
}

export default Track;