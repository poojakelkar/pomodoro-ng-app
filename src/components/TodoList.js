import React, { useEffect, useState } from "react";
import CreateTask from "../modals/CreateTask";
import Card from "./Card/Card";

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        let arr = localStorage.getItem("taskList");
        if (arr) {
            let obj = JSON.parse(arr);
            setTaskList(obj);
        }
    }, []);

    const saveTask = (taskobj) => {
        const tempList = taskList;
        tempList.push(taskobj);
        localStorage.setItem("taskList", JSON.stringify(tempList));
        setTaskList(tempList);
        setModal(false);
    };

    const toggle = () => {
        setModal(!modal);
    };
    return (
        <>
            <div className='header-container text-center'>
                <h3>To-Do List</h3>
                <button
                    className='btn btn-primary btn-task'
                    onClick={() => setModal(true)}>
                    Create Task
                </button>
            </div>
            <div className='task-container'>
                {taskList.map((obj, index) => (
                    <Card taskobj={obj} index={index} />
                ))}
            </div>
            <CreateTask toggle={toggle} modal={modal} save={saveTask} />
        </>
    );
};

export default TodoList;
