import { useState, useEffect } from "react";

import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import { getBooks } from "../../asyncMock";

const ItemListContainer = ({ greeting }) => {

  const [books, setBooks] = useState([]);
    
  useEffect(() => {

      getBooks().then(response => setBooks(response));

  }, []);

  return (
    <div className="container">
        <h1 className='heading-primary'>{ greeting }</h1>
        <ItemCount stock={6} initial={1} onAdd={(quantity) => console.log(`Cantidad agregada: ${quantity}`)}/>
        <ItemList books={books}/>
    </div>
  )
}

export default ItemListContainer