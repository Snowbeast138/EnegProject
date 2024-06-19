import Title from "../../components/Title";
import Paragraph from "../../components/Paragraph";
import { Image } from "primereact/image";

function Introduccion_template() {
  return (
    <div>
      <Title content="Introducción" />
      <article className="mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            <div className="mb-5">
              <Paragraph>
                En este documento de investigación, se da a conocer como la mala
                alimentación afecta directamente a los niños en edad preescolar,
                desde su desarrollo físico, mental y cognitivo, al mostrarse
                como una problemática de gran impacto se busca una
                concientización sobre la misma, pues parte desde el hogar y
                afecta a largo plazo la vida de los estudiantes y su desempeño
                académico.
              </Paragraph>
            </div>
            <div className="mb-5">
              <Paragraph>
                Por lo cual en este proyecto integrador se recaba la información
                y las estrategias de mejora necesarias para la mitigación o la
                solución a esta problemática en los jardines de niños. En el 2do
                semestre de la carrera de educación preescolar se adquirió el
                conocimiento necesario relacionado a cada asignatura de la
                misma, el cual ayuda a identificar las características de los
                niños con una mala alimentación, los riesgos y las consecuencias
                de la misma.
              </Paragraph>
              <Paragraph>
                Cada una de las nueve asignaturas muestran distintos enfoques
                con los cuales se puede relacionar directa e indirectamente la
                problemática seleccionada, la cual es: “Mala alimentación en los
                niños y las niñas”, las prácticas se llevaron a cabo en el
                preescolar “JN 213, Maria Guadalupe Cosio Vidaurri” ubicado en
                “Hortensia 884, Agrícola, 45236 Zapopan, Jal.”, dentro del cual
                se identificaron muchísimos niños con una mala alimentación, la
                jornada permitió recabar la información necesaria por medio de
                la observación continua de los niños en cada una de sus aulas,
                con lo cual se puede afirmar que la problemática seleccionada es
                verídica y perjudicial para todos los niños y las niñas.
              </Paragraph>
              <Paragraph>
                Este documento tomó información verídica de muchas fuentes
                seguras y confiables, se muestran datos específicos y
                situaciones cotidianas, en donde se ve reflejado el problema en
                cuestión.
              </Paragraph>
            </div>
          </div>
          <div
            className="justify-self-center"
            style={{
              justifySelf: "center",
            }}
          >
            <Image
              src="https://th.bing.com/th/id/OIG4.21zzfbjJoOBGmRWwbMAn?w=1024&h=1024&rs=1&pid=ImgDetMain"
              alt="Image"
              preview
            />
          </div>
        </div>
      </article>
    </div>
  );
}

export default Introduccion_template;
