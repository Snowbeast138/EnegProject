import "./App.css";
import FooterBar from "./components/FooterBar";
import Navbar from "./components/NavBar";
import Video from "./components/Video";

function App() {
  return (
    <div className="p-4">
      <Navbar />
      <Video link="https://www.youtube.com/embed/VuTis6DmIME?si=AZXVtThEUKV3CeML" />
      <FooterBar />
    </div>
  );
}

export default App;
