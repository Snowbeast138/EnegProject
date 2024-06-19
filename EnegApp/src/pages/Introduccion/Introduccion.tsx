import Introduccion_template from "./Introduccion_template";
import FooterBar from "../../components/FooterBar";
import Navbar from "../../components/NavBar";

function Introduccion() {
  return (
    <div className="p-4">
      <Navbar />
      <Introduccion_template />
      <FooterBar />
    </div>
  );
}

export default Introduccion;
