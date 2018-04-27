import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends Component {
	render() {
		return(
			<div className="TrackList">
				{this.props.tracks!== undefined ? this.props.tracks.map( track => {
					return <Track track={track} 
									key={track.id} 
									onAdd={this.props.onAdd} 
									onRemove={this.props.onRemove} 
									isRemoval={this.props.isRemoval}
							/>
				}) : ''}
			</div>
		);
	}
}

TrackList.propTypes = {
	tracks: PropTypes.array,
	onAdd: PropTypes.func,
	onRemove: PropTypes.func,
	isRemoval: PropTypes.bool
};

export default TrackList;