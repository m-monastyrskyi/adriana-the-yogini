import React from 'react';

const Schedule = ({schedule}) => {
    return (
        <>
            <section className="schedule">
                <div className="container">
                    <div className="schedule-wrapper">

                        {
                            schedule.map(day =>
                                <div className="single-day" key={day.day}>

                                    <div className="single-day__day ">
                                        <h2>{day.day}</h2>
                                    </div>
                                    <div className="single-day__first">
                                        <time className="single-day__time">{day.first.time}</time>
                                        <p className="single-day__title">{day.first.title}</p>
                                        <p className="single-day__description">{day.first.description !== "" && `[${day.first.description}]`}</p>
                                    </div>
                                    <div className="single-day__second">
                                        <time className="single-day__time">{day.second.time}</time>
                                        <p className="single-day__title">{day.second.title}</p>
                                        <p className="single-day__description">{day.second.description !== "" && `[${day.second.description}]`}</p>
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