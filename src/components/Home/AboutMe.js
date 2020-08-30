import React from 'react';
import aboutMeImg from '../../assets/aboutMe.jpg';
import ButtonScrollTo from "../ButtonScrollTo";
import parseHTML from 'react-html-parser';

const AboutMe = ({info}) => {

    return (
        <>
            <section className="about anim">
                <div className="container">
                    <div className="about-content">
                        <div className="about-content__photo">
                            <img src={aboutMeImg} alt="black and white portrait"/>
                        </div>
                        <div className="about-content__info">
                            <h3 className="about-content__title">{info.title}</h3>
                            <div className="about-content__text">
                                {parseHTML(info.info)}
                                {/*<p>*/}
                                {/*    Mam na imię Adriana. Z wykształcenia jestem historyczką sztuki oraz dyplomowaną*/}
                                {/*    instruktorką hatha jogi i*/}
                                {/*    relaksacji.*/}
                                {/*    Przygodę z jogą rozpoczęłam w 2014 r. Pasja z czasem przerodziła się w sposób na*/}
                                {/*    życie.*/}
                                {/*    Chętnie*/}
                                {/*    pomagam stawiać pierwsze kroki na macie.*/}
                                {/*</p>*/}
                                {/*<p>*/}
                                {/*    Ważne jest dla mnie indywidualne podejście oraz*/}
                                {/*    słuchanie ciała – zarówno jego potrzeb, jak i ograniczeń – dlatego lubię pracować w*/}
                                {/*    małych*/}
                                {/*    grupach. Chciałabym wprowadzać w życie innych więcej świadomego, miękkiego ruchu z*/}
                                {/*    uwagą*/}
                                {/*    na*/}
                                {/*    oddechu i poszanowaniu ciała, więcej odprężenia i relaksu. Poza jogą tańczę i jeżdżę*/}
                                {/*    na*/}
                                {/*    rowerze.*/}
                                {/*    Jestem miłośniczką podróży, poznawania nowych kultur, kina, zdrowego jedzenia i*/}
                                {/*    planszówek.*/}
                                {/*    Kocham słońce, piękne zapachy i wszelkie rytuały.*/}
                                {/*</p>*/}
                            </div>
                            <div className="cta__buttons">
                                <ButtonScrollTo selector={"schedule"} text={info.btnCheckSchedule}/>
                                <ButtonScrollTo selector={"contact"} text={info.btnContactMe}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutMe;