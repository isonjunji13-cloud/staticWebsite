
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Columns2,
  ListFilter,
  ArrowLeftRight,
  Quote,
  ExternalLink,
} from 'lucide-react';

import '../design/comparison.css';

const topics = [
  {
    id: 'topic-1',
    label: 'Topic One',
    heading: 'First comparative dimension',
    introduction:
      'Introduce the specific dimension being examined and explain its relevance to the study of women’s representation.',
    philippine: {
      title: 'Philippine stories',
      analysis:
        'Insert the evidence-based analysis of this dimension in the selected Philippine stories.',
      evidence:
        'Add a verified textual example and attribution from the approved research.',
    },
    western: {
      title: 'Western stories',
      analysis:
        'Insert the evidence-based analysis of this dimension in the selected Western stories.',
      evidence:
        'Add a verified textual example and attribution from the approved research.',
    },
    shared:
      'Describe a shared pattern only when the analysis of the selected stories supports it.',
    difference:
      'Explain the meaningful differences found in these specific texts without generalizing to entire cultures.',
  },
  {
    id: 'topic-2',
    label: 'Topic Two',
    heading: 'Second comparative dimension',
    introduction:
      'Explain the second approved analytical dimension and how it helps frame the comparison.',
    philippine: {
      title: 'Philippine stories',
      analysis:
        'Insert the supported interpretation of the Philippine texts for this dimension.',
      evidence:
        'Add verified evidence and attribution from the approved research.',
    },
    western: {
      title: 'Western stories',
      analysis:
        'Insert the supported interpretation of the Western texts for this dimension.',
      evidence:
        'Add verified evidence and attribution from the approved research.',
    },
    shared:
      'Summarize the similarities that are supported by the evidence in both groups of selected stories.',
    difference:
      'Describe the distinctions between the selected texts and connect them to the study’s analytical framework.',
  },
  {
    id: 'topic-3',
    label: 'Topic Three',
    heading: 'Third comparative dimension',
    introduction:
      'Introduce the third approved dimension and its role in interpreting the selected stories.',
    philippine: {
      title: 'Philippine stories',
      analysis:
        'Insert the research-supported analysis of the selected Philippine stories.',
      evidence:
        'Add a verified textual example and attribution from the approved research.',
    },
    western: {
      title: 'Western stories',
      analysis:
        'Insert the research-supported analysis of the selected Western stories.',
      evidence:
        'Add a verified textual example and attribution from the approved research.',
    },
    shared:
      'State the shared finding, if any, that emerges from the approved comparative analysis.',
    difference:
      'State the meaningful differences supported by the textual evidence and research tables.',
  },
];

const stories = [
  {
    table: 'Table 2.1',
    region: 'Philippine',
    title: 'Good Husbands and Obedient Wives',
    description:
      'Add a concise contextual summary of the story and its relevance to the study’s comparative dimensions.',
  },
  {
    table: 'Table 2.2',
    region: 'Philippine',
    title: 'Sinigang',
    description:
      'Summarize the relevant context and findings for this story using the approved research.',
  },
  {
    table: 'Table 2.3',
    region: 'Western',
    title: 'Corrie',
    description:
      'Summarize the story’s relevant context and its role in the comparative analysis.',
  },
  {
    table: 'Table 2.4',
    region: 'Western',
    title: 'Puppy',
    description:
      'Summarize the relevant context and supported findings for this story.',
  },
];

