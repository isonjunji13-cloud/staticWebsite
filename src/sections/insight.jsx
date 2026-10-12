
import { useState } from 'react';
import {
  Lightbulb,
  MessageCircleOff,
  HeartHandshake,
  Sprout,
  Globe2,
  Scale,
  ChevronDown,
  BookOpen,
  Sparkles,
  RotateCcw,
  Leaf,
  Info,
} from 'lucide-react';

import '../design/insight.css';

const INSIGHTS = [
  {
    id: 'voice',
    number: '01',
    title: 'Women’s Voice and Self-Expression',
    preview:
      'Explore how women communicate their thoughts, feelings, and personal perspectives within their stories.',
    icon: Lightbulb,
    explanation:
      'Examine how dialogue, internal thoughts, narration, and silence shape the representation of women. Consider whose perspective is heard, how a character expresses herself, and what may limit her ability to speak.',
    example:
      'Select a verified passage from one of the Philippine or Western short stories that demonstrates how a female character expresses, questions, or withholds her thoughts.',
    implication:
      'Literature discussions can help students recognize narrative perspective and examine how voice influences readers’ understanding of a character.',
    question:
      'How does a character’s way of expressing herself influence your understanding of her experiences?',
  },
  {
    id: 'silence',
    number: '02',
    title: 'Silence and Social Expectations',
    preview:
      'Consider how family, community, and gender expectations influence women’s choices and expressions.',
    icon: MessageCircleOff,
    explanation:
      'Analyze moments when a character speaks, remains silent, complies, or resists. Interpret these moments in context instead of assuming that silence always indicates weakness or agreement.',
    example:
      'Use a confirmed scene in which a character responds to an expectation or encounters a restriction. Explain what the text reveals without going beyond the evidence.',
    implication:
      'Students can learn to question assumptions about gender and discuss how social expectations influence individual behavior.',
    question:
      'What might explain a character’s silence or decision to speak in this particular situation?',
  },
  {
    id: 'relationships',
    number: '03',
    title: 'Relationships and Power',
    preview:
      'Investigate how relationships shape agency, responsibilities, conflict, and emotional experiences.',
    icon: HeartHandshake,
    explanation:
      'Look at how relationships between characters distribute influence, responsibilities, support, and control. Consider how family relationships and other social connections affect a woman’s choices.',
    example:
      'Identify a verified interaction between a female character and another person. Explain how dialogue, behavior, or the outcome of the interaction reveals their relationship.',
    implication:
      'Guided discussion can help students identify patterns of power and support while recognizing the complexity of human relationships.',
    question:
      'How does a relationship in the story expand or limit the character’s ability to make choices?',
  },
  {
    id: 'agency',
    number: '04',
    title: 'Growth, Agency, and Choice',
    preview:
      'Explore how women respond to challenges and the opportunities available to them.',
    icon: Sprout,
    explanation:
      'Examine the decisions a character makes, the constraints she encounters, and the effects of her actions. Agency can appear in different forms and does not always mean complete independence.',
    example:
      'Choose a verified turning point in which a character makes a decision or responds to a difficult circumstance. Connect the example to the character’s available options.',
    implication:
      'Students can distinguish between personal choice and the circumstances that enable or restrict that choice.',
    question:
      'Which choices does the character genuinely control, and which are shaped by circumstances beyond her control?',
  },
  {
    id: 'culture',
    number: '05',
    title: 'Culture and Social Context',
    preview:
      'Read characters within the cultural, historical, and social settings of their stories.',
    icon: Globe2,
    explanation:
      'Consider how setting, cultural practices, social institutions, and historical context contribute to a character’s representation. Avoid treating either Philippine or Western literature as a single, uniform experience.',
    example:
      'Connect a verified detail from a story to its documented context. Separate what the text explicitly shows from what requires additional contextual evidence.',
    implication:
      'Contextual reading can encourage cultural awareness and more careful comparison across literary traditions.',
    question:
      'How might the story’s social or cultural context help explain the character’s experiences?',
  },
  {
    id: 'representation',
    number: '06',
    title: 'Equality and Representation',
    preview:
      'Compare how stories portray women’s roles, opportunities, limitations, and individuality.',
    icon: Scale,
    explanation:
      'Compare the ways female characters are developed, the roles available to them, and the narrative attention given to their experiences. Look for similarities and differences without assuming that every story makes the same argument.',
    example:
      'Use verified evidence from two selected stories to identify a specific similarity or difference in how women are represented.',
    implication:
      'Comparative reading can help students build evidence-based interpretations and question broad generalizations about gender and culture.',
    question:
      'What does comparing these characters reveal, and what differences should not be overlooked?',
  },
];

