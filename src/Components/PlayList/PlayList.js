import React, { Component } from 'react';
import './PlayList.css';
{/*import TrackList*/}

class PlayList extends Component {
	render() {
		return (
			<div class="Playlist">
				<input defaultValue={'New Playlist'} />

				<a class="Playlist-save">SAVE TO SPOTIFY</a>
			</div>
		);
	}
}

export default PlayList;