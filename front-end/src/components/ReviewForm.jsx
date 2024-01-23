import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

export const ReviewForm = ({ handleSubmit, reviewText, labelText, defaultVal }) => {
	return (
		<Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextArea1">
                <Form.Label>{labelText}</Form.Label>
                <Form.Control ref={reviewText} as="textarea" rows={3} defaultValue={defaultVal} />
            </Form.Group>
            <Button variant="outline-info" onClick={handleSubmit}>Submit</Button>
        </Form>
	);
};
