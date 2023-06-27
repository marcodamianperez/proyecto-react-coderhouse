import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <BrowserRouter basename="/proyecto-react-coderhouse/">
        <NavBar link1={"Más Vendidos"} link2={"Novedades"} />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/categoria/:idCategoria"
            element={<ItemListContainer />}
          />
          <Route path="/item/:idItem" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
