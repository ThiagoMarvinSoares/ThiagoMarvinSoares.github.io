import React, { useState, useEffect, useRef } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Card from 'react-bootstrap/Card';
import '../Home/index.scss';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import leftArrow from "../../assets/images/previous.svg"
import rightArrow from "../../assets/images/next.svg"
import playButton from "../../assets/images/play.svg"
import pauseButton from "../../assets/images/pause.png"
import jumpButton from "../../assets/images/jump.svg"
import previousPlusButton from "../../assets/images/previousPlus.svg"
import timesPlayed from "../../assets/images/timesPlayed.svg"

const CLIENT_ID = '25a63e4d84c74ebbae326c3eeb57534c';
const CLIENT_SECRET = 'c5cfb375834948daa4f6a9dea70c664f';

const Home = () => {
  const [accessToken, setAccessToken] = useState('');
  const [playlistData, setPlaylistData] = useState({});
  const [trackUri, setTrackUri] = useState('');
  const [currentlyPlayingImage, setCurrentlyPlayingImage] = useState('');
  const [currentlyPlayingMusicName, setCurrentlyPlayingMusicName] = useState('');
  const [currentlyPlayingArtistName, setCurrentlyPlayingArtistName] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [trackDetails, setTrackDetails] = useState({});
  const [totalDuration, setTotalDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef();
  const progressBarRef = useRef(null);

  useEffect(() => {
    const code = localStorage.getItem('code');
    if (code) {
      setAccessToken(code);
    }

    var authParameters = {
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
      },
      body:
        'grant_type=client_credentials&client_id=' +
        CLIENT_ID +
        '&client_secret=' +
        CLIENT_SECRET,
    };

    fetch('https://accounts.spotify.com/api/token', authParameters)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token))
      .catch((error) => console.log(error));
  }, []);

  function fetchPlaylist() {
    const playlistParameter = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + accessToken,
      },
    };

    const playlistID = '5VhUPmOwSNuj1ZShpIdKbK';

    fetch('https://api.spotify.com/v1/playlists/' + playlistID, playlistParameter)
      .then((response) => response.json())
      .then((data) => {
        const firstTrackUri = data.tracks.items[0].track.uri;
        setTrackUri(firstTrackUri);
        setPlaylistData(data);

        fetch('https://api.spotify.com/v1/tracks/' + firstTrackUri.split(':')[2], playlistParameter)
          .then((response) => response.json())
          .then((trackData) => {
            setTrackDetails({
              name: trackData.name,
              artist: trackData.artists[0].name,
              demoUrl: trackData.preview_url,
            });
            setCurrentlyPlayingImage(trackData.album.images[0].url);
            setTotalDuration(29);

          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    if (accessToken) {
      fetchPlaylist();
    }
  }, [accessToken]);

  useEffect(() => {
    handlePlay(0);
  }, []);

  const handlePlay = (index) => {
    if (playlistData.tracks && playlistData.tracks.items[index]) {
      const clickedTrack = playlistData.tracks.items[index].track;
      const clickedTrackDetails = {
        name: clickedTrack.name,
        artist: clickedTrack.artists[0].name,
        demoUrl: clickedTrack.preview_url,
      };

      setTrackUri(clickedTrack.uri);
      setCurrentlyPlayingImage(clickedTrack.album.images[0].url);
      setCurrentlyPlayingMusicName(clickedTrack.name);
      setCurrentlyPlayingArtistName(clickedTrack.artists[0].name);
      setIsPlaying(true);
      setCurrentTrackIndex(index);
      setTrackDetails(clickedTrackDetails);
    }
  };
  const togglePlayPause = () => {
    if (audioRef.current && audioRef.current.audioEl.current) {
      const audioElement = audioRef.current.audioEl.current;

      if (audioElement.paused) {
        audioElement.play();
      } else {
        audioElement.pause();
      }
    }
    setIsPlaying(!isPlaying);
  };

  const updateProgressBar = () => {
    if (audioRef.current && audioRef.current.audioEl.current) {
      const audioElement = audioRef.current.audioEl.current;
      setCurrentTime(audioElement.currentTime);
    }
  };

  const nextTrack = () => {
    const nextIndex = currentTrackIndex + 1;
    if (nextIndex < playlistData.tracks.items.length) {
      handlePlay(nextIndex);
    }
  };

  const previousTrack = () => {
    const prevIndex = currentTrackIndex - 1;
    if (prevIndex >= 0) {
      handlePlay(prevIndex);
    }
  };

  // Add an event listener to update the progress bar continuously
  useEffect(() => {
    if (audioRef.current && audioRef.current.audioEl.current) {
      const audioElement = audioRef.current.audioEl.current;
      audioElement.addEventListener('timeupdate', updateProgressBar);
      return () => audioElement.removeEventListener('timeupdate', updateProgressBar);
    }
  }, []);

  return (
    <div className='centered-container'>
      <div className="container">
        <div className="container--elements">
          <div className='titleContainer'>
            <h2 className="custom-title mb-4">{playlistData.name}</h2>
          </div>
          <div className="left-elements">
            <div className="list-group mt-3">
              {playlistData.tracks && playlistData.tracks.items.length > 0 && (
                <div>
                  {playlistData.tracks.items.map((item, index) => (
                    <Card
                      key={index}
                      className="d-flex flex-row align-items-center playlist-item"
                      style={{ width: '100%' }}
                    >
                      <Card.Img
                        src={item.track.album.images[0].url}
                        style={{ maxWidth: '100px' }}
                        className="music-image"
                      />
                      <Card.Body>
                        <Card.Title className="playlist-text">{item.track.name}</Card.Title>
                        <Card.Text className="playlist-text">{item.track.artists[0].name}</Card.Text>
                      </Card.Body>
                      <button className='timesPlayed' onClick={() => handlePlay(index)}><img src={timesPlayed}></img><p>Play</p></button>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="container--player">
          <div className="custom-audio-player">
            <div className="music-image-player">
              <img className="album-image" src={currentlyPlayingImage} alt="" />
            </div>
            <div className="album--info">
              <p className="album--info__music">{currentlyPlayingMusicName}</p>
              <p className="album--info__artist">{currentlyPlayingArtistName}</p>
            </div>
            <div>
              <ProgressBar
                progressBarRef={progressBarRef}
                audioRef={audioRef}
                currentTime={currentTime}
                duration={totalDuration}
              />
            </div>
            <div className="music-player-inputs">
              <button className='music-player-button' onClick={previousTrack}>
                <img style={{ width: '10px' }} src={previousPlusButton} alt="Left Arrow" />
              </button>
              <button className='music-player-button' onClick={previousTrack}>
                <img style={{ width: '15px' }} src={leftArrow} alt="Left Arrow" />
              </button>
              <button className='music-player-button' onClick={togglePlayPause}>
                {isPlaying ? (

                  <img style={{ width: '56px' }} src={playButton} alt="Play" />
                ) : (
                  <img style={{ width: '56px' }} src={pauseButton} alt="Pause" />
                )}
              </button>
              <button className='music-player-button' onClick={nextTrack}>
                <img style={{ width: '15px', }} src={rightArrow} alt="Right Arrow" />
              </button>
              <button className='music-player-button' onClick={nextTrack}>
                <img style={{ width: '10px', }} src={jumpButton} alt="Right Arrow" />
              </button>
            </div>
            <div>
              <ReactAudioPlayer
                src={trackDetails.demoUrl}
                autoPlay={false} // Disable autoplay here
                volume={0.4}
                ref={(element) => {
                  audioRef.current = element;
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
