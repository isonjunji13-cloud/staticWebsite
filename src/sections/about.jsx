
import { useState } from 'react';
import {
  GraduationCap,
  Scale,
  BookCopy,
  ShieldCheck,
  Link as LinkIcon,
  Download,
  ChevronDown,
  BookOpen,
  FileText,
  UsersRound,
  Info,
} from 'lucide-react';

import '../design/about.css';

const THEORIES = [
  {
    number: '01',
    title: 'Feminist Literary Criticism',
    icon: Scale,
    description:
      'A critical lens for examining how literature portrays women, gender roles, power, voice, and unequal social expectations.',
    application:
      'Use the approved theoretical framework to explain how female characters are represented and how textual details support an interpretation.',
    citation: '[Insert the verified theorist and source cited in the manuscript.]',
  },
  {
    number: '02',
    title: 'Representation and Gender',
    icon: UsersRound,
    description:
      'A perspective for investigating how characters, identities, social roles, and experiences are constructed in literary texts.',
    application:
      'Compare the roles and experiences of female characters without assuming that one character represents an entire culture.',
    citation: '[Insert the verified source used in the research.]',
  },
  {
    number: '03',
    title: 'Comparative Literary Analysis',
    icon: BookCopy,
    description:
      'A method of reading selected literary works alongside one another to identify meaningful similarities and differences.',
    application:
      'Use specific textual evidence and the study’s stated criteria when discussing the selected Philippine and Western short stories.',
    citation: '[Insert the approved methodological or theoretical reference.]',
  },
];

const RESEARCH_DETAILS = [
  {
    number: '01',
    title: 'Research objectives',
    icon: GraduationCap,
    content: [
      {
        heading: 'Primary objective',
        text: 'Describe the study’s approved main objective here, using the wording or a faithful summary from the manuscript.',
      },
      {
        heading: 'Specific objectives',
        text: 'List the approved objectives concerning women’s representation, the selected literary works, and the comparison of findings.',
      },
    ],
  },
  {
    number: '02',
    title: 'Research design',
    icon: BookOpen,
    content: [
      {
        heading: 'Approach',
        text: 'Qualitative literary analysis, if confirmed by the approved methodology chapter.',
      },
      {
        heading: 'Materials and analysis',
        text: 'Identify the four selected short stories, the criteria used to examine them, and the documented analytical procedure.',
      },
    ],
  },
  {
    number: '03',
    title: 'Scope and limitations',
    icon: ShieldCheck,
    content: [
      {
        heading: 'Scope',
        text: 'The study focuses on four selected short stories identified in the approved research manuscript.',
      },
      {
        heading: 'Limitations',
        text: 'Interpretations are limited to the selected works, research framework, and textual evidence. They should not be treated as statistically representative of all Philippine or Western literature.',
      },
    ],
  },
];

const SDG_CONNECTIONS = [
  {
    number: '04',
    title: 'Quality Education',
    subtitle: 'United Nations Sustainable Development Goal 4',
    description:
      'The study can support literary learning by encouraging close reading, critical thinking, evidence-based interpretation, and discussion of representation.',
    connection:
      'Educational connection: explain how the approved research may contribute to literature teaching and inclusive learning.',
  },
  {
    number: '05',
    title: 'Gender Equality',
    subtitle: 'United Nations Sustainable Development Goal 5',
    description:
      'Examining the representation of women can create opportunities to discuss gender expectations, agency, social roles, and whose experiences are heard.',
    connection:
      'Educational connection: discuss how the findings may inform critical conversations about gender without claiming that the research itself measures or achieves gender equality.',
  },
];

const REFERENCES = [
  {
    id: 'theory',
    title: 'Theoretical framework sources',
    details:
      'Add the complete, verified bibliographic entries for the theories and scholars explicitly cited in the manuscript.',
  },
  {
    id: 'stories',
    title: 'Selected literary works',
    details:
      'List the complete publication details for all four short stories, including author, original publication or collection, publisher, and year where available.',
  },
  {
    id: 'methodology',
    title: 'Research methodology sources',
    details:
      'Add the sources used to support the research design, analytical framework, and qualitative procedures.',
  },
  {
    id: 'sdg',
    title: 'Sustainable Development Goals',
    details:
      'Add the official United Nations sources consulted for SDG 4 and SDG 5 and verify that the discussion accurately reflects their goals.',
  },
];

function SectionEyebrow({ children }) {
  return <span className="ar-eyebrow">{children}</span>;
}

