import React, { useState }from 'react';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { useGetData } from '../../custom-hooks';
import { server_calls } from '../../api/server';
import Modal from 'react-bootstrap/Modal';
import { CarForm } from '../../components';

export const DataTable = () => {

    let { carData, getData } = useGetData();
    
    let cols = Object.keys(carData[0]|| {}).map(i => i); 
    cols = [" "].concat(cols); //to leave empty column for radio button

    let [selectedrow, setSelectedRow] = useState("");

    let [open, setOpen] = useState(false);
    let handleOpen = (row: any) => {
        setSelectedRow(row) //to save the row of data
        setOpen(true)
      }
    
      let handleClose = () => {
        setOpen(false)
      }


    const deleteData = (id: string) => {
        server_calls.delete(id).then(e => {
            window.location.reload()
        });   
    }
    return (
        <div>
          <h2> Cars in Inventory </h2>

<Table striped bordered hover>
    <thead>
    <tr>
    {cols.map((j, i) => (
        <th key={i}>{j}</th>
    ))}
    </tr>
    </thead>
    <tbody>
                    {carData.map((row: {id: string, make: string, model: string, name: string, price: number, year: string}) => {
                        return (
                        <tr>
                            <td>
                                <Button style={{ background: 'red' }} onClick={(e) => deleteData(row.id)}>Delete</Button> 
                                <Button style={{ background: 'green' }} onClick={(e) => handleOpen(row)}>Update</Button>
                                <Modal show={open} onHide={handleClose}>
                                    <Modal.Header>
                                        <Modal.Title>Update Car</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body> <CarForm id={selectedrow}/> </Modal.Body>
                                    <Modal.Footer>
                                        <button onClick={handleClose}>Cancel</button>
                                    </Modal.Footer>
                                </Modal>

                            </td>
                            <td>{row.id}</td>
                            <td>{row.make}</td>
                            <td>{row.model}</td>
                            <td>{row.name}</td>
                            <td>{row.price}</td>
                            <td>{row.year}</td>
                        </tr>
                    );
                })}
                </tbody>
            </Table>
        </div>
    )
}   