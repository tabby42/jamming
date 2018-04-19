import React, { Component } from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends Component {
	render() {
		return(
			<div className="TrackList">
				{this.props.searchResults.map( track => {
					return <Track track={track} key={track.id} />
				})}
			</div>
		);
	}
}

export default TrackList;