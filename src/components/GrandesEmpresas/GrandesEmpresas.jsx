import styles from './GrandesEmpresas.module.css';

/**
 * GrandesEmpresas — Layout / 15 /
 * "Grandes empresas já confiaram na Fraktal"
 * Desktop node: 447:1977 | Mobile node: 447:2000
 *
 * Desktop: 2 colunas (texto + logos à esq, imagem à dir)
 * Mobile:  1 coluna (texto + logos, imagem, CTA)
 */

// ---- Assets (desktop frame 447:1977) ----
const assets = {
  // Logos
  logo02:       'https://www.figma.com/api/mcp/asset/aea130cc-7dfa-4e00-9a44-da484f354cbe', // bankly
  logo03:       'https://www.figma.com/api/mcp/asset/dd762de9-0a1b-45ad-b843-1056539b724e', // John Deere
  logo04:       'https://www.figma.com/api/mcp/asset/6b25156b-bf86-49ad-b5d4-ba2a71778f87', // Bravia
  logo05:       'https://www.figma.com/api/mcp/asset/861695a5-e883-42ea-aa7e-f7c0dd9608c8', // Brinks
  logo06:       'https://www.figma.com/api/mcp/asset/e4b89194-ec77-4c8e-b5d1-123258e0911d', // Electrolux
  // Logo 01 (Amcham) — composto de vetores individuais
  vectorAmcham: [
    'https://www.figma.com/api/mcp/asset/fda78440-073e-483f-8eb1-623c26d9e5cf',
    'https://www.figma.com/api/mcp/asset/5b6a8d14-0a68-4881-b9d8-b98cd3f54b26',
    'https://www.figma.com/api/mcp/asset/7f796f86-8fca-443c-b9b9-a33eb729cbfa',
    'https://www.figma.com/api/mcp/asset/14e11dc2-5d70-4a2a-9797-bf878f43c8dd',
    'https://www.figma.com/api/mcp/asset/f34260aa-9d99-43fd-940a-d7290e18ca65',
    'https://www.figma.com/api/mcp/asset/bffeefd8-cfb0-47a8-8210-61dc9c2ae16f',
  ],
  // Logo 08 (rufy)
  image40:      'https://www.figma.com/api/mcp/asset/26e3fc44-2a47-41aa-ac4b-098ad108a012',
  rectangle28:  'https://www.figma.com/api/mcp/asset/d44cec2b-e7e3-4072-99a3-099828fb6844',
  // Logo 07 (Valley)
  g12:          'https://www.figma.com/api/mcp/asset/e6573417-2a67-4ad2-a96d-d16d3bce656e',
  // Hero image
  heroImage:    'https://www.figma.com/api/mcp/asset/701805d7-6abc-4257-9be8-085e9273b4d3',
};

// Logo 08 (rufy) — composição com máscara
function LogoRufy({ className }) {
  return (
    <div className={`${styles.logoItem} ${styles.logoRufy} ${className || ''}`} data-name="Logo 08">
      <div className={styles.rufyInner}>
        <div className={styles.rufyImg40}>
          <img alt="" src={assets.image40} className={styles.rufyImg40Img} />
        </div>
        <div
          className={styles.rufyMask}
          style={{
            maskImage: `url('${assets.rectangle28}')`,
            WebkitMaskImage: `url('${assets.rectangle28}')`,
          }}
        />
      </div>
    </div>
  );
}

// Logo 01 (Amcham) — composto de 6 vetores sobrepostos
function LogoAmcham({ className }) {
  const positions = [
    { inset: '1.59% 65.84% 1.57% 15.28%' },
    { inset: '1.59% 86.42% 1.57% 0' },
    { inset: '1.59% 0 1.57% 81.12%' },
    { inset: '1.59% 20.59% 1.57% 65.84%' },
    { inset: '1.59% 35.87% 1.57% 51.21%' },
    { inset: '0 50.49% 0 35.87%' },
  ];
  return (
    <div className={`${styles.logoItem} ${styles.logoAmcham} ${className || ''}`} data-name="Logo 01">
      {positions.map((pos, i) => (
        <img
          key={i}
          alt={i === 0 ? 'Amcham' : ''}
          src={assets.vectorAmcham[i]}
          className={styles.logoAmchamVector}
          style={{ inset: pos.inset }}
        />
      ))}
    </div>
  );
}

