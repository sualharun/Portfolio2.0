function renderDescription(desc) {
  if (desc.includes('•')) {
    const items = desc.split('\n').filter((l) => l.trim()).map((l) => l.replace(/^•\s*/, ''));
    return (
      <ul>
        {items.map((line, i) => (
          <li key={i}>
            {line.split(/(\d+%)/).map((part, j) =>
              /\d+%/.test(part) ? <strong key={j}>{part}</strong> : part
            )}
          </li>
        ))}
      </ul>
    );
  }
  return <p>{desc}</p>;
}

function ExperienceCard({ e }) {
  return (
    <article className={`tl-card ${e.featured ? 'tl-card-feature' : ''}`}>
      <div className="tl-meta">
        <span className="tl-tag">{e.status}</span>
        <span className="tl-date-inline">{e.dateRange}</span>
      </div>
      <h3>{e.role}</h3>
      <h4>{e.company}{e.location ? ` · ${e.location}` : ''}</h4>
      {renderDescription(e.description)}
    </article>
  );
}

export default function Experience({ items }) {
  const normalizedItems = items.map((e) => {
    const isCapitalOne =
      e.id === 2 ||
      /capital one/i.test(e.role || '') ||
      /capital one/i.test(e.company || '');

    if (!isCapitalOne) return e;

    return {
      ...e,
      role: 'Tech Summit Participant',
      company: 'Capital One',
      location: 'Plano, TX',
      dateRange: 'May 2026',
      description:
        "Selected for Capital One's highly competitive 5-day Tech Summit, including a hackathon, focused on technical leadership, enterprise engineering, and career development."
    };
  });

  const finalItems = normalizedItems.map((e) => {
    if (!/vantashala/i.test(e.company || '')) return e;
    return {
      ...e,
      dateRange: 'May 2024 – Aug 2024'
    };
  });

  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">02 / Experience</span>
          <h2 className="section-title">WHERE<br/>I'VE BUILT.</h2>
        </div>
        <div className="timeline">
          {finalItems.map((e, i) => {
            const side = i % 2 === 0 ? 'tl-row-left' : 'tl-row-right';
            return (
              <div
                key={e.id}
                className={`tl-row ${side} ${e.featured ? 'tl-row-feature' : ''}`}
              >
                <div className="tl-side tl-side-a">
                  {i % 2 === 0 && <ExperienceCard e={e} />}
                </div>
                <div className="tl-center">
                  <span className="tl-date">{e.dateRange}</span>
                  <span className="tl-dot" aria-hidden="true" />
                </div>
                <div className="tl-side tl-side-b">
                  {i % 2 === 1 && <ExperienceCard e={e} />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
