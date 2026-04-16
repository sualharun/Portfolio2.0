function highlight(text) {
  return text.split(/(\$[\d,]+\+?|\d+(?:,\d{3})*\+)/g).map((part, i) =>
    /^\$|\d\+?$/.test(part) ? <strong key={i}>{part}</strong> : part
  );
}

export default function Extracurriculars({ items }) {
  return (
    <section id="extracurriculars" className="section section-alt">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">06 / Beyond Work</span>
          <h2 className="section-title">OFF<br/>THE CLOCK.</h2>
        </div>
        <div className="extra-grid">
          {items.map((x, i) => (
            <article key={x.id} className="extra-card">
              <div className="extra-num">{String(i + 1).padStart(2, '0')}</div>
              <h3>{x.title}</h3>
              <p>{highlight(x.description)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
