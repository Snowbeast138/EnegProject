import { Menubar } from "primereact/menubar";
import Logo from "../assets/Logo_Eneg.jpg";
// import { useNavigate } from "react-router-dom";

function Navbar() {
  //   const navigate = useNavigate();
  const items = [
    {
      label: "Introducción",
      icon: "pi pi-home",
    },
    {
      label: "Problematización",
      icon: "pi pi-exclamation-triangle",
    },
    {
      label: "Planteamiento del problema",
      icon: "pi pi-sitemap",
    },
    {
      label: "Justificación",
      icon: "pi pi-comments",
    },
    {
      label: "Objetivos",
      icon: "pi pi-list",
    },
    {
      label: "Hipótesis",
      icon: "pi pi-check",
    },
    {
      label: "Propuesta de Mejora",
      icon: "pi pi-user-plus",
    },
    {
      label: "Galería",
      icon: "pi pi-images",
    },
  ];

  const start = (
    <>
      <img src={Logo} alt="Logo" className="cursor-pointer w-16" />
    </>
  );

  return (
    <div>
      <Menubar model={items} start={start} className="mb-4" />
    </div>
  );
}

export default Navbar;
