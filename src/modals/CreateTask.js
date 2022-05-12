import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const CreateTask = ({ modal, toggle, saveTask }) => {
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

    const handleSave = () => {
        let taskobj = {};
        taskobj["Name"] = taskName;
        taskobj["Description"] = desc;
        taskobj["Time"] = timer;
        saveTask(taskobj);
    };

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader>Create Task</ModalHeader>
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
                            type='time'
                            className='form-control'
                            value={timer}
                            name='taskTimer'
                            onChange={handleChange}></input>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color='primary' onClick={handleSave}>
                    {""}
                    Create
                </Button>
                <Button color='secondary' onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateTask;
