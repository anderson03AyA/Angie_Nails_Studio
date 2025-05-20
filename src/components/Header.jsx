import React from 'react'
import angieImg from '../assets/angie.jpg';

const Header = () => {
return (
  <div>
    <header>
      <img
        src={angieImg}
        alt="Foto de Angie"
        style={{ width: "150px", height: "150px", borderRadius: "50%" }}
      />
      <h1 className="text header__title">Angiie Nails Studios</h1>
      <h2 className="text header__subtitle">
        📍Siberia-Orito-Putumayo💗
      </h2>
    </header>
  </div>
);
}

export default Header
