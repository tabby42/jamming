import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PlayList.css';
import TrackList from '../TrackList/TrackList';

class PlayList extends Component {
	constructor(props) {
		super(props);
		this.handleNameChange = this.handleNameChange.bind(this);
	}

	handleNameChange(e) {
		this.props.onUpdatePlaylistName(e.target.value);
	}

	render() {
		return (
			<div className="Playlist">
				<input defaultValue={this.props.playlistName} onChange={this.handleNameChange}/>
				<TrackList tracks={this.props.tracks} onRemove={this.props.onRemove} isRemoval={true} />
				<a className="Playlist-save">SAVE TO SPOTIFY</a>
			</div>
		);
	}
}

PlayList.propTypes = {
	tracks: PropTypes.array,
	playlistName: PropTypes.string,
	onRemove: PropTypes.func,
	onUpdatePlaylistName: PropTypes.func
};

export default PlayList;