const REFLECTION_OPTIONS = [
  { value: 'voice', label: 'Voice and self-expression' },
  { value: 'expectations', label: 'Social expectations' },
  { value: 'relationships', label: 'Relationships and power' },
  { value: 'agency', label: 'Agency and choice' },
  { value: 'culture', label: 'Culture and context' },
  { value: 'representation', label: 'Representation and equality' },
];

function SectionLabel({ children }) {
  return <span className="ri-small-label">{children}</span>;
}

function InsightDetail({ label, children, className = '' }) {
  return (
    <div className={`ri-detail-block ${className}`.trim()}>
      <span className="ri-detail-label">{label}</span>
      <p>{children}</p>
    </div>
  );
}

function InsightCard({ insight, isOpen, onToggle }) {
  const Icon = insight.icon;
  const panelId = `ri-panel-${insight.id}`;

  return (
    <article className={`ri-card ${isOpen ? 'ri-card-open' : ''}`}>
      <div className="ri-card-top">
        <div className="ri-icon-circle">
          <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
        </div>

        <span className="ri-card-number">{insight.number}</span>
      </div>

      <h3>{insight.title}</h3>
      <p className="ri-preview">{insight.preview}</p>

      <button
        className="ri-expand-button"
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span>{isOpen ? 'Close Insight' : 'Read Insight'}</span>
        <ChevronDown
          className={`ri-chevron ${isOpen ? 'ri-chevron-open' : ''}`}
          size={18}
          aria-hidden="true"
        />
      </button>

      <div
        className="ri-expanded-content"
        id={panelId}
        hidden={!isOpen}
      >
        <InsightDetail label="Explanation">
          {insight.explanation}
        </InsightDetail>

        <InsightDetail
          label="Story Example"
          className="ri-detail-example"
        >
          {insight.example}
        </InsightDetail>

        <InsightDetail
          label="Educational Implication"
          className="ri-detail-education"
        >
          {insight.implication}
        </InsightDetail>

        <div className="ri-question-box">
          <span className="ri-detail-label">Reflection Question</span>
          <p>{insight.question}</p>
        </div>
      </div>
    </article>
  );
}

function FeaturedFinding() {
  return (
    <section className="ri-featured" aria-labelledby="ri-featured-title">
      <div className="ri-featured-symbol" aria-hidden="true">
        <Sparkles size={25} strokeWidth={1.5} />
      </div>

      <SectionLabel>THE BIGGER PICTURE</SectionLabel>

      <h2 id="ri-featured-title">Reading representation with care</h2>

      <p>
        A comparative reading of women’s representation can consider
        voice, gender expectations, relationships, agency, and cultural
        context together. The value of comparison lies not only in
        identifying similarities and differences, but also in explaining
        them through specific textual evidence.
      </p>

      <div className="ri-featured-note">
        <Leaf size={19} aria-hidden="true" />
        <p>
          <strong>Research reminder:</strong> Replace this overarching
          summary with the central finding established by your approved
          research results. Do not present this general framing as a
          confirmed thesis conclusion.
        </p>
      </div>
    </section>
  );
}

