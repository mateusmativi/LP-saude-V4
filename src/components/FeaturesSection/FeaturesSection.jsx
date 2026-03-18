import { desktop } from '../../assets/images';
import styles from './FeaturesSection.module.css';

/**
 * FeaturesSection — Layout / 612 /
 * "Construímos a tecnologia ideal para a sua clínica"
 * Desktop node: 404:3518 | Mobile: responsive
 */
const features = [
  {
    icon: 'analytics',
    title: 'Indicadores e Análises',
    description:
      'Dashboards e relatórios em tempo real para tomar decisões baseadas em dados.',
  },
  {
    icon: 'task',
    title: 'Gestão Operacional',
    description:
      'Automação de processos e fluxos de trabalho para ganhar eficiência.',
  },
  {
    icon: 'engineering',
    title: 'Operação e Execução',
    description:
      'Ferramentas que garantem a qualidade e rastreabilidade de cada atividade.',
  },
  {
    icon: 'paid',
    title: 'Finanças e Resultados',
    description:
      'Controle financeiro integrado com faturamento, recebíveis e resultados.',
  },
];

export default function FeaturesSection() {
  return (
    <section
      className={styles.section}
      data-name="Layout / 612 /"
      data-node-id="404:3518"
    >
      <div className={styles.container}>
        {/* Left — heading + CTA */}
        <div className={styles.leftCol}>
          <h2 className={styles.heading}>
            Construímos a tecnologia ideal para a sua clínica
          </h2>
          <p className={styles.subHeading}>
            Soluções completas que cobrem todos os aspectos da sua operação médica.
          </p>
          <a href="#fale-conosco" className={styles.ctaButton}>
            <span className={styles.ctaStateLayer} />
            <span>Fale com um especialista agora</span>
          </a>
        </div>

        {/* Right — feature list */}
        <div className={styles.rightCol}>
          {features.map((feature, i) => (
            <div key={i} className={styles.featureItem}>
              <div className={styles.featureIconWrapper}>
                <img
                  src={desktop[feature.icon]}
                  alt=""
                  aria-hidden="true"
                  className={styles.featureIcon}
                />
              </div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
