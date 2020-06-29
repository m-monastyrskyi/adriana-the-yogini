import React from 'react';

const Schedule = () => {
    return (
        <>
            <section className="schedule">
                <div className="container">
                    <div className="schedule-wrapper">
                        <div className="single-day">

                            <div className="single-day__day ">
                                <h2>Poniedziałek</h2>
                            </div>
                            <div className="single-day__first">
                                <time className="single-day__time"></time>
                                <p className="single-day__title"></p>
                                <p className="single-day__description"></p>
                            </div>
                            <div className="single-day__second">
                                <time className="single-day__time"></time>
                                <p className="single-day__title"></p>
                                <p className="single-day__description"></p>
                            </div>
                        </div>

                        <div className="single-day">
                            <div className="single-day__day ">
                                <h2>Wtorek</h2>
                            </div>
                            <div className="single-day__first">
                                <time className="single-day__time"></time>
                                <p className="single-day__title"></p>
                                <p className="single-day__description"></p>
                            </div>
                            <div className="single-day__second">
                                <time className="single-day__time"></time>
                                <p className="single-day__title"></p>
                                <p className="single-day__description"></p>
                            </div>
                        </div>

                        <div className="single-day">
                            <div className="single-day__day ">
                                <h2>Środa</h2>
                            </div>
                            <div className="single-day__first">
                                <time className="single-day__time"></time>
                                <p className="single-day__title"></p>
                                <p className="single-day__description"></p>
                            </div>
                            <div className="single-day__second">
                                <time className="single-day__time">18:30</time>
                                <p className="single-day__title">JOGA ONLINE @ZOOM</p>
                                <p className="single-day__description">[grupa zamknięta]</p>
                            </div>
                        </div>

                        <div className="single-day">
                            <div className="single-day__day ">
                                <h2>Czwartek</h2>
                            </div>
                            <div className="single-day__first">
                                <time className="single-day__time"></time>
                                <p className="single-day__title"></p>
                                <p className="single-day__description"></p>
                            </div>
                            <div className="single-day__second">
                                <time className="single-day__time">18:30</time>
                                <p className="single-day__title">JOGA ONLINE @ZOOM</p>
                                <p className="single-day__description">[grupa otwarta]</p>
                            </div>
                        </div>
                        <div className="single-day">
                            <div className="single-day__day ">
                                <h2>Piątek</h2>
                            </div>
                            <div className="single-day__first">
                                <time className="single-day__time"></time>
                                <p className="single-day__title"></p>
                                <p className="single-day__description"></p>
                            </div>
                            <div className="single-day__second">
                                <time className="single-day__time"></time>
                                <p className="single-day__title"></p>
                                <p className="single-day__description"></p>
                            </div>
                        </div>
                        <div className="single-day">
                            <div className="single-day__day ">
                                <h2>Sobota</h2>
                            </div>
                            <div className="single-day__first">
                                <time className="single-day__time">9:30</time>
                                <p className="single-day__title">JOGA W PLENERZE </p>
                                <p className="single-day__description">[bezpłatne]</p>
                            </div>
                            <div className="single-day__second">
                                <time className="single-day__time"></time>
                                <p className="single-day__title"></p>
                                <p className="single-day__description"></p>
                            </div>
                        </div>
                        <div className="single-day">
                            <div className="single-day__day ">
                                <h2>Niedziela</h2>
                            </div>
                            <div className="single-day__first">
                                <time className="single-day__time"></time>
                                <p className="single-day__title"></p>
                                <p className="single-day__description"></p>
                            </div>
                            <div className="single-day__second">
                                <time className="single-day__time"></time>
                                <p className="single-day__title"></p>
                                <p className="single-day__description"></p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
};

export default Schedule;