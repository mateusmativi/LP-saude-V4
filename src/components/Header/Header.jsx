import { useState } from 'react';
import { desktop, mobile } from '../../assets/images';
import FraktalLogo from '../../assets/FraktalLogo';
import styles from './Header.module.css';

/**
 * Header — 398:3324 (desktop) / 429:2365 (mobile)
 * Desktop  (>1024px): logo + nav + action buttons
 * Tablet   (≤1024px): logo + night mode + flag + hamburger
 * Mobile   (≤768px):  igual tablet com padding reduzido
 * Menu mobile: links com chevron + área do cliente + dark mode + flag
 */

const navLinks = [
  { label: 'Início',    href: '#inicio',    chevron: false },
  { label: 'Serviços',  href: '#servicos',  chevron: true  },
  { label: 'Projetos',  href: '#projetos',  chevron: true  },
  { label: 'Insights',  href: '#insights',  chevron: false },
  { label: 'Sobre',     href: '#sobre',     chevron: false },
];

function ChevronDown() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className={styles.chevron}>
      <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function NightModeButton() {
  return (
    <button className={styles.nightModeButton} aria-label="Alternar modo escuro" data-name="Night Mode Button">
      <img src={desktop.bedtime} alt="" aria-hidden="true" className={styles.nightModeIcon} data-name="bedtime" />
    </button>
  );
}

function LangButton() {
  return (
    <button className={styles.langButton} aria-label="Trocar idioma para inglês" data-name="EN Button">
      <div className={styles.langFlag}>
        <img
          src={desktop.flagGroup1}
          alt="EN"
          className={styles.langFlagImg}
          style={{ WebkitMaskImage: `url('${desktop.flagGroup}')`, maskImage: `url('${desktop.flagGroup}')` }}
        />
      </div>
    </button>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={styles.header} data-name="Header" data-node-id="398:3324">
      <div className={styles.inner} data-name="Header" data-node-id="398:3325">

        {/* Logo */}
        <a href="/" className={styles.logo} data-name="logo" data-node-id="398:3326" aria-label="Fraktal — ir para o início">
          <FraktalLogo className={styles.logoSvg} />
        </a>

        {/* Desktop full navigation (>1024px) */}
        <nav className={styles.navigation} data-name="Navigation" data-node-id="398:3327" aria-label="Menu principal">
          <ul className={styles.menuItems} data-name="Menu Items">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.siteLink}>
                  {link.label}
                  {link.chevron && <ChevronDown />}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.clientAreaButton} data-name="Client Area Button" data-node-id="398:3334">
            <NightModeButton />
            <a href="#area-cliente" className={styles.clientButton} data-name="buttonsLightMode" data-node-id="398:3339">
              <span className={styles.clientButtonStateLayer} />
              <img src={desktop.personOutline} alt="" aria-hidden="true" className={styles.clientButtonIcon} />
              <span className={styles.clientButtonLabel}>Área do cliente</span>
            </a>
            <LangButton />
          </div>
        </nav>

        {/* Tablet / mobile actions: night mode + flag + hamburger (≤1024px) */}
        <div className={styles.tabletActions}>
          <NightModeButton />
          <LangButton />
          <button
            className={styles.hamburger}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileMenuOpen}
            data-name="density_small"
          >
            <img src={mobile.hamburger} alt="" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile / tablet dropdown menu */}
      {mobileMenuOpen && (
        <nav className={styles.mobileMenu} aria-label="Menu mobile">
          <ul className={styles.mobileMenuList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.mobileSiteLink} onClick={closeMenu}>
                  <span>{link.label}</span>
                  {link.chevron && <ChevronDown />}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.mobileMenuActions}>
            <a href="#area-cliente" className={styles.mobileClientButton} onClick={closeMenu}>
              <img src={desktop.personOutline} alt="" aria-hidden="true" className={styles.clientButtonIcon} />
              <span>Área do cliente</span>
            </a>
            <div className={styles.mobileMenuIcons}>
              <NightModeButton />
              <LangButton />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
