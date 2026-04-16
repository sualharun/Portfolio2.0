import { useEffect, useState } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import SkillsMarquee from './components/SkillsMarquee.jsx';
import About from './components/About.jsx';
import Certifications from './components/Certifications.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Extracurriculars from './components/Extracurriculars.jsx';
import Beyond from './components/Beyond.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import useScrollReveal from './hooks/useScrollReveal.js';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

async function getJson(url) {
  const fullUrl = url.startsWith('http') ? url : `${API_URL}${url}`;
  const r = await fetch(fullUrl);
  if (!r.ok) throw new Error(`${url} -> ${r.status}`);
  return r.json();
}

export default function App() {
  const [data, setData] = useState({
    projects: [],
    experience: [],
    certifications: [],
    extracurriculars: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const [projects, experience, certifications, extracurriculars] = await Promise.all([
          getJson('/api/projects'),
          getJson('/api/experience'),
          getJson('/api/certifications'),
          getJson('/api/extracurriculars')
        ]);
        setData({ projects, experience, certifications, extracurriculars });
      } catch (e) {
        console.error('API load failed:', e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  useScrollReveal([data, loading]);

  return (
    <>
      <Nav />
      <Hero />
      <SkillsMarquee />
      <About
        certCount={data.certifications.length}
        projectCount={data.projects.length}
      />
      <Experience items={data.experience} />
      <Projects items={data.projects} />
      <Certifications items={data.certifications} />
      <Skills />
      <Extracurriculars items={data.extracurriculars} />
      <Beyond />
      <Contact />
      <Footer />
    </>
  );
}
