import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Track.css';

class Track extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			isRemoval: true,
		};
	}

	renderAction() {
		if (this.state.isRemoval) {
			return '+';
		} else {
			return '-';
		}
	}

	render() {
		return (
			<div className="Track">
	            <div className="Track-information">
	              <h3>{this.props.track.name}</h3>
	              <p>{this.props.track.artist} | {this.props.track.album}</p>
	            </div>
	            <a className="Track-action">{this.renderAction()}</a>
	        </div>
		);
	}
}

Track.propTypes = {
	track: PropTypes.object
};

export default Track;