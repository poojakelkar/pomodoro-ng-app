import React from "react";
import "./card.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const Card = ({ taskobj, index }) => {
    return (
        <div className='card-wrapper'>
            <div className='card-top'></div>
            <div className='card-holder'>
                <h6 className='card-header'>{taskobj.Name}</h6>
                <p>{taskobj.Description}</p>
                <p>{taskobj.Time} Hours</p>

                <div className='card-footer'>
                    <AiFillEdit size={20} />
                    <AiFillDelete size={20} />
                </div>
            </div>
        </div>
    );
};

export default Card;
