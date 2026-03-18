import { desktop } from '../../assets/images';
import styles from './QuoteSection.module.css';

/**
 * QuoteSection — Layout / 136 (quote variant)
 * "Vamos entender o seu negócio a fundo para desenvolver sistemas..."
 * Desktop node: 404:3476 | Mobile: similar
 */
export default function QuoteSection() {
  return (
    <section
      className={styles.section}
      data-name="Layout / 136 / (quote)"
      data-node-id="404:3476"
    >
      <div className={styles.container} data-name="Container">
        <div className={styles.content} data-name="Content">
          <div className={styles.sectionTitle} data-name="Section Title">
            <img
              src={desktop.symbol}
              alt=""
              aria-hidden="true"
              className={styles.symbolIcon}
              data-name="Symbol"
            />
            <div className={styles.textContent} data-name="Content">
              <p className={styles.heading} data-node-id="404:3483">
                Vamos entender o seu negócio a fundo para desenvolver sistemas
                que impulsionem o seu crescimento e te destaquem no mercado.
              </p>
              <p className={styles.subHeading} data-node-id="404:3484">
                Tudo isso antes de escrever a primeira linha de código.
              </p>
            </div>
          </div>

          <a
            href="#fale-conosco"
            className={styles.ctaButton}
            data-name="buttonsDarkMode"
          >
            <span className={styles.ctaStateLayer} />
            <span className={styles.ctaLabel}>Fale com um especialista agora</span>
          </a>
        </div>
      </div>
    </section>
  );
}
