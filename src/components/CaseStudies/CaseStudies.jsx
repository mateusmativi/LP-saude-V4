import styles from './CaseStudies.module.css';

/**
 * CaseStudies — Layout / 313 /
 * Desktop: 407:3843 | Mobile: 432:3153
 * Título esquerda, desc+ícone direita; cards sem logo/tag/borda
 */
const PLACEHOLDER = 'https://www.figma.com/api/mcp/asset/0aeedb75-4afd-4768-8217-ad6506dd153c';
const ICON        = 'https://www.figma.com/api/mcp/asset/7d689bb7-7012-4595-bea9-2b7d70ec1eba';

const cases = [
  {
    name: 'Brinks',
    description: 'Reduzimos o tempo de precificação de propostas com um sistema inteligente que substituiu planilhas manuais por uma calculadora instantânea.',
  },
  {
    name: 'Amcham Brasil',
    description: 'Desenvolvemos um CMS proprietário e robusto, com UX/UI 100% customizado que já está na 2ª versão, com implementamos melhorias contínuas.',
  },
  {
    name: 'Pontua AI',
    description: 'Criamos uma plataforma de inteligência artificial educacional que corrige redações com velocidade, critérios ajustáveis e dashboards de desempenho.',
  },
  {
    name: 'Soacred',
    description: 'Transformamos a rotina de lojistas com um app intuitivo que integra crédito, cadastros e transparência em tempo real.',
  },
  {
    name: 'Propwase',
    description: 'Centralizamos CRM, leads e gestão imobiliária em uma única plataforma com IA e automação total.',
  },
];

export default function CaseStudies() {
  return (
    <section
      className={styles.section}
      data-name="Layout / 313 /"
      data-node-id="407:3843"
    >
      <div className={styles.container}>
        {/* Título — esquerda */}
        <div className={styles.titleWrapper}>
          <h2 className={styles.heading}>
            Resultados que{' '}
            <span className={styles.headingHighlight}>falam por si</span>
          </h2>
        </div>

        {/* Descrição — desktop: direita | mobile: entre cards e CTAs */}
        <div className={styles.descBlock}>
          <img
            src={ICON}
            alt=""
            aria-hidden="true"
            className={styles.descIcon}
            data-name="editor_choice"
          />
          <p className={styles.descText}>
            Empresas líderes já transformaram seus processos com a{' '}
            <strong className={styles.descHighlight}>Fraktal</strong>.
          </p>
        </div>

        {/* Cards */}
        <div className={styles.casesRow} data-name="Row">
          {cases.map((c) => (
            <div key={c.name} className={styles.caseCard} data-name={c.name}>
              <div className={styles.caseImageWrapper} data-name="Placeholder Image">
                <img
                  src={PLACEHOLDER}
                  alt={c.name}
                  className={styles.caseImage}
                />
              </div>
              <div className={styles.caseContent} data-name="Content">
                <h3 className={styles.caseTitle}>{c.name}</h3>
                <p className={styles.caseDescription}>{c.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className={styles.ctaRow} data-name="CTA Wrapper">
          <a href="#fale-conosco" className={styles.ctaPrimary} data-name="buttonsDarkMode">
            <span className={styles.ctaStateLayer} />
            <span>Transforme sua clínica agora</span>
          </a>
          <a href="#projetos" className={styles.ctaSecondary} data-name="buttonsDarkMode">
            <span className={styles.ctaStateLayer} />
            <span>Ver projetos</span>
          </a>
        </div>
      </div>
    </section>
  );
}
