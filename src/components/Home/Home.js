import React, {useEffect} from 'react';
import AboutMe from "./AboutMe";
import Schedule from "./Schedule";
import Contact from "./Contact";
import Layout from "../Layout";
import Hero from "./Hero";
import Offer from "./Offer";

import img03 from "../../assets/img_03.jpg"
import img04 from "../../assets/img_04.jpg"
import {Parallax} from "react-parallax";

const Home = ({data}) => {
    return (
        <Layout navItems={data.nav}>
            <Hero heroItems={data.hero}/>
            <AboutMe info={data.aboutMe}/>

            <section>
                <Parallax bgImage={img03} strength={Math.round(window.innerWidth / 4)} bgImageStyle={{top: window.innerWidth > 700 ? `-6vw` : `8vw`}}>
                    <div style={{ height: "50vh" }}>

                    </div>
                </Parallax>

            </section>

            <Offer offersList={data.offersList}/>

            <section>
                <Parallax bgImage={img04} strength={Math.round(window.innerWidth / 4)} bgImageStyle={{top: window.innerWidth > 700 ? `-6vw` : `1vw`}}>
                    <div style={{ height: "50vh" }}>

                    </div>
                </Parallax>

            </section>

            <Schedule schedule={data.schedule}/>
            <Contact contact={data.contact}/>
        </Layout>
    );
};

export default Home;