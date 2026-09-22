import styles from './ExpectedGrowth.module.css';

export default function ExpectedGrowth() {
  return (
    <section className={styles.growth} id="growth">
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <span className="eyebrow">Market Tailwinds</span>
          <h2 className="heading-section">
            Why This Matters Over the Next 5 Years
          </h2>
          <p className="text-body-lg" style={{ marginTop: '1rem' }}>
            AYU is positioned to grow alongside India's rapidly expanding digital health ecosystem, which is projected to reach USD 106.97 billion by 2033 (25.12% CAGR). As digital health adoption accelerates, AYU can evolve from a care-assistance tool into a healthcare coordination layer.
          </p>
        </div>

        <div className={styles.cards}>
          <div className={`${styles.card} reveal`} style={{ transitionDelay: '0.1s' }}>
            <h3 className={styles.cardTitle}>Patient Adoption</h3>
            <p className={styles.cardBody}>
              Over the next five years, WhatsApp-native healthcare coordination can become a major access layer for patients and caregivers, bypassing app-fatigue and reducing digital friction.
            </p>
          </div>
          <div className={`${styles.card} reveal`} style={{ transitionDelay: '0.2s' }}>
            <h3 className={styles.cardTitle}>Provider Workflow Integration</h3>
            <p className={styles.cardBody}>
              Evolving from care-assistance into a seamless healthcare coordination layer for clinics, labs, and pharmacies.
            </p>
          </div>
          <div className={`${styles.card} reveal`} style={{ transitionDelay: '0.3s' }}>
            <h3 className={styles.cardTitle}>Regional Language Access</h3>
            <p className={styles.cardBody}>
              Delivering vernacular healthcare access to non-English speaking populations, bringing the next billion internet users into the digital health ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
