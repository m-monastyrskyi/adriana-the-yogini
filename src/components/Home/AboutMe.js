import React from 'react';
import aboutMeImg from '../../assets/aboutMe.jpg';
import ButtonScrollTo from "../ButtonScrollTo";
import parseHTML from 'react-html-parser';

const AboutMe = ({info}) => {

    return (
        <>
            <section className="about anim">
                <div className="container">
                    <div className="about-content">
                        <div className="about-content__photo">
                            <img src={aboutMeImg} alt="black and white portrait"/>
                        </div>
                        <div className="about-content__info">
                            <h3 className="about-content__title">{info.title}</h3>
                            <div className="about-content__text">
                                {parseHTML(info.info)}
                            </div>
                            <div className="cta__buttons">
                                <ButtonScrollTo selector={"schedule"} text={info.btnCheckSchedule}/>
                                <ButtonScrollTo selector={"contact"} text={info.btnContactMe}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutMe;