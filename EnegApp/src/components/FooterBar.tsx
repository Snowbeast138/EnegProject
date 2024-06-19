import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Footer } from "flowbite-react";
// import PolicityInfo from "./FooterInfo/PolicityInfo";
import LicensingInfo from "./FooterInfo/LicensingInfo";
import AboutInfo from "./FooterInfo/AboutInfo";
import { useState } from "react";

function FooterBar() {
  const [visibleAbout, setVisibleAbout] = useState(false);
  // const [visiblePrivacity, setVisiblePrivacity] = useState(false);
  const [visibleLicensing, setVisibleLicensing] = useState(false);

  const buttonStyle = {
    padding: "10px 20px", // Ajusta estos valores según sea necesario
  };

  return (
    <div>
      <Dialog
        header="Acerca de:"
        visible={visibleAbout}
        maximizable
        style={{ width: "90vw" }}
        breakpoints={{ "960px": "75vw", "641px": "100vw" }}
        onHide={() => setVisibleAbout(false)}
      >
        <AboutInfo />
      </Dialog>

      {/* <Dialog
        header="Políticas de Privacidad:"
        visible={visiblePrivacity}
        maximizable
        style={{ width: "90vw" }}
        breakpoints={{ "960px": "75vw", "641px": "100vw" }}
        onHide={() => setVisiblePrivacity(false)}
      >
        <PolicityInfo />
      </Dialog> */}

      <Dialog
        header="Referencias Bibliográficas:"
        visible={visibleLicensing}
        maximizable
        style={{ width: "90vw" }}
        breakpoints={{ "960px": "75vw", "641px": "100vw" }}
        onHide={() => setVisibleLicensing(false)}
      >
        <LicensingInfo />
      </Dialog>

      <Footer container>
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <Footer.LinkGroup>
              <Button
                label="Acerca de"
                link
                style={buttonStyle}
                onClick={() => setVisibleAbout(true)}
              />
              {/* <Button
                label="Políticas de Privacidad"
                link
                style={buttonStyle}
                onClick={() => setVisiblePrivacity(true)}
              /> */}
              <Button
                label="Referencias Bibliográficas"
                link
                style={buttonStyle}
                onClick={() => setVisibleLicensing(true)}
              />
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.LinkGroup>
            <Footer.Copyright
              by="Flowbite™"
              href="https://www.flowbite-react.com"
              year={2024}
            />
            <Footer.Copyright
              by="PrimeReact™"
              href="https://primereact.org"
              year={2024}
            />
            <Footer.Copyright
              by="Escuela Normal para Educadoras de Guadalajara"
              href="https://www.facebook.com/OficialENEG/?locale=es_LA"
              year={2024}
            />
          </Footer.LinkGroup>
        </div>
      </Footer>
    </div>
  );
}

export default FooterBar;
