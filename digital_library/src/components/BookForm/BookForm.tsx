import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap';
import { server_calls } from '../../api';
import Form from 'react-bootstrap/Form';

export const BookForm = (props:any) => {

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
            if (field == 'author') return props.id.author;
            else if (field == 'title') return props.id.title;
            else if (field == 'country') return props.id.country;
            else if (field == 'genre') return props.id.genre;
            else if (field == 'hardcover_paperback') return props.id.hardcover_paperback;
            else if (field == 'isbn') return props.id.isbn;
            else if (field == 'length') return props.id.length;
            else if (field == 'publish_year') return props.id.publish_year;
            else if (field == 'publisher') return props.id.publisher;
        }
    }

    return (
        <div>
            <Form onSubmit = {handleSubmit(onSubmit)}>

                <Form.Group className="mb-3">
                    <Form.Label>author</Form.Label>
                    <Form.Control {...register('author')} placeholder="Enter book author" defaultValue={populate('author')} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>title</Form.Label>
                    <Form.Control {...register('title')} placeholder="Enter book title" defaultValue={populate('title')} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>country</Form.Label>
                    <Form.Control {...register('country')} placeholder="Enter country" defaultValue={populate('country')}/>
                </Form.Group>
                
                <Form.Group className="mb-3">
                <Form.Label>length</Form.Label>
                <Form.Control type="number" {...register('length', {valueAsNumber: true})} placeholder="Enter book length" defaultValue={populate('length')} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>publish_year</Form.Label>
                <Form.Control type="number" {...register('publish_year', {valueAsNumber: true})} placeholder="Enter book publish_year" defaultValue={populate('publish_year')} />
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label>genre</Form.Label>
            <Form.Control {...register('genre')} placeholder="enter book genre" defaultValue={populate('country')}/>
        </Form.Group>

        <Form.Group className="mb-3">
                    <Form.Label>hardcover_paperback</Form.Label>
                    <Form.Control {...register('hardcover_paperback')} placeholder="Enter hardcover or paperback" defaultValue={populate('hardcover_paperback')}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>isbn</Form.Label>
                    <Form.Control {...register('isbn')} placeholder="Enter isbn" defaultValue={populate('isbn')}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>publisher</Form.Label>
                    <Form.Control {...register('publisher')} placeholder="Enter publisher" defaultValue={populate('publisher')}/>
                </Form.Group>

                
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    </div>
)
}     