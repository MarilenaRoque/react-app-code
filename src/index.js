import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";
const books = [
  {
    title: "The Deep End (Diary of a Wimpy Kid Book 15)",
    author: "Jeff Kinney",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71Ks%2B8mKq2L._AC_UL200_SR200,200_.jpg",
  },
  {
    title: "Cat Kid Comic Club: From the Creator of Dog Man",
    author: "Dav Pilkey",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/810Ukmf7bSL._AC_UL200_SR200,200_.jpg",
  },
  {
    title: "If Animals Kissed Good Night",
    author: "Ann Whitford Paul",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/817T4J3dzhL._AC_UL200_SR200,200_.jpg",
  },
  {
    title: "How the Grinch Stole Christmas!",
    author: "Dr. Seuss",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/91Q9eneR7BL._AC_UL200_SR200,200_.jpg",
  },
  {
    title: "Dog Man: Grime and Punishment",
    author: "Dav Pilkey",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71c1LRLBTBL._AC_UL200_SR200,200_.jpg",
  },
  {
    title: "The Boy, the Mole, the Fox and the Horse",
    author: "Charlie Mackesy",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71eJk7GtUOL._AC_UL200_SR200,200_.jpg",
  },
];

const BookList = () => {
  return (
    <section className="bookList">
        {books.map((book)=> {
          const {image, author, title} = book;
          return(
           <Book book={book}></Book>
          )
        })}
    </section>
  );
};

const Book = (props) => {
  const { title, image, author, children} = props.book;
  return (
    <article className="book">
      <img alt="The Deep End" src={image} height="200" width="200"></img>
      <h1>{title}</h1>
      {children}
      <h4 style={{ color: "#617d98", fontSize: "0.75rem" }}>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
