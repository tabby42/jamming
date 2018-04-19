import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../PlayList/PlayList';

const trackResults = [
  {
    id: 1,
    name: 'Song1',
    artist: 'Artist1',
    album: 'Album1'
  },
  {
    id: 2,
    name: 'Song2',
    artist: 'Artist2',
    album: 'Album2'
  },
  {
    id: 3,
    name: 'Song3',
    artist: 'Artist3',
    album: 'Album3'
  }
];

class App extends Component {
  constructor (props) {
    super(props);
    this.state = { 
      searchResults: trackResults,
      playlistName: 'Enter Playlist name',
      playlistTracks: [
        {
          id: 3,
          name: 'Song3',
          artist: 'Artist3',
          album: 'Album3'
        }
      ]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  checkTrackExists(track) {
    //check if track is already in playlistTracks
    return this.state.playlistTracks.some( item => item.id === track.id );
  }

  addTrack(track) {
    //check if track is already in playlistTracks, if not -> add track to list and set new state
    if (!this.checkTrackExists(track) ) {
      let newStateplaylistTracks = this.state.playlistTracks.slice();
      newStateplaylistTracks.push(track);
      this.setState({ 
        playlistTracks: newStateplaylistTracks 
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
    console.log(this.state.playlistName);
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults tracks={this.state.searchResults} onAdd={this.addTrack}  />
            <PlayList playlistName={this.state.playlistName} 
                      tracks={this.state.playlistTracks} 
                      onRemove={this.removeTrack} 
                      onUpdatePlaylistName={this.updatePlaylistName}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
