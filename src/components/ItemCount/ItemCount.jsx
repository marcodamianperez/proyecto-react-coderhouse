import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  const decrementCounter = () => {
    counter > initial && setCounter(counter - 1);
  };

  const incrementCounter = () => {
    counter < stock && setCounter(counter + 1);
  };

  return (
    <div className="item-count">
      <div className="item-count__header">
        <button className="btn">
          <i className="bi bi-dash-circle" onClick={decrementCounter}></i>
        </button>
        <span>{counter}</span>
        <button className="btn">
          <i className="bi bi-plus-circle" onClick={incrementCounter}></i>
        </button>
      </div>
      <button
        onClick={() => onAdd(counter)}
        disabled={!stock}
        className="btn btn__solid"
      >
        Agregar al carrito
      </button>
      <span className="item-count__stock">Stock disponible: {stock}</span>
    </div>
  );
};

export default ItemCount;
