// countdown
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
    isPlaying: true,
    size: 120,
    strokeWidth: 6
};

const renderTime = (dimension, time) => {
    return (
        <div className="time-wrapper">
            <div className="time">{time}</div>
            <div>{dimension}</div>
        </div>
    );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;
const SpecialDeal = () => {
    // countdown
    const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
    const endTime = stratTime + 243248; // use UNIX timestamp in seconds

    const remainingTime = endTime - stratTime;
    const days = Math.ceil(remainingTime / daySeconds);
    const daysDuration = days * daySeconds;
    return (
        <div className="min-h-screen">
            <div className="container mx-auto py-20 bg-[#ffffff] shadow-2xl">
                <h1 className="text-center md:text-xl font-semibold">শুরু হচ্ছে Electro-Solutions Happy Hour! <br /> <br />

                    আজ রাত ১০টা থেকে, আপনার পছন্দের Laptop, Desktop, Monitor, Smart Watch, Keyboard, Mouse, Headphone-সহ প্রযুক্তি পণ্যে পাচ্ছেন নিশ্চিত মূল্যছাড়।অফারটি চলবে আজ থেকে ২ দিন পর্যন্ত!!
                </h1>
                <div className="my-10">
                    <h1 className="text-center uppercase font-semibold text-[14px]">Starting In</h1>
                    <div className="App flex justify-center items-center gap-10 pt-8">
                        <CountdownCircleTimer
                            {...timerProps}
                            colors="#7E2E84"
                            duration={daysDuration}
                            initialRemainingTime={remainingTime}
                        >
                            {({ elapsedTime, color }) => (
                                <span style={{ color }}>
                                    {renderTime("days", getTimeDays(daysDuration - elapsedTime))}
                                </span>
                            )}
                        </CountdownCircleTimer>
                        <CountdownCircleTimer
                            {...timerProps}
                            colors="#D14081"
                            duration={daySeconds}
                            initialRemainingTime={remainingTime % daySeconds}
                            onComplete={(totalElapsedTime) => ({
                                shouldRepeat: remainingTime - totalElapsedTime > hourSeconds
                            })}
                        >
                            {({ elapsedTime, color }) => (
                                <span style={{ color }}>
                                    {renderTime("hours", getTimeHours(daySeconds - elapsedTime))}
                                </span>
                            )}
                        </CountdownCircleTimer>
                        <CountdownCircleTimer
                            {...timerProps}
                            colors="#EF798A"
                            duration={hourSeconds}
                            initialRemainingTime={remainingTime % hourSeconds}
                            onComplete={(totalElapsedTime) => ({
                                shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds
                            })}
                        >
                            {({ elapsedTime, color }) => (
                                <span style={{ color }}>
                                    {renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))}
                                </span>
                            )}
                        </CountdownCircleTimer>
                        <CountdownCircleTimer
                            {...timerProps}
                            colors="#218380"
                            duration={minuteSeconds}
                            initialRemainingTime={remainingTime % minuteSeconds}
                            onComplete={(totalElapsedTime) => ({
                                shouldRepeat: remainingTime - totalElapsedTime > 0
                            })}
                        >
                            {({ elapsedTime, color }) => (
                                <span style={{ color }}>
                                    {renderTime("seconds", getTimeSeconds(elapsedTime))}
                                </span>
                            )}
                        </CountdownCircleTimer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialDeal;