import { desktop } from '../../assets/images';
import styles from './TeamSection.module.css';

/**
 * TeamSection — Layout / 521 /
 * "Time Sênior Completo pra tirar o seu projeto do papel"
 * 10 cards de roles — 2 linhas de 5
 * Desktop node: 404:3541 | Mobile: responsive (2 cols)
 */
const teamRoles = [
  {
    icon: 'chessBishop',
    role: 'CTO',
    description: 'Arquitetura técnica e liderança de engenharia.',
  },
  {
    icon: 'acute',
    role: 'PM',
    description: 'Gerência do projeto, prazos e entregas.',
  },
  {
    icon: 'pallet',
    role: 'PO',
    description: 'Produto e backlog alinhados ao seu negócio.',
  },
  {
    icon: 'diamond',
    role: 'QA Tester',
    description: 'Qualidade e testes antes de cada entrega.',
  },
  {
    icon: 'devices',
    role: 'Front-end',
    description: 'Interfaces rápidas e responsivas.',
  },
  {
    icon: 'modeling',
    role: 'Back-end',
    description: 'APIs robustas e escaláveis.',
  },
  {
    icon: 'database',
    role: 'Banco de Dados',
    description: 'Modelagem e performance de dados.',
  },
  {
    icon: 'cloud',
    role: 'Soluções Cloud',
    description: 'Infraestrutura segura e elástica.',
  },
  {
    icon: 'categorySearch',
    role: 'UX Designer',
    description: 'Experiência do usuário e pesquisa.',
  },
  {
    icon: 'brandFamily',
    role: 'UI Designer',
    description: 'Interface visual com identidade da marca.',
  },
];

export default function TeamSection() {
  return (
    <section
      className={styles.section}
      data-name="Layout / 521 /"
      data-node-id="404:3541"
    >
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.heading}>
            Time Sênior Completo pra tirar o seu projeto do papel
          </h2>
          <p className={styles.subHeading}>
            Não contratamos júniors. Cada profissional tem anos de experiência
            no mercado e está 100% dedicado ao seu projeto.
          </p>
        </div>

        {/* Role cards grid */}
        <div className={styles.rolesGrid}>
          {teamRoles.map((member) => (
            <div
              key={member.role}
              className={styles.roleCard}
              data-name={member.role}
            >
              <div className={styles.roleIconWrapper}>
                <img
                  src={desktop[member.icon]}
                  alt=""
                  aria-hidden="true"
                  className={styles.roleIcon}
                />
              </div>
              <div className={styles.roleText}>
                <h3 className={styles.roleTitle}>{member.role}</h3>
                <p className={styles.roleDescription}>{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a href="#fale-conosco" className={styles.ctaButton}>
          <span className={styles.ctaStateLayer} />
          <span>Fale com um especialista agora</span>
        </a>
      </div>
    </section>
  );
}
