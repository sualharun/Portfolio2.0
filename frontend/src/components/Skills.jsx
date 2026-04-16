const SKILLS = [
  'Java','Python','JavaScript','HTML','CSS','C/C++','SQL','React','Spring Boot',
  'Spring Security','Node.js','Next.js','Flask','FastAPI','NumPy','TensorFlow',
  'Thymeleaf','AWS','GCP','Azure','Docker','MongoDB','PostgreSQL','MySQL','Git',
  'Jupyter','Tableau','RESTful API','OAuth2','WebSocket','CI/CD'
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">05 / Skills</span>
          <h2 className="section-title">THE<br/>STACK.</h2>
        </div>
        <div className="skills-grid">
          {SKILLS.map((s) => <div key={s} className="skill">{s}</div>)}
        </div>
      </div>
    </section>
  );
}
