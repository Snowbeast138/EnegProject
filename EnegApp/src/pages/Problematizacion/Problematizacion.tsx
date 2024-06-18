import React from "react";
import Problematizacion_template from "./Problematizacion_template";
import FooterBar from "../../components/FooterBar";
import Navbar from "../../components/NavBar";

function Problematizacion() {
  return (
    <div className="p-4">
      <Navbar />
      <Problematizacion_template />
      <FooterBar />
    </div>
  );
}

export default Problematizacion;
