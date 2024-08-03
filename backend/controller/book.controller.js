import Book from "../model/book.model.js";

export const getBook = async (req,res)=>{
  try {
    const book = await Book.find();
    console.log(book);
    
    res.status(200).json(book)
  } catch (err) {
    console.log("Error: ",err.message);
    res.status(500).json(err);
  }
}