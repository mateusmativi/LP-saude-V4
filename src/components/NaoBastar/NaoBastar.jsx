import { desktop } from '../../assets/images';
import styles from './NaoBastar.module.css';

function CheckBoxIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className={styles.ctaIcon}>
      <path d="M12.6667 2H3.33333C2.6 2 2 2.6 2 3.33333V12.6667C2 13.4 2.6 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V3.33333C14 2.6 13.4 2 12.6667 2ZM12.6667 12.6667H3.33333V3.33333H12.6667V12.6667ZM11.9933 6L11.0533 5.05333L6.66 9.44667L4.94 7.73333L3.99333 8.67333L6.66 11.3333L11.9933 6Z" fill="currentColor" />
    </svg>
  );
}

/**
 * NaoBastar — Layout / 69 /
 * "Não basta ter muitos pacientes: sua clínica tem que funcionar bem"
 * Desktop node: 404:2819 | Mobile node: 432:2589
 */
const listItems = [
  { icon: 'medicalInformation', label: 'Prontuário eletrônico' },
  { icon: 'receiptLong',        label: 'Faturamento de convênios' },
  { icon: 'accountBalance',     label: 'Financeiro' },
  { icon: 'calendarMonth',      label: 'Agenda' },
  { icon: 'recentPatient',      label: 'CRM' },
  { icon: 'overviewKey',        label: 'E outras funcionalidades' },
];

export default function NaoBastar() {
  return (
    <section
      className={styles.section}
      data-name="Layout / 69 /"
      data-node-id="404:2819"
    >
      {/* Decorative pattern */}
      <div className={styles.patternWrapper} aria-hidden="true">
        <img
          src={desktop.patternTriplo}
          alt=""
          className={styles.pattern}
          data-name="Pattern Triplo"
        />
      </div>

      {/* Content container */}
      <div className={styles.container} data-name="Container" data-node-id="404:2820">
        {/* Left column — image */}
        <div className={styles.imageCol} data-name="Image" data-node-id="404:2928">
          <div className={styles.imageWrapper}>
            <img
              src={desktop.image}
              alt="Médica utilizando sistema digital"
              className={styles.image}
            />
          </div>
        </div>

        {/* Right column — text + list + CTA */}
        <div className={styles.column} data-name="Component" data-node-id="404:2821">
          <div className={styles.heading} data-name="Heading">
            <h2 className={styles.headingText}>
              Não basta ter muitos pacientes:{' '}
              <strong>sua clínica tem que funcionar bem</strong>
            </h2>
          </div>

          <div className={styles.content} data-name="Content">
            <p className={styles.intro}>
              Com certeza você usa algum sistema médico que reúne:
            </p>

            <ul className={styles.list} data-name="List Wrapper">
              {listItems.map((item) => (
                <li key={item.label} className={styles.listItem} data-name="List Item">
                  <img
                    src={desktop[item.icon]}
                    alt=""
                    aria-hidden="true"
                    className={styles.listIcon}
                    data-name={item.icon}
                  />
                  <span className={styles.listLabel}>{item.label}</span>
                </li>
              ))}
            </ul>

            <p className={styles.bodyText}>
              Mas essas informações <strong>conversam entre si?</strong><br />
              Você consegue ter <strong>um retrato da sua clínica em tempo real?</strong><br />
              Eles entregam <strong>tudo que a sua clínica precisa?</strong>
            </p>

            <p className={styles.bodyText}>
              Se você respondeu <strong>NÃO</strong> para qualquer uma dessas perguntas, nós podemos ajudá-lo.
            </p>
          </div>

          <a
            href="#fale-conosco"
            className={styles.ctaButton}
            data-name="buttonsDarkMode"
          >
            <span className={styles.ctaStateLayer} />
            <CheckBoxIcon />
            <span className={styles.ctaLabel}>Resolva isso agora</span>
          </a>
        </div>
      </div>
    </section>
  );
}
