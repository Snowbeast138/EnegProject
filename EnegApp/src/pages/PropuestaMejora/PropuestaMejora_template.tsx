import Title from "../../components/Title";
import Paragraph from "../../components/Paragraph";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Panel } from "primereact/panel";
import { Image } from "primereact/image";

function PropuestaMejora_template() {
  return (
    <div>
      <Title content="Propuestas de Mejora" />
      <Paragraph>
        En este apartado se muestran las propuestas de mejora diseñadas para dar
        una posible solución o mitigación a nuestra problemática, de igual forma
        la manera en que las asignaturas se relacionan y aportan aspectos
        significativos respecto a la adquisición de hábitos saludables para una
        buena alimentación y en consecuencia tener un desarrollo físico, mental
        y emocional satisfactorio.
      </Paragraph>
      <div className="card">
        <Accordion activeIndex={0}>
          <AccordionTab header="Propuesta de mejora relacionada a la materia de Inglés: Comunicación básica">
            <Panel header="Objective:" toggleable>
              <p className="m-0">
                Preschool students should be able to identify what a good diet
                should be like and be aware of what are healthy and unhealthy
                foods, so that they can acquire good eating habits through the
                use of gameboards, videos and songs about good habits.
              </p>
            </Panel>
            <Panel header="PDA:" toggleable>
              <p className="m-0">
                Attention to the body and health: Identifies their own physical
                traits and qualities and recognises those of others. Engages in
                physical activity through motor play and knows that it is good
                for health.
              </p>
            </Panel>
            <Panel header="Warm up:" toggleable>
              <Panel>
                The purpose of this activity is that preschool students are able
                to identify the different kinds of foods and recognize if they
                are having a good diet and good habits.
              </Panel>
              <ul className="px-5 list-disc">
                <p>Question time:</p>
                <li>Do you know about healthy foods?</li>
                <li>Which healthy foods do you know?</li>
                <li>Why do you think they're healthy?</li>
                <li>
                  <p>Put a song about good nutrition:</p>
                  <a href="https://www.youtube.com/watch?v=C1SDXOP6Fbc">
                    https://www.youtube.com/watch?v=C1SDXOP6Fbc
                  </a>
                </li>
              </ul>
              <ul className="px-5 list-disc">
                <p>Feedback about the video:</p>
                <li>What foods were shown in the video??</li>
                <li>Which foods do you eat most?</li>
                <li>Why it is important to eat healthy?</li>
              </ul>
            </Panel>
            <Panel header="Development:" toggleable>
              <p className="m-0">
                Materials: Board, pictures of healthy and unhealthy foods
                Activity: On the board, a chart will be made with the words
                "healthy" at the top and "unhealthy" at the bottom.
              </p>
              <ul className="px-5 list-disc">
                <p>Instructions:</p>
                <li>
                  Go to the board and place the food pictures where they think
                  they should go.
                </li>
                <li>Review together the placement of the foods.</li>
              </ul>
            </Panel>
            <Panel header="Closure:" toggleable>
              <article className="mb-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  <div>
                    <div className="mb-5">
                      <Paragraph>
                        Flashcard game of healthy and unhealthy foods.
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
                      src="https://www.editorialmd.com/wp-content/uploads/imagen_2024-05-16_162318706-380x267.png"
                      alt="Image"
                      preview
                    />
                  </div>
                </div>
              </article>
              <ul className="px-5 list-disc">
                <p>Question time:</p>
                <li>How many healthy foods did you find?</li>
                <li>How many unhealthy foods did you find?.</li>
                <li>Why do you think the healthy ones are more?</li>
              </ul>
              <p>Homework:eat healthily</p>
            </Panel>
          </AccordionTab>
          <AccordionTab header="Propuesta de mejora relacionada a la materia de Lenguaje y ambientes alfabetizadores">
            <article className="mb-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div>
                  <div className="mb-5">
                    <Paragraph>
                      Dentro de este apartado se describe la relación que existe
                      entre la problemática y la materia de Lenguajes y
                      ambientes alfabetizadores. Según Emilia Ferreiro “Llamamos
                      Ambiente Alfabetizador a un ambiente dinámico de
                      interacción donde se propicia el contacto con diferentes
                      usuarios y portadores de textos, a través de actividades
                      que ayudan a los niños a explorar, descubrir y construir
                      conocimiento acerca del lenguaje”. (Ferreiro, s.f)
                    </Paragraph>
                    <Paragraph>
                      Tomando en cuenta la importancia de la interacción de los
                      infantes para adquirir un ambiente alfabetizador, se
                      propone una actividad llamada “Semáforo alimenticio” en el
                      cual se coloca una cartulina dividida en tres colores, en
                      los cuales será representado el semáforo donde se les
                      proporcionarán dibujos de alimentos saludables, medio
                      saludables y no saludables, los clasificaron y pegaran en
                      el color correspondiente, dependiendo del nivel de consumo
                      que se tenga este, promoviendo la identificación de
                      alimentos, colores y palabras de los mismos. Debajo de
                      cada dibujo estará escrita la palabra del alimento y
                      dentro de la cartulina la clasificación del color, para
                      que los alumnos de manera gradual ejerzan un ambiente
                      alfabetizador por medio de la clasificación de los
                      alimentos dentro de sus hábitos saludables
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
                    src="https://thumbor.novaescola.org.br/AcTMeptT1a5MROkcGBZ6ZWj1bL4=/nova-escola-producao.s3.amazonaws.com/hb9EURjvA4vagHJj9nsTC7hBGvaqVfhcKWewbw8BszYbdmWHyjWrWGQVwezQ/ambiente-alfabetizador-2.jpg"
                    alt="Image"
                    preview
                  />
                </div>
              </div>
            </article>
          </AccordionTab>
          <AccordionTab header="Propuesta de mejora relacionada a la materia de Construcción didáctica del pensamiento matemático en el preescolar">
            <article className="mb-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div>
                  <div className="mb-5">
                    <Paragraph>
                      Dentro de este apartado se muestra la relación y actividad
                      seleccionada para trabajar en la solución o mitigación de
                      la problemática con la materia de Construcción didáctica
                      del pensamiento matemático en el preescolar.
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
                    src="https://i.ibb.co/72ysb98/imagen-2024-06-18-192546859.png"
                    alt="Image"
                    preview
                  />
                </div>
              </div>
              <Paragraph>
                Se creó la actividad lúdica llamada “¿Que hay más?”, en dónde se
                va a desarrollar desde el conteo hasta la resolución de
                problemas, pues se mostrarán las cartas a los niños y se pedirá
                que pasen al pizarrón, en donde habrá un cuadro que estará
                dividido en dos, en el cuál la parte de arriba será nombrada
                “alimentos saludables” y la parte de abajo será nombrada
                “alimentos NO saludables”, en donde ellos acomodarán los
                alimentos según el grupo al que pertenezcan, al final se pedirá
                contar los dos grupos y ver cuál de los mismo tiene más,
                explicando que el mayor número es el de los alimentos
                saludables, puesto que es lo que más de debe consumir para
                lograr un estado físico, mental y emocional adecuado. Al igual
                que se explicará por qué los alimentos NO saludables son menos,
                puesto que es de lo que menos se debe consumir, al no aportar
                nutrientes, ni beneficios al cuerpo humano y su desarrollo. La
                finalidad de esta actividad es desarrollar el conteo en los
                niños y al mismo tiempo crear conciencia de cómo debe ser una
                alimentación balanceada.
              </Paragraph>
            </article>
          </AccordionTab>
          <AccordionTab header="Propuesta de mejora relacionada a la materia de Filosofía y sociología de la educación">
            <p className="m-0">
              La materia de Filosofía y sociología de la educación está
              relacionada con la problemática de acuerdo a los siguientes
              autores que se vieron a lo largo del curso. Según Rousseau “Educar
              al niño según su naturaleza, implica proveer de las herramientas
              más eficaces para que pueda vivir y vivir bien” (Rousseau, s.f)
              esto tiene relación con la problemática en el aspecto de la
              alimentación, pues es de suma importancia brindarle las
              herramientas necesarias para que los alumnos tomen conciencia de
              la importancia de la alimentación para poder vivir bien, además de
              que al tener las herramientas necesarias podrán hacerlo de manera
              autónoma. De igual forma el teórico Heidegger abona a la
              problemática con su filosofía de la educación existencialista, en
              la cual él nos dice “la responsabilidad individual, la libertad y
              el significado de la vida son parte de la condición humana”
              (Heidegger, s.f). En este aspecto se puede ver que es de suma
              importancia el crear una responsabilidad individual a nuestros
              alumnos, en este caso sobre su alimentación. Ambas filosofías se
              centran en la importancia de la individualidad y responsabilidad
              del alumno, pues si bien es importante la participación de los
              padres de familia en su desarrollo personal es también de suma
              importancia que los niños y niñas aprendan a ser autónomos desde
              la etapa preescolar, esto con el fin de que tomen conciencia del
              cuidado de su alimentación desde una perspectiva personal, donde
              al obtener conocimiento de la alimentación saludable ellos y ellas
              desarrollen su pensamiento crítico al ser responsables de sus
              hábitos alimenticios.
            </p>
          </AccordionTab>
          <AccordionTab header="Propuesta de mejora relacionada a la materia de Análisis de prácticas y contextos escolares">
            <p className="m-0">
              La materia de Análisis de prácticas se relaciona con la
              problemática en los materiales utilizados para recabar información
              que sustente y abone a la misma, pero primordialmente la materia
              brinda las herramientas necesarias para identificar la
              problemática. A continuación se muestran algunas de estas
              herramientas. La principal herramienta utilizada durante este
              proyecto es la observación, porque en primera instancia es
              requerido el observar o analizar el entorno en el se encuentra
              para así rescatar algún problema con la finalidad de buscar
              posibles soluciones. Otra de las principales herramientas
              utilizadas en este proyecto es la entrevista, Kvale nos dice que
              “La entrevista cualitativa es un camino clave para explorar la
              forma en que los sujetos experimentan y entienden su mundo.
              Proporciona un acceso único al mundo vivido de los sujetos, que
              describen en sus propias palabras sus actividades, experiencias y
              opiniones”. (Kvale, 2008) es por esto que se entrevistó a las
              diferentes personalidades que se encuentran en el preescolar, con
              la intención de recabar información importante para el proyecto.
              Para sustentar más a fondo lo dicho anteriormente Kavale nos dice
              también que “La entrevista es una conversación que tiene una
              estructura y un propósito determinados por una parte: el
              entrevistador. Es una interacción profesional que va más allá del
              intercambio espontáneo de ideas como en la conversación cotidiana
              y se convierte en un acercamiento basado en el interrogatorio
              cuidadoso y la escucha con el propósito de obtener conocimiento
              meticulosamente comprobado”. (Kvale, 2008) Por último otra de las
              herramientas utilizadas es la documentación narrativa, la cual
              según el manual de capacitación sobre registro y sistematización
              de experiencias pedagógicas se entiende como “La competencia del
              narrador de experiencias escolares consiste, entonces, en
              seleccionar los argumentos, los datos, las sensaciones, y en
              disponer las formas de lenguaje que provocan las imágenes de esa
              experiencia en el lector de manera inteligente. Tomar palabras e
              imágenes de eso que pasó y nos pasó para que un/a otro/a docente
              lector se encuentre en ese relato, y que nuestra experiencia lo
              conmueva a él. Y lo conmueva transformando, agregando, movilizando
              su pensamiento y su acción; promoviendo, apoyando o cuestionando
              su práctica diaria.” (Suárez, Ochoa, Dávila, s.f) esta
              documentación narrativa es de suma importancia para el desarrollo
              de la problemática, pues es de gran ayuda para presentarla ante el
              público de forma conmovedora, provocando así, un impacto en los
              lectores. Finalmente se puede concluir que en esta materia hay
              gran cantidad de lecturas y herramientas que pueden aportar
              demasiado al desarrollo de la problemática, pero, aún con todo
              esto se tomaron las tres anteriores como principal apoyo del
              proyecto pues son las que brindan una mayor área de oportunidad al
              desarrollar el trabajo.
            </p>
          </AccordionTab>
          <AccordionTab header="Propuesta de mejora relacionada a la  materia de Estudio del mundo natural y social desde la comunidad">
            <article className="mb-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div>
                  <div className="mb-5">
                    <Paragraph>
                      Dentro de este apartado se muestra la propuesta de mejora
                      relacionada con la materia de Estudio del mundo natural y
                      social desde la comunidad, mostrando las posibles
                      aplicaciones de la materia sobre la problemática
                      seleccionada como una ayuda a la mitigación o solución a
                      la misma. En el curso se han visto muchas actividades que
                      nos pueden ayudar a promover y crear hábitos en los
                      alumnos, así como la participación de los padres de
                      familia en el uso del medio que nos rodea para obtener un
                      bien común.
                    </Paragraph>
                  </div>
                  <div className="mb-5">
                    <Paragraph>
                      El contexto escolar del preescolar es complicado y las
                      personas están desinformadas acerca de la importancia de
                      llevar hábitos saludables, específicamente la
                      alimentación, no saben cómo influye en el desarrollo de
                      los alumnos, además que no se cuenta con los recursos
                      necesarios para llevar una dieta balanceada y no buscan
                      alternativas para poder llevarla.
                    </Paragraph>
                    <Paragraph>
                      “Los hábitos alimentarios están estrechamente relacionados
                      con la cultura y la tradición de una comunidad. Estas
                      influencias pueden ser importantes en la formación de
                      patrones alimentarios saludables o no saludables. Por
                      ejemplo, las tradiciones socioculturales pueden basarse en
                      los recursos naturales disponibles, formas sociales y
                      religiosas, gastronomía local, celebraciones y transmisión
                      de procedimientos culinarios, entre otros factores”. (Red
                      de Malnutrición en Iberoamérica del Programa de Ciencia y
                      Tecnología para el Desarrollo, 2010)
                    </Paragraph>
                    <Paragraph>
                      Por lo que se cree importante que se conozcan alternativas
                      para crear sus propios alimentos, los cuales sean
                      saludables, orgánicos y de poco costo. Una actividad la
                      cual se puede implementar es crear germinado de lenteja,
                      el cual puede utilizarse en distintos alimentos, siendo
                      este saludable y una gran alternativa para la alimentación
                      de los alumnos.
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
                    src="https://tse2.mm.bing.net/th?id=OIG4.YEEhD0CW86ICpsByIHgQ&pid=ImgGn"
                    alt="Image"
                    preview
                  />
                </div>
              </div>
            </article>
          </AccordionTab>
          <AccordionTab header="Propuesta de mejora relacionada a la materia de Neuro educación, desarrollo emocional y aprendizaje en la primera infancia">
            <article className="mb-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div>
                  <div className="mb-5">
                    <Paragraph>
                      Una buena alimentación es de los principales elementos
                      para un buen neurodesarrollo de los niños. Esta asignatura
                      tiene una relación muy importante con la problemática que
                      fue detectada en el jardín de niños, ya que esta es una
                      forma de incitar a los padres de familia a que sus hijos
                      lleven una buena alimentación. La forma en la que se puede
                      aplicar es hacer del conocimiento de los padres la
                      importancia y los beneficios de tener hábitos saludables
                      en sus vidas.
                    </Paragraph>
                  </div>
                  <div className="mb-5">
                    <Paragraph>
                      Según José Alberto Hernández Luna “es importante que la
                      alimentación adecuada proporcione los nutrientes
                      esenciales necesarios para el crecimiento y desarrollo del
                      cerebro. Estos nutrientes incluyen proteínas,
                      carbohidratos complejos, ácidos grasos omega 3 y otros
                      micronutrientes esenciales para el desarrollo neurológico.
                      de igual forma influye en el desarrollo cerebral donde el
                      neurodesarrollo es un proceso crítico en la vida del niño,
                      especialmente durante los primeros cinco años. La
                      alimentación adecuada es fundamental para el desarrollo
                      cerebral, ya que la mielinización, la sinaptogénesis y la
                      proliferación celular dependen de una nutrición saludable.
                      Una mala nutrición o desnutrición en períodos críticos del
                      desarrollo puede producir cambios permanentes en una
                      función específica. Por ejemplo, una disminución calórica
                      o una alimentación inadecuada puede generar deficiencias
                      de minerales y vitaminas, afectando el crecimiento y el
                      desarrollo cerebral”. (Hernández Luna, 2018).
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
                    src="https://tse3.mm.bing.net/th?id=OIG1.tDybk_IPh4cJnNdshWqr&pid=ImgGn"
                    alt="Image"
                    preview
                  />
                </div>
              </div>
            </article>
          </AccordionTab>
        </Accordion>
      </div>
    </div>
  );
}

export default PropuestaMejora_template;
