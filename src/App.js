import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Container, Row, Col,} from "react-bootstrap";
import BookStore from "./components/BookStore";
import AddBookForm from "./components/AddBookForm";

function App() {
	const [books, setBooks] = useState([
		{ title: "Things Fall Apart", 
		author: " Chinua Achebe", 
		description: "The novel chronicles the life of Okonkwo, the leader of an Igbo community" ,
	    id: "1",
	    },

		{ title: "Purple Hibiscus", 
		author: "Ngozi Adichie", 
		description: "The story is told through Kambili's eyes and is essentially", 
		id: "2",
	    },

		{ title: "Eze Goes To School", 
		author: "Onuora Nzekwu", 
		description: "Eze Goes To School centers mainly on Eze Adi who struggles to get",
	    id: "3",
	     },
		
	]);
	const addNewBook = (book) => {
		book.id = Math.random().toString();
		setBooks([...books, book]);
		console.log(book)
	};
	const deleteBook = (id) => {
		setBooks(
			books.filter((book) => {
				if (book.id !==id) {
					return book;
				}

			})
		)
	};
	
	const EditBook = (id, newBook) => {
		setBooks(
			books.map((book) => {
				if(book.id===id) {
					return newBook;
				}
				return book;
			})
		)
	};
	return (
		<Container style={{marginTop: "30px"}}>
			<Row>
				<Col md={4}>
				<AddBookForm newBook = {addNewBook}/>
				</Col>
				<Col md={8}>
				<BookStore bookInfo={books} EditBook={EditBook} delete={deleteBook}/>
				</Col>
			</Row>
		</Container>
	);
}

export default App;