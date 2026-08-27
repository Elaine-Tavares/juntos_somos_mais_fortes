import styles from "./Home.module.css";
import { Link } from "react-router-dom";

import {
  FaHeart,
  FaUsers,
  FaHandHoldingHeart,
  FaUtensils,
  FaShoppingBasket,
  FaGraduationCap,
  FaArrowRight,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const projetos = [
  {
    id: 1,
    icone: <FaUtensils />,
    titulo: "Distribuição de Quentinhas",
    descricao:
      "Levamos refeições para pessoas e famílias que precisam de apoio.",
  },
  {
    id: 2,
    icone: <FaShoppingBasket />,
    titulo: "Cestas Básicas",
    descricao:
      "Montamos e distribuímos cestas básicas para famílias da comunidade.",
  },
  {
    id: 3,
    icone: <FaGraduationCap />,
    titulo: "Cursos e Oficinas",
    descricao:
      "Buscamos oferecer oportunidades de aprendizado, desenvolvimento e inclusão.",
  },
];

const formasDeAjudar = [
  {
    icone: <FaHeart />,
    titulo: "Faça uma doação",
    descricao:
      "Sua contribuição ajuda a manter nossas ações e alcançar mais pessoas.",
    link: "/doe",
    textoLink: "Quero doar",
  },
  {
    icone: <FaUsers />,
    titulo: "Seja voluntário",
    descricao:
      "Doe seu tempo, conhecimento e habilidades para fazer parte dessa transformação.",
    link: "/seja-voluntario",
    textoLink: "Quero ajudar",
  },
  {
    icone: <FaHandHoldingHeart />,
    titulo: "Seja um parceiro",
    descricao:
      "Empresas e instituições também podem contribuir para ampliar nosso impacto.",
    link: "/contato",
    textoLink: "Quero ser parceiro",
  },
];

function Home() {
  return (
    <main className={styles.home}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <span className={styles.heroTag}>
              <FaHeart />
              Juntos podemos transformar vidas
            </span>

            <h1>
              Solidariedade que se transforma em{" "}
              <span>esperança.</span>
            </h1>

            <p>
              Trabalhamos para levar apoio, alimento, oportunidades e
              acolhimento para pessoas e famílias que precisam.
            </p>

            <div className={styles.heroButtons}>
              <Link to="/projetos" className={styles.primaryButton}>
                Conheça nosso trabalho
                <FaArrowRight />
              </Link>

              <Link to="/doe" className={styles.secondaryButton}>
                Quero ajudar
              </Link>
            </div>
          </div>

          <div className={styles.heroImage}>
            <img
              src="/images/hero.jpg"
              alt="Voluntários realizando uma ação social"
            />
          </div>
        </div>
      </section>

      {/* IMPACTO */}
      <section className={styles.impact}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <span>Nosso impacto</span>

            <h2>
              Pequenas atitudes podem gerar grandes transformações.
            </h2>
          </div>

          <div className={styles.impactGrid}>
            <div className={styles.impactCard}>
              <strong>+500</strong>
              <span>Refeições distribuídas</span>
            </div>

            <div className={styles.impactCard}>
              <strong>+100</strong>
              <span>Famílias beneficiadas</span>
            </div>

            <div className={styles.impactCard}>
              <strong>+30</strong>
              <span>Voluntários</span>
            </div>

            <div className={styles.impactCard}>
              <strong>+10</strong>
              <span>Ações realizadas</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section className={styles.about}>
        <div className={styles.container}>
          <div className={styles.aboutImage}>
            <img
              src="/images/quem-somos.jpg"
              alt="Voluntários do projeto social"
            />
          </div>

          <div className={styles.aboutContent}>
            <span className={styles.sectionTag}>Quem somos</span>

            <h2>
              Um projeto feito por pessoas que acreditam no poder da
              solidariedade.
            </h2>

            <p>
              Nosso projeto nasceu do desejo de ajudar e contribuir para uma
              comunidade mais acolhedora, justa e solidária.
            </p>

            <p>
              Por meio de nossas ações, buscamos oferecer não apenas
              assistência, mas também oportunidades, acolhimento e esperança.
            </p>

            <Link to="/quem-somos" className={styles.textLink}>
              Conheça nossa história
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section className={styles.projects}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.sectionTag}>Nossas ações</span>

              <h2>Conheça nossos projetos</h2>
            </div>

            <Link to="/projetos" className={styles.textLink}>
              Ver todos
              <FaArrowRight />
            </Link>
          </div>

          <div className={styles.projectsGrid}>
            {projetos.map((projeto) => (
              <article
                key={projeto.id}
                className={styles.projectCard}
              >
                <div className={styles.projectIcon}>
                  {projeto.icone}
                </div>

                <h3>{projeto.titulo}</h3>

                <p>{projeto.descricao}</p>

                <Link
                  to="/projetos"
                  className={styles.cardLink}
                >
                  Saiba mais
                  <FaArrowRight />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMO AJUDAR */}
      <section className={styles.help}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <span>Faça parte</span>

            <h2>Existem muitas formas de ajudar.</h2>

            <p>
              Cada pessoa pode contribuir de uma maneira. Escolha como você
              gostaria de fazer parte dessa história.
            </p>
          </div>

          <div className={styles.helpGrid}>
            {formasDeAjudar.map((forma) => (
              <article
                key={forma.titulo}
                className={styles.helpCard}
              >
                <div className={styles.helpIcon}>
                  {forma.icone}
                </div>

                <h3>{forma.titulo}</h3>

                <p>{forma.descricao}</p>

                <Link
                  to={forma.link}
                  className={styles.cardLink}
                >
                  {forma.textoLink}
                  <FaArrowRight />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VOLUNTARIADO CTA */}
      <section className={styles.volunteer}>
        <div className={styles.volunteerContainer}>
          <div>
            <span className={styles.sectionTag}>
              Seja parte da mudança
            </span>

            <h2>
              Seu tempo e suas habilidades podem transformar vidas.
            </h2>

            <p>
              Junte-se a nós e descubra como você pode contribuir com o
              projeto.
            </p>
          </div>

          <Link
            to="/seja-voluntario"
            className={styles.lightButton}
          >
            Quero ser voluntário
            <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* PARCEIROS */}
      <section className={styles.partners}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <span>Nossos parceiros</span>

            <h2>Juntos conseguimos chegar mais longe.</h2>

            <p>
              Acreditamos que a transformação social acontece quando pessoas,
              empresas e instituições trabalham juntas.
            </p>
          </div>

          <div className={styles.partnerLogo}>
            <span>SEASA</span>
          </div>
        </div>
      </section>

      {/* CTA DOAÇÃO */}
      <section className={styles.donation}>
        <div className={styles.donationContent}>
          <FaHeart />

          <h2>Quer fazer parte dessa transformação?</h2>

          <p>
            Sua ajuda pode contribuir para que nossas ações alcancem ainda
            mais pessoas.
          </p>

          <div className={styles.donationButtons}>
            <Link to="/doe" className={styles.primaryButton}>
              Quero doar
              <FaHeart />
            </Link>

            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappButton}
            >
              <FaWhatsapp />
              Fale conosco
            </a>
          </div>
        </div>
      </section>

      {/* REDES SOCIAIS */}
      <section className={styles.social}>
        <div className={styles.container}>
          <h2>Acompanhe nosso trabalho</h2>

          <p>
            Siga nossas redes sociais e acompanhe de perto nossas ações.
          </p>

          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.instagram}
          >
            <FaInstagram />
            Instagram
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;