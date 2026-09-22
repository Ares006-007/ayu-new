import styles from './ProblemStats.module.css';

export default function ProblemStats() {
  return (
    <section className={styles.section} id="problem-stats">
      <div className="container">
        
        <header className={styles.header}>
          <h2 className="text-h2">
            Healthcare is fragmented. The cost is measurable.
          </h2>
          <p className="text-body-lg" style={{ marginTop: '1rem', maxWidth: '800px' }}>
            Patients and providers in India still navigate a care system with high direct spending, distributed infrastructure, and rapidly growing digital rails.
          </p>
        </header>

        <div className={styles.visualizations}>
          
          {/* Chart 1: Out-of-pocket expenditure */}
          <div className={styles.vizBlock}>
            <h3 className="text-h3" style={{ marginBottom: '2rem' }}>
              Out-of-pocket share of total health expenditure
            </h3>
            
            <div className={styles.barChart}>
              <div className={styles.barRow}>
                <span className={styles.barLabel}>2014–15</span>
                <div className={styles.barTrack}>
                  <div className={styles.barFill} style={{ width: '62.6%' }}></div>
                  <span className={styles.barValue}>62.6%</span>
                </div>
              </div>
              <div className={styles.barRow}>
                <span className={styles.barLabel}>2017–18</span>
                <div className={styles.barTrack}>
                  <div className={styles.barFill} style={{ width: '48.8%' }}></div>
                  <span className={styles.barValue}>48.8%</span>
                </div>
              </div>
              <div className={styles.barRow}>
                <span className={styles.barLabel}>2021–22</span>
                <div className={styles.barTrack}>
                  <div className={`${styles.barFill} ${styles.barFillAccent}`} style={{ width: '39.4%' }}></div>
                  <span className={styles.barValue}>39.4%</span>
                </div>
              </div>
            </div>
            
            <p className={styles.sourceNote}>
              Source: National Health Accounts.
            </p>
          </div>

          {/* Chart 2: Public Healthcare Network */}
          <div className={styles.vizBlock}>
            <h3 className="text-h3" style={{ marginBottom: '2rem' }}>
              Scale of India's public healthcare network
            </h3>
            
            <div className={styles.barChart}>
              <div className={styles.barRow}>
                <span className={styles.barLabel}>Sub-centres</span>
                <div className={styles.barTrack}>
                  <div className={styles.barFill} style={{ width: '100%' }}></div>
                  <span className={styles.barValue}>167,275</span>
                </div>
              </div>
              <div className={styles.barRow}>
                <span className={styles.barLabel}>PHCs</span>
                <div className={styles.barTrack}>
                  <div className={styles.barFill} style={{ width: '15.9%' }}></div>
                  <span className={styles.barValue}>26,636</span>
                </div>
              </div>
              <div className={styles.barRow}>
                <span className={styles.barLabel}>CHCs</span>
                <div className={styles.barTrack}>
                  <div className={styles.barFill} style={{ width: '3.6%' }}></div>
                  <span className={styles.barValue}>6,155</span>
                </div>
              </div>
              <div className={styles.barRow}>
                <span className={styles.barLabel}>District Hos.</span>
                <div className={styles.barTrack}>
                  <div className={styles.barFill} style={{ width: '0.45%' }}></div>
                  <span className={styles.barValue}>759</span>
                </div>
              </div>
            </div>

            <p className={styles.sourceNote}>
              Source: National Health Mission, 2024.
            </p>
          </div>

          {/* Chart 3: Digital Health Infrastructure */}
          <div className={styles.vizBlock}>
            <h3 className="text-h3" style={{ marginBottom: '2rem' }}>
              Digital-health infrastructure scale
            </h3>
            
            <div className={styles.metricsGrid}>
              <div className={styles.metricCard}>
                <span className={styles.metricNumber}>355,072</span>
                <span className={styles.metricLabel}>ABDM-registered health facilities</span>
              </div>
              <div className={styles.metricDivider}></div>
              <div className={styles.metricCard}>
                <span className={styles.metricNumber}>46.25<span className={styles.metricUnit}>cr</span></span>
                <span className={styles.metricLabel}>ABHA-linked health records</span>
              </div>
            </div>

            <p className={styles.sourceNote}>
              Source: PIB / MoHFW, November 2024.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
