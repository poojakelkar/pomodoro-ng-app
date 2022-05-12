import React, { useContext, useEffect, useState } from "react";
import "./timer.css";
import { AiFillLeftCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { MainContext } from "../../store/mainContext";

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
        <div className='timer'>
            <div className='container'>
                <div className='timer-container'>
                    <Link to='/'>
                        <AiFillLeftCircle size={30} style={{}} />
                    </Link>
                    <h1>Timer</h1>
                    <h1>
                        {minute < 10 ? "0" + minute : minute}:
                        {seconds < 10 ? "0" + seconds : seconds}
                    </h1>

                    <button
                        className={`button button-primary button-primary-${
                            isActive ? "active" : "inactive"
                        }`}
                        onClick={toggle}>
                        {isActive ? "Pause" : "Start"}
                    </button>
                    <button className='button' onClick={reset}>
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Timer;
