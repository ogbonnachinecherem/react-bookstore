import {React, useState} from "react";
import { Form, Button } from "react-bootstrap";
import { AddBook } from "../actions/BookAction";
import {connect} from "react-redux";
import { v4 as uuid } from "uuid";
import {db} from "../firebase/Config";
import { doc, setDoc, serverTimestamp} from "firebase/firestore";


function AddBookForm(props) {
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [description, setDescription] = useState("");

	// const handleChange = (e) => {
	// 	setDescription(e.target.value);
	// 	//console.log(description);
	// };
	const handleSubmit = async(e) => {
		e.preventDefault();
		let mybook = {id:uuid(), title, author, description,timestamp: serverTimestamp()}

		try {await setDoc(doc(db,"newBooks", mybook.id),mybook)
		// props.AddBook({id:uuid(), title, author, description });
		// props.AddBook({ title, author, description });
		setTitle("");
		setAuthor("");
		setDescription("");
	    }catch(e){console.log(e)}
	};
	return (
		<Form>
			<Form.Group className="mb-3" controlId="formBasicTitle">
				<Form.Label>Title:</Form.Label>
				<Form.Control
					type="text" name="name"
					value={title}
					onChange={(e) => {
						setTitle(e.target.value);
					}}
				required/>
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicAuthor">
				<Form.Label>Author: </Form.Label>
				<Form.Control
					type="text" name="author"
					value={author}
					onChange={(e) => {
						setAuthor(e.target.value);
					}}
					required/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicDescription">
				<Form.Label>Description:</Form.Label>
				<Form.Control type="text" name="description" value={description}
				 onChange={(e) => 
				{setDescription(e.target.value);
				}} required/>
			</Form.Group>

			<Button variant="primary" type="submit" onClick={handleSubmit}>
				Submit
			</Button>
		</Form>
	);
}
const mapDispatchToProps = {
	AddBook: AddBook,
};
export default connect(null, mapDispatchToProps)(AddBookForm);
// export default AddBookForm;           
