import { desktop } from '../../assets/images';
import styles from './Hero.module.css';

/**
 * Hero — seção principal da landing page
 * Desktop: layout 2 colunas — texto + imagem
 * Mobile: layout single column, hero full width
 * Node IDs: 398:3349 (desktop), 432:2468 (mobile)
 */
function CheckBoxIcon({ className }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path d="M12.6667 2H3.33333C2.6 2 2 2.6 2 3.33333V12.6667C2 13.4 2.6 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V3.33333C14 2.6 13.4 2 12.6667 2ZM12.6667 12.6667H3.33333V3.33333H12.6667V12.6667ZM11.9933 6L11.0533 5.05333L6.66 9.44667L4.94 7.73333L3.99333 8.67333L6.66 11.3333L11.9933 6Z" fill="currentColor" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      className={styles.hero}
      data-name="Home"
      data-node-id="398:3349"
    >
      {/* Background image + gradient overlay */}
      <div className={styles.bgLayer} aria-hidden="true">
        <picture>
          <source media="(max-width: 768px)" srcSet="/hero-image-mobile.jpg" />
          <img src="/hero-image.jpg" alt="" className={styles.bgImage} />
        </picture>
        <div className={styles.bgGradient} />
      </div>

      {/* Content */}
      <div className={styles.mainContainer} data-name="Main Container" data-node-id="398:3352">
        <div className={styles.contentContainer} data-name="Content Container" data-node-id="398:3354">
          {/* Left — Text + CTA */}
          <div className={styles.textAndButtonContainer} data-name="Text and Button Container" data-node-id="398:3355">
            <div className={styles.textContainer} data-name="Text Container" data-node-id="398:3356">
              <div className={styles.mainTextContainer} data-name="Main Text Container" data-node-id="398:3357">
                <h1 className={styles.headline} data-node-id="398:3358">
                  Sistemas e aplicativos{' '}
                  <span className={styles.headlineHighlight}>100% sob medida</span>
                  {' '}para sua clínica médica
                </h1>

                <p className={styles.subHeadline} data-node-id="398:3359">
                  Desenvolvemos soluções tecnológicas totalmente alinhadas com os
                  problemas da sua clínica médica ou hospital.
                </p>

                <p className={styles.bodyText} data-node-id="404:2677">
                  Tudo para melhorar a qualidade no atendimento e tornar a sua
                  operação mais eficiente.
                </p>
              </div>

              {/* CTA Button */}
              <a
                href="#fale-conosco"
                className={styles.ctaButton}
                data-name="buttonsDarkMode"
                data-node-id="398:3362"
              >
                <span className={styles.ctaStateLayer} data-name="stateLayer" />
                <CheckBoxIcon className={styles.ctaIcon} />
                <span className={styles.ctaLabel}>Fale conosco</span>
              </a>
            </div>

            {/* Tagline block */}
            <div className={styles.footerContainer} data-name="Footer Container" data-node-id="398:3363">
              <div className={styles.footerBar} data-name="Rectangle" data-node-id="398:3364" />
              <p className={styles.footerText} data-node-id="398:3365">
                <span className={styles.footerTextLight}>Software, Design e Inovação.</span>
                <br />
                <strong className={styles.footerTextBold}>Boas-vindas à Fraktal.</strong>
              </p>
            </div>
          </div>

          {/* Right — Hero image placeholder */}
          <div className={styles.heroImage} data-name="Hero Image" data-node-id="398:3366" />
        </div>
      </div>
    </section>
  );
}
