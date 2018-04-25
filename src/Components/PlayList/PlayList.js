import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PlayList.css';
import TrackList from '../TrackList/TrackList';

class PlayList extends Component {
	constructor(props) {
		super(props);
		this.state = {
	      inputValue: ''
	    };
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleNameChange(e) {
		this.props.onUpdatePlaylistName(e.target.value);
		this.setState({
			inputValue: e.target.value
		});
	}

	//clear input on enter
	handleKeyPress(e) {
		if(e.key === 'Enter'){
			e.target.value = '';
	    }
	}

	handleClick(e) {
		this.props.onSave();
		this.setState({
			inputValue: ''
		});
	}

	render() {
		return (
			<div className="Playlist">
				<input placeholder="Enter Playlist Name" 
					   onChange={this.handleNameChange} 
					   onKeyPress={this.handleKeyPress} 
					   value={this.state.inputValue}/>
				<h3>{this.props.playlistName}</h3>
				<TrackList tracks={this.props.tracks} onRemove={this.props.onRemove} isRemoval={true} />
				<a className="Playlist-save" onClick={this.handleClick} >SAVE TO SPOTIFY</a>
			</div>
		);
	}
}

PlayList.propTypes = {
	tracks: PropTypes.array,
	playlistName: PropTypes.string,
	onRemove: PropTypes.func,
	onUpdatePlaylistName: PropTypes.func,
	onClick: PropTypes.func
};

export default PlayList;