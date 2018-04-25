import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';

class SearchResults extends Component {
	renderNoResults() {
		if (this.props.tracks.length === 0) {
			return <p></p>;
		}
	}

	render() {
		return (
			<div className="SearchResults">
			  <h3>Search Results</h3>
				<p>{this.props.tracks.length === 0 ? 'No Results. Try the Search Bar!' : ''}</p>
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