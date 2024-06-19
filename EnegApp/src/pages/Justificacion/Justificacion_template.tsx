import Title from "../../components/Title";
import Paragraph from "../../components/Paragraph";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Image } from "primereact/image";
import { Accordion, AccordionTab } from "primereact/accordion";

const enfermedades = [
  {
    enfermedad: "Anemia ",
    descripcion:
      "La anemia es una afección que se desarrolla cuando la sangre produce una cantidad inferior a la normal de glóbulos rojos sanos. Si tiene anemia, su cuerpo no obtiene suficiente cantidad de sangre rica en oxígeno. La falta de oxígeno puede hacer que se sienta cansado o débil. También puede tener dificultad para respirar, mareos, dolores de cabeza o latidos cardíacos irregulares.La anemia es una afección que se desarrolla cuando la sangre produce una cantidad inferior a la normal de glóbulos rojos sanos. Si tiene anemia, su cuerpo no obtiene suficiente cantidad de sangre rica en oxígeno. La falta de oxígeno puede hacer que se sienta cansado o débil.También puede tener dificultad para respirar, mareos, dolores de cabeza o latidos cardíacos irregulares. (National Heart, Lung, and Blood Institute. (s.f.). Anemia.)",
  },
  {
    enfermedad: "Diabetes",
    descripcion:
      "Es una enfermedad metabólica crónica caracterizada por niveles elevados de glucosa en sangre (o azúcar en sangre), que con el tiempo conduce a daños graves en el corazón, los vasos sanguíneos, los ojos, los riñones y los nervios. La más común es la diabetes tipo 2, generalmente en adultos, que ocurre cuando el cuerpo se vuelve resistente a la insulina o no produce suficiente insulina. En las últimas tres décadas, la prevalencia de la diabetes tipo 2 ha aumentado drásticamente en países de todos los niveles de ingresos. La diabetes tipo 1, una vez conocida como diabetes juvenil o diabetes insulinodependiente, es una afección crónica en la que el páncreas produce poca o ninguna insulina por sí mismo. (Organización Panamericana de la Salud. (s.f.). Diabetes.)",
  },
  {
    enfermedad: "Hipertensión arterial:",
    descripcion:
      "Es una enfermedad crónica en la que aumenta la presión con la que el corazón bombea sangre a las arterias, para que circule por todo el cuerpo. El sobrepeso y la obesidad pueden aumentar la presión arterial, sube los niveles de glucosa en la sangre, colesterol, triglicéridos y ácido úrico, lo que dificulta que la sangre fluya por el organismo. (Instituto Mexicano del Seguro Social. (s.f.). Hipertensión arterial.)",
  },
  {
    enfermedad: "Enfermedades odontológicas",
    descripcion:
      "Los dientes están formados por un material duro, similar al hueso. Dentro de los dientes hay nervios y vasos sanguíneos. Los dientes son necesarios para muchas actividades que usted da por un hecho. Entre ellas se incluyen comer, hablar e inclusive, sonreír. Pero los problemas en los dientes no son para reírse. Incluyen problemas como las caries, las infecciones y los traumatismos. El síntoma más común de un problema dental es el dolor de un diente. Otros incluyen el desgaste o la caída de los dientes. Es importante que si tiene problemas en los dientes vea a un dentista. Afortunadamente, muchos trastornos dentales pueden prevenirse mediante el cuidado y la limpieza de los dientes. (MedlinePlus en formaMedlinePlus. (s.f.). Trastornos de los dientes.)",
  },
];

