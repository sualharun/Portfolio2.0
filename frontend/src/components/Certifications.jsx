const CERT_ORDER = [
  'Solutions Architect – Associate',
  'AZ-104 Administrator Associate',
  'Cloud Practitioner'
];

const CERT_DETAILS = {
  'Solutions Architect – Associate': {
    description:
      'Associate-level AWS certification validating the ability to design resilient, high-performing, secure, and cost-optimized architectures on AWS.',
    href: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/d0146e129cc04d0faf566d88f24f798f',
    logo: '/assets/aws.png',
    logoAlt: 'Amazon Web Services logo'
  },
  'AZ-104 Administrator Associate': {
    description:
      'Microsoft Azure Administrator certification covering identity, governance, storage, compute, and virtual networking in Azure.',
    href: 'https://learn.microsoft.com/en-us/users/harunsual-4923/credentials/1aa0e0e3bd13993a?ref=https%3A%2F%2Fwww.linkedin.com%2F',
    logo: '/assets/azure.png',
    logoAlt: 'Microsoft Azure logo'
  },
  'Cloud Practitioner': {
    description:
      'Foundational AWS certification validating overall understanding of AWS Cloud, core services, security, architecture, pricing, and support.',
    href: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/0250653d73974e83928d5b8d72245784',
    logo: '/assets/aws.png',
    logoAlt: 'Amazon Web Services logo'
  }
};

export default function Certifications({ items }) {
  const byName = new Map((items || []).map((c) => [c.name, c]));
  const ordered = CERT_ORDER.map((name) => byName.get(name)).filter(Boolean);

  return (
    <section id="certifications" className="section section-alt">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">04 / Certifications</span>
          <h2 className="section-title">CERTIFIED.</h2>
        </div>
        <div className="cert-grid">
          {ordered.map((c) => {
            const d = CERT_DETAILS[c.name] || {};
            return (
              <article key={c.id} className={`cert-card cert-${c.brand}`}>
                <div className="cert-logo cert-logo-img">
                  {d.logo ? (
                    <img src={d.logo} alt={d.logoAlt || `${c.name} logo`} />
                  ) : (
                    c.shortCode
                  )}
                </div>
                <h3>{c.name}</h3>
                <p className="cert-issuer">{c.issuer}</p>
                {d.description && <p className="cert-desc">{d.description}</p>}
                {d.href && (
                  <a
                    className="cert-link"
                    href={d.href}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    View certificate →
                  </a>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