// Logo 07 (Valley) — escala Y invertida
function LogoValley({ className }) {
  return (
    <div className={`${styles.logoItem} ${styles.logoValley} ${className || ''}`} data-name="Logo 07">
      <div className={styles.valleyInner}>
        <div className={styles.valleyG12}>
          <img alt="Valley" src={assets.g12} className={styles.valleyG12Img} />
        </div>
      </div>
    </div>
  );
}

export default function GrandesEmpresas() {
  return (
    <section
      className={styles.section}
      data-name="Layout / 15 /"
      data-node-id="447:1977"
    >
      <div className={styles.container} data-name="Container">
        <div className={styles.component} data-name="Component">

          {/* Left — texto, logos, CTA */}
          <div className={styles.content} data-name="Content">
            {/* Heading */}
            <div className={styles.sectionTitle} data-name="Section Title">
              <p className={styles.heading} data-node-id="447:1982">
                Grandes empresas já confiaram na{' '}
                <span className={styles.headingHighlight}>Fraktal</span>
              </p>
            </div>

            {/* Logos */}
            <div className={styles.logoWrapper} data-name="Logo Wrapper">
              {/* Logo 02 — bankly */}
              <div className={`${styles.logoItem} ${styles.logoBankly}`} data-name="Logo 02">
                <img alt="bankly" src={assets.logo02} className={styles.logoCoverImg} />
              </div>

              {/* Logo 03 — John Deere */}
              <div className={`${styles.logoItem} ${styles.logoJohnDeere}`} data-name="Logo 03">
                <div className={styles.logoOverflow}>
                  <img alt="John Deere" src={assets.logo03} className={styles.logoJohnDeereImg} />
                </div>
              </div>

              {/* Logo 04 — Bravia */}
              <div className={`${styles.logoItem} ${styles.logoBravia}`} data-name="Logo 04">
                <div className={styles.logoOverflow}>
                  <img alt="Bravia Engenharia" src={assets.logo04} className={styles.logoBraviaImg} />
                </div>
              </div>

              {/* Logo 01 — Amcham */}
              <LogoAmcham />

              {/* Logo 05 — Brinks */}
              <div className={`${styles.logoItem} ${styles.logoBrinks}`} data-name="Logo 05">
                <div className={styles.logoOverflow}>
                  <img alt="Brinks" src={assets.logo05} className={styles.logoBrinksImg} />
                </div>
              </div>

              {/* Logo 08 — rufy */}
              <LogoRufy />

              {/* Logo 06 — Electrolux */}
              <div className={`${styles.logoItem} ${styles.logoElectrolux}`} data-name="Logo 06">
                <div className={styles.logoOverflow}>
                  <img alt="Electrolux" src={assets.logo06} className={styles.logoElectroluxImg} />
                </div>
              </div>

              {/* Logo 07 — Valley */}
              <LogoValley />
            </div>

            {/* Body text */}
            <div className={styles.bodyText} data-node-id="447:1997">
              <p>Junte-se a este grupo e tenha sistemas desenvolvidos 100% sob medida para a sua clínica médica.</p>
              <p>Entenda como as nossas soluções vão levar organização, eficiência e qualidade para a sua empresa.</p>
            </div>

            {/* CTA — desktop (inside left col) */}
            <a href="#fale-conosco" className={`${styles.ctaButton} ${styles.ctaDesktop}`} data-name="buttonsDarkMode" data-node-id="447:1998">
              <span className={styles.ctaStateLayer} />
              <span className={styles.ctaLabel}>Fale com um especialista agora</span>
            </a>
          </div>

          {/* Right — image */}
          <div className={styles.imageCol} data-name="Placeholder Image" data-node-id="447:1999">
            <img
              src={assets.heroImage}
              alt="Profissional usando computador com código"
              className={styles.heroImage}
            />
          </div>
        </div>
      </div>

      {/* CTA — mobile (outside, full width) */}
      <a href="#fale-conosco" className={`${styles.ctaButton} ${styles.ctaMobile}`} data-name="buttonsDarkMode" data-node-id="447:2022">
        <span className={styles.ctaStateLayer} />
        <span className={styles.ctaLabel}>Fale com um especialista agora</span>
      </a>
    </section>
  );
}
