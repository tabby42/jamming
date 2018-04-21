const clientId = '2d0ef981a5a243d99d107d71bab58ec6';
const redirectUri = 'http://localhost:3000/';
const scopes = 'user-read-private playlist-read-private playlist-modify-private playlist-modify-public';
const authEndpoint = 'https://accounts.spotify.com/authorize';
let accessToken = '';

class Spotify {
	//The Implicit Grant flow is carried out client-side and does not involve secret keys. 
	//The access tokens that are issued are short-lived and there are no refresh tokens 
	//to extend them when they expire.
	getAccessToken() {
		if(accessToken) {
			return accessToken;
		} else {
			if (localStorage.getItem('spotify_token') !== null) {
				accessToken = localStorage.getItem('spotify_token');
	      		console.log(accessToken);
				return accessToken;
			} else {
				window.location = `${authEndpoint}?client_id=${clientId}&response_type=token&scope=${scopes}&redirect_uri=${redirectUri}&show_dialog=true`;
				let queryParams = window.location.href;
				let token = queryParams.match(/access_token=([^&]*)/);
				localStorage.setItem("spotify_token", token[1]);
				accessToken = localStorage.getItem('spotify_token');
	      		console.log(accessToken);
				return accessToken;
			}
		}
	}

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
}

export default Spotify;

