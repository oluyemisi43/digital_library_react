import React from 'react';
import { DataTable, CarForm } from '../../components';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export const Dashboard = (props:any) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <h1>{props.title}</h1>
            <DataTable></DataTable>
<Button onClick={showModal}>Add Car</Button>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header>
                    <Modal.Title>Add Car</Modal.Title>
                </Modal.Header>
                <Modal.Body> <CarForm /> </Modal.Body>
                <Modal.Footer>
                    <button onClick={hideModal}>Cancel</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}