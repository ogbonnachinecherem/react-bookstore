import { v4 as uuid } from "uuid";
let initialState= {
    books:
	 [
        // { title: "Things Fall Apart", 
		// author: " Chinua Achebe", 
		// description: "The novel chronicles the life of Okonkwo, the leader of an Igbo community" ,
	    // id: uuid(),
	    // },

		// { title: "Purple Hibiscus", 
		// author: "Ngozi Adichie", 
		// description: "The story is told through Kambili's eyes and is essentially", 
		// id: uuid(),
	    // },

		// { title: "Eze Goes To School", 
		// author: "Onuora Nzekwu", 
		// description: "Eze Goes To School centers mainly on Eze Adi who struggles to get",
	    // id: uuid(),
	    //  },
    ],
 };
let BooksReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_BOOK":
		  return {...state, books: action.payload}
		  case "DELETE_BOOK": 
		  const unDeletedBooks = state.books.filter((book) =>
		  book.id!== action.payload)
		  return {...state, books: unDeletedBooks}
		  case "EDIT_BOOK":
			const updatedBooks = state.books.map((book) => {
			  if(book.id === action.payload.id){
				//console.log(action.payload);
				return action.payload
			  }
			  else {return book}
			})
			return {...state, books: updatedBooks }
		default:
		  return state;
		  
	  }
};

export default BooksReducer;