import Navbar from "../../components/NavBar";
import FooterBar from "../../components/FooterBar";
import Objetivo_template from "./Objetivo_template";

function Objetivo() {
  return (
    <div className="p-4">
      <Navbar />
      <Objetivo_template />
      <FooterBar />
    </div>
  );
}

export default Objetivo;
