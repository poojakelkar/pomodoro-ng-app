import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const createTask = ({ modal, toggle }) => {
    const [taskName, setTaskName] = useState("");
    const [desc, setDesc] = useState("");
    const [timer, setTimer] = useState("");

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
                            value={taskName}></input>
                    </div>
                    <div className='form-group'>
                        <label>Task Description</label>
                        <textarea
                            rows='5'
                            className='form-control'
                            value={desc}></textarea>
                    </div>
                    <div className='form-group'>
                        <label>Task Time</label>
                        <input
                            type='text'
                            className='form-control'
                            value={timer}></input>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color='primary' onClick={toggle}>
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

export default createTask;
