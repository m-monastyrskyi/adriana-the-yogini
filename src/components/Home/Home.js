import React, {useEffect} from 'react';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import AboutMe from "./AboutMe";
import Schedule from "./Schedule";
import Contact from "./Contact";
import Layout from "../Layout";
import Hero from "./Hero";
import Offer from "./Offer";

import img03 from "../../assets/img_03.jpg"
import img03Mobile from "../../assets/img_03_mobile.jpg"
import img03HQ from "../../assets/img_03_hq.jpg"
import img04 from "../../assets/img_04.jpg"
import img04Mobile from "../../assets/img_04_mobile.jpg"
import img04HQ from "../../assets/img_04_hq.jpg"
import img05 from "../../assets/new_1.jpg"
import {Parallax} from "react-parallax";

const Home = ({data}) => {
    const img1Top = window.innerWidth < 700 ? `32px` : window.innerWidth < 1900 ? `-10px` : "-50px";
    const img1Height = window.innerWidth < 700 ? `320px` : window.innerWidth < 1900 ? `600px` : "1600px";
    const img1Strength = window.innerWidth < 700 ? 100 : window.innerWidth < 1900 ? 100 : 300;

    const img2Top = window.innerWidth < 700 ? `10px` : window.innerWidth < 1900 ? `-32px` : "20px";
    const img2Height = window.innerWidth < 700 ? `320px` : window.innerWidth < 1900 ? `700px` : "1200px";
    const img2Left = window.innerWidth < 700 ? `100px` : window.innerWidth < 1900 ? `50%` : "50%";
    const img2Strength = window.innerWidth < 700 ? 100 : window.innerWidth < 1900 ? 100 : 500;

    const img3Top = window.innerWidth < 700 ? `10px` : window.innerWidth < 1900 ? `-32px` : "70px";
    const img3Height = window.innerWidth < 700 ? `320px` : window.innerWidth < 1900 ? `700px` : "1200px";
    const img3Left = window.innerWidth < 770 ? `65%` : window.innerWidth < 1900 ? `50%` : "50%";
    const img3Strength = window.innerWidth < 700 ? 100 : window.innerWidth < 1900 ? 100 : 200;


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const sections = document.querySelectorAll('.anim');
        const offersItems = document.querySelectorAll('.offers-item');

        sections.forEach(section => {
            gsap.fromTo(section.children, {y: '+=100', opacity: 0}, {
                y: 0, opacity: 1, stagger: 0.5, duration: 1, ease: 'easeInOut', scrollTrigger: {
                    trigger: section,
                    start: 'top 30%',
                }
            });
        });

        offersItems.forEach(offer => {
            gsap.fromTo(offer.children, {y: '+=100', opacity: 0}, {
                y: 0, opacity: 1, stagger: 0, duration: 1, ease: 'easeInOut', scrollTrigger: {
                    trigger: offer,
                    start: 'top 70%',
                }
            });
        });
    }, [])

    return (
        <Layout navItems={data.nav}>
            <Hero heroItems={data.hero}/>
            <AboutMe info={data.aboutMe}/>
            <Parallax bgImage={window.innerWidth < 700 ? img03Mobile : window.innerWidth < 1700 ? img03 : img03HQ}
                      strength={img1Strength} bgImageStyle={{top: img1Top}}>
                <div style={{height: img1Height, maxHeight: "1000px"}}>

                </div>
            </Parallax>
            <Offer offersList={data.offersList}/>
            <Parallax bgImage={window.innerWidth < 700 ? img04Mobile : window.innerWidth < 1700 ? img04 : img04HQ}
                      strength={img2Strength}
                      bgImageStyle={{top: img2Top, left: img2Left}}
            >
                <div style={{height: img2Height}}>

                </div>
            </Parallax>
            <Schedule schedule={data.schedule}/>
            <Parallax bgImage={window.innerWidth < 700 ? img05 : window.innerWidth < 1700 ? img05 : img05}
                      strength={img3Strength}
                      bgImageStyle={{top: img3Top, left: img3Left}}
            >
                <div style={{height: img3Height}}>

                </div>
            </Parallax>
            <Contact contact={data.contact}/>
        </Layout>
    );
};

export default Home;