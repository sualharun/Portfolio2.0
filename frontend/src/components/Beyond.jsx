import StickyScrollShowcase from './StickyScrollShowcase.jsx';

export default function Beyond() {
  return (
    <section id="beyond" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">07 / Gallery</span>
          <h2 className="section-title">BEYOND<br/>THE CODE.</h2>
          <p className="section-sub">Life outside the terminal.</p>
        </div>
        <StickyScrollShowcase />
      </div>
    </section>
  );
}
