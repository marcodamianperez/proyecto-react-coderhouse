import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <>
      <NavBar link1={'Más Vendidos'} link2={'Novedades'} link3={'Ver Todo'}/>
      <ItemListContainer greeting={'Bienvenido a tu librería Online'} />
    </>
  )
}

export default App