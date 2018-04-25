import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
	      term: ''
	    };
		this.handleTermChange = this.handleTermChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this); 
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	handleTermChange(event) {
   		this.setState({term: event.target.value});
	}

	handleSearch() {
		this.props.onSearch(this.state.term);
	}

	handleKeyPress(e) {
		if(e.key === 'Enter'){
			this.props.onSearch(this.state.term);
	    }
	}

	render() {
		return (
			<div className="SearchBar InputAddOn">
	          <input className="InputAddOn-field" 
	                 placeholder="Enter A Song Title" 
	                 type="text" 
	                 onChange={this.handleTermChange} 
	                 onKeyPress={this.handleKeyPress} />
	          <a className="InputAddOn-item" onClick={this.handleSearch} >SEARCH</a>
	        </div>
		);
	}
}

export default SearchBar;