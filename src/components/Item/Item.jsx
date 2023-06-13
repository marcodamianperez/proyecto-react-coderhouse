
const Item = ({id, name, author, price, picture}) => {
  return (
    <div key={id}>
        <img src={picture} alt={`${name} by ${author}`} />
        <h3>{name}</h3>
        <span>{author}</span>
        <span>{price}</span>
        <button>Detalle</button>
    </div>
  )
}

export default Item