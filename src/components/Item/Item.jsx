
const Item = ({ id, name, author, price, picture }) => {
  return (
    <div key={id} className="card">
      <div className="card__img">
        <img src={picture} alt={`${name} by ${author}`}/>
      </div>
      <h3 className="card__title" title={name}>{name}</h3>
      <span className="card__author" title={author}>{author}</span>
      <span className="card__price">${price}</span>
      <button className="btn btn__solid btn__solid--small">Detalle</button>
    </div>
  )
}

export default Item