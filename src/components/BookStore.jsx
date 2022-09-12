import React from "react";
import Book from "./Book";
import {Container, Row} from "react-bootstrap";
import { useSelector } from "react-redux";

const BookStore = (props) => {


const  {books} = useSelector ((state) => {
	return state
})


	return (
		
		<Container>
			<Row>
					{books.map((item, index) => {
						return (
						<Book 
							key={index} 
							bookInfo={item}
							delete={props.delete}
							EditBook={props.EditBook}
						/>
					);
			           })}
	      </Row>
	   </Container>
	);
}

export default BookStore;