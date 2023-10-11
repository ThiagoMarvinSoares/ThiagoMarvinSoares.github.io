import React from "react";
import Header from "../../assets/components/Header/Header";
import "./index.scss";
import { useNavigate } from 'react-router-dom';
import Abilitys from "../../assets/components/Abilitys/Abilitys";
import Projects from "../../assets/components/Projects/Projects";


const Home = () => {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        // Use the navigate function to go to the "About" page
        navigate('/About'); // Replace with the correct URL for your "About" page
    };

    return (
        <div className="container">
            <div className="container__background">
                <div className="container__header">
                    <Header />
                </div>
                <div className="container__background--wrap">
                    <div className="container__background--op">
                        <div className="container__main">
                            <p>My name is Thiago Marvin and I'm Front-End</p>
                        </div>

                        <div className="button-position"><button className="container__main--button" onClick={handleButtonClick}>About me</button></div>
                    </div>
                </div>
            </div>


            <div className="container__projects">
                <Projects />
            </div>

            <div className="container__abilitys">
                <Abilitys />
            </div>
        </div>
    );
};

export default Home;
