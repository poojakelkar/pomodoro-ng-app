import React, { useContext, useEffect, useState } from "react";
import "./timer.css";
import { AiFillLeftCircle } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { MainContext } from "../../store/mainContext";
import { types } from "../../store/reducer";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Timer = () => {
    const { state, dispatch } = useContext(MainContext);
    const [minute, setMinute] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    function toggle() {
        setIsActive(!isActive);
    }

    function reset() {
        setSeconds(0);
        setIsActive(false);
    }

    useEffect(() => {
        let interval = null;

        if (isActive) {
            interval = setInterval(() => {
                setSeconds((seconds) => seconds + 1);
                if (seconds === 59) {
                    setMinute((minute) => minute + 1);
                    setSeconds(0);
                }
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (
        <>
            <div className='timer'>
                <div className='container'>
                    <div className='sub-container'>
                        <Link to='/'>
                            <AiFillLeftCircle size={30} style={{}} />
                        </Link>
                        <div className='timer-container'>
                            <h1>Timer</h1>
                            <h1>
                                {minute < 10 ? "0" + minute : minute}:
                                {seconds < 10 ? "0" + seconds : seconds}
                            </h1>
                            <button
                                className={`btn btn-primary button-primary-${
                                    isActive ? "active" : "inactive"
                                }`}
                                onClick={toggle}>
                                {isActive ? "Pause" : "Start"}
                            </button>
                            <button
                                className='btn btn-secondary'
                                onClick={reset}>
                                Reset
                            </button>
                        </div>
                        <div className='text-container'>
                            <h1>Task Name</h1>
                            <h4>Task Description</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Timer;
