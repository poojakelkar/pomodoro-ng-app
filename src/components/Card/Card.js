import React, { useContext } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import EditTask from "../../modals/EditTask";
import { MainContext } from "../../store/mainContext";
import { types } from "../../store/reducer";
import "./card.css";

const Card = ({ taskobj, index, deleteTask, updateListArray }) => {
    const { state, dispatch } = useContext(MainContext);

    const toggle = () => {
        dispatch({
            type: state.isEditModelOpen
                ? types.CLOSE_EDIT_MODEL
                : types.OPEN_EDIT_MODEL,
        });
    };

    const openModal = () => {
        dispatch({
            type: types.OPEN_EDIT_MODEL,
        });
    };

    const updateTask = (obj) => {
        updateListArray(obj, index);
    };
    const handleDelete = () => {
        deleteTask(index);
    };
    return (
        <div className='card-wrapper'>
            <div className='card-top'></div>
            <div className='card-holder'>
                <h5 className='card-heading'>{taskobj.Name}</h5>
                <p className='card-desc'>{taskobj.Description}</p>
                <h6 className='card-timer'>{taskobj.Time} Hours</h6>

                <div className='card-footer'>
                    <AiFillEdit
                        size={20}
                        className='icon'
                        style={{ color: "#5DC250", marginRight: "20" }}
                        onClick={openModal}
                    />
                    <AiFillDelete
                        size={20}
                        className='icon'
                        style={{ color: "#5DC250" }}
                        onClick={handleDelete}
                    />
                </div>
            </div>
            {state.isEditModelOpen && (
                <EditTask
                    modal={state.isEditModelOpen}
                    toggle={toggle}
                    updateTask={updateTask}
                    taskobj={taskobj}
                />
            )}
        </div>
    );
};

export default Card;
