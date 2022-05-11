import React, { useContext, useEffect } from "react";
import CreateTask from "../modals/CreateTask";
import EditTask from "../modals/EditTask";
import { MainContext } from "../store/mainContext";
import { types } from "../store/reducer";
import Card from "./Card/Card";

const TodoList = () => {
    const { state, dispatch } = useContext(MainContext);

    const toggleEditModal = () => {
        dispatch({
            type: state.isEditModelOpen
                ? types.CLOSE_EDIT_MODEL
                : types.OPEN_EDIT_MODEL,
        });
    };

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

    const openEditModal = (index) => {
        debugger;
        dispatch({
            type: types.OPEN_EDIT_MODEL,
            payload: { currentEditIndex: index },
        });
    };

    const updateTask = (obj) => {
        debugger;
        updateListArray(obj, state?.currentEditIndex);
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
                            openEditModal={openEditModal}
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
            {state.isEditModelOpen && (
                <EditTask
                    modal={state.isEditModelOpen}
                    toggle={toggleEditModal}
                    updateTask={updateTask}
                    taskobj={{ ...state?.taskList[state?.currentEditIndex] }}
                />
            )}
        </>
    );
};

export default TodoList;