function Justificacion_template() {
  return (
    <div>
      <Title content="Justificación" />
      <Paragraph>
        Llevar una alimentación adecuada siempre es crucial, pero resulta aún
        más significativo en el caso de la nutrición infantil, dado que hacerlo
        bien o mal influirá directamente en su desarrollo y en las actividades
        que puedan realizar. Los niños que no consumen una dieta equilibrada
        pueden sufrir deficiencias nutricionales como falta de hierro, vitamina
        B y ácidos grasos omega-3, lo que afecta directamente a su capacidad
        para procesar información y su memoria. Además, los pequeños que
        consumen alimentos ricos en grasas saturadas y azúcares refinados suelen
        experimentar cambios en su estado de ánimo y energía, lo que repercute
        en su capacidad para concentrarse, su comportamiento y la participación
        en la escuela.Si la alimentación infantil no es la adecuada, el niño
        podría desarrollar determinadas enfermedades cardiovasculares, o sufrir
        problemas de sobrepeso y obesidad. Colegio del Valle. (s.f.). Relación
        entre la mala alimentación y el bajo rendimiento escolar. Además, en
        edades tempranas es cuando los niños adquieren los hábitos alimenticios
        y las costumbres de la vida diaria que posteriormente serán difíciles de
        cambiar. Entre las enfermedades que se pueden desarrollar por una mala
        alimentación infantil se encuentran las siguientes:
      </Paragraph>
      <div className="card">
        <DataTable value={enfermedades} tableStyle={{ minWidth: "50rem" }}>
          <Column field="enfermedad" header="Enfermedad"></Column>
          <Column field="descripcion" header="Descripcion"></Column>
        </DataTable>
      </div>
      <article className="mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            <div className="mb-5">
              <Paragraph>
                Recabando dicha información, la mayoría de las enfermedades
                provocadas por una mala alimentación son de alto riesgo para la
                vida saludable de los infantes, debido a que, al no ser muy
                común que dichas enfermedades como la anemia e hipertensión
                arterial se presenten en edades tan tempranas como son las de
                los niños de preescolar que varía entre los 3 a 6 años, debido a
                que no se fomenta hábitos alimenticios adecuados para su edad,
                se hacen presentes en sus vidas, perjudicando su desarrollo y
                desempeño.
              </Paragraph>
            </div>
            <div className="mb-5">
              <Paragraph>
                Complementando a esto, las consecuencias de un mal hábito
                alimenticio, se ven reflejadas en el desempeño del aprendizaje
                del menor, debido a que teniendo problemas de salud provocado
                por una mala alimentación son factores que afectan el desarrollo
                intelectual del menor debido a los síntomas que el mal hábito
                alimenticio y dichas enfermedades provocan.
              </Paragraph>
            </div>
            <div className="mb-5">
              <Paragraph>
                Los niños que no consumen una dieta equilibrada pueden sufrir
                deficiencias nutricionales como falta de hierro, vitamina B y
                ácidos grasos omega-3, lo que afecta directamente a su capacidad
                para procesar información y su memoria. Además, los pequeños que
                consumen alimentos ricos en grasas saturadas y azúcares
                refinados suelen experimentar cambios en su estado de ánimo y
                energía, lo que repercute en su capacidad para concentrarse, su
                comportamiento y la participación en la escuela.
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
              src="https://tse4.mm.bing.net/th?id=OIG4.7oz8GaSKClOem29vOhT8&pid=ImgGn"
              alt="Image"
              preview
            />
          </div>
        </div>
      </article>
      <div className="card">
        <Accordion activeIndex={0}>
          <AccordionTab header="Dificultad para concentrarse">
            <p className="m-0">
              La falta de nutrientes esenciales afecta la capacidad del niño
              para concentrarse y procesar información, lo que puede resultar en
              una dificultad para aprender y seguir las lecciones en la escuela.
            </p>
          </AccordionTab>
          <AccordionTab header="Fatiga y somnolencia">
            <p className="m-0">
              La mala alimentación hace que el niño se sienta cansado y
              somnoliento, lo que dificulta su participación activa en las
              actividades escolares y la interacción social.
            </p>
          </AccordionTab>
          <AccordionTab header="Problemas de comportamiento">
            <p className="m-0">
              La falta de nutrientes afecta los niveles de azúcar en la sangre
              del niño, lo que puede causar cambios de humor y comportamiento
              impulsivo en la escuela.
            </p>
          </AccordionTab>
          <AccordionTab header="Falta de asistencia y participación">
            <p className="m-0">
              Si un niño no está recibiendo una nutrición adecuada, es más
              probable que se enferme y falte a la escuela. Además, la falta de
              energía y motivación puede afectar la participación del niño en
              las actividades escolares y extracurriculares.
            </p>
          </AccordionTab>
        </Accordion>
      </div>
      <article className="mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div
            className="justify-self-center"
            style={{
              justifySelf: "center",
            }}
          >
            <Image
              src="https://tse1.mm.bing.net/th?id=OIG2.LEy_P82GhpGrk2aqVaZ2&pid=ImgGn"
              alt="Image"
              preview
            />
          </div>
          <div>
            <div className="mb-5">
              <Paragraph>
                Hay una fuerte conexión entre la mala alimentación y el bajo
                rendimiento académico, por lo que una nutrición adecuada es
                crucial para el crecimiento y desarrollo cognitivo de los niños.
                De lo contrario, podrían comenzar a obtener malas calificaciones
                y/o mostrar comportamientos agresivos hacia sus compañeros y
                profesores. (Colegio del Valle, relación entre la mala
                alimentación y el bajo rendimiento escolar).
              </Paragraph>
            </div>
            <div className="mb-5">
              <Paragraph>
                La ausencia de nutrientes esenciales como vitaminas, minerales,
                calcio, hierro, proteínas etc. intervienen en la capacidad del
                menor para mantener concentración y procesar y adquirir
                información, por ende da como resultado la dificultad para
                aprender, entender y seguir indicaciones. De igual modo, una
                mala alimentación provoca que el infante se sienta agotado y
                somnoliento, por lo que se refleja dicha consecuencia en su
                falta de participación constante y activa durante la jornada de
                clases siendo también una dificultad de concentración,
                distrayéndose o no querer hacer nada debido a su falta de
                energía. Sin embargo puede transportarse a otro extremo de esta
                consecuencia, llegando a un caso contrario, un descontrol en sí
                mismos por la hiperactividad provocada por el exceso de azúcares
                que los alimentos previamente ingeridos contienen (Colegio del
                Valle,relación entre la mala alimentación y el bajo rendimiento
                escolar)
              </Paragraph>
            </div>
            <div className="mb-5">
              <Paragraph>
                Por otro lado, debe hacerse conciencia que, aunque es importante
                un hábito saludable desde edad temprana y que se haga presente
                en la familia, se debe tener presente la distribución
                alimenticia de cada edad, las porciones y cantidades de
                nutrientes divididos en el plato varían dependiendo la edad en
                la que se encuentre, puesto que no se le puede dar un exceso
                creyendo que se “reforzará” su buena alimentación con excesos,
                pero tampoco brindar una falta o carencia de este para prevenir
                enfermedades como la diabetes, sin darse cuenta que su ausencia
                puede provocar enfermedades como la anemia. Es comprensible
                dicho temor y prevención, por ende, es importante consultar a un
                especialista en alimentación y nutrición infantil para consultar
                sus porciones adecuadas.
              </Paragraph>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Justificacion_template;
