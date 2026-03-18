import { desktop } from '../../assets/images';
import styles from './ProcessSteps.module.css';

/**
 * ProcessSteps — Layout / 526 /
 * "Desenvolvemos soluções de acordo com as necessidades da sua clínica"
 * 5 etapas do processo de desenvolvimento
 * Desktop node: 404:2947 | Mobile node: 432:2780
 */
const steps = [
  {
    id: 1,
    icon: 'psychology',
    title: 'Arquitetura',
    description:
      'Entendemos profundamente o seu negócio e desenhamos a arquitetura ideal para a sua solução.',
  },
  {
    id: 2,
    icon: 'developerBoard',
    title: 'Prototipagem',
    description:
      'Criamos protótipos navegáveis para validar a experiência antes de escrever qualquer código.',
  },
  {
    id: 3,
    icon: 'mobileCode',
    title: 'Desenvolvimento',
    description:
      'Desenvolvemos a solução com as melhores tecnologias do mercado, com qualidade e agilidade.',
  },
  {
    id: 4,
    icon: 'localPolice',
    title: 'Quality Assurance',
    description:
      'Testamos exaustivamente cada funcionalidade para garantir que tudo funcione perfeitamente.',
  },
  {
    id: 5,
    icon: 'settingsHeart',
    title: 'Entrega Assistida',
    description:
      'Acompanhamos o lançamento e ficamos ao seu lado para garantir uma implantação tranquila.',
  },
];

export default function ProcessSteps() {
  return (
    <section
      className={styles.section}
      data-name="Layout / 526 /"
      data-node-id="404:2947"
    >
      <div className={styles.container}>
        {/* Title */}
        <div className={styles.sectionTitle} data-name="Section Title">
          <h2 className={styles.heading}>
            Desenvolvemos soluções de acordo com as necessidades da sua clínica
          </h2>
          <p className={styles.subHeading}>
            Do levantamento de requisitos à entrega, cada etapa é pensada para
            o seu negócio.
          </p>
        </div>

        {/* Steps grid */}
        <div className={styles.stepsGrid} data-name="Steps">
          {steps.map((step) => (
            <div key={step.id} className={styles.stepCard} data-name={`Step ${step.id}`}>
              <div className={styles.stepNumber}>{String(step.id).padStart(2, '0')}</div>
              <img
                src={desktop[step.icon]}
                alt=""
                aria-hidden="true"
                className={styles.stepIcon}
              />
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
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
