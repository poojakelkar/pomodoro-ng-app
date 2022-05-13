import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import { mintuesToHoursAndMinutes } from "../../utils/time";
import "./card.css";

const Card = ({ taskobj, index, deleteTask, openEditModal }) => {
    const handleDelete = () => {
        deleteTask(index);
    };
    return (
        <div className='card-wrapper'>
            <Link
                to={`/task/${index}`}
                style={{ textDecoration: "none", width: "100%" }}>
                <div className='card-holder'>
                    <h5 className='card-heading'>{taskobj.name}</h5>
                    <h7 className='card-timer'>
                        {mintuesToHoursAndMinutes(taskobj.time)}
                    </h7>
                </div>
            </Link>
            <div className='footer'>
                <AiFillEdit
                    size={20}
                    className='icon'
                    style={{ color: "#4f3cf9", marginRight: "20" }}
                    onClick={() => openEditModal(index)}
                />
                <AiFillDelete
                    size={20}
                    className='icon'
                    style={{ color: "#4f3cf9" }}
                    onClick={handleDelete}
                />
            </div>
        </div>
    );
};

export default Card;
