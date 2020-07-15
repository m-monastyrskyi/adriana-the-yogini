import React from 'react';
import SocialIcons from "./SocialIcons";
import EmailLink from "../EmailLink";



const Footer = () => {
    return (
        <footer className="footer">
            <SocialIcons/>
            <p className="footer__copyright-text">Copyright © 2020<br/>Adriana The Yogini</p>
            <div>
                {
                    <EmailLink />
                }
            </div>
        </footer>
    );
};

export default Footer;