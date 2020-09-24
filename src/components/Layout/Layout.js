import React from 'react';
import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = (props) => {
    return (
        <>
            <Navigation navItems={props.navItems} language={props.language} changeLanguage={props.changeLanguage} />
            {
                props.children
            }
            <Footer />
        </>
    );
};

export default Layout;