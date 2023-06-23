import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({
  name,
  author,
  price,
  picture,
  editorial,
  pages,
  genre,
  stock,
  sinopsis,
}) => {
  return (
    <div className="container">
      <article className="book">
        <div className="book__img">
          <div className="book__img-container">
            <img src={picture} alt={`${name} cover`} />
          </div>
        </div>
        <div className="book__header">
          <h1 className="book__header-title">{name}</h1>
          <span className="book__header-author">{author}</span>
          <span className="book__header-price">${price}</span>
          <ItemCount
            stock={stock}
            initial={1}
            onAdd={(quantity) => console.log(`Cantidad agregada: ${quantity}`)}
          />
        </div>
        <div className="book__info">
          <h2 className="book__info-title">Sinopsis</h2>
          <p className="book__info-sinopsis">{sinopsis}</p>
          <h2 className="book__info-title">Información Adicional</h2>
          <table className="book__info-table">
            <tbody>
              <tr>
                <td>Título</td>
                <td>{name}</td>
              </tr>
              <tr>
                <td>Autor</td>
                <td>{author}</td>
              </tr>
              <tr>
                <td>Editorial</td>
                <td>{editorial}</td>
              </tr>
              <tr>
                <td>Páginas</td>
                <td>{pages}</td>
              </tr>
              <tr>
                <td>Género(s)</td>
                <td>{genre ? genre.join(", ") : ""}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    </div>
  );
};

export default ItemDetail;
