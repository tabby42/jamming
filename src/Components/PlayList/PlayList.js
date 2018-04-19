import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PlayList.css';
import TrackList from '../TrackList/TrackList';

class PlayList extends Component {
	render() {
		return (
			<div className="Playlist">
				<input value={this.props.playlistName} />
				<TrackList tracks={this.props.tracks} />
				<a className="Playlist-save">SAVE TO SPOTIFY</a>
			</div>
		);
	}
}

PlayList.propTypes = {
	tracks: PropTypes.array,
	playlistName: PropTypes.string
};

export default PlayList;