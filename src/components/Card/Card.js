import React, { useState } from "react";
import "./card.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import EditTask from "../../modals/EditTask";

const Card = ({ taskobj, index, deleteTask, updateListArray }) => {
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
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
                        onClick={() => setModal(true)}
                    />
                    <AiFillDelete
                        size={20}
                        className='icon'
                        style={{ color: "#5DC250" }}
                        onClick={handleDelete}
                    />
                </div>
            </div>
            <EditTask
                modal={modal}
                toggle={toggle}
                updateTask={updateTask}
                taskobj={taskobj}
            />
        </div>
    );
};

export default Card;
