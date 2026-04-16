export default function About({ certCount, projectCount }) {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <div className="section-head">
          <span className="eyebrow">01 / About</span>
          <h2 className="section-title">WHO<br/>AM I.</h2>
        </div>
        <div className="about-body">
          <p className="lead">
            I'm a <span className="accent">Computer Science</span> major with a{' '}
            <span className="accent">Minor in Finance</span> at UT Dallas, expected to graduate{' '}
            <span className="accent">May 2028</span>.
          </p>
          <p>
            I'm passionate about building full-stack applications, distributed systems, and cloud
            infrastructure that scales. I thrive on turning ambitious ideas into shipping
            products — from wearable AI to enterprise cost tooling.
          </p>
          <div className="stats">
            <div><strong>2028</strong><span>Graduation</span></div>
            <div><strong>{certCount ? `${certCount}+` : '—'}</strong><span>Certifications</span></div>
            <div><strong>{projectCount ? `${projectCount}+` : '—'}</strong><span>Projects Shipped</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
