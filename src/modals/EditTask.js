import React, { useEffect, useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const EditTask = ({ modal, toggle, updateTask, taskobj }) => {
    const [taskName, setTaskName] = useState("");
    const [desc, setDesc] = useState("");
    const [timer, setTimer] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "taskName") {
            setTaskName(value);
        } else if (name === "taskDescription") {
            setDesc(value);
        } else {
            setTimer(value);
        }
    };

    useEffect(() => {
        setTaskName(taskobj.Name);
        setDesc(taskobj.Description);
        setTimer(taskobj.Time);
    }, []);

    const handleEdit = (e) => {
        e.preventDefault();
        let tempObj = {};
        tempObj["Name"] = taskName;
        tempObj["Description"] = desc;
        tempObj["Time"] = timer;
        updateTask(tempObj);
    };
    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader>Edit Task</ModalHeader>
            <ModalBody>
                <form>
                    <div className='form-group'>
                        <label>Task Name</label>
                        <input
                            type='text'
                            className='form-control'
                            value={taskName}
                            name='taskName'
                            onChange={handleChange}></input>
                    </div>
                    <div className='form-group'>
                        <label>Task Description</label>
                        <textarea
                            rows='5'
                            className='form-control'
                            value={desc}
                            name='taskDescription'
                            onChange={handleChange}></textarea>
                    </div>
                    <div className='form-group'>
                        <label>Task Time</label>
                        <input
                            type='number'
                            className='form-control'
                            value={timer}
                            name='taskTimer'
                            onChange={handleChange}></input>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color='primary' onClick={handleEdit}>
                    Save
                </Button>
                <Button color='secondary' onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default EditTask;
