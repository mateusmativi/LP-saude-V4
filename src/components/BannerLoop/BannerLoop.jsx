import { desktop } from '../../assets/images';
import styles from './BannerLoop.module.css';

/**
 * BannerLoop — Layout / 136 /
 * Ticker/marquee com repetição: "Não somos uma software house comum."
 * Desktop node: 404:3488 | Mobile: similar
 */
const REPEAT_COUNT = 6;

function BannerSaying() {
  return (
    <div className={styles.saying} data-name="Banner Saying" data-node-id="404:3504">
      <img
        src={desktop.awardStar}
        alt=""
        aria-hidden="true"
        className={styles.sayingIcon}
        data-name="award_star"
      />
      <p className={styles.sayingText}>
        Não somos uma software house comum.
      </p>
    </div>
  );
}

export default function BannerLoop() {
  return (
    <section
      className={styles.section}
      aria-label="Banner rotativo — Não somos uma software house comum"
      data-name="Layout / 136 /"
      data-node-id="404:3488"
    >
      <div className={styles.track}>
        {/* Duplicate items to create seamless loop */}
        {Array.from({ length: REPEAT_COUNT }).map((_, i) => (
          <BannerSaying key={i} />
        ))}
        {/* Second copy for seamless animation */}
        {Array.from({ length: REPEAT_COUNT }).map((_, i) => (
          <BannerSaying key={`dup-${i}`} />
        ))}
      </div>
    </section>
  );
}
