import Navbar from "../../components/NavBar";
import Planteamiento_template from "./Planteamiento_template";
import FooterBar from "../../components/FooterBar";

function Planteamiento() {
  return (
    <div className="p-4">
      <Navbar />
      <Planteamiento_template />
      <FooterBar />
    </div>
  );
}

export default Planteamiento;
