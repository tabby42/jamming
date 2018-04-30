import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../PlayList/PlayList';
import Spotify from '../../Services/Spotify';

let spotify = new Spotify();

class App extends Component {
  constructor (props) {
    super(props);
    this.state = { 
      searchResults: [],
      playlistName: 'New Playlist',
      playlistTracks: []
    };
    //bind methods to the current value of this
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  checkTrackExists(track) {
    //check if track is already in playlistTracks
    return this.state.playlistTracks.some( item => item.id === track.id );
  }

  addTrack(track) {
    //check if track is already in playlistTracks, if not -> add track to list and set new state
    if (!this.checkTrackExists(track) ) {
      let newStateplaylistTracks = this.state.playlistTracks.slice();
      //remove selected track from search results
      let newStateSearchResults = this.state.searchResults.filter( item => item.id !== track.id );
      newStateplaylistTracks.push(track);
      this.setState({ 
        playlistTracks: newStateplaylistTracks,
        searchResults: newStateSearchResults
      });
    }
  }  

  removeTrack(track) {
    //filter playlistTracks and return only those which do not have the id of the track parameter
    let newStateplaylistTracks = this.state.playlistTracks.filter( item => item.id !== track.id );
    this.setState({ 
      playlistTracks: newStateplaylistTracks 
    });
  }

  updatePlaylistName(newName) {
    this.setState({
      playlistName: newName
    });
    //console.log(this.state.playlistName);
  }

  //generates an array of trackURIs from the playlistTracks property
  //and resets the state for playlistName and playlistTracks
  savePlaylist() {
    let trackURIs = this.state.playlistTracks.map( track => track.uri);
    //console.log(trackURIs);
    spotify.savePlaylistToSpotify(this.state.playlistName, trackURIs);
    this.setState({
       playlistTracks: [],
       playlistName: 'New Playlist'
    });
  }

  search(searchTerm) {
    //console.log(searchTerm);
    if (searchTerm) {
      spotify.searchSpotify(searchTerm)
     .then(
        tracks => {
          this.setState({ searchResults: tracks });
        }
      );
    }
  }

  render() {
    return (
      <div>
        <div className="Header-container">
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <SearchBar onSearch={this.search} />
        </div>
        <div className="App">
          <div className="App-playlist">
            <SearchResults tracks={this.state.searchResults} onAdd={this.addTrack}  />
            <PlayList playlistName={this.state.playlistName} 
                      tracks={this.state.playlistTracks} 
                      onRemove={this.removeTrack} 
                      onUpdatePlaylistName={this.updatePlaylistName}
                      onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
