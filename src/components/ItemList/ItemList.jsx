import Item from "../Item/Item"


const ItemList = ({books}) => {
  return (
    <div>
        {books.map(book => <Item key={book.id} {...book}/>)}
    </div>
  )
}

export default ItemList