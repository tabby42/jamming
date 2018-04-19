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
  }

  checkTrackExists(track) {
    //check if track is already in playlistTracks
    return this.state.playlistTracks.some( item => {
      return item.id === track.id;
    });
  }

  addTrack(track) {
    //check if track is already in playlistTracks, if not -> add track to list and set new state
    if (!this.checkTrackExists(track) ) {
      let newStateplaylistTracks = this.state.playlistTracks.slice();
      newStateplaylistTracks.push(track);
      this.setState({ playlistTracks: newStateplaylistTracks });
    }
  }  

  removeTrack(track) {
    
  }


  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults tracks={this.state.searchResults} onAdd={this.addTrack}  />
            <PlayList playlistName={this.state.playlistName} tracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
