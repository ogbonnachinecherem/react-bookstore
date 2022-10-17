import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { EditBook } from "../actions/BookAction";
import { useDispatch } from "react-redux";
import { doc, updateDoc } from "firebase/firestore";
import {db} from "../firebase/Config"

function EditBookForm(props) {
	const dispatch = useDispatch();
	const [title, setTitle] = useState(props.bookInfo.title);
	const [author, setAuthor] = useState(props.bookInfo.author);
	const [description, setDescription] = useState(props.bookInfo.description);

	const handleSubmit = async(e) => {
		e.preventDefault();
		const newData={
			id: props.bookInfo.id,
			  title, author, description
		}
		//dispatch(EditBook(newData))
		// props.EditBook(props.bookInfo.id, { title, author, description });
		const bookRef = doc(db, "newBooks",newData.id);

		await updateDoc(bookRef,newData);
		setTitle("");
		setAuthor("");
		setDescription("");
		props.handleClose();

		// console.log(newData);
		// setTitle("");
		// setAuthor("");
		// setDescription("");
		// props.handleClose();
	};
	return (
			<Form onSubmit={handleSubmit} >
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

				<Button  variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		
	);
}

export default EditBookForm;