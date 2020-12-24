const Book = (props) => {
  const { title, image, author, children } = props;
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
  };
  return (
    <article
      className="book"
      onMouseOver={(e) => {
        const object = e.target;
        object.style.backgroundColor = "#d1d1d1";
      }}
    >
      <img alt="The Deep End" src={image} height="200" width="200"></img>
      <h1 onClick={clickHandler}>{title}</h1>
      {children}
      <h4 style={{ color: "#617d98", fontSize: "0.75rem" }}>{author}</h4>
    </article>
  );
};

export default Book;