function ReflectionActivity() {
  const [topic, setTopic] = useState('');
  const [response, setResponse] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const selectedOption = REFLECTION_OPTIONS.find(
    (option) => option.value === topic,
  );

  function handleSubmit(event) {
    event.preventDefault();

    if (!topic || !response.trim()) return;

    setSubmitted(true);
  }

  function handleReset() {
    setTopic('');
    setResponse('');
    setSubmitted(false);
  }

  return (
    <section
      className="ri-reflection"
      aria-labelledby="ri-reflection-title"
    >
      <div className="ri-reflection-heading">
        <SectionLabel>PAUSE AND REFLECT</SectionLabel>
        <h2 id="ri-reflection-title">Make a connection</h2>
        <p>
          Choose a topic and write a short reflection based on a story
          you have read. Support your response with a specific detail
          from the text.
        </p>
      </div>

      <form className="ri-reflection-form" onSubmit={handleSubmit}>
        <label className="ri-form-label" htmlFor="ri-topic">
          Which topic would you like to reflect on?
        </label>

        <select
          id="ri-topic"
          value={topic}
          onChange={(event) => {
            setTopic(event.target.value);
            setSubmitted(false);
          }}
          required
        >
          <option value="">Choose a topic</option>
          {REFLECTION_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <label className="ri-form-label" htmlFor="ri-response">
          Your reflection
        </label>

        <textarea
          id="ri-response"
          value={response}
          onChange={(event) => {
            setResponse(event.target.value);
            setSubmitted(false);
          }}
          placeholder="What did the story help you notice? Include a specific detail and explain its meaning."
          rows={5}
          required
        />

        <p className="ri-privacy-note">
          Your response stays in this page session. It is not submitted
          to a server or saved to a database.
        </p>

        <div className="ri-reflection-actions">
          <button className="ri-submit-button" type="submit">
            Review My Reflection
          </button>

          <button
            className="ri-reset-button"
            type="button"
            onClick={handleReset}
          >
            <RotateCcw size={15} aria-hidden="true" />
            Clear
          </button>
        </div>

        {submitted && (
          <div className="ri-feedback" role="status" aria-live="polite">
            <div className="ri-feedback-icon">
              <Lightbulb size={20} aria-hidden="true" />
            </div>

            <div>
              <h3>Reflection ready for review</h3>
              <p>
                You selected <strong>{selectedOption?.label}</strong>.
                Check that your response identifies a specific story
                detail and explains how it supports your interpretation.
              </p>
              <p className="ri-feedback-reminder">
                This is a self-review prompt, not an evaluation of
                whether your interpretation is correct.
              </p>
            </div>
          </div>
        )}
      </form>
    </section>
  );
}

export function Insight() {
  const [expandedId, setExpandedId] = useState(null);

  function toggleInsight(id) {
    setExpandedId((currentId) => (currentId === id ? null : id));
  }

  return (
    <main className="ri-page">
      <div className="ri-container">
        <header className="ri-header">
          <div className="ri-overline">
            <span className="ri-overline-line" />
            SECTION 06 · RESEARCH DISCUSSION
          </div>

          <h1>Research Insights</h1>

          <p className="ri-subtitle">
            Looking beyond the story to understand the representation
            of women in literature.
          </p>

          <p className="ri-intro">
            Explore six thematic lenses for examining women’s
            representation across selected Philippine and Western
            short stories. Open each card to read its discussion,
            consider a textual example, and reflect on its educational
            significance.
          </p>
        </header>

        <section
          className="ri-overview"
          aria-label="How to use this section"
        >
          <div className="ri-overview-icon">
            <BookOpen size={23} aria-hidden="true" />
          </div>

          <div>
            <h2>Read closely. Compare carefully.</h2>
            <p>
              Each insight offers a way to approach the stories.
              Interpretations of particular characters or passages
              should be supported by the approved research findings
              and literary text.
            </p>
          </div>
        </section>

        <section className="ri-insights-section">
          <div className="ri-section-heading">
            <SectionLabel>SIX AREAS OF DISCUSSION</SectionLabel>
            <h2>Explore the insights</h2>
            <p>
              Select an insight to reveal its explanation, example,
              educational implication, and reflection question.
            </p>
          </div>

          <div className="ri-grid">
            {INSIGHTS.map((insight) => (
              <InsightCard
                key={insight.id}
                insight={insight}
                isOpen={expandedId === insight.id}
                onToggle={() => toggleInsight(insight.id)}
              />
            ))}
          </div>
        </section>

        <FeaturedFinding />
        <ReflectionActivity />

        <aside className="ri-editorial-note">
          <Info size={20} aria-hidden="true" />
          <p>
            <strong>Editorial note:</strong> The six subjects and
            discussion prompts are draft thematic content. Verify them
            against your research document, preserve its exact insight
            subjects and discussion questions, and replace the example
            instructions with evidence from the approved stories and
            findings.
          </p>
        </aside>
      </div>
    </main>
  );
}

export default Insight;
    