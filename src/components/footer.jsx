
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  BookOpen,
  Heart,
  ArrowUp,
} from 'lucide-react';

import '../design/footer.css';

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'The Stories', to: '/stories' },
  { label: 'Our Method', to: '/method' },
  { label: 'Comparison', to: '/comparison' },
  { label: 'Character Explorer', to: '/characters' },
  { label: 'Research Insights', to: '/insight' },
  { label: 'About the Research', to: '/about' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link
              to="/"
              className="footer-brand-link"
              aria-label="Her Stories, Her Voice home"
            >
              <span className="footer-brand-icon">
                <BookOpen size={23} strokeWidth={1.5} />
              </span>

              <span className="footer-brand-text">
                <strong>Her Stories, Her Voice</strong>
                <span>Women’s Representation in Literature</span>
              </span>
            </Link>

            <p className="footer-description">
              An exploration of women’s representation across selected
              Philippine and Western short stories, grounded in literary
              analysis, careful comparison, and textual evidence.
            </p>

            <span className="footer-project-label">
              A DIGITAL LITERARY EXHIBITION
            </span>
          </div>

          <nav className="footer-navigation" aria-label="Footer navigation">
            <h2>Explore the Website</h2>

            <ul>
              {footerLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>
                    <span>{item.label}</span>
                    <ArrowUpRight
                      size={14}
                      aria-hidden="true"
                      className="footer-link-icon"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-research">
            <span className="footer-section-label">ABOUT THIS PROJECT</span>

            <h2>Stories invite us to look closer.</h2>

            <p>
              Read critically, compare responsibly, and recognize the
              importance of supporting interpretations with evidence
              from the selected texts.
            </p>

            <Link to="/about" className="footer-about-link">
              About the Research
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="footer-note">
          <span className="footer-note-icon">
            <BookOpen size={17} aria-hidden="true" />
          </span>

          <p>
            <strong>Research note</strong>
            <span>
              This website presents literary interpretations within the
              scope of the selected works. Its conclusions should not be
              generalized to all Philippine or Western literature.
            </span>
          </p>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Her Stories, Her Voice. All rights reserved.
          </p>

          <p className="footer-made-with">
            Created for literary research <Heart size={13} aria-label="with care" />
          </p>

          <button
            className="footer-back-to-top"
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp size={15} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
