import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Player/index.scss";
import SpotifyPlayer from "react-spotify-web-playback"
import "../../views/Home/Home"
//  ?[trackUri] : []

// const [accessToken, setAccessToken] = useState('');
// const [playlistData, setPlaylistData] = useState({});
// const [trackUri, setTrackUri] = useState('');
// const [currentlyPlayingImage, setCurrentlyPlayingImage] = useState('');
// const [currentlyPlayingPlayingMusicName, setCurrentlyPlayingMusicName] = useState('');
// const [currentlyPlayingArtistName, setCurrentlyPlayingArtistName] = useState('');
// const [isPlaying, setIsPlaying] = useState(false);
// const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

// useEffect(() => {
//   // Retrieve the code from local storage
//   const code = localStorage.getItem('code');

//   // If the code exists, set the access token
//   if (code) {
//     setAccessToken(code);
//   }

//   var authParameters = {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/x-www-form-urlencoded',
//     },
//     body:
//       'grant_type=client_credentials&client_id=' +
//       CLIENT_ID +
//       '&client_secret=' +
//       CLIENT_SECRET,
//   };

//   fetch('https://accounts.spotify.com/api/token', authParameters)
//     .then((result) => result.json())
//     .then((data) => setAccessToken(data.access_token))
//     .catch((error) => console.log(error));
// }, []);

// function fetchPlaylist() {
//   const playlistParameter = {
//     method: 'GET',
//     headers: {
//       'Content-type': 'application/json',
//       Authorization: 'Bearer ' + accessToken,
//     },
//   };

//   const playlistID = '5VhUPmOwSNuj1ZShpIdKbK';
//   // 
//   fetch('https://api.spotify.com/v1/playlists/' + playlistID, playlistParameter)
//     .then((response) => response.json())
//     .then((data) => {
//       const firstTrackUri = data.tracks.items[0].track.uri;

//       // Set the trackUri state
//       setTrackUri(firstTrackUri);
//       setPlaylistData(data);

//       // Set the currently playing track's image/Music Name and ArtistsName
//       setCurrentlyPlayingImage(data.tracks.items[0].track.album.images[0].url);
//       // setCurrentlyPlayingMusicName(data.tracks.items[0].track.name);
//       // setCurrentlyPlayingArtistName(data.tracks.items[0].track.artists[0].name);
//     })
//     .catch((error) => console.error(error));
// }

// const handlePlay = (index) => {
//   if (playlistData.tracks && playlistData.tracks.items[index]) {
//     const clickedTrackUri = playlistData.tracks.items[index].track.uri;
//     setTrackUri(clickedTrackUri);

//     // Set the currently playing track's image
//     setCurrentlyPlayingImage(playlistData.tracks.items[index].track.album.images[0].url);
//     const currentlyPlayingTrack = playlistData.tracks.items[index].track;
//     setCurrentlyPlayingImage(currentlyPlayingTrack.album.images[0].url);
//     setCurrentlyPlayingMusicName(currentlyPlayingTrack.name);
//     setCurrentlyPlayingArtistName(currentlyPlayingTrack.artists[0].name);
//     setIsPlaying(true); // Auto-play when changing track
//     setCurrentTrackIndex(index);
//   }
// };
// //Handles the inputs
// const play = () => {
//   if (trackUri) {
//     setIsPlaying(true);
//   }
// };

// const pause = () => {
//   setIsPlaying(false);
// };

// const nextTrack = () => {
//   const nextIndex = currentTrackIndex + 1;
//   if (nextIndex < playlistData.tracks.items.length) {
//     handlePlay(nextIndex);
//   }
// };

// const previousTrack = () => {
//   const prevIndex = currentTrackIndex - 1;
//   if (prevIndex >= 0) {
//     handlePlay(prevIndex);
//   }
// };

// useEffect(() => {
//   // Call fetchPlaylist when accessToken is available
//   if (accessToken) {
//     fetchPlaylist();
//   }
// }, [accessToken]);
const Player = ({ trackUri }) => {
  const code = localStorage.getItem('code');
  return (
    <SpotifyPlayer
      className="custom-spotify-player"
      token={code}
      uris={trackUri}
    />
  );
};

export default Player;
