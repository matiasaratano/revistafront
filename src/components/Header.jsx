import React from 'react';
import Logo from '../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fas);

const iconBars = document.querySelector('.icono-lista');
const menuSmallOk = () => {
  console.log('prueba');
  iconBars.classList.toggle('.icono-cerrar');
};

const Header = () => {
  return (
    <nav>
      <div className="itemNav">
        <div className="itemLogo">
          <img className="logo-img" src={Logo} id="home" alt="logo" />
        </div>
        <div className="itemSearch">
          <input id="buscar" type="text" placeholder="Escriba aquí..." />
          <FontAwesomeIcon
            className="icono-lupa"
            icon="fa-solid fa-magnifying-glass"
          />
          {/* <div id="starSearch" class="fa fa-search buttonSearch"></div> */}
        </div>
        <div className="contenedorBars">
          <FontAwesomeIcon
            className="icono-lista"
            icon="fa-solid fa-bars"
            onClick={menuSmallOk}
          />
          <FontAwesomeIcon icon="fa-solid fa-xmark" className="icono-cerrar" />

          {/* <div class="fa fa-bars bars"></div> */}
        </div>

        <ul className="menuSmall" id="nav"></ul>
      </div>
    </nav>
  );
};

export default Header;
