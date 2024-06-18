import { Button } from "primereact/button";
import React from "react";

function LicensingInfo() {
  return (
    <div>
      <ul style={{ listStyle: "initial", marginLeft: "50px" }} className="m-10">
        <li style={{ fontWeight: "bold" }}>
          <p>
            Luna, J. A., Hernández, I., Rojas, & Cadena, M. C. (2013). Estado
            nutricional neurodesarrollo en la primera infancia [Tesis].
          </p>
          <Button label="Políticas de Privacidad" link />
        </li>
        <li style={{ fontWeight: "bold" }}>
          Escalabilidad: se puede aumentar la capacidad de clientes y servidores
          por separado. Cualquier elemento puede ser aumentado (o mejorado) en
          cualquier momento, o se pueden añadir nuevos nodos a la red (clientes
          y/o servidores).
        </li>
        <li style={{ fontWeight: "bold" }}>
          Fácil mantenimiento: al estar distribuidas las funciones y
          responsabilidades entre varios ordenadores independientes, es posible
          reemplazar, reparar, actualizar, o incluso trasladar un servidor,
          mientras que sus clientes no se verán afectados por ese cambio (o se
          afectarán mínimamente). Esta independencia de los cambios también se
          conoce como encapsulación.
        </li>
        <li style={{ fontWeight: "bold" }}>
          {" "}
          Existen tecnologías, suficientemente desarrolladas, diseñadas para el
          paradigma de C/S que aseguran la seguridad en las transacciones, la
          amigabilidad de la interfaz, y la facilidad de empleo.
        </li>
      </ul>
    </div>
  );
}

export default LicensingInfo;
