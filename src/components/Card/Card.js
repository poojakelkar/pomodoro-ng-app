import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./card.css";

const Card = ({ taskobj, index, deleteTask, openEditModal }) => {
    const handleDelete = () => {
        deleteTask(index);
    };
    return (
        <div className='card-wrapper'>
            <div className='card-holder'>
                <Link to='/Timer' style={{ textDecoration: "none" }}>
                    <h5 className='card-heading'>{taskobj.Name}</h5>
                </Link>
            </div>

            <div className='footer'>
                <h7 className='card-timer'>{taskobj.Time} min</h7>
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
