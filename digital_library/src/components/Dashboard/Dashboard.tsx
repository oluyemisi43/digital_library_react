import React from 'react';
import { DataTable, BookForm } from '../../components';
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
<Button onClick={showModal}>Add Book</Button>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header>
                    <Modal.Title>Add Book</Modal.Title>
                </Modal.Header>
                <Modal.Body> <BookForm /> </Modal.Body>
                <Modal.Footer>
                    <button onClick={hideModal}>Cancel</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}