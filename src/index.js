import React from "react";
import ReactDom from "react-dom";
import books from './books';
import Book from './Book'

//CSS
import "./index.css";


const BookList = () => {
  return (
    <section className="bookList">
        {books.map((book)=> {
          return(
           <Book key={book.id} {...book}></Book>
          )
        })}
    </section>
  );
};


ReactDom.render(<BookList />, document.getElementById("root"));
