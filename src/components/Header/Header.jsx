import { useState } from 'react';
import { desktop, mobile } from '../../assets/images';
import FraktalLogo from '../../assets/FraktalLogo';
import styles from './Header.module.css';

/**
 * Header — barra de navegação principal
 * Desktop: logo + nav links + botões de ação
 * Mobile: logo + ícone de menu hambúrguer
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Insights', href: '#insights' },
    { label: 'Sobre', href: '#sobre' },
  ];

  return (
    <header className={styles.header} data-name="Header" data-node-id="398:3324">
      <div className={styles.inner} data-name="Header" data-node-id="398:3325">
        {/* Logo */}
        <a href="/" className={styles.logo} data-name="logo" data-node-id="398:3326" aria-label="Fraktal — ir para o início">
          <FraktalLogo className={styles.logoSvg} />
        </a>

        {/* Navigation — desktop */}
        <nav className={styles.navigation} data-name="Navigation" data-node-id="398:3327" aria-label="Menu principal">
          <ul className={styles.menuItems} data-name="Menu Items" data-node-id="398:3328">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.siteLink} data-name="Site Link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Action buttons */}
          <div className={styles.clientAreaButton} data-name="Client Area Button" data-node-id="398:3334">
            {/* Night mode toggle */}
            <button
              className={styles.nightModeButton}
              data-name="Night Mode Button"
              data-node-id="398:3335"
              aria-label="Alternar modo escuro"
            >
              <img
                src={desktop.bedtime}
                alt=""
                aria-hidden="true"
                className={styles.nightModeIcon}
                data-name="bedtime"
              />
            </button>

            {/* Área do cliente */}
            <a
              href="#area-cliente"
              className={styles.clientButton}
              data-name="buttonsLightMode"
              data-node-id="398:3339"
            >
              <span className={styles.clientButtonStateLayer} data-name="stateLayer" />
              <img
                src={desktop.personOutline}
                alt=""
                aria-hidden="true"
                className={styles.clientButtonIcon}
                data-name="person_outline"
              />
              <span className={styles.clientButtonLabel}>Área do cliente</span>
            </a>

            {/* EN language */}
            <button
              className={styles.langButton}
              data-name="EN Button"
              data-node-id="398:3340"
              aria-label="Trocar idioma para inglês"
            >
              <div className={styles.langFlag}>
                <img
                  src={desktop.flagGroup1}
                  alt="EN"
                  className={styles.langFlagImg}
                  style={{ WebkitMaskImage: `url('${desktop.flagGroup}')`, maskImage: `url('${desktop.flagGroup}')` }}
                />
              </div>
            </button>
          </div>
        </nav>

        {/* Hamburger — mobile only */}
        <button
          className={styles.hamburger}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menu"
          aria-expanded={mobileMenuOpen}
          data-name="density_small"
          data-node-id="432:2432"
        >
          <img src={mobile.hamburger} alt="" aria-hidden="true" />
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <nav className={styles.mobileMenu} aria-label="Menu mobile">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={styles.mobileSiteLink}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#area-cliente" className={styles.mobileClientButton} onClick={() => setMobileMenuOpen(false)}>
            Área do cliente
          </a>
        </nav>
      )}
    </header>
  );
}
