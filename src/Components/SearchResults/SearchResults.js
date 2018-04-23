import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';

class SearchResults extends Component {
	render() {
		return (
			<div className="SearchResults">
			  <h3>Search Results</h3>
			  	<TrackList tracks={this.props.tracks} onAdd={this.props.onAdd} isRemoval={false} />
			</div>
		);
	}
}

SearchResults.propTypes = {
	tracks: PropTypes.array,
	onAdd: PropTypes.func
};

export default SearchResults;