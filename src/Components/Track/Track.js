import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Track.css';

class Track extends Component {
	constructor(props) {
		super(props);
		this.addTrack = this.addTrack.bind(this);
	}

	renderAction() {
		if (!this.props.isRemoval) {
			return <a className="Track-action" onClick={this.addTrack} >+</a>;
		} else {
			return  <a className="Track-action">-</a>;
		}
	}

	addTrack() {
		this.props.onAdd(this.props.track);
	}

	render() {
		return (
			<div className="Track">
	            <div className="Track-information">
	              <h3>{this.props.track.name}</h3>
	              <p>{this.props.track.artist} | {this.props.track.album}</p>
	            </div>
	            {this.renderAction()}
	        </div>
		);
	}
}

Track.propTypes = {
	track: PropTypes.object
};

export default Track;