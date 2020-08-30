import React from 'react';

const Schedule = ({schedule}) => {
    return (
        <>
            <section className="schedule anim">
                <div className="container">
                    <h2 className="schedule__title">Grafik</h2>
                    <div className="schedule-wrapper">

                        {
                            schedule.map(day =>
                                <div className="single-day" key={day.day}>

                                    <div className="single-day__day ">
                                        <h2>{day.day}</h2>
                                    </div>
                                    <div className="single-day__first">
                                        <time className="single-day__time">{day.firstTime}</time>
                                        <p className="single-day__title">{day.firstTitle}</p>
                                        <p className="single-day__description">{day.firstDescription !== "" && `[${day.firstDescription}]`}</p>
                                    </div>
                                    <div className="single-day__second">
                                        <time className="single-day__time">{day.secondTime}</time>
                                        <p className="single-day__title">{day.secondTitle}</p>
                                        <p className="single-day__description">{day.secondDescription !== "" && `[${day.secondDescription}]`}</p>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
            </section>
        </>
    );
};

export default Schedule;