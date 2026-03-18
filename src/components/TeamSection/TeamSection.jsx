import { desktop } from '../../assets/images';
import styles from './TeamSection.module.css';

/**
 * TeamSection — Layout / 521 /
 * Desktop: 420:2907 | 2 linhas de 5 cards, auto-fill responsivo
 */
const teamRoles = [
  {
    icon: 'chessBishop',
    role: 'CTO',
    sub: 'Chief Tech Officer',
    description: 'Lidera a visão técnica e garante a excelência da solução.',
  },
  {
    icon: 'acute',
    role: 'PM',
    sub: 'Project Manager',
    description: 'Garante a execução do projeto dentro do prazo e orçamento.',
  },
  {
    icon: 'pallet',
    role: 'PO',
    sub: 'Product Owner',
    description: 'Define o produto, prioriza funcionalidades e representa o cliente.',
  },
  {
    icon: 'diamond',
    role: 'QA Tester',
    sub: 'Auditor',
    description: 'Assegura a qualidade do software através de testes rigorosos.',
  },
  {
    icon: 'devices',
    role: 'Front-end',
    sub: 'Desenvolvedor',
    description: 'Constrói a interface do usuário, focando na experiência e usabilidade.',
  },
  {
    icon: 'modeling',
    role: 'Back-end',
    sub: 'Desenvolvedor',
    description: 'Desenvolve a lógica de negócios, APIs e integração de dados.',
  },
  {
    icon: 'database',
    role: 'Banco de Dados',
    sub: 'Arquiteto',
    description: 'Projeta e otimiza a estrutura do banco de dados para performance e segurança.',
  },
  {
    icon: 'cloud',
    role: 'Soluções Cloud',
    sub: 'Arquiteto',
    description: 'Define a infraestrutura em nuvem, garantindo escalabilidade e robustez.',
  },
  {
    icon: 'categorySearch',
    role: 'UX',
    sub: 'Designer',
    description: 'Cria jornadas intuitivas e eficientes, baseadas em pesquisa de usuários.',
  },
  {
    icon: 'brandFamily',
    role: 'Interface',
    sub: 'Designer',
    description: 'Desenha interfaces visuais atraentes e coesas com a identidade da marca.',
  },
];

export default function TeamSection() {
  return (
    <section
      className={styles.section}
      data-name="Layout / 521 /"
      data-node-id="420:2907"
    >
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.sectionHeader} data-name="Section Title">
          <h2 className={styles.heading}>
            Time{' '}
            <span className={styles.headingHighlight}>Sênior Completo</span>
            {' '}pra tirar o seu projeto do papel
          </h2>
        </div>

        {/* Card wrapper */}
        <div className={styles.cardWrapper} data-name="Card Wrapper">
          {teamRoles.map((member) => (
            <div
              key={member.role}
              className={styles.roleCard}
              data-name={member.role}
            >
              <div className={styles.contentTop} data-name="Content Top">
                <div className={styles.roleIconWrapper}>
                  <img
                    src={desktop[member.icon]}
                    alt=""
                    aria-hidden="true"
                    className={styles.roleIcon}
                    data-name={member.icon}
                  />
                </div>
                <div className={styles.roleContent} data-name="Content">
                  <p className={styles.roleTitle}>{member.role}</p>
                  <p className={styles.roleSub}>{member.sub}</p>
                  <p className={styles.roleDescription}>{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer content */}
        <div className={styles.footerContent} data-name="Content">
          <p className={styles.footerText}>
            Tudo isso com projetos a partir de 100 mil reais.
          </p>
          <a href="#fale-conosco" className={styles.ctaButton} data-name="buttonsDarkMode">
            <span className={styles.ctaStateLayer} />
            <span>Transforme sua clínica agora</span>
          </a>
        </div>
      </div>
    </section>
  );
}