export function Comparison() {
  const [activeTopic, setActiveTopic] = useState('topic-1');
  const [storyFilter, setStoryFilter] = useState('All stories');

  const topic = topics.find((item) => item.id === activeTopic) ?? topics[0];

  const visibleStories =
    storyFilter === 'All stories'
      ? stories
      : stories.filter((story) => story.region === storyFilter);

  return (
    <main className="comparison-page">
      <div className="comparison-container">
        <header className="comparison-header">
          <p className="comparison-eyebrow">04 / RESEARCH DOCUMENT</p>
          <h1>Comparison</h1>
          <p className="comparison-intro">
            A comparative reading of women’s representation in selected
            Philippine and Western short stories, examining shared patterns
            and meaningful differences through the study’s approved analytical
            dimensions.
          </p>

          <div className="comparison-meta">
            <span>
              <Columns2 size={16} aria-hidden="true" />
              Comparative literary analysis
            </span>
            <span>Four selected short stories</span>
          </div>
        </header>

        <section
          className="comparison-section"
          aria-labelledby="dimensions-title"
        >
          <div className="comparison-section-heading">
            <span className="comparison-section-number">01</span>
            <div>
              <p className="comparison-kicker">COMPARE THE EVIDENCE</p>
              <h2 id="dimensions-title">Comparative Dimensions</h2>
            </div>
          </div>

          <p className="comparison-section-intro">
            Select a topic to examine each group of stories side by side.
            Replace the sample topic labels with the exact dimensions used in
            your approved research.
          </p>

          <div
            className="comparison-topic-tabs"
            role="group"
            aria-label="Choose a comparison topic"
          >
            {topics.map((item) => (
              <button
                type="button"
                key={item.id}
                className={`comparison-topic-tab ${
                  activeTopic === item.id ? 'active' : ''
                }`}
                onClick={() => setActiveTopic(item.id)}
                aria-pressed={activeTopic === item.id}
              >
                <ListFilter size={16} aria-hidden="true" />
                {item.label}
              </button>
            ))}
          </div>

          <div className="comparison-topic-intro">
            <span className="comparison-topic-index">CURRENT DIMENSION</span>
            <h3>{topic.heading}</h3>
            <p>{topic.introduction}</p>
          </div>

          <div className="comparison-panels">
            <article className="comparison-panel">
              <div className="comparison-panel-heading">
                <span className="comparison-panel-marker">PH</span>
                <div>
                  <p className="comparison-kicker">SELECTED TEXTS</p>
                  <h3>{topic.philippine.title}</h3>
                </div>
              </div>

              <p className="comparison-analysis">{topic.philippine.analysis}</p>

              <div className="comparison-evidence">
                <Quote size={19} aria-hidden="true" />
                <p>{topic.philippine.evidence}</p>
              </div>

              <p className="comparison-scope">
                Scope: the selected Philippine stories in this study.
              </p>
            </article>

            <div className="comparison-center-mark" aria-hidden="true">
              <ArrowLeftRight size={22} strokeWidth={1.5} />
            </div>

            <article className="comparison-panel western-panel">
              <div className="comparison-panel-heading">
                <span className="comparison-panel-marker">WE</span>
                <div>
                  <p className="comparison-kicker">SELECTED TEXTS</p>
                  <h3>{topic.western.title}</h3>
                </div>
              </div>

              <p className="comparison-analysis">{topic.western.analysis}</p>

              <div className="comparison-evidence">
                <Quote size={19} aria-hidden="true" />
                <p>{topic.western.evidence}</p>
              </div>

              <p className="comparison-scope">
                Scope: the selected Western stories in this study.
              </p>
            </article>
          </div>

          <section className="comparison-synthesis" aria-labelledby="shared-title">
            <div className="comparison-synthesis-heading">
              <ArrowLeftRight size={21} aria-hidden="true" />
              <h3 id="shared-title">Shared Patterns</h3>
            </div>
            <p>{topic.shared}</p>

            <div className="comparison-difference">
              <span className="comparison-kicker">MEANINGFUL DIFFERENCES</span>
              <p>{topic.difference}</p>
            </div>
          </section>
        </section>

        <section
          className="comparison-section"
          aria-labelledby="stories-title"
        >
          <div className="comparison-section-heading">
            <span className="comparison-section-number">02</span>
            <div>
              <p className="comparison-kicker">CONTEXT BEHIND THE FINDINGS</p>
              <h2 id="stories-title">The Stories in Context</h2>
            </div>
          </div>

          <p className="comparison-section-intro">
            Each story contributes a distinct textual context. These summaries
            should describe the individual work and explain how its evidence
            relates to the comparison, rather than treating one story as
            representative of an entire culture.
          </p>

          <div className="comparison-story-tools">
            <span>
              <ListFilter size={17} aria-hidden="true" />
              Filter by literary group
            </span>

            <div
              className="comparison-filter-tabs"
              role="group"
              aria-label="Filter stories"
            >
              {['All stories', 'Philippine', 'Western'].map((filter) => (
                <button
                  type="button"
                  key={filter}
                  className={storyFilter === filter ? 'active' : ''}
                  onClick={() => setStoryFilter(filter)}
                  aria-pressed={storyFilter === filter}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="comparison-story-grid">
            {visibleStories.map((story) => (
              <article className="comparison-story-card" key={story.table}>
                <div className="comparison-story-topline">
                  <span className="comparison-story-region">
                    {story.region} literature
                  </span>
                  <span className="comparison-story-table">
                    {story.table}
                  </span>
                </div>

                <h3>{story.title}</h3>
                <p>{story.description}</p>

                <Link
                  className="comparison-table-link"
                  to="/method"
                  aria-label={`Open the research method page for ${story.table}`}
                >
                  <span>Consult {story.table}</span>
                  <ExternalLink size={16} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <footer className="comparison-footer">
          <Columns2 size={19} strokeWidth={1.5} aria-hidden="true" />
          <p>
            The comparison is limited to the four selected stories and the
            evidence documented in the research tables. Interpretations should
            remain grounded in the texts and the study’s approved framework.
          </p>
        </footer>
      </div>
    </main>
  );
}
