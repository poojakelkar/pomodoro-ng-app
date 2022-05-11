import React, { useContext, useEffect, useState } from "react";
import CreateTask from "../modals/CreateTask";
import { MainContext } from "../store/mainContext";
import { types } from "../store/reducer";
import Card from "./Card/Card";

const TodoList = () => {
    const { state, dispatch } = useContext(MainContext);

    useEffect(() => {
        dispatch({
            type: types.POPULATE_TASK_FROM_LOCALSTORAGE,
        });
    }, [dispatch]);

    const openModal = () => {
        dispatch({
            type: types.OPEN_CREATE_MODEL,
        });
    };

    const deleteTask = (index) => {
        dispatch({
            type: types.DELETE_TASK,
            payload: {
                index,
            },
        });
    };

    const saveTask = (task) => {
        dispatch({
            type: types.ADD_TASK,
            payload: {
                task,
            },
        });
    };

    const updateListArray = (task, index) => {
        dispatch({
            type: types.UPDATE_TASK,
            payload: {
                task,
                index,
            },
        });
    };

    const toggle = () => {
        dispatch({
            type: state.isCreateModelOpen
                ? types.CLOSE_CREATE_MODEL
                : types.OPEN_CREATE_MODEL,
        });
    };
    return (
        <>
            <div className='header-container text-center'>
                <h3>To-Do List</h3>
                <button
                    className='btn btn-primary btn-task'
                    onClick={openModal}>
                    Create Task
                </button>
            </div>
            <div className='task-container'>
                {!!state?.taskList?.length &&
                    state?.taskList.map((obj, index) => (
                        <Card
                            key={index}
                            taskobj={obj}
                            index={index}
                            deleteTask={deleteTask}
                            updateListArray={updateListArray}
                        />
                    ))}
            </div>
            {state.isCreateModelOpen && (
                <CreateTask
                    toggle={toggle}
                    modal={state.isCreateModelOpen}
                    saveTask={saveTask}
                />
            )}
        </>
    );
};

export default TodoList;
