import React, { useContext } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
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
        dispatch({
            type: types.OPEN_EDIT_MODEL,
            payload: { currentEditIndex: index },
        });
    };

    const updateTask = (obj) => {
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
            <div className='main-container'>
                <div className='main-header-container'>
                    <h2>Hello, Please Complete your To-Do list</h2>
                    <h4>You have {Card.length} task today, All the Best!</h4>
                </div>
                <div className='header-container'>
                    <div className='to-do-container'>
                        <h3>To-Do List</h3>
                        <AiFillPlusCircle
                            onClick={openModal}
                            size={40}
                            style={{ color: "#4f3cf9", cursor: "pointer" }}>
                            Create Task
                        </AiFillPlusCircle>
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
                        taskobj={{
                            ...state?.taskList[state?.currentEditIndex],
                        }}
                    />
                )}
            </div>
        </>
    );
};

export default TodoList;
