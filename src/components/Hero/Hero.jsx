import { desktop } from '../../assets/images';
import styles from './Hero.module.css';

/**
 * Hero — seção principal da landing page
 * Desktop: layout 2 colunas — texto + imagem
 * Mobile: layout single column, hero full width
 * Node IDs: 398:3349 (desktop), 432:2468 (mobile)
 */
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
                <img
                  src={desktop.personOutline}
                  alt=""
                  aria-hidden="true"
                  className={styles.ctaIcon}
                />
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
