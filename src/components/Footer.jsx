import React from "react";
import "./styles/Footer.css";

const enlacesExternos = [
  {
    textoAlternativo: "link-Tv",
    srcDelLogo: "http://cine.ar/img/tv.cine.ar.svg",
  },
  {
    textoAlternativo: "link-Play",
    srcDelLogo: "http://cine.ar/img/play.cine.ar.svg",
  },
  {
    textoAlternativo: "link-Estrenos",
    srcDelLogo: "http://cine.ar/img/estrenos.cine.ar.svg",
  },
];

const enlacesExternosAPag = enlacesExternos.map(
  ({ textoAlternativo, srcDelLogo }) => (
    <li className="logo-CineAR">
      <a className="link-CineAR" href="/">
        <img
          className="img-Logo "
          src={srcDelLogo}
          alt={textoAlternativo}
        />
      </a>
    </li>
  )
);

const PieDePagina = () => {
  return (
  <footer>
      {enlacesExternosAPag}
      <div className="PieDePagina">
        "Todos los derechos reservados 2003-2021. República Argentina. INCAA"
        <br />
        "Lima 319; Código Postal: C1073AAG, CABA; República Argentina."
      </div>
      <ul className="link-Redes">
        <li>
          <a href="">
            <img src="http://cine.ar/img/logo-cinear.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="http://cine.ar/img/logo-arsat.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="http://cine.ar/img/logo-incaa.svg" alt="" />
          </a>
        </li>
      </ul>
  </footer>
  );
};

export default PieDePagina;
