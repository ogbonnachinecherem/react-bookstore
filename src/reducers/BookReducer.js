let initialState= {
    books: [
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
    ],
 };
let BooksReducer = (state = initialState, action) => {};

export default BooksReducer;