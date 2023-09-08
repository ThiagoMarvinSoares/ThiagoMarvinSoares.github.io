import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { useState, useHistory, useEffect } from "react";

const Login = () => {
  const CLIENT_ID = '25a63e4d84c74ebbae326c3eeb57534c';
  const REDIRECT_URI = 'http://localhost:5173';
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
  const RESPONSE_TYPE = 'token';
  const SCOPES = 'streaming user-read-email user-read-private user-library-read user-library-modify user-read-playback-state user-modify-playback-state';

  const authUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}`;

  useEffect(() => {
    // Check if window.location.hash is not empty
    if (window.location.hash) {
      const code = window.location.hash.split('=')[1].split('&')[0];
      localStorage.setItem("code", code);
    }
  }, []);

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="position-relative">
        <div className="card bg-light p-4 border-0 rounded-3 shadow">
          <div className="card-body text-center">
            <p>First Login then click HOME</p>
            {/* <div className="custom-audio-player">
        <p>Please choose a demo</p>
        <div className="music-image-player">
          <img className="album-image-gif" src={loadingGif} alt="" />
        </div>
      </div> */}
            <a href={authUrl} className="btn btn-success">Login with Spotify</a>
          </div>
          <a className="d-flex justify-content-center" href="/home">Home</a>
        </div>
      </div>
    </div>
  );
};



export default Login;
