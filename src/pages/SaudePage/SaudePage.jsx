import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import NaoBastar from '../../components/NaoBastar/NaoBastar';
import ProcessSteps from '../../components/ProcessSteps/ProcessSteps';
import StatsSection from '../../components/StatsSection/StatsSection';
import BannerLoop from '../../components/BannerLoop/BannerLoop';
import QuoteSection from '../../components/QuoteSection/QuoteSection';
import CaseStudies from '../../components/CaseStudies/CaseStudies';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection';
import TeamSection from '../../components/TeamSection/TeamSection';
import GrandesEmpresas from '../../components/GrandesEmpresas/GrandesEmpresas';
import styles from './SaudePage.module.css';

/**
 * SaudePage — Landing page vertical "Saúde"
 * Figma section: 398:4168 (Saúde)
 * Desktop: 1440px | Mobile: 375px
 *
 * Seções (na ordem do Figma):
 * 1. Header          — 398:3324
 * 2. Hero            — 398:3349
 * 3. NaoBastar       — 404:2819  (Layout / 69 /)
 * 4. ProcessSteps    — 404:2947  (Layout / 526 /)
 * 5. StatsSection    — 404:3341  (Layout / 396 /)
 * 6. BannerLoop      — 404:3488  (Layout / 136 /)
 * 7. QuoteSection    — 404:3476  (Layout / 136 / — variante quote)
 * 8. CaseStudies     — 404:3497  (Layout / 313 /)
 * 9. FeaturesSection — 404:3518  (Layout / 612 /)
 * 10. TeamSection      — 404:3541  (Layout / 521 /)
 * 11. GrandesEmpresas — 447:1977  (Layout / 15 /)
 */
export default function SaudePage() {
  return (
    <div className={styles.page} data-name="Saúde" data-node-id="398:4168">
      <Header />
      <main>
        <Hero />
        <NaoBastar />
        <ProcessSteps />
        <StatsSection />
        <BannerLoop />
        <QuoteSection />
        <CaseStudies />
        <FeaturesSection />
        <TeamSection />
        <GrandesEmpresas />
      </main>
    </div>
  );
}
