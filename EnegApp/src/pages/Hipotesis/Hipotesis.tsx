import React from "react";
import Navbar from "../../components/NavBar";
import Hipotesis_template from "./Hipotesis_template";
import FooterBar from "../../components/FooterBar";

function Hipotesis() {
  return (
    <div className="p-4">
      <Navbar />
      <Hipotesis_template />
      <FooterBar />
    </div>
  );
}

export default Hipotesis;
