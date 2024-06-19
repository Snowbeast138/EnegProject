import Navbar from "../../components/NavBar";
import PropuestaMejora_template from "./PropuestaMejora_template";
import FooterBar from "../../components/FooterBar";

function PropuestaMejora() {
  return (
    <div className="p-4">
      <Navbar />
      <PropuestaMejora_template />
      <FooterBar />
    </div>
  );
}

export default PropuestaMejora;
