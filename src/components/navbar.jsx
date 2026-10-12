
import { NavLink } from 'react-router-dom';

import {
  House,
  BookOpen,
  UsersRound,
  ScrollText,
  Columns2,
  Lightbulb,
  GraduationCap,
} from 'lucide-react';

import '../design/navbar.css';

const links = [
  { label: 'Home', href: '/', Icon: House },
  { label: 'The Stories', href: '/stories', Icon: BookOpen },
  { label: 'Character Explorer', href: '/characters', Icon: UsersRound },
  { label: 'Our Method', href: '/method', Icon: ScrollText },
  { label: 'Comparison', href: '/comparison', Icon: Columns2 },
  { label: 'Research Insights', href: '/insight', Icon: Lightbulb },
  { label: 'About the Research', href: '/about', Icon: GraduationCap },
];

export function Navbar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <h1>HerVoice</h1>
        <p>HER STORIES, HER VOICE</p>
      </div>

      <div className="sidebar-divider" />

      <nav className="sidebar-nav" aria-label="Main navigation">
        {links.map(({ label, href, Icon }) => (
          <NavLink
            key={href}
            to={href}
            end={href === '/'}
            className={({ isActive }) =>
              `sidebar-link${isActive ? ' active' : ''}`
            }
          >
            <Icon
              className="sidebar-icon"
              size={21}
              strokeWidth={1.7}
              aria-hidden="true"
            />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
