import React from "react";
import Header from "../../assets/components/Header/Header";
import "./index.scss";
import Me from "../../assets/Images/eu.jpg";
import { Link } from "react-router-dom";

const About = () => {
    const Linkedin = () => {
        // Replace 'portfolio-page-url-quero-vender' with the actual URL of the QueroVender portfolio page
        window.location.href = 'https://www.linkedin.com/in/thiago-marvin-069186187/';
    };

    const GitHub = () => {
        // Replace 'portfolio-page-url-quero-vender' with the actual URL of the QueroVender portfolio page
        window.location.href = 'https://github.com/ThiagoMarvinSoares/ThiagoMarvinSoares.github.io';
    };

    return (
        <div className="about">
            <Header />
            <div className="about__wrap">
                <div className="about__wrap--elements">
                    <img src={Me} alt="Me" className="me" />
                    <div>
                        <h2>Thiago Marvin</h2>
                        <p>
                            I'm a passionate programmer who found my true calling in the world
                            of coding. After starting my journey in 2022, I haven't looked
                            back. Falling in love with front-end development, I've dedicated
                            myself to honing my skills in HTML, CSS, and JavaScript. What sets
                            me apart is my deep appreciation for people and their needs. I
                            have an innate ability to read through their requirements and
                            preferences, allowing me to craft user-centric and visually
                            appealing solutions. My journey began with a background in
                            engineering, which I left behind to pursue my true
                            passion—programming. Now, I'm on a mission to create seamless and
                            meaningful digital experiences while collaborating closely with
                            others to bring ideas to life.
                        </p>
                        <div className="infoWrap buttons">
                            <div className="infoWrap--first slide">
                                <a href="https://www.linkedin.com/in/thiago-marvin-069186187/" target="_blank" className="linkBtns">Linkedin</a>
                            </div>
                            <div className="infoWrap--second slide">
                                <a href="https://github.com/ThiagoMarvinSoares/ThiagoMarvinSoares.github.io" target="_blank" className="linkBtns">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default About;
