import React from "react";
import Title from "../../components/Title";
import Paragraph from "../../components/Paragraph";
import { Image } from "primereact/image";

function Hipotesis_template() {
  return (
    <div>
      <Title content="Hipotesís" />
      <article className="mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            <div className="mb-5">
              <Paragraph>
                La alimentación saludable tiene un impacto positivo en el
                comportamiento escolar de los niños de preescolar, mejorando su
                concentración, participación y rendimiento académico por lo que
                se cree que a partir de esta investigación los padres tomarán
                conciencia acerca de la importancia de una buena alimentación
                durante la etapa de preescolar, la cual es nuestro principal
                enfoque. de igual forma los niños aprenderán y conocerán lo que
                significa llevar una alimentación saludable, reconociendo lo que
                deben y lo que no deben comer.
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
              src="https://tse4.mm.bing.net/th?id=OIG3.l93VuS3hM.MQwjSlGVPP&w=270&h=270&c=6&r=0&o=5&pid=ImgGnpero"
              alt="Image"
              preview
            />
          </div>
        </div>
      </article>
    </div>
  );
}

export default Hipotesis_template;
