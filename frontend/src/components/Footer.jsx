export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Sual Harun</span>
        <div className="footer-links">
          <a href="mailto:sualharun.w@gmail.com">sualharun.w@gmail.com</a>
          <a href="https://www.linkedin.com/in/sualharun/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/sualharun" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <span>React · Spring Boot · Built from scratch.</span>
      </div>
    </footer>
  );
}
