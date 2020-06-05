import React from 'react';
import {Link as ScrollLink} from 'react-scroll';

const Navigation = () => {
    return (
        <>
            <div className="nav-wrapper">
                <nav className="navigation">
                    <div className="container">
                        <ul>
                            <li>
                                <ScrollLink to={"about"} spy={true} smooth={true} duration={500}>
                                    O mnie
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to={"schedule"} spy={true} smooth={true} duration={500}>
                                    Grafik
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to={"price-list"} spy={true} smooth={true} duration={500}>
                                    Cennik
                                </ScrollLink>
                            </li>
                            <li>
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