import React, { useState, useEffect } from 'react';

import "./index.scss";
import DiceGame from "../../Images/DiceGame.png";
import GuessIt from "../../Images/GuessIt.png"
import Pokedex from "../../Images/Pokedex.png"
import Spotify from "../../Images/SpotifyPreview.png"
import toDoList from "../../Images/TodoList.png"
import QueroVender from "../../Images/querovender.png"



const Projects = () => {

    const goToQueroVender = () => {
        // Replace 'portfolio-page-url-quero-vender' with the actual URL of the QueroVender portfolio page
        window.location.href = 'https://querovenderminhaempresa.com/';
    };

    const goToSpotify = () => {
        // Replace 'portfolio-page-url-spotify' with the actual URL of the Spotify portfolio page
        window.location.href = 'https://thiago-marvin-soares-github-io-r5q1.vercel.app';
    };
    const goToDiceGame = () => {
        // Replace 'portfolio-page-url-spotify' with the actual URL of the Spotify portfolio page
        window.location.href = 'https://thiagomarvinsoares.github.io/DiceGame';
    };
    const goToGuessIt = () => {
        // Replace 'portfolio-page-url-spotify' with the actual URL of the Spotify portfolio page
        window.location.href = 'https://thiagomarvinsoares.github.io/GuessIt';
    };
    const goToPokedex = () => {
        // Replace 'portfolio-page-url-spotify' with the actual URL of the Spotify portfolio page
        window.location.href = 'https://thiagomarvinsoares.github.io/Pokedex';
    };
    const goTotoDoList = () => {
        // Replace 'portfolio-page-url-spotify' with the actual URL of the Spotify portfolio page
        window.location.href = 'https://thiago-marvin-soares-github-io.vercel.app';
    };
    return (
        <div className="projects">
            <h2>My Projects</h2>
            <div className="projects--wrap">
                <div className='grid-container'>
                    <div className="imageWrap">
                        <img src={QueroVender} alt="Lazy-loaded image" onClick={goToQueroVender} />
                    </div>
                    <div className="imageWrap">
                        <img src={Spotify} alt="" onClick={goToSpotify} />
                    </div>
                </div>
                <div className='grid-container'>
                    <div className="imageWrap">
                        <img src={DiceGame} alt="" onClick={goToDiceGame} />
                    </div>
                    <div className="imageWrap black">
                        <img src={GuessIt} alt="" onClick={goToGuessIt} />
                    </div>
                </div>
                <div className='grid-container'>
                    <div className="imageWrap">
                        <img src={Pokedex} alt="" onClick={goToPokedex} />
                    </div>
                    <div className="imageWrap">
                        <img src={toDoList} alt="" onClick={goTotoDoList} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
