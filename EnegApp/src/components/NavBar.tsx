import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import Logo from "../assets/Logo_Eneg.jpg";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const items: MenuItem[] = [
    {
      label: "Introducción",
      icon: "pi pi-home",
      command: () => navigate("/Introduccion"),
    },
    {
      label: "Problematización",
      icon: "pi pi-exclamation-triangle",
      command: () => navigate("/Problematizacion"),
    },
    {
      label: "Planteamiento del problema",
      icon: "pi pi-sitemap",
      command: () => navigate("/Planteamiento"),
    },
    {
      label: "Justificación",
      icon: "pi pi-comments",
      command: () => navigate("/Justificacion"),
    },
    {
      label: "Objetivos",
      icon: "pi pi-list",
      command: () => navigate("/Objetivos"),
    },
    {
      label: "Hipótesis",
      icon: "pi pi-check",
      command: () => navigate("/Hipotesis"),
    },
    {
      label: "Propuesta de Mejora",
      icon: "pi pi-user-plus",
      command: () => navigate("/Propuesta"),
    },
    {
      label: "Galería",
      icon: "pi pi-images",
      command: () => navigate("/Galeria"),
    },
  ];

  const start = (
    <>
      <img
        src={Logo}
        alt="Logo"
        className="cursor-pointer w-16"
        onClick={() => {
          navigate("/");
        }}
      />
    </>
  );

  return (
    <div>
      <Menubar model={items} start={start} className="mb-4" />
    </div>
  );
}

export default Navbar;
