export const AddBook =(newBook)=>{
    return{
      type:"ADD_BOOK",
      payload:newBook
    }
  
  }
  export const EditBook =(book)=>{
    return{
      type:"EDIT_BOOK",
      payload:book
    }
  
  }
  export const DeleteBook =(id)=>{
    return{
      type:"DELETE_BOOK",
      payload:id
    }
  
  }