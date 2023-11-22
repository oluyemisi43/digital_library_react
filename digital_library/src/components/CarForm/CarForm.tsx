import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap';
import { server_calls } from '../../api';
import Form from 'react-bootstrap/Form';

export const CarForm = (props:any) => {

    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {

        if( props.id! ){
            server_calls.update(props.id.id, data).then(e => {
                window.location.reload()
                event.target.reset();
            });
        } else {
            server_calls.create(data).then(e => {
                window.location.reload()
            });
        }
    }

    const populate = (field:string) => {
        if (props.id!) {
            if (field == 'make') return props.id.make;
            else if (field == 'model') return props.id.model;
            else if (field == 'name') return props.id.name;
            else if (field == 'price') return props.id.price;
            else if (field == 'year') return props.id.year;
        }
    }

    return (
        <div>
            <Form onSubmit = {handleSubmit(onSubmit)}>

                <Form.Group className="mb-3">
                    <Form.Label>Make</Form.Label>
                    <Form.Control {...register('make')} placeholder="Enter car make" defaultValue={populate('make')} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Model</Form.Label>
                    <Form.Control {...register('model')} placeholder="Enter car model" defaultValue={populate('model')} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control {...register('name')} placeholder="Enter car name" defaultValue={populate('name')}/>
                </Form.Group>
                
                <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" {...register('price', {valueAsNumber: true})} placeholder="Enter car price" defaultValue={populate('price')} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Year</Form.Label>
                <Form.Control type="number" {...register('year', {valueAsNumber: true})} placeholder="Enter car year" defaultValue={populate('year')} />
            </Form.Group>

            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    </div>
)
}     