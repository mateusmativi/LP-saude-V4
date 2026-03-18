import { desktop } from '../../assets/images';
import styles from './NaoBastar.module.css';

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
        {/* Left column — text + list + CTA */}
        <div className={styles.column} data-name="Component" data-node-id="404:2821">
          <div className={styles.heading} data-name="Heading">
            <h2 className={styles.headingText}>
              Não basta ter muitos pacientes: sua clínica tem que funcionar bem
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
            <img
              src={desktop.checkBox}
              alt=""
              aria-hidden="true"
              className={styles.ctaIcon}
              data-name="check_box"
            />
            <span className={styles.ctaLabel}>Resolva isso agora</span>
          </a>
        </div>

        {/* Right column — image */}
        <div className={styles.imageCol} data-name="Image" data-node-id="404:2928">
          <img
            src={desktop.image}
            alt="Médica utilizando sistema digital"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
