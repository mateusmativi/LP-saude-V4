import styles from './StatsSection.module.css';

/**
 * StatsSection — Layout / 396 /
 * "+300 empresas, +20mi reais economizados, +150 mil horas poupadas"
 * Desktop node: 404:3341 | Mobile: responsive
 */
const stats = [
  {
    value: '+300',
    label: 'empresas',
    description: 'que já confiaram na Fraktal para transformar sua operação.',
  },
  {
    value: '+20mi',
    label: 'reais economizados',
    description: 'gerados em eficiência operacional para nossos clientes.',
  },
  {
    value: '+150 mil',
    label: 'horas poupadas',
    description: 'com automações e sistemas personalizados.',
  },
];

export default function StatsSection() {
  return (
    <section
      className={styles.section}
      data-name="Layout / 396 /"
      data-node-id="404:3341"
    >
      <div className={styles.container}>
        {stats.map((stat, i) => (
          <div key={i} className={styles.statItem}>
            <div className={styles.statValue}>{stat.value}</div>
            <div className={styles.statLabel}>{stat.label}</div>
            <p className={styles.statDescription}>{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
