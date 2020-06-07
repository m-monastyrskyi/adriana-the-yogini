import React, {useEffect, useState} from 'react';
import {Link as ScrollLink} from 'react-scroll';
import classNames from 'classnames';

const Navigation = () => {
    const [bgClass, setBgClass] = useState(false);
    const handleScroll = () => {
        window.pageYOffset > 150 ? setBgClass(true) : setBgClass(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }

    }, [])
    return (
        <>
            <div className="nav-wrapper">
                <nav className={classNames("navigation", bgClass && "nav-bg")}>
                    <div className="container">
                        <ul className="navigation-list">
                            <li className="navigation-item">
                                <ScrollLink to={"hero"} spy={true} smooth={true} duration={500}>
                                    Home
                                </ScrollLink>
                            </li>
                            <li className="navigation-item">
                                <ScrollLink to={"about"} spy={true} smooth={true} duration={500}>
                                    O mnie
                                </ScrollLink>
                            </li>
                            <li className="navigation-item">
                                <ScrollLink to={"offer"} spy={true} smooth={true} duration={500}>
                                    Oferta
                                </ScrollLink>
                            </li>
                            <li className="navigation-item">
                                <ScrollLink to={"schedule"} spy={true} smooth={true} duration={500}>
                                    Grafik
                                </ScrollLink>
                            </li>
                            <li className="navigation-item">
                                <ScrollLink to={"price-list"} spy={true} smooth={true} duration={500}>
                                    Cennik
                                </ScrollLink>
                            </li>
                            <li className="navigation-item">
                                <ScrollLink to={"contact"} spy={true} smooth={true} duration={500}>
                                    Kontakt
                                </ScrollLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navigation;