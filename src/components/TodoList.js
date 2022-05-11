import React, { useState } from "react";
import CreateTask from "./modals/CreateTask";

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);

    const saveTask = (taskobj) => {
        const tempList = taskList;
        tempList.push(taskobj);
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
                {taskList.map((obj) => (
                    <li>{obj.Name}</li>
                ))}
            </div>
            <CreateTask toggle={toggle} modal={modal} save={saveTask} />
        </>
    );
};

export default TodoList;
