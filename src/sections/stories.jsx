
import {
  BookOpen,
  Bookmark,
  ArrowUpRight,
} from 'lucide-react';

import '../design/stories.css';

const stories = [
  {
    id: 1,
    title: 'Good Husbands and Obedient Wives',
    author: 'Philippine Literature',
    region: 'Philippine',
    category: 'PHILIPPINE',
    imageClass: 'story-art-domestic',
    imageAlt:
      'Editorial illustration concept of two women in a domestic interior, reflecting marriage and gender expectations.',
    description:
      'Explores domestic roles, marriage, and the expectations placed on women within family and society.',
    href: '/stories/good-husbands-and-obedient-wives',
  },
  {
    id: 2,
    title: 'Sinigang',
    author: 'Philippine Literature',
    region: 'Philippine',
    category: 'PHILIPPINE',
    imageClass: 'story-art-sinigang',
    imageAlt:
      'Editorial illustration concept of a simmering pot of sinigang on a family dining table.',
    description:
      'Uses food, family memory, and everyday experiences to explore relationships and emotional complexity.',
    href: '/stories/sinigang',
  },
  {
    id: 3,
    title: 'Corrie',
    author: 'Western Literature',
    region: 'Western',
    category: 'WESTERN',
    imageClass: 'story-art-corrie',
    imageAlt:
      'Editorial illustration concept of a contemplative woman beside a window in a quiet library.',
    description:
      'Examines a woman’s experiences, choices, and the social expectations that shape her perspective.',
    href: '/stories/corrie',
  },
  {
    id: 4,
    title: 'Puppy',
    author: 'Western Literature',
    region: 'Western',
    category: 'WESTERN',
    imageClass: 'story-art-puppy',
    imageAlt:
      'Editorial illustration concept of a small puppy on a suburban doorstep.',
    description:
      'Invites readers to consider domestic life, personal values, and the tensions beneath ordinary encounters.',
    href: '/stories/puppy',
  },
];

export function StoryCard({ story }) {
  return (
    <article className="story-card">
      <a
        className="story-card-image-link"
        href={story.href}
        aria-label={`Explore ${story.title}`}
      >
        <div
          className={`story-card-image ${story.imageClass}`}
          role="img"
          aria-label={story.imageAlt}
        >
          <span className="story-image-number">
            {String(story.id).padStart(2, '0')}
          </span>

          <BookOpen
            className="story-image-icon"
            size={34}
            strokeWidth={1.25}
            aria-hidden="true"
          />
        </div>
      </a>

      <div className="story-card-content">
        <div className="story-card-meta">
          <span
            className={`story-tag story-tag-${story.region.toLowerCase()}`}
          >
            {story.category}
          </span>

          <button
            className="story-bookmark"
            type="button"
            aria-label={`Bookmark ${story.title}`}
            onClick={() => {
              // Connect this action to saved-story functionality if needed.
            }}
          >
            <Bookmark size={18} strokeWidth={1.6} />
          </button>
        </div>

        <h3 className="story-card-title">{story.title}</h3>

        <p className="story-card-author">{story.author}</p>

        <p className="story-card-description">
          {story.description}
        </p>

        <a className="story-explore-link" href={story.href}>
          <span>Explore Story</span>
          <ArrowUpRight size={17} strokeWidth={1.8} />
        </a>
      </div>
    </article>
  );
}

export function Stories() {
  return (
    <main className="stories-page">
      <section
        className="stories-section"
        aria-labelledby="stories-heading"
      >
        <div className="stories-container">
          <header className="stories-header">
            <p className="stories-eyebrow">
              <BookOpen size={16} strokeWidth={1.7} />
              <span>02. THE STORIES</span>
            </p>

            <h1 id="stories-heading" className="stories-title">
              Four Narratives,
              <br />
              <span>Multiple Perspectives.</span>
            </h1>

            <p className="stories-introduction">
              Enter four short stories that offer different perspectives
              on women, relationships, and social expectations. Through
              Philippine and Western literature, explore how female
              characters are represented in their respective contexts.
            </p>

            <div className="stories-legend" aria-label="Story categories">
              <span>
                <i className="legend-dot legend-dot-philippine" />
                Philippine Literature
              </span>

              <span>
                <i className="legend-dot legend-dot-western" />
                Western Literature
              </span>
            </div>
          </header>

          <div className="stories-grid">
            {stories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>

          <footer className="stories-footer">
            <div className="stories-footer-rule" />

            <p>
              Each narrative offers a different lens through which to
              examine women’s representation.
            </p>
          </footer>
        </div>
      </section>
    </main>
  );
}

