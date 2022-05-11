import React, { useState } from "react";
import CreateTask from "./modals/createTask";

const TodoList = () => {
    const [modal, setModal] = useState(false);

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
            <div className='task-container'></div>
            <CreateTask toggle={toggle} modal={modal} />
        </>
    );
};

export default TodoList;
