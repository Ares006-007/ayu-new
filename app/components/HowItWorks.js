import styles from './HowItWorks.module.css';

export default function HowItWorks() {
  return (
    <section className={styles.reality} id="reality">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.left}>
            <span className="text-mono">The Reality</span>
          </div>
          <div className={styles.right}>
            <h2 className="text-h2">
              Right now, your patients make three separate trips for a single checkup cycle.
            </h2>
            <div className={styles.body}>
              <p className="text-body-lg">
                One trip to book the appointment. A second to consult the doctor and get lab tests. A third to collect medicines and discuss the report. That is broken.
              </p>
              <p className="text-body-lg">
                Ayu reduces that to one visit. We connect the booking, the consultation, the lab report, and the pharmacy fulfillment into a single digital thread on WhatsApp.
              </p>
            </div>
            
            <div className={styles.stats}>
              <div className={styles.stat} style={{ flex: 1, minWidth: '200px' }}>
                <span className={styles.statNum} style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>WhatsApp Native</span>
                <span className={styles.statLabel} style={{ marginTop: 0, fontSize: '1rem', lineHeight: '1.5' }}>Familiar interface for instant booking, reports, and reminders.</span>
              </div>
              <div className={styles.stat} style={{ flex: 1, minWidth: '200px' }}>
                <span className={styles.statNum} style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Multilingual</span>
                <span className={styles.statLabel} style={{ marginTop: 0, fontSize: '1rem', lineHeight: '1.5' }}>Guidance in regional languages for non-English speakers.</span>
              </div>
              <div className={styles.stat} style={{ flex: 1, minWidth: '200px' }}>
                <span className={styles.statNum} style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Care Continuity</span>
                <span className={styles.statLabel} style={{ marginTop: 0, fontSize: '1rem', lineHeight: '1.5' }}>Seamless flow from doctors to labs and pharmacies.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
