import React from "react";
import Title from "../../components/Title";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Image } from "primereact/image";
import Paragraph from "../../components/Paragraph";
import Video from "../../components/Video";

const ObjetivosEspecifico = [
  {
    objetivo:
      "Buscar el razonamiento de los alumnos acerca de los alimentos que ingieren. ",
  },
  {
    objetivo:
      "Lograr que los alumnos reconozcan los alimentos que son saludables y necesarios para su crecimiento.",
  },
  {
    objetivo:
      "Informar y concientizar a los padres de familia acerca de la importancia de una buena alimentación, así como incentivar a que se tome en cuenta y pongan en práctica nuevos hábitos alimenticios.",
  },
];

function Objetivo_template() {
  return (
    <div>
      <Title content="Objetivos" />
      <Paragraph>
        Crear conciencia en los alumnos y padres de familia sobre la
        alimentación, así mismo, promover el consumo de alimentos saludables e
        informar sobre lo que es una dieta balanceada y las consecuencias que
        pueden presentarse en el caso de no llevarlo a cabo.
      </Paragraph>
      <Video link="https://www.youtube.com/embed/cFUaHGlF0Dk?si=UPAIfG8VtZAL3MmZ" />
      <div className="card">
        <DataTable
          value={ObjetivosEspecifico}
          tableStyle={{ minWidth: "50rem" }}
        >
          <Column field="objetivo" header="Objetivos Especificos"></Column>
        </DataTable>
      </div>
    </div>
  );
}

export default Objetivo_template;
