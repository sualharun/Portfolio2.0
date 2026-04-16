import { useState } from 'react';

const links = [
  ['home', 'Home'],
  ['about', 'About'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['extracurriculars', 'Extracurriculars'],
  ['contact', 'Contact']
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#home" className="logo">SUAL<span>.</span></a>
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span></span><span></span><span></span>
        </button>
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
