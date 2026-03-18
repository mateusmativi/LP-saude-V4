import { desktop } from '../../assets/images';
import styles from './FeaturesSection.module.css';

/**
 * FeaturesSection — Layout / 612 /
 * Desktop: 413:2758 | Single-column: título → lista 2×2 com divisores → CTA
 */
const rows = [
  [
    {
      icon: 'analytics',
      title: 'Indicadores e Análises',
      description: 'Transformamos a grande quantidade de dados gerados em informação estratégica.',
    },
    {
      icon: 'task',
      title: 'Gestão Operacional',
      description: 'Reunimos informações de pacientes, médicos, equipe administrativa, exames e convênios para apoiar a gestão.',
    },
  ],
  [
    {
      icon: 'engineering',
      title: 'Operação e Execução',
      description: 'Elaboramos sistemas para reunir protocolos, fluxos clínicos e gerar relatórios operacionais.',
    },
    {
      icon: 'paid',
      title: 'Finanças e Resultados',
      description: 'Consolidamos informações financeiras em relatórios para avaliar o desempenho e a saúde financeira da clínica.',
    },
  ],
];

export default function FeaturesSection() {
  return (
    <section
      className={styles.section}
      data-name="Layout / 612 /"
      data-node-id="413:2758"
    >
      <div className={styles.container}>
        {/* Section title */}
        <div className={styles.sectionTitle} data-name="Section Title">
          <h2 className={styles.heading}>
            Construímos a tecnologia ideal para a sua clínica
          </h2>
          <p className={styles.subHeading}>
            Entramos na sua operação, entendemos as suas demandas e traduzimos em um sistema desenvolvido exclusivamente para você.
          </p>
        </div>

        {/* Content: feature list + CTA */}
        <div className={styles.content} data-name="Content">
          <div className={styles.list} data-name="List">
            {rows.map((row, ri) => (
              <div key={ri} className={styles.row} data-name="Row">
                {row.map((item) => (
                  <div key={item.icon} className={styles.listItem} data-name="List Item">
                    <img
                      src={desktop[item.icon]}
                      alt=""
                      aria-hidden="true"
                      className={styles.itemIcon}
                      data-name={item.icon}
                    />
                    <div className={styles.itemContent} data-name="Content">
                      <h3 className={styles.itemTitle}>{item.title}</h3>
                      <p className={styles.itemDescription}>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <a href="#fale-conosco" className={styles.ctaButton} data-name="buttonsDarkMode">
            <span className={styles.ctaStateLayer} />
            <span>Fale com um especialista agora</span>
          </a>
        </div>
      </div>
    </section>
  );
}
