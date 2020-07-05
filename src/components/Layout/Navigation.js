import React, {useEffect, useState} from 'react';
import {Link as ScrollLink} from 'react-scroll';
import classNames from 'classnames';

const Navigation = ({navItems}) => {
    const [bgClass, setBgClass] = useState(false);
    const [isHamburgerActive, setIsHamburgerActive] = useState(false);


    const handleScroll = () => {
        window.pageYOffset > 150 ? setBgClass(true) : setBgClass(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }

    }, [])

    const handleHamburgerClick = () => {
        setIsHamburgerActive(prev => !prev);
    }


    return (
        <>
            <div className="nav-wrapper">
                <nav className={classNames("navigation", bgClass && "nav-bg")}>
                    <div className="container">

                        <button className={classNames("hamburger", isHamburgerActive && "hamburger-active")}
                                onClick={handleHamburgerClick}>
                            <div className="bar1"/>
                            <div className="bar2"/>
                            <div className="bar3"/>
                        </button>

                        <ul className={classNames("navigation__list", isHamburgerActive && "mobile__active")}>
                            <li className="navigation__item">
                                <ScrollLink to={"hero"} spy={true} smooth={true} duration={500} onClick={()=> setIsHamburgerActive(false)}>
                                    {navItems.home}
                                </ScrollLink>
                            </li>
                            <li className="navigation__item">
                                <ScrollLink to={"about"} spy={true} smooth={true} duration={500} onClick={()=> setIsHamburgerActive(false)}>
                                    {navItems.about}
                                </ScrollLink>
                            </li>
                            <li className="navigation__item">
                                <ScrollLink to={"offers"} spy={true} smooth={true} duration={500} onClick={()=> setIsHamburgerActive(false)}>
                                    {navItems.offer}
                                </ScrollLink>
                            </li>
                            <li className="navigation__item">
                                <ScrollLink to={"schedule"} spy={true} smooth={true} duration={500} onClick={()=> setIsHamburgerActive(false)}>
                                    {navItems.schedule}
                                </ScrollLink>
                            </li>
                            <li className="navigation__item">
                                <ScrollLink to={"contact"} spy={true} smooth={true} duration={500} onClick={()=> setIsHamburgerActive(false)}>
                                    {navItems.contact}
                                </ScrollLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
        ;
};

export default Navigation;