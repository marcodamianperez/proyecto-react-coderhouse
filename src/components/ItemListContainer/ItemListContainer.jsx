import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import { getBooks, getBooksByCategory } from "./../../asyncMock.js";

const ItemListContainer = ({ greeting }) => {
  const [books, setBooks] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    const getBooksHandler = idCategoria ? getBooksByCategory : getBooks;
    getBooksHandler(idCategoria)
      .then((response) => setBooks(response))
      .catch((error) => console.log(error));
  }, [idCategoria]);

  return (
    <div className="container">
      <h1 className="heading-primary">{greeting}</h1>
      <ItemList books={books} />
    </div>
  );
};

export default ItemListContainer;
