import React from "react";
import "./styles/Footer.css";

const enlacesExternos = [
  {
    textoAlternativo: "cineArTv",
    srcDelLogo: "http://cine.ar/img/tv.cine.ar.svg",
  },
  {
    textoAlternativo: "cineArPlay",
    srcDelLogo: "http://cine.ar/img/play.cine.ar.svg",
  },
  {
    textoAlternativo: "cineArEstrenos",
    srcDelLogo: "http://cine.ar/img/estrenos.cine.ar.svg",
  },
];

const transformarEnlacesExternos = enlacesExternos.map(
  ({ textoAlternativo, srcDelLogo }) => (
    <li className="li-logo">
      <a className="a-logo" href="/">
        <img
          className="img-logo "
          src={srcDelLogo}
          alt={textoAlternativo}
        />
      </a>
    </li>
  )
);

const logosEnd = [
  {
    textoAlternativo: "CineAr",
    srcDelLogo: "http://cine.ar/img/logo-cinear.svg",
  },
  {
    textoAlternativo: "CineAr",
    srcDelLogo: "http://cine.ar/img/logo-arsat.svg",
  },
  {
    textoAlternativo: "CineAr",
    srcDelLogo: "http://cine.ar/img/logo-incaa.svg",
  },
];

const transformarLogos = logosEnd.map(
  ({ textoAlternativo, srcDelLogo }) => (
    <li className="li-logoEnd">
      <a className="a-logoEnd" href="/">
        <img
          className="img-logoEnd "
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
    <div className="logos">
      <ul>{transformarEnlacesExternos}</ul>
    </div>
    <div className="footerEnd">
      <div className="DR">
        <p>Todos los derechos reservados 2003-2021. República Argentina. INCAA</p>
        <p>Lima 319; Código Postal: C1073AAG, CABA; República Argentina.</p>
      </div>
    <div className="endLogos">
      <ul>{transformarLogos}</ul>
    </div>
    </div>
  </footer>
  );
};

export default PieDePagina;
