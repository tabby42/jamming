import React, { Component } from 'react';

class SaveError extends Component {
	render() {
		let warning = [];
		if (!this.props.playlistNameSet) {
			warning.push(<p className="warning" key="w1">Please give your Playlist a name!</p>) ;
		}
		if (this.props.playlistEmpty) {
			warning.push(<p className="warning" key="w2">Looks like your playlist is empty!</p>);
		}
		//console.log(this.props.playlistNameSet);
		return warning;
	}
}

export default SaveError;