import React,  { useState } from "react";
import { Col, Card, Button, Modal} from "react-bootstrap";
import EditBookForm from "./EditBookForm";
import { DeleteBook } from "../actions/BookAction";
import { connect } from "react-redux";
import { doc, deleteDoc } from "firebase/firestore";
import {db} from "../firebase/Config";

function Book(props) {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const handleDelete = async(e) => {
		e.preventDefault();
		//props.DeleteBook(props.bookInfo.id);
		// props.delete(props.bookInfo.id);
		try {
			await deleteDoc(doc(db, "newBooks", props.bookInfo.id));
		} catch (e) {
			console.log(e);
		}
		

		
	};

	
	
	return (
		<>
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Codetrain User Edit</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<EditBookForm EditBook={props.EditBook} bookInfo={props.bookInfo} handleClose={handleClose}/>
			</Modal.Body>
		</Modal>
		
		<Col md={6} style={{marginBottom: "10px"}}>
			<Card>
				<Card.Body>
						<Card.Title>Name: {props.bookInfo.title}</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">Author:{props.bookInfo.author}</Card.Subtitle>
						<Card.Text>Description:{props.bookInfo.description}</Card.Text>
					   <Button href="#" variant="success" style={{marginLeft: "1rem"}} onClick={handleShow}> Edit</Button>
					   <Button href="#" variant="danger" style={{marginLeft: "1rem"}} onClick={handleDelete}> Delete</Button>
			   </Card.Body>
		  </Card>
	  </Col>
	  </>
	);
};
const mapDispatchToProps = {
	DeleteBook: DeleteBook
};

export default connect(null, mapDispatchToProps)(Book);
// export default Book;


