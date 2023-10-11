import React from "react";
import "../Abilitys/index.scss";

import IconJS from "../../Images/js.png";
import IconReact from "../../Images/reactIcon.png";
import IconHtml from "../../Images/html.png";
import IconCss from "../../Images/css-3.png";
import Sass from "../../Images/sass.png";
import WordPress from "../../Images/wordpress.png";
import FullStar from "../../Images/starPlus.png";
import EmptyStar from "../../Images/star.png";

const Abilitys = () => {
    return (
        <div className="abWrap">
            <div className="abWrap--icons">
                <div className="abilityTitles">
                    <h2>My current abilities</h2>
                    <h3>The trinity of the web developer</h3>
                </div>
                <div className="abWrap--icons__first">
                    <div className="iconsWrap">
                        <img src={IconHtml} className="abilityIcon" alt="" />
                        <h3>Html</h3>
                        <div className="wrapStars">
                            <img src={FullStar} alt="" className="stars" />
                            <img src={FullStar} alt="" className="stars" />
                            <img src={FullStar} alt="" className="stars" />
                        </div>
                    </div>
                    <div className="iconsWrap">
                        <img src={IconCss}
                            className="abilityIcon" alt="" />
                        <h3>Css</h3>
                        <div className="wrapStars">
                            <img src={FullStar} alt="" className="stars" />
                            <img src={FullStar} alt="" className="stars" />
                            <img src={FullStar} alt="" className="stars" />
                        </div>
                    </div>
                    <div className="iconsWrap">
                        <img src={IconJS} className="abilityIcon" alt="" />
                        <h3>JavaScript</h3>
                        <div className="wrapStars">
                            <img src={FullStar} alt="" className="stars" />
                            <img src={FullStar} alt="" className="stars" />
                            <img src={EmptyStar} alt="" className="stars" />
                        </div>
                    </div>
                </div>

                <div className="abWrap--icons__second">
                    <div className="iconsWrap">
                        <img src={WordPress} className="abilityIcon" alt="" />
                        <h3>WordPress</h3>
                        <div className="wrapStars">
                            <img src={FullStar} alt="" className="stars" />
                            <img src={FullStar} alt="" className="stars" />
                            <img src={FullStar} alt="" className="stars" />
                        </div>
                    </div>
                    <div className="iconsWrap">
                        <img src={IconReact} className="abilityIcon" alt="" />
                        <h3>React</h3>
                        <div className="wrapStars">
                            <img src={FullStar} alt="" className="stars" />
                            <img src={FullStar} alt="" className="stars" />
                            <img src={EmptyStar} alt="" className="stars" />
                        </div>
                    </div>
                    <div className="iconsWrap">
                        <img src={Sass} className="abilityIcon" alt="" />
                        <h3>Sass</h3>
                        <div className="wrapStars">
                            <img src={FullStar} alt="" className="stars" />
                            <img src={FullStar} alt="" className="stars" />
                            <img src={EmptyStar} alt="" className="stars" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Abilitys;
