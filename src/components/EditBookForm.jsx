import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function EditBookForm(props) {
	const [title, setTitle] = useState(props.bookInfo.title);
	const [author, setAuthor] = useState(props.bookInfo.author);
	const [description, setDescription] = useState(props.bookInfo.description);

	const handleSubmit = (e) => {
		e.preventDefault();
		props.EditBook(props.bookInfo.id, { title, author, description });

		setTitle("");
		setAuthor("");
		setDescription("");
		props.handleClose();
	};
	return (
			<Form>
				<Form.Group className="mb-3" controlId="formBasicAuthor">
					<Form.Label>Title:</Form.Label>
					<Form.Control
						type="text"
						value={title}
						onChange={(e) => {
							setTitle(e.target.value);
						}}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicAuthor">
					<Form.Label>Author:</Form.Label>
					<Form.Control
						type="text"
						value={author}
						onChange={(e) => {
							setAuthor(e.target.value);
						}}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Description:</Form.Label>
					<Form.Control
						type="text"
						value={description}
						onChange={(e) => {
							setDescription(e.target.value);
						}}
					/>
				</Form.Group>

				<Button onClick={handleSubmit} variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		
	);
}

export default EditBookForm;