function TheoryCard({ theory }) {
  const Icon = theory.icon;

  return (
    <article className="ar-theory-card">
      <div className="ar-card-top">
        <span className="ar-number">{theory.number}</span>
        <div className="ar-icon">
          <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
        </div>
      </div>

      <h3>{theory.title}</h3>
      <p>{theory.description}</p>

      <div className="ar-theory-application">
        <span>Application in this study</span>
        <p>{theory.application}</p>
      </div>

      <p className="ar-citation-placeholder">{theory.citation}</p>
    </article>
  );
}

function ResearchDetailCard({ item }) {
  const Icon = item.icon;

  return (
    <article className="ar-detail-card">
      <div className="ar-card-top">
        <span className="ar-number">{item.number}</span>
        <div className="ar-icon">
          <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
        </div>
      </div>

      <h3>{item.title}</h3>

      {item.content.map((entry) => (
        <div className="ar-detail-entry" key={entry.heading}>
          <h4>{entry.heading}</h4>
          <p>{entry.text}</p>
        </div>
      ))}
    </article>
  );
}

function ReferenceList() {
  const [openReference, setOpenReference] = useState(null);

  return (
    <div className="ar-references">
      {REFERENCES.map((reference) => {
        const isOpen = openReference === reference.id;
        const panelId = `ar-reference-${reference.id}`;

        return (
          <article className="ar-reference" key={reference.id}>
            <h3>
              <button
                type="button"
                className="ar-reference-toggle"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() =>
                  setOpenReference(isOpen ? null : reference.id)
                }
              >
                <span>{reference.title}</span>
                <ChevronDown
                  size={18}
                  className={isOpen ? 'ar-chevron-open' : ''}
                  aria-hidden="true"
                />
              </button>
            </h3>

            <div
              className="ar-reference-content"
              id={panelId}
              hidden={!isOpen}
            >
              <p>{reference.details}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function SdgCard({ item }) {
  return (
    <article className="ar-sdg-card">
      <span className="ar-sdg-number">SDG {item.number}</span>
      <h3>{item.title}</h3>
      <p className="ar-sdg-subtitle">{item.subtitle}</p>
      <p>{item.description}</p>

      <div className="ar-sdg-connection">
        <strong>Connection to the research</strong>
        <p>{item.connection}</p>
      </div>
    </article>
  );
}

export function About() {
  return (
    <main className="ar-page">
      <div className="ar-container">
        <header className="ar-header">
          <div className="ar-overline">
            <span className="ar-overline-line" />
            SECTION 07 · DOCUMENTATION
          </div>

          <h1>About the Research</h1>

          <p className="ar-subtitle">
            The study, its theoretical foundations, and the boundaries
            of its literary analysis.
          </p>

          <p className="ar-intro">
            This section introduces the research behind{' '}
            <em>Her Stories, Her Voice</em>. It outlines the study’s
            purpose, theoretical framework, methodology, scope, and
            relevance to literary education.
          </p>
        </header>

        <section className="ar-research-title">
          <SectionEyebrow>THE RESEARCH AT A GLANCE</SectionEyebrow>

          <h2>
            Comparative Analysis of Women’s Representation in Selected
            Western and Philippine 21st-Century Short Stories
          </h2>

          <p>
            This title is based on the working research title. Confirm
            its exact wording against the approved manuscript before
            publication.
          </p>

          <div className="ar-meta-grid">
            <div>
              <span>Research approach</span>
              <strong>Verify from manuscript</strong>
            </div>
            <div>
              <span>Literary corpus</span>
              <strong>Four selected short stories</strong>
            </div>
            <div>
              <span>Analytical focus</span>
              <strong>Women’s representation</strong>
            </div>
          </div>
        </section>

        <section className="ar-section">
          <div className="ar-section-heading">
            <SectionEyebrow>THEORETICAL FOUNDATIONS</SectionEyebrow>
            <h2>The lenses behind the reading</h2>
            <p>
              The following cards are a structure for presenting the
              theories actually identified in your approved research.
              Confirm each theory, its author, and its role before
              treating these entries as the study’s formal framework.
            </p>
          </div>

          <div className="ar-theory-grid">
            {THEORIES.map((theory) => (
              <TheoryCard key={theory.number} theory={theory} />
            ))}
          </div>
        </section>

        <section className="ar-section">
          <div className="ar-section-heading">
            <SectionEyebrow>STUDY DESIGN</SectionEyebrow>
            <h2>What the research covers</h2>
            <p>
              Present the approved objectives and methods clearly,
              distinguishing the study’s actual procedures from
              explanatory website content.
            </p>
          </div>

          <div className="ar-detail-grid">
            {RESEARCH_DETAILS.map((item) => (
              <ResearchDetailCard key={item.number} item={item} />
            ))}
          </div>
        </section>

        <section className="ar-limits" aria-labelledby="ar-limits-title">
          <div className="ar-limits-icon">
            <ShieldCheck size={24} aria-hidden="true" />
          </div>

          <div>
            <SectionEyebrow>INTERPRETIVE BOUNDARIES</SectionEyebrow>
            <h2 id="ar-limits-title">What this research can and cannot claim</h2>

            <p>
              Findings from four selected short stories can support
              interpretations of those texts and comparisons within the
              study’s defined scope. They cannot establish statistical
              conclusions about all Philippine or Western literature,
              all women writers, or all women’s experiences.
            </p>

            <p>
              Keep conclusions connected to the approved research
              questions, theoretical framework, and evidence in the
              literary works.
            </p>
          </div>
        </section>

        <section className="ar-section">
          <div className="ar-section-heading">
            <SectionEyebrow>EDUCATIONAL RELEVANCE</SectionEyebrow>
            <h2>Connecting literature to global goals</h2>
            <p>
              These connections describe possible educational relevance.
              They do not imply that this literary study measures
              progress toward the United Nations Sustainable Development
              Goals.
            </p>
          </div>

          <div className="ar-sdg-grid">
            {SDG_CONNECTIONS.map((item) => (
              <SdgCard key={item.number} item={item} />
            ))}
          </div>

          <p className="ar-source-reminder">
            <LinkIcon size={15} aria-hidden="true" />
            Add verified links to the official United Nations SDG pages
            before publication.
          </p>
        </section>

        <section className="ar-section ar-credits">
          <div className="ar-section-heading">
            <SectionEyebrow>RESEARCH CREDITS</SectionEyebrow>
            <h2>People and institution</h2>
            <p>
              Replace the fields below with approved information only.
              Confirm names, spelling, roles, and affiliation before
              making this section public.
            </p>
          </div>

          <div className="ar-credit-grid">
            <article className="ar-credit-card">
              <div className="ar-icon">
                <UsersRound size={21} aria-hidden="true" />
              </div>
              <h3>Researchers</h3>
              <p>[Insert approved researcher names.]</p>
            </article>

            <article className="ar-credit-card">
              <div className="ar-icon">
                <GraduationCap size={21} aria-hidden="true" />
              </div>
              <h3>Academic affiliation</h3>
              <p>[Insert verified department, program, and institution.]</p>
            </article>

            <article className="ar-credit-card">
              <div className="ar-icon">
                <BookOpen size={21} aria-hidden="true" />
              </div>
              <h3>Research adviser</h3>
              <p>[Insert adviser name and approved title, if applicable.]</p>
            </article>
          </div>
        </section>

        <section className="ar-section">
          <div className="ar-section-heading">
            <SectionEyebrow>SOURCES AND DOCUMENTATION</SectionEyebrow>
            <h2>References</h2>
            <p>
              Use complete, consistent bibliographic entries from the
              approved manuscript. Expand a category to review what
              needs to be documented.
            </p>
          </div>

          <ReferenceList />

          <div className="ar-reference-note">
            <Info size={18} aria-hidden="true" />
            <p>
              The categories above are prompts, not finished citations.
              Replace them with the complete reference list and verify
              all author names, titles, dates, publication details,
              page numbers, and URLs.
            </p>
          </div>
        </section>

        <section className="ar-manuscript">
          <div className="ar-manuscript-icon">
            <FileText size={24} aria-hidden="true" />
          </div>

          <div className="ar-manuscript-copy">
            <SectionEyebrow>FULL RESEARCH DOCUMENT</SectionEyebrow>
            <h2>Read the complete study</h2>
            <p>
              A downloadable manuscript may be provided here when the
              research team has approved a final version for public
              distribution.
            </p>
          </div>

          <span className="ar-download-placeholder">
            <Download size={17} aria-hidden="true" />
            Add approved PDF
          </span>
        </section>

        <footer className="ar-footer">
          <p>
            <strong>Her Stories, Her Voice</strong>
          </p>
          <p>
            Research-based literary interpretation, with conclusions
            grounded in the selected texts.
          </p>
        </footer>
      </div>
    </main>
  );
}

export default About;
