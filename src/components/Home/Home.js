import React from 'react';
import AboutMe from "./AboutMe";
import Schedule from "./Schedule";
import Contact from "./Contact";
import Layout from "../Layout";
import Hero from "./Hero";
import Offer from "./Offer";

const Home = ({data}) => {
    return (
        <Layout navItems={data.nav}>
            <Hero heroItems={data.hero} />
            <AboutMe info={data.aboutMe}/>
            <Offer offersList={data.offersList}/>
            <Schedule schedule={data.schedule} />
            <Contact contact={data.contact}/>
        </Layout>
    );
};

export default Home;