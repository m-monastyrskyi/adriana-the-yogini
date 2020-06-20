import React from 'react';
import AboutMe from "./AboutMe";
import Schedule from "./Schedule";
import PriceList from "./PriceList";
import Contact from "./Contact";
import Layout from "../Layout";
import Hero from "./Hero";
import Offer from "./Offer";

const Home = () => {
    return (
        <>
            <Layout>
                <Hero />
                <AboutMe/>
                <Offer />
                <Schedule/>
                {/*<PriceList/>*/}
                <Contact/>
            </Layout>
        </>
    );
};

export default Home;