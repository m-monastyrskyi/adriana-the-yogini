import React from 'react';
import {scroller} from "react-scroll";

const Hero = () => {
    return (
        <section className="hero">

            <div className="hero-bg"/>
            <div className="hero-content">
                <div className="hero-content__title">
                    <h1>
                        ADRIANA THE YOGINI
                    </h1>
                </div>
                <div className="hero-content__subtitle">
                    <h2>
                        Hatha Yoga & Relaxation Classes
                    </h2>
                </div>
                <div className="scroll-down-arrow" onClick={() => scroller.scrollTo('about', {
                    duration: 1000,
                    delay: 0,
                    smooth: 'easeInOutQuart'
                })}/>
            </div>
        </section>
    );
};

export default Hero;