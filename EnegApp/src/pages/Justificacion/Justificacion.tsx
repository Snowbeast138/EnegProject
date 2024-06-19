import Navbar from "../../components/NavBar";
import Justificacion_template from "./Justificacion_template";
import FooterBar from "../../components/FooterBar";

function Justificacion() {
  return (
    <div className="p-4">
      <Navbar />
      <Justificacion_template />
      <FooterBar />
    </div>
  );
}

export default Justificacion;
