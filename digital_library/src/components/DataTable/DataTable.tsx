import React, { useState }from 'react';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { useGetData } from '../../custom-hooks';
import { server_calls } from '../../api/server';
import Modal from 'react-bootstrap/Modal';
import { BookForm } from '../../components';

export const DataTable = () => {

    let { bookData, getData } = useGetData();
    
    let cols = Object.keys(bookData[0]|| {}).map(i => i); 
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
          <h2> books in digital library </h2>

<Table striped bordered hover>
    <thead>
    <tr>
    {cols.map((j, i) => (
        <th key={i}>{j}</th>
    ))}
    </tr>
    </thead>
    <tbody>
                    {bookData.map((row: {author: string, country: string, genre: string, hardcover_paperback: string, id: string, isbn: string,length:string,publish_year:string,publisher:string,title:string}) => {
                        return (
                        <tr>
                            <td>
                                <Button style={{ background: 'red' }} onClick={(e) => deleteData(row.id)}>Delete</Button> 
                                <Button style={{ background: 'green' }} onClick={(e) => handleOpen(row)}>Update</Button>
                                <Modal show={open} onHide={handleClose}>
                                    <Modal.Header>
                                        <Modal.Title>Update book</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body> <BookForm id={selectedrow}/> </Modal.Body>
                                    <Modal.Footer>
                                        <button onClick={handleClose}>Cancel</button>
                                    </Modal.Footer>
                                </Modal>

                            </td>
                            <td>{row.author}</td>
                            <td>{row.country}</td>
                            <td>{row.genre}</td>
                            <td>{row.hardcover_paperback}</td>
                            <td>{row.id}</td>
                            <td>{row.isbn}</td>
                            <td>{row.length}</td>
                            <td>{row.publish_year}</td>
                            <td>{row.publisher}</td>
                            <td>{row.title}</td>
                        </tr>
                    );
                })}
                </tbody>
            </Table>
        </div>
    )
}   