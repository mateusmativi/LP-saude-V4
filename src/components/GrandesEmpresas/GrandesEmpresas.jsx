import styles from './GrandesEmpresas.module.css';

/**
 * GrandesEmpresas — Layout / 15 /
 * Desktop node: 447:1977 | Mobile node: 436:3957
 *
 * Desktop (>1240px): 2 colunas (texto+logos+CTA esq, imagem dir)
 * Tablet (≤1240px):  1 coluna (texto+logos → imagem 100% → CTA)
 */

const logos = [
  { src: '/amcham.png.png',    alt: 'Amcham'           },
  { src: '/bankly.png.png',    alt: 'bankly'           },
  { src: '/john-deere.png.png',alt: 'John Deere'       },
  { src: '/bravia.png.png',    alt: 'Bravia Engenharia' },
  { src: '/brinks.png.png',    alt: 'Brinks'           },
  { src: '/rufy.png.png',      alt: 'rufy'             },
  { src: '/electrolux.png.png',alt: 'Electrolux'       },
  { src: '/valley.png.png',    alt: 'Valley'           },
];

export default function GrandesEmpresas() {
  return (
    <section
      className={styles.section}
      data-name="Layout / 15 /"
      data-node-id="447:1977"
    >
      <div className={styles.container} data-name="Container">
        <div className={styles.component} data-name="Component">

          {/* Left / top — texto e logos */}
          <div className={styles.content} data-name="Content">
            <div className={styles.sectionTitle} data-name="Section Title">
              <p className={styles.heading} data-node-id="447:1982">
                Grandes empresas já confiaram na{' '}
                <span className={styles.headingHighlight}>Fraktal</span>
              </p>
            </div>

            <div className={styles.logoWrapper} data-name="Logo Wrapper">
              {logos.map((logo) => (
                <img
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  className={styles.logoImg}
                />
              ))}
            </div>

            <div className={styles.bodyText} data-node-id="447:1997">
              <p>Junte-se a este grupo e tenha sistemas desenvolvidos 100% sob medida para a sua clínica médica.</p>
              <p>Entenda como as nossas soluções vão levar organização, eficiência e qualidade para a sua empresa.</p>
            </div>

            {/* CTA — visível apenas no desktop (>1240px) */}
            <a href="#fale-conosco" className={`${styles.ctaButton} ${styles.ctaDesktop}`} data-name="buttonsDarkMode">
              <span className={styles.ctaStateLayer} />
              <span className={styles.ctaLabel}>Fale com um especialista agora</span>
            </a>
          </div>

          {/* Image — direita no desktop, centro no tablet */}
          <div className={styles.imageCol} data-name="Placeholder Image" data-node-id="447:1999">
            <img
              src="https://www.figma.com/api/mcp/asset/701805d7-6abc-4257-9be8-085e9273b4d3"
              alt="Profissional usando computador com código"
              className={styles.heroImage}
            />
          </div>
        </div>

        {/* CTA — visível no tablet e mobile (≤1240px), fora do component */}
        <a href="#fale-conosco" className={`${styles.ctaButton} ${styles.ctaTablet}`} data-name="buttonsDarkMode">
          <span className={styles.ctaStateLayer} />
          <span className={styles.ctaLabel}>Fale com um especialista agora</span>
        </a>
      </div>
    </section>
  );
}
