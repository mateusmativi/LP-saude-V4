import { desktop } from '../../assets/images';
import styles from './CaseStudies.module.css';

/**
 * CaseStudies — Layout / 313 /
 * "Resultados que falam por si" — grid de cases de sucesso
 * Desktop node: 404:3497 | Mobile: responsive
 */
const cases = [
  {
    id: 'brinks',
    name: 'Brinks',
    logo: 'logo02',
    description: 'Sistema de gestão operacional para transporte de valores.',
    tag: 'Segurança',
  },
  {
    id: 'amcham',
    name: 'Amcham Brasil',
    logo: 'logo03',
    description: 'Plataforma de eventos e gestão de membros para câmara de comércio.',
    tag: 'Associações',
  },
  {
    id: 'pontua',
    name: 'Pontua AI',
    logo: 'logo04',
    description: 'Inteligência artificial para análise de risco de crédito.',
    tag: 'Fintech',
  },
  {
    id: 'soacred',
    name: 'Soacred',
    logo: 'logo05',
    description: 'Sistema de crédito consignado e gestão financeira.',
    tag: 'Financeiro',
  },
  {
    id: 'propwase',
    name: 'Propwase',
    logo: 'logo06',
    description: 'Plataforma de gestão de propriedades e contratos.',
    tag: 'Imobiliário',
  },
];

export default function CaseStudies() {
  return (
    <section
      className={styles.section}
      data-name="Layout / 313 /"
      data-node-id="404:3497"
    >
      <div className={styles.container}>
        {/* Section header */}
        <div className={styles.sectionHeader}>
          <img
            src={desktop.editorChoice}
            alt=""
            aria-hidden="true"
            className={styles.headerIcon}
            data-name="editor_choice"
          />
          <h2 className={styles.heading}>
            Resultados que falam por si
          </h2>
          <p className={styles.subHeading}>
            Empresas que escolheram transformar sua operação com a Fraktal.
          </p>
        </div>

        {/* Cases grid */}
        <div className={styles.casesGrid} data-name="Cases">
          {cases.map((c) => (
            <div key={c.id} className={styles.caseCard} data-name={c.name}>
              <div className={styles.caseImageWrapper}>
                <img
                  src={desktop.placeholderImage}
                  alt={`Case ${c.name}`}
                  className={styles.caseImage}
                />
              </div>
              <div className={styles.caseBody}>
                <span className={styles.caseTag}>{c.tag}</span>
                <img
                  src={desktop[c.logo]}
                  alt={c.name}
                  className={styles.caseLogo}
                />
                <p className={styles.caseDescription}>{c.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className={styles.ctaRow}>
          <a href="#fale-conosco" className={styles.ctaPrimary}>
            <span className={styles.ctaStateLayer} />
            <span>Transforme sua clínica agora</span>
          </a>
          <a href="#projetos" className={styles.ctaSecondary}>
            <span className={styles.ctaStateLayer} />
            <span>Ver projetos</span>
          </a>
        </div>
      </div>
    </section>
  );
}
