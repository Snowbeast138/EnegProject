import React from "react";
import Title from "../../components/Title";
import Paragraph from "../../components/Paragraph";
import { Image } from "primereact/image";

//TODO:add respective images to the Image components

function Problematizacion_template() {
  return (
    <div>
      <Title content="Problematización" />
      <article className="mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            <div className="mb-5">
              <Paragraph>
                Al terminar la segunda jornada de prácticas del 2do semestre de
                la carrera en educación preescolar, se llegó a la conclusión de
                tomar como problemática a la mala alimentación en niñas y niños,
                puesto que se observó que había una gran desinformación sobre
                como debe de ser una dieta saludable y equilibrada en los niños
                de edad preescolar, puesto que; en México la ingesta de
                alimentos ultra procesados se volvió más recurrente y amenazante
                para la salud, esto debido a que el 40% de las calorías que
                ingieren los niños y niñas de educación básica (preescolar)
                proviene de dichos productos.
              </Paragraph>
            </div>
            <div className="mb-5">
              <Paragraph>
                Según la Encuesta de Salud y Nutrición 2020 publicada por el
                Instituto Nacional de Salud Pública de México (INSP) los alumnos
                de cuatro de cada cinco instituciones ingieren de manera
                recurrente bebidas azucaradas y una de cada tres se alimentan de
                verduras todos los días.
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
              src="https://tse2.mm.bing.net/th?id=OIG3.lc.ADkDmcUXtUFbDj_qD&pid=ImgGn"
              alt="Image"
              preview
            />
          </div>
        </div>
      </article>
      <article className="mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
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
          <div>
            <div className="mb-5">
              <Paragraph>
                El informe realizado por UNICEF en septiembre del 2019 “La
                alimentación de niñas y niños pequeños no ha mejorado en la
                última década y podría empeorar aún mucho más con la COVID-19”
                hace énfasis en que uno de cada cinco niños y niñas menores de
                cinco años han sido diagnosticados con mala nutrición, ya sea
                sobrepeso, obesidad, desnutrición crónica, la cual es un proceso
                por el cual las reservas orgánicas que el cuerpo ha ido
                acumulando mediante la ingesta alimentaria se agotan debido a
                una carencia calórico-proteica. Retrasando el crecimiento de
                fetos, infantes, niños y adolescentes.
              </Paragraph>
            </div>
            <div className="mb-5">
              <Paragraph>
                Así mismo, se puede presentar un diagnóstico de carencia en
                micronutrientes que pueden ocasionar una salud ocular
                deficiente, bajo peso al nacer y un impacto negativo en el
                desarrollo físico y cognitivo de los niños, y aumenta el riesgo
                de enfermedades crónicas en los adultos.
              </Paragraph>
            </div>
          </div>
        </div>
      </article>
      <article className="mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            <div className="mb-5">
              <Paragraph>
                Como se menciona en el informe “El Estado Mundial de la Infancia
                2019: Niños, alimentos y nutrición” Describe una triple carga de
                malnutrición: la desnutrición, el hambre oculta, causada por la
                falta de nutrientes esenciales, y el sobrepeso entre los niños
                menores de 5 años, al tiempo que señala que en todo el mundo:
              </Paragraph>
              <ul className="px-5 list-disc">
                <li>
                  <Paragraph>
                    149 millones de niños padecen de retraso en el crecimiento,
                    o son demasiado pequeños para su edad
                  </Paragraph>
                </li>
                <li>
                  <Paragraph>
                    50 millones de niños sufren de emaciación, o son demasiado
                    delgados para su estatura
                  </Paragraph>
                </li>
                <li>
                  <Paragraph>
                    340 millones de niños –es decir, 1 de cada 2– sufren
                    carencias de vitaminas y nutrientes esenciales, como la
                    vitamina A y el hierro
                  </Paragraph>
                </li>
                <li>
                  <Paragraph>
                    40 millones de niños tienen sobrepeso o son obesos.
                  </Paragraph>
                </li>
              </ul>
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

export default Problematizacion_template;
