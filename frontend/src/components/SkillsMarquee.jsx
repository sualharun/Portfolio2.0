const TOP_SKILLS = [
  { name: 'Java', desc: 'Backend services & Spring Boot APIs' },
  { name: 'Python', desc: 'ML, DSP & data pipelines' },
  { name: 'React', desc: 'Interactive, component-driven UIs' },
  { name: 'Spring Boot', desc: 'Scalable REST & auth systems' },
  { name: 'AWS', desc: 'ECS, Lambda, DynamoDB, SQS' },
  { name: 'Azure', desc: 'Cloud admin & AZ-104 certified' },
  { name: 'Docker', desc: 'Containerized builds & deploys' },
  { name: 'PostgreSQL', desc: 'Schema design & query tuning' },
  { name: 'Next.js', desc: 'Full-stack React apps' },
  { name: 'TensorFlow', desc: 'Computer vision & models' },
  { name: 'WebSocket', desc: 'Real-time collaboration' },
  { name: 'CI/CD', desc: 'Automated test & delivery' }
];

function Row({ ariaHidden = false }) {
  return (
    <ul className="sm-row" aria-hidden={ariaHidden || undefined}>
      {TOP_SKILLS.map((s) => (
        <li className="sm-item" key={`${ariaHidden ? 'b' : 'a'}-${s.name}`}>
          <span className="sm-name">{s.name}</span>
          <span className="sm-dot" aria-hidden="true">/</span>
          <span className="sm-desc">{s.desc}</span>
        </li>
      ))}
    </ul>
  );
}

export default function SkillsMarquee() {
  return (
    <section className="sm-section" aria-label="Top skills">
      <div className="sm-track">
        <Row />
        <Row ariaHidden />
      </div>
    </section>
  );
}
