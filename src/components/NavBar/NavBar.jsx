import CartWidget from "../CartWidget/CartWidget";

const NavBar = ({ link1, link2, link3 }) => {

  const open = () => {
    // Cambio las tres línea del menu hamburguesa por la cruz
    const hamburgerBtn = document.querySelector('#hamburger');
    hamburgerBtn.classList.toggle('toggleBtn')

    // Muestro los ítems del menú
    const navbarItems = document.querySelector('#navbar-items');
    navbarItems.classList.toggle('toggleMenu');

  }

  return (
    <nav className='navbar'>
        {/* Utilizo <span> para los links porque el profe mencionó que
        en react no se usan las etiquetas <a> para enlaces internos */}
        <span className='navbar__brand'>
            <img src="./logo.png" alt="logo" />
        </span>
        <div className='hamburger' id='hamburger' onClick={open}>
            <div className='hamburger__line hamburger__line--1'></div>
            <div className='hamburger__line hamburger__line--2'></div>
            <div className='hamburger__line hamburger__line--3'></div>
        </div>

        <ul className='navbar__items' id='navbar-items'>
            <li className='navbar__item'><span className='navbar__link'>{ link1 }</span></li>
            <li className='navbar__item'><span className='navbar__link'>{ link2 }</span></li>
            <li className='navbar__item'><span className='navbar__link'>{ link3 }</span></li>
            <CartWidget />
        </ul>
    </nav>
  )
}

export default NavBar