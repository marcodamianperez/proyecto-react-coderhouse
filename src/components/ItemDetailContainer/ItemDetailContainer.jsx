import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getBook } from "../../asyncMock";

const ItemDetailContainer = () => {
  const [book, setBook] = useState(null);
  const { idItem } = useParams();

  useEffect(() => {
    getBook(idItem)
      .then((response) => setBook(response))
      .catch((error) => console.log(error));
  }, [idItem]);

  return <ItemDetail {...book} />;
};

export default ItemDetailContainer;
