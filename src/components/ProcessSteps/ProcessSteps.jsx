import { desktop } from '../../assets/images';
import styles from './ProcessSteps.module.css';

/**
 * ProcessSteps — Layout / 526 /
 * "Desenvolvemos soluções de acordo com as necessidades da sua clínica"
 * 5 etapas do processo — 3 cards cima + 2 cards baixo (centralizados)
 * Desktop node: 404:3101 | Mobile: 1 coluna
 */
const steps = [
  {
    icon: 'psychology',
    title: 'Arquitetura',
    paragraphs: [
      { text: 'Este é o ponto de partida, em que coletamos informações cruciais para o projeto, como objetivos, requisitos e restrições.' },
      { text: 'Entendemos exatamente como funciona a sua clínica e quais são as funcionalidades que ela precisa.' },
      { text: 'Isso cria a base sólida para o desenvolvimento da solução.' },
    ],
  },
  {
    icon: 'developerBoard',
    title: 'Prototipagem',
    paragraphs: [
      { text: 'Em seguida, fazemos um protótipo, criando uma versão preliminar do sistema para validar conceitos e obter feedback inicial.' },
      { text: 'Colocamos ele em funcionamento para checar se estamos no caminho certo, antes do desenvolvimento completo.' },
      { text: 'Isso ajuda a ajustar o curso antes do desenvolvimento completo.' },
    ],
  },
  {
    icon: 'mobileCode',
    title: 'Desenvolvimento',
    paragraphs: [
      { text: 'Nesta etapa, construímos o sistema conforme os requisitos, com codificação, integração e implementação de recursos, garantindo colaboração eficiente da equipe.' },
      { text: 'É aqui que a solução começa mesmo a sair do papel e se tornar o sistema que você precisa', bold: true },
    ],
  },
  {
    icon: 'localPolice',
    title: 'Quality Assurance',
    paragraphs: [
      { text: 'Antes do lançamento, passamos pela QA, em que testamos o sistema, corrigimos os bugs, avaliamos o seu desempenho e asseguramos conformidade com os padrões de qualidade.' },
      { text: 'É a última avaliação antes da versão final.' },
    ],
  },
  {
    icon: 'settingsHeart',
    title: 'Entrega Assistida',
    paragraphs: [
      { text: 'Com a aprovação da QA, treinamos a sua equipe e implantamos o sistema na sua clínica, assegurando uma transição suave do desenvolvimento para o uso real.' },
      { text: 'Você não fica desamparado.' },
    ],
  },
];

function StepCard({ step }) {
  return (
    <div className={styles.stepCard}>
      <img
        src={desktop[step.icon]}
        alt=""
        aria-hidden="true"
        className={styles.stepIcon}
        data-name={step.icon}
      />
      <h3 className={styles.stepTitle}>{step.title}</h3>
      <div className={styles.stepBody}>
        {step.paragraphs.map((p, i) => (
          <p
            key={i}
            className={p.bold ? styles.stepDescBold : styles.stepDesc}
          >
            {p.text}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function ProcessSteps() {
  return (
    <section
      className={styles.section}
      data-name="Layout / 526 /"
      data-node-id="404:3101"
    >
      <div className={styles.container}>
        {/* Section title */}
        <div className={styles.sectionTitle} data-name="Section Title">
          <h2 className={styles.heading}>
            Desenvolvemos soluções de acordo com as necessidades da sua clínica
          </h2>
          <p className={styles.subHeading}>
            Nosso processo de desenvolvimento tem 5 etapas bem definidas
          </p>
        </div>

        {/* Cards — 3 top + 2 bottom centered */}
        <div className={styles.cardWrapper} data-name="Card Wrapper">
          <div className={styles.row}>
            {steps.slice(0, 3).map((step) => (
              <StepCard key={step.title} step={step} />
            ))}
          </div>
          <div className={`${styles.row} ${styles.rowBottom}`}>
            {steps.slice(3).map((step) => (
              <StepCard key={step.title} step={step} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <a
          href="#fale-conosco"
          className={styles.ctaButton}
          data-name="buttonsDarkMode"
        >
          <span className={styles.ctaStateLayer} />
          <span className={styles.ctaLabel}>Fale com um especialista agora</span>
        </a>
      </div>
    </section>
  );
}
