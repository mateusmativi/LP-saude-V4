import styles from './StatsSection.module.css';

/**
 * StatsSection — Layout / 396 /
 * Desktop: 404:3379 | Mobile: 432:2951
 * Título + subtítulo + 3 cards bordered
 */
const stats = [
  { value: '+300',     label: 'Empresas atendidas'      },
  { value: '+20mi',    label: 'de reais economizados'   },
  { value: '+150 mil', label: 'horas poupadas'          },
];

export default function StatsSection() {
  return (
    <section
      className={styles.section}
      data-name="Layout / 396 /"
      data-node-id="404:3379"
    >
      <div className={styles.container}>
        {/* Section title */}
        <div className={styles.sectionTitle} data-name="Section Title">
          <h2 className={styles.heading}>
            Já transformamos mais de 300 empresas com sistemas 100% sob medida
          </h2>
          <p className={styles.subHeading}>
            Estamos{' '}
            <strong className={styles.subHeadingSemibold}>há mais de 10 anos</strong>
            {' '}desenvolvendo soluções robustas, únicas e escaláveis para clínicas médicas,
            indústria, serviços, logística, agronegócio e muito mais.
          </p>
        </div>

        {/* Stats cards */}
        <div className={styles.statsRow} data-name="Row">
          {stats.map((stat) => (
            <div key={stat.value} className={styles.statCard} data-name="Content">
              <p className={styles.statValue}>{stat.value}</p>
              <p className={styles.statLabel}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
