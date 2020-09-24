import React from 'react';
import ButtonScrollTo from "../ButtonScrollTo";
import parseHTML from 'react-html-parser';
import i18next from "i18next";


const Offer = ({offersList}) => {
    return (
        <>
            <section className="offers">
                <div className="container">
                    <h2 className="offers__title">{i18next.language === 'pl' ? 'Oferta' : 'Offer'}</h2>
                    <div className="offers__wrapper">
                        {
                            offersList.map((offer, index) => <div className="offers-item" key={index}>
                                <div className="offers-item__title">
                                    <h2>
                                        {offer.title}
                                    </h2>
                                </div>
                                <div className="offers-item__description">
                                    {
                                        parseHTML(offer.description)
                                    }
                                    {offer.ctaText && <p>
                                        {offer.ctaText} <ButtonScrollTo selector={"contact"}
                                                                        text={offersList[0].ctaBtnText}/>
                                    </p>}
                                </div>
                            </div>)
                        }

                    </div>

                </div>
            </section>
        </>
    );
};

export default Offer;