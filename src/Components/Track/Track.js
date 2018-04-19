import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Track.css';

class Track extends Component {
	constructor(props) {
		super(props);
		this.handleAddTrack = this.handleAddTrack.bind(this);
		this.handleRemoveTrack = this.handleRemoveTrack.bind(this);
	}

	renderAction() {
		if (!this.props.isRemoval) {
			return <a className="Track-action" onClick={this.handleAddTrack} >+</a>;
		} else {
			return  <a className="Track-action" onClick={this.handleRemoveTrack} >-</a>;
		}
	}

	handleAddTrack() {
		this.props.onAdd(this.props.track);
	}

	handleRemoveTrack() {
		this.props.onRemove(this.props.track);
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