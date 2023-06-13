import { useState, useEffect } from "react";

import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {

  const [books, setBooks] = useState([]);
    
  useEffect(() => {

    const getBooks = async () => {
      try {
        const response = await fetch('./src/asyncMock.json');
        const data = await response.json();
  
        setTimeout(() => {
          setBooks(data);
        }, 2000);
      } catch (error) {
        alert('No se pudieron recuperar los datos');
      }
    }

    getBooks()

  }, []);

  return (
    <div className='container'>
        <h1 className='heading-primary'>{ greeting }</h1>
        <ItemCount stock={6} initial={1} onAdd={(quantity) => console.log(`Cantidad agregada: ${quantity}`)}/>
        <ItemList books={books}/>
    </div>
  )
}

export default ItemListContainer