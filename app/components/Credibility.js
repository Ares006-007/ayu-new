import styles from './Credibility.module.css';

export default function Credibility() {
  return (
    <section className={styles.credibility} id="credibility">
      <div className="container">
        <div className={styles.layout}>
          <div className="reveal">
            <span className="eyebrow">The Foundation</span>
            <h2 className="heading-section">
              Built with Research-Driven and Youth Innovation Ecosystems
            </h2>
          </div>
          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <p className="text-body-lg">
              AYU is being built at the intersection of healthcare access, youth-led innovation, and research-driven curiosity. Hack Club officially backed AYU by supporting us, and Maya Research invested in our mission, reinforcing a product philosophy grounded in accessibility, experimentation, and real-world impact.
            </p>

            <div className={styles.logos}>
              <div className={styles.logoBox}>
                <span>Hack Club</span>
              </div>
              <div className={styles.logoBox}>
                <span>Maya Research</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
