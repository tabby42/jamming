import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PlayList.css';
import TrackList from '../TrackList/TrackList';

class PlayList extends Component {
	constructor(props) {
		super(props);
		this.state = {
	      inputValue: '',
	      errMessageEmpty: '',
	      errMessageNotSet: ''
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
		this.checkNameIsSet();
		if (this.checkListEmpty() && this.checkNameIsSet()) {
			this.props.onSave();
			this.setState({
				inputValue: ''
	  		});
		} 
	}

	checkListEmpty() {
		if (this.props.tracks.length === 0 || !this.props.tracks) {
			this.setState({
				errMessageEmpty: 'Looks like your playlist is empty!'
	  		});
	  		return false;
		} else {
			this.setState({
				errMessageEmpty: ''
	  		});
			return true;
		}
	}

	checkNameIsSet() {
		if (this.props.playlistName === 'New Playlist') {
			this.setState({
				errMessageNotSet: 'Please enter a name for your playlist!'
	  		});
	  		return false;
		} else {
			this.setState({
				errMessageNotSet: ''
	  		});
			return true;
		}
	}

	renderWarningEmpty() {
		if (this.state.errMessageEmpty !== '') {
			return <p className="warning">{this.state.errMessageEmpty}</p> ;
		}
	}

	renderWarningNameNotSet() {
		if (this.state.errMessageNotSet !== '') {
			return <p className="warning">{this.state.errMessageNotSet}</p> ;
		}
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
				{this.renderWarningEmpty()}
				{this.renderWarningNameNotSet()}
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