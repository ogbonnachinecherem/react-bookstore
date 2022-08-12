import React,  { useState } from "react";
import { Col, Card, Button, Modal} from "react-bootstrap";
import EditBookForm from "./EditBookForm";

function Book(props) {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const handleDelete = (e) => {
		e.preventDefault();
		props.delete(props.bookInfo.id);
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
export default Book;


