import React from 'react';
import {scroller} from "react-scroll";

const Hero = ({heroItems}) => {

    return (
        <>
        <section className="hero anim">

            <div className="hero-bg"/>
            <div className="hero-content">
                <div className="hero-content__title">
                    <h1>
                        {heroItems.title}
                    </h1>
                </div>
                <div className="hero-content__subtitle">
                    <h2>
                        {heroItems.subtitle}
                    </h2>
                </div>


            </div>
        </section>
            <div className="scroll-down-arrow" onClick={() => scroller.scrollTo('about', {
                duration: 1000,
                delay: 0,
                smooth: 'easeInOutQuart'
            })}/>
        </>
    );
};

export default Hero;