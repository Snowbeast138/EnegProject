import Navbar from "../../components/NavBar";
import Galeria_template from "./Galeria_template";
import FooterBar from "../../components/FooterBar";

function Galeria() {
  return (
    <div className="p-4">
      <Navbar />
      <Galeria_template />
      <FooterBar />
    </div>
  );
}

export default Galeria;
