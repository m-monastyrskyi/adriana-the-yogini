import React from 'react';
import {scroller} from "react-scroll";

const ButtonScrollTo = ({selector, text}) => {

    const handleClick = () => {
        scroller.scrollTo(selector, {
            duration: 1000,
            delay: 0,
            smooth: 'easeInOutQuint'
        })
    }

    return <button className="cta__btn btn" onClick={handleClick}>{text}</button>
};

export default ButtonScrollTo;