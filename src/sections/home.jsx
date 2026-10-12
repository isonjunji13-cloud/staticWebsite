    import {
  ArrowRight,
  BookOpen,
  MessageCircle,
  UsersRound,
  Compass,
  Quote,
  Feather,
} from 'lucide-react';

import '../design/home.css';

const dimensions = [
  {
    title: 'Self-Expression',
    description:
      'Explore how women communicate, restrain, or internally process their thoughts and feelings.',
    Icon: MessageCircle,
  },
  {
    title: 'Prescribed Gender Roles',
    description:
      'Examine expectations surrounding family, behavior, marriage, and social respectability.',
    Icon: UsersRound,
  },
  {
    title: 'Level of Independence',
    description:
      'Understand how women exercise judgment, make decisions, and express agency within constraints.',
    Icon: Compass,
  },
];

export function Home() {
  return (
    <main className="home-page">
      {/* HERO */}
      <section className="home-hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <span className="home-eyebrow">
            A Comparative Literary Exhibition
          </span>

          <h1 id="hero-title">
            Different Stories.
            <br />
            Different Cultures.
            <br />
            <span>Shared Struggles for Identity.</span>
          </h1>

          <p className="hero-description">
            Explore how women navigate identity, family expectations,
            social judgment, and independence across selected Philippine
            and Western short stories.
          </p>

          <div className="hero-actions">
            <a href="/stories" className="home-button home-button-primary">
              Explore the Stories
              <ArrowRight size={18} />
            </a>

            <a href="#research" className="home-button home-button-secondary">
              Discover the Research
            </a>
          </div>
        </div>

        {/* CONCEPTUAL LITERARY ARTWORK */}
        <div
          className="hero-artwork"
          role="img"
          aria-label="Abstract literary collage of layered parchment, an open book, handwritten marks, and a feather representing women's voices and identity."
        >
          <div className="art-paper art-paper-back" />
          <div className="art-paper art-paper-front">
            <span className="art-caption">FRAGMENTS OF HER STORY</span>
            <div className="art-rule" />
            <div className="art-line art-line-long" />
            <div className="art-line art-line-medium" />
            <div className="art-line art-line-short" />
            <div className="art-quote-mark">“</div>
            <span className="art-handwriting">voice · identity · agency</span>
          </div>

          <div className="art-book">
            <div className="art-book-page art-book-left">
              <div className="art-line art-line-long" />
              <div className="art-line art-line-medium" />
              <div className="art-line art-line-long" />
              <div className="art-line art-line-short" />
            </div>
            <div className="art-book-page art-book-right">
              <div className="art-line art-line-medium" />
              <div className="art-line art-line-long" />
              <div className="art-line art-line-short" />
              <div className="art-line art-line-medium" />
            </div>
          </div>

          <div className="art-silhouette">
            <div className="silhouette-head" />
            <div className="silhouette-body" />
          </div>

          <div className="art-feather">
            <Feather size={42} strokeWidth={1} />
          </div>

          <span className="art-index">FIG. 01 — VOICE & IDENTITY</span>
        </div>
      </section>

      {/* RESEARCH INTRODUCTION */}
      <section
        className="research-intro"
        id="research"
        aria-labelledby="research-title"
      >
        <div className="section-heading">
          <span className="home-eyebrow">The Purpose of This Exhibition</span>
          <h2 id="research-title">
            Why Examine Women's Representation?
          </h2>
          <p>
            Literature offers a way to examine whose voices are heard,
            which responsibilities are expected, and what opportunities
            women have to make their own decisions.
          </p>
          <p>
            Across cultures, women's experiences are shaped by family,
            social values, and unequal power. A character may exercise
            agency in one aspect of life while remaining restricted in
            another.
          </p>
        </div>

        <div className="dimension-grid">
          {dimensions.map(({ title, description, Icon }, index) => (
            <article className="dimension-card" key={title}>
              <div className="dimension-topline">
                <span className="dimension-number">
                  0{index + 1}
                </span>
                <Icon
                  className="dimension-icon"
                  size={25}
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
              </div>

              <h3>{title}</h3>
              <p>{description}</p>

              <a
                href="/comparison"
                className="dimension-link"
                aria-label={`Explore ${title} in the comparison`}
              >
                Explore dimension
                <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* FEATURED RESEARCH FINDING */}
      <section
        className="featured-finding"
        aria-labelledby="finding-title"
      >
        <div className="finding-mark" aria-hidden="true">
          <Quote size={27} strokeWidth={1.4} />
        </div>

        <div className="finding-content">
          <span className="home-eyebrow">A Featured Research Insight</span>

          <h2 id="finding-title">
            “Empowerment is not always loud, immediate, or complete.”
          </h2>

          <p>
            Agency can emerge through questioning, emotional awareness,
            education, personal boundaries, and self-directed choices—even
            when social restrictions remain.
          </p>

          <a href="/insight" className="finding-link">
            Read the Research Insights
            <ArrowRight size={17} />
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;