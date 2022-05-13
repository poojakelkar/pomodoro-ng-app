import React, { useContext, useEffect, useState } from "react";
import { AiFillLeftCircle } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { MainContext } from "../../store/mainContext";
import { convertHMS } from "../../utils/time";
import "./timer.css";

const Timer = () => {
    const { state } = useContext(MainContext);
    const [task, setTask] = useState(null);
    const { taskId } = useParams();
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    function toggle() {
        setIsActive(!isActive);
    }

    function reset() {
        setSeconds(parseInt(task.time, 10) * 60);
        setIsActive(false);
    }

    useEffect(() => {
        if (taskId !== null || taskId !== undefined) {
            const task = state?.taskList?.[taskId];
            if (task) {
                setTask(task);
                setSeconds(parseInt(task.time, 10) * 60);
            }
        }
    }, [taskId, state?.taskList]);

    useEffect(() => {
        let interval = null;
        if (isActive && seconds > 0) {
            interval = setInterval(() => {
                if (seconds <= 0) {
                    setIsActive(false);
                    clearInterval(interval);
                }
                setSeconds((seconds) => seconds - 1);
            }, 1000);
        } else if (seconds <= 0) {
            setIsActive(false);
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);
    let progressWidth = "100%";
    if (task?.time != null) {
        progressWidth = `${(seconds / (parseInt(task.time, 10) * 60)) * 100}%`;
    }
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
                            <h1>{convertHMS(seconds)}</h1>
                            <div class='progress-bar'>
                                <div
                                    className='time-remaining'
                                    style={{ width: progressWidth }}></div>
                            </div>
                            <button
                                disabled={parseInt(task?.time, 10) * 60 <= 0}
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
                            <h1>{task?.name}</h1>
                            <h4>{task?.description}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Timer;
