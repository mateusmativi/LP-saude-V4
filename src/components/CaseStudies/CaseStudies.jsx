import { useState, useEffect, useRef, useCallback } from 'react';
import styles from './CaseStudies.module.css';

/**
 * CaseStudies — Layout / 313 /
 * Desktop: 407:3843 | Mobile: 432:3153
 * Carrossel infinito: 4 cards desktop, 2 tablet, 1 mobile
 */
const PLACEHOLDER = 'https://www.figma.com/api/mcp/asset/0aeedb75-4afd-4768-8217-ad6506dd153c';
const ICON        = 'https://www.figma.com/api/mcp/asset/7d689bb7-7012-4595-bea9-2b7d70ec1eba';

const cases = [
  {
    name: 'Brinks',
    description: 'Reduzimos o tempo de precificação de propostas com um sistema inteligente que substituiu planilhas manuais por uma calculadora instantânea.',
  },
  {
    name: 'Amcham Brasil',
    description: 'Desenvolvemos um CMS proprietário e robusto, com UX/UI 100% customizado que já está na 2ª versão, com implementamos melhorias contínuas.',
  },
  {
    name: 'Pontua AI',
    description: 'Criamos uma plataforma de inteligência artificial educacional que corrige redações com velocidade, critérios ajustáveis e dashboards de desempenho.',
  },
  {
    name: 'Soacred',
    description: 'Transformamos a rotina de lojistas com um app intuitivo que integra crédito, cadastros e transparência em tempo real.',
  },
  {
    name: 'Propwase',
    description: 'Centralizamos CRM, leads e gestão imobiliária em uma única plataforma com IA e automação total.',
  },
];

const N = cases.length;
const CLONED = [...cases, ...cases, ...cases]; // 3 cópias para loop infinito
const GAP = 24; // px entre cards

function useVisibleCount() {
  const [count, setCount] = useState(4);
  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      setCount(w <= 768 ? 1 : w <= 1024 ? 2 : 4);
    }
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return count;
}

function ChevronLeft() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CaseStudies() {
  const visibleCount = useVisibleCount();
  const [index, setIndex]       = useState(N); // começa na cópia do meio
  const [animated, setAnimated] = useState(true);

  const viewportRef = useRef(null);
  const [viewportWidth, setViewportWidth] = useState(0);
  const indexRef = useRef(index);

  // Mantém ref sincronizada para uso em callbacks sem stale closure
  useEffect(() => { indexRef.current = index; }, [index]);

  // Observa largura do viewport do carrossel
  useEffect(() => {
    const ro = new ResizeObserver(entries => {
      setViewportWidth(entries[0].contentRect.width);
    });
    if (viewportRef.current) ro.observe(viewportRef.current);
    return () => ro.disconnect();
  }, []);

  // Reabilita animação após jump silencioso
  useEffect(() => {
    if (!animated) {
      const id = requestAnimationFrame(() =>
        requestAnimationFrame(() => setAnimated(true))
      );
      return () => cancelAnimationFrame(id);
    }
  }, [animated]);

  const cardWidth = viewportWidth > 0
    ? (viewportWidth - GAP * (visibleCount - 1)) / visibleCount
    : 0;
  const step = cardWidth + GAP;

  const prev = useCallback(() => {
    setAnimated(true);
    setIndex(i => i - 1);
  }, []);

  const next = useCallback(() => {
    setAnimated(true);
    setIndex(i => i + 1);
  }, []);

  // Ao fim da transição: verifica se está nas cópias e faz jump silencioso
  const handleTransitionEnd = useCallback(() => {
    const current = indexRef.current;
    const jumped =
      current >= 2 * N ? current - N :
      current < N      ? current + N :
      null;
    if (jumped !== null) {
      setAnimated(false);
      setIndex(jumped);
    }
  }, []);

  return (
    <section
      className={styles.section}
      data-name="Layout / 313 /"
      data-node-id="407:3843"
    >
      <div className={styles.container}>
        {/* Título — esquerda */}
        <div className={styles.titleWrapper}>
          <h2 className={styles.heading}>
            Resultados que<br />
            <span className={styles.headingHighlight}>falam por si</span>
          </h2>
        </div>

        {/* Descrição — desktop: direita | mobile: abaixo dos cards */}
        <div className={styles.descBlock}>
          <img
            src={ICON}
            alt=""
            aria-hidden="true"
            className={styles.descIcon}
            data-name="editor_choice"
          />
          <p className={styles.descText}>
            Empresas líderes já transformaram seus processos com a{' '}
            <strong className={styles.descHighlight}>Fraktal</strong>.
          </p>
        </div>

        {/* Carrossel */}
        <div className={styles.carouselWrapper} data-name="Row">
          <button className={styles.arrowBtn} onClick={prev} aria-label="Anterior">
            <ChevronLeft />
          </button>

          <div className={styles.carouselViewport} ref={viewportRef}>
            <div
              className={styles.carouselTrack}
              style={{
                transform: `translateX(${-index * step}px)`,
                transition: animated ? 'transform 0.4s ease' : 'none',
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {CLONED.map((c, i) => (
                <div
                  key={i}
                  className={styles.caseCard}
                  style={{ width: cardWidth > 0 ? cardWidth : undefined }}
                  data-name={c.name}
                >
                  <div className={styles.caseImageWrapper} data-name="Placeholder Image">
                    <img src={PLACEHOLDER} alt={c.name} className={styles.caseImage} />
                  </div>
                  <div className={styles.caseContent} data-name="Content">
                    <h3 className={styles.caseTitle}>{c.name}</h3>
                    <p className={styles.caseDescription}>{c.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className={styles.arrowBtn} onClick={next} aria-label="Próximo">
            <ChevronRight />
          </button>
        </div>

        {/* CTAs */}
        <div className={styles.ctaRow} data-name="CTA Wrapper">
          <a href="#fale-conosco" className={styles.ctaPrimary} data-name="buttonsDarkMode">
            <span className={styles.ctaStateLayer} />
            <span>Transforme sua clínica agora</span>
          </a>
          <a href="#projetos" className={styles.ctaSecondary} data-name="buttonsDarkMode">
            <span className={styles.ctaStateLayer} />
            <span>Ver projetos</span>
          </a>
        </div>
      </div>
    </section>
  );
}
