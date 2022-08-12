import React from "react";
import Book from "./Book";
import {Container, Row} from "react-bootstrap"

function BookStore(props) {
	return (
		<Container>
			<Row>
					{props.bookInfo.map((item, index) => {
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