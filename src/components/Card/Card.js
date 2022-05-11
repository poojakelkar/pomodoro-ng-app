import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import "./card.css";

const Card = ({ taskobj, index, deleteTask, openEditModal }) => {
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
                        onClick={() => openEditModal(index)}
                    />
                    <AiFillDelete
                        size={20}
                        className='icon'
                        style={{ color: "#5DC250" }}
                        onClick={handleDelete}
                    />
                </div>
            </div>
        </div>
    );
};

export default Card;
