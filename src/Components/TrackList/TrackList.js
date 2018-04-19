import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends Component {
	render() {
		return(
			<div className="TrackList">
				{this.props.tracks.map( track => {
					return <Track track={track} key={track.id} onAdd={this.props.onAdd} />
				})}
			</div>
		);
	}
}

TrackList.propTypes = {
	tracks: PropTypes.array,
	onAdd: PropTypes.func
};

export default TrackList;