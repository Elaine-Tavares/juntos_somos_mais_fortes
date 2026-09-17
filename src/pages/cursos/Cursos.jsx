import styles from "./Cursos.module.css";

import {
  FaFutbol,
  FaFistRaised,
  FaHeart,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

import futebolMasculino1 from "../../assets/futebol_masculino12.webp";
import futebolMasculino2 from "../../assets/futebol_masculino2.webp";

import futebolFeminino1 from "../../assets/futebol_feminino2.jpeg";
import futebolFeminino2 from "../../assets/futebol_feminino1.jpeg";

import artesanato1 from "../../assets/artesanato1.jpeg";
import artesanato2 from "../../assets/artesanato2.jpeg";

/* ================================
   FUTEBOL MASCULINO
================================ */

const cursosFutebolMasculino = [
  {
    id: 1,
    imagem: futebolMasculino1,
    titulo: "Futebol Masculino",
    descricao:
      "Atividades esportivas voltadas para crianças e adolescentes, promovendo esporte, disciplina, convivência e desenvolvimento.",
  },
  {
    id: 2,
    imagem: futebolMasculino2,
    titulo: "Treinos e atividades",
    descricao:
      "Momentos de aprendizado e prática esportiva que incentivam hábitos saudáveis e o trabalho em equipe.",
  },
];

/* ================================
   FUTEBOL FEMININO
================================ */

const cursosFutebolFeminino = [
  {
    id: 1,
    imagem: futebolFeminino1,
    titulo: "Futebol Feminino",
    descricao:
      "Atividades esportivas que incentivam a participação feminina no futebol e promovem inclusão, confiança e integração.",
  },
  {
    id: 2,
    imagem: futebolFeminino2,
    titulo: "Esporte e inclusão",
    descricao:
      "Um espaço para desenvolver habilidades esportivas, fortalecer vínculos e incentivar a participação das meninas no esporte.",
  },
];

/* ================================
   ARTESÃ
================================ */

const cursosArtesa = [
  {
    id: 1,
    imagem: artesanato1,
    titulo: "Artesanato",
    descricao:
      "Atividades de artesanato que estimulam a criatividade, o aprendizado de novas habilidades e a convivência.",
  },
  {
    id: 2,
    imagem: artesanato2,
    titulo: "Oficinas de artesanato",
    descricao:
      "Momentos de aprendizado e troca de conhecimentos através de diferentes técnicas artesanais.",
  },
];

function Cursos() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.sectionTag}>
              <FaUsers />
              Cursos e oficinas
            </span>

            <h1>
              Aprender, praticar e crescer juntos.
            </h1>

            <p>
              Nossos cursos e atividades buscam criar oportunidades de
              aprendizado, desenvolvimento e inclusão através do esporte
              e do artesanato.
            </p>
          </div>
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className={styles.introduction}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <span className={styles.sectionTag}>
              Nossas atividades
            </span>

            <h2>
              Oportunidades para aprender e participar
            </h2>

            <p>
              Acreditamos que o acesso ao esporte, à cultura e ao
              aprendizado pode contribuir para o desenvolvimento pessoal
              e fortalecer os vínculos dentro da comunidade.
            </p>
          </div>
        </div>
      </section>

      {/* FUTEBOL MASCULINO */}
      <section className={styles.courseSection}>
        <div className={styles.container}>
          <div className={styles.courseHeader}>
            <div className={styles.courseIcon}>
              <FaFutbol />
            </div>

            <div>
              <span className={styles.sectionTag}>
                Esporte
              </span>

              <h2>Futebol Masculino</h2>

              <p>
                Atividades esportivas voltadas para o desenvolvimento
                através do futebol.
              </p>
            </div>
          </div>

          <div className={styles.courseList}>
            {cursosFutebolMasculino.map((curso) => (
              <article
                key={curso.id}
                className={styles.courseCard}
              >
                <div className={styles.courseImage}>
                  <img
                    src={curso.imagem}
                    alt={curso.titulo}
                    loading="lazy"
                  />
                </div>

                <div className={styles.courseContent}>
                  <h3>{curso.titulo}</h3>

                  <p>{curso.descricao}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FUTEBOL FEMININO */}
      <section className={styles.courseSectionAlt}>
        <div className={styles.container}>
          <div className={styles.courseHeader}>
            <div className={styles.courseIcon}>
              <FaFutbol />
            </div>

            <div>
              <span className={styles.sectionTag}>
                Esporte e inclusão
              </span>

              <h2>Futebol Feminino</h2>

              <p>
                Um espaço para incentivar a participação feminina no
                esporte.
              </p>
            </div>
          </div>

          <div className={styles.courseList}>
            {cursosFutebolFeminino.map((curso) => (
              <article
                key={curso.id}
                className={styles.courseCard}
              >
                <div className={styles.courseImage}>
                  <img
                    src={curso.imagem}
                    alt={curso.titulo}
                    loading="lazy"
                  />
                </div>

                <div className={styles.courseContent}>
                  <h3>{curso.titulo}</h3>

                  <p>{curso.descricao}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ARTESANATO */}
      <section className={styles.courseSection}>
        <div className={styles.container}>
          <div className={styles.courseHeader}>
            <div className={styles.courseIcon}>
              <FaFistRaised />
            </div>

            <div>
              <span className={styles.sectionTag}>
                Cultura e aprendizado
              </span>

              <h2>Artesanato</h2>

              <p>
                Oficinas para desenvolver a criatividade e aprender
                novas técnicas artesanais.
              </p>
            </div>
          </div>

          <div className={styles.courseList}>
            {cursosArtesa.map((curso) => (
              <article
                key={curso.id}
                className={styles.courseCard}
              >
                <div className={styles.courseImage}>
                  <img
                    src={curso.imagem}
                    alt={curso.titulo}
                    loading="lazy"
                  />
                </div>

                <div className={styles.courseContent}>
                  <h3>{curso.titulo}</h3>

                  <p>{curso.descricao}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <FaHeart className={styles.ctaIcon} />

            <h2>
              Quer fazer parte das nossas atividades?
            </h2>

            <p>
              Entre em contato para saber mais sobre os cursos,
              atividades e oportunidades de participação.
            </p>

            <a
              href="/contato"
              className={styles.ctaButton}
            >
              Entre em contato
              <FaArrowRight />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Cursos;