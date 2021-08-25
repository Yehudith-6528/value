import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import * as yup from 'yup';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Container } from 'react-bootstrap';
import { actions } from "../redux/actions";

const schema = yup.object().shape({
    title: yup.string().required(),
    rating: yup.number().required(),
    category: yup.string().required(),

});

function NewMovie(props) {
    const { setCurrentMovie, handleClose } = props;
    const dispatch = useDispatch();
    const { categories } = useSelector(state => state.moviesReducer)
    const [errors, setErrors] = useState([])

    const handleSubmit = async (values) => {
        dispatch(actions.addMovie({
            title: formik.values.title,
            category: formik.values.category,
            rating: formik.values.rating,
        }));
        setCurrentMovie();
        handleClose(false)
    }

    const formik = useFormik({
        validationSchema: schema,
        onSubmit: handleSubmit,

        initialValues: {
            title: '',
            category: '',
            rating: ''
        }
    });

    return (
        <>
            <Container>
                <Form onSubmit={formik.handleSubmit} className="text-center p-5">
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Movie Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            isInvalid={!!formik.errors.title} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="rating">
                        <Form.Label>Movie Rating</Form.Label>
                        <Form.Control
                            type="number"
                            min="0"
                            max="10"
                            step="0.1"
                            placeholder="Enter rating"
                            value={formik.values.rating}
                            onChange={formik.handleChange}
                            isInvalid={!!formik.errors.rating}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="category">
                        <Form.Label>Movie Category</Form.Label>
                        <Form.Select
                            value={formik.values.category}
                            onChange={formik.handleChange}
                            isInvalid={!!formik.errors.category}
                        >
                            {categories.map((category, key) => (
                                <option key={key}>{category}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        Save
              </Button>
                    {errors.length > 0 ? errors.map(error => <p key={error} style={{ color: 'red' }}>{error}</p>) : null}
                </Form>
            </Container>
        </>
    );
}

export default NewMovie;
