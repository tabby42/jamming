const clientId = '2d0ef981a5a243d99d107d71bab58ec6';
const redirectUri = 'http://localhost:3000/';
const scopes = 'user-read-private playlist-read-private playlist-modify-private playlist-modify-public';
const authEndpoint = 'https://accounts.spotify.com/authorize';
const searchEndpoint = 'https://api.spotify.com/v1/search';
let accessToken = '';

class Spotify {
	//The Implicit Grant flow is carried out client-side and does not involve secret keys. 
	//The access tokens that are issued are short-lived and there are no refresh tokens 
	//to extend them when they expire.
	getAccessToken() {
		if(accessToken) {
			return accessToken;
		} else {
			//if token already saved in local storage
			if (localStorage.getItem('spotify_token') !== null) {
				//save to variable
				accessToken = localStorage.getItem('spotify_token');
				//clear hash from address bar
				window.history.replaceState(null, null, '/');
				//clear tokan variable and localStorage after 1h
				window.setTimeout(() => {
					accessToken = '';
					localStorage.clear();
				}, 3600 * 1000);
	      		//console.log(accessToken);
				return accessToken;
			} else {
				window.location = `${authEndpoint}?client_id=${clientId}&response_type=token&scope=${scopes}&redirect_uri=${redirectUri}`;
				let queryParams = window.location.href;
				let token = queryParams.match(/access_token=([^&]*)/);
				localStorage.setItem("spotify_token", token[1]);
				accessToken = localStorage.getItem('spotify_token');
	      		//console.log(accessToken);
				return accessToken;
			}
		}
	}

	searchSpotify(term) {
		accessToken = this.getAccessToken();
		return fetch( `${searchEndpoint}?type=track&q=${term}`, {
				headers: {
			       'Authorization': `Bearer ${accessToken}`
			   }  
		}).then( response => {
			if(response.ok) {
				//console.log(response.json());
				let rsp = response.json();
				console.log(rsp);
		        return rsp;
		    } else {
		    	throw new Error('Request failed!');
		    }
		}).then( jsonResponse => {
			if (jsonResponse.hasOwnProperty('tracks')) {
				const tracksArray = jsonResponse.tracks.items.map( track => {
					return {
						id: track.id,
						name: track.name,
						artist: track.artists[0].name,
						album: track.album.name,
						image: track.album.images[1].url,
						uri: track.uri
					};
				});
				console.log(tracksArray);
				return tracksArray;
			}
		});
	}
}

export default Spotify;


//  getAccessToken() {
 //    if (accessToken) {
 //      return accessToken;
 //    }

 //    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
 //    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
 //    if (accessTokenMatch && expiresInMatch) {
	//       accessToken = accessTokenMatch[1];
	//       const expiresIn = Number(expiresInMatch[1]);
	//       window.setTimeout(() => accessToken = '', expiresIn * 1000);
	//       window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
	//       console.log(accessToken);
	//       return accessToken;
	//     } else {
	//       var state = '123';

	//         var scope = 'user-read-private user-read-email';

	//         var url = 'https://accounts.spotify.com/authorize';
	//         url += '?response_type=token';
	//         url += '&client_id=' + encodeURIComponent(clientId);
	//         url += '&scope=' + encodeURIComponent(scope);
	//         url += '&redirect_uri=' + encodeURIComponent(redirectUri);

	//         window.location = url;
	  
	        
	//         let query = window.location.href;
	//         console.log("hello the href is " + query);
	        
	//         console.log("hello the window is " + window.location);
	//     }
	// }

