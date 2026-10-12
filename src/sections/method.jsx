
import { useState } from 'react';
import {
  Search,
  Highlighter,
  Tags,
  Table2,
  Network,
  BadgeCheck,
  BookOpen,
  Quote,
  FileText,
  ArrowRight,
} from 'lucide-react';

import '../design/method.css';

const processSteps = [
  {
    number: '01',
    title: 'Select the stories',
    description:
      'Establish the selected Philippine and Western short stories as the comparative research corpus.',
    Icon: BookOpen,
  },
  {
    number: '02',
    title: 'Identify indicators',
    description:
      'Apply researcher-developed, theory-informed indicators supported by instrument validation.',
    Icon: Search,
  },
  {
    number: '03',
    title: 'Code the evidence',
    description:
      'Locate relevant textual evidence and classify it using the approved research indicators.',
    Icon: Highlighter,
  },
  {
    number: '04',
    title: 'Compare patterns',
    description:
      'Organize coded observations into tables and examine similarities and differences.',
    Icon: Network,
  },
  {
    number: '05',
    title: 'Validate interpretations',
    description:
      'Review the evidence and interpretations against the text and the approved research framework.',
    Icon: BadgeCheck,
  },
];

const identifiers = [
  { id: 'I01', label: 'Approved identifier 01' },
  { id: 'I02', label: 'Approved identifier 02' },
  { id: 'I03', label: 'Approved identifier 03' },
  { id: 'I04', label: 'Approved identifier 04' },
  { id: 'I05', label: 'Approved identifier 05' },
  { id: 'I06', label: 'Approved identifier 06' },
  { id: 'I07', label: 'Approved identifier 07' },
  { id: 'I08', label: 'Approved identifier 08' },
  { id: 'I09', label: 'Approved identifier 09' },
  { id: 'I10', label: 'Approved identifier 10' },
  { id: 'I11', label: 'Approved identifier 11' },
  { id: 'I12', label: 'Approved identifier 12' },
];

const identifierGroups = [
  { title: 'Group 01', items: identifiers.slice(0, 4) },
  { title: 'Group 02', items: identifiers.slice(4, 8) },
  { title: 'Group 03', items: identifiers.slice(8, 12) },
];

const tableGroups = [
  {
    title: 'Table Set 1',
    subtitle: 'Tables 1.1–1.3',
    tables: ['Table 1.1', 'Table 1.2', 'Table 1.3'],
  },
  {
    title: 'Table Set 2',
    subtitle: 'Tables 2.1–2.4',
    tables: ['Table 2.1', 'Table 2.2', 'Table 2.3', 'Table 2.4'],
  },
  {
    title: 'Synthesis',
    subtitle: 'Table 3',
    tables: ['Table 3'],
  },
];

const allTables = tableGroups.flatMap((group) => group.tables);

export function Method() {
  const [selectedIdentifier, setSelectedIdentifier] = useState('I01');
  const [selectedTable, setSelectedTable] = useState('Table 1.1');
  const [showFullTable, setShowFullTable] = useState(false);

  const activeIdentifier = identifiers.find(
    (item) => item.id === selectedIdentifier
  );

  return (
    <main className="method-page">
      <div className="method-container">
        <header className="method-header">
          <p className="method-eyebrow">03 / RESEARCH DOCUMENT</p>
          <h1>How the Data Were Analyzed</h1>
          <p className="method-intro">
            A guide to the research process, analytical identifiers, and
            evidence tables used to compare women’s representation in selected
            Philippine and Western short stories.
          </p>
          <div className="method-meta">
            <span><FileText size={15} /> Research methodology</span>
            <span>Comparative literary analysis</span>
          </div>
        </header>

        <section className="method-section" aria-labelledby="process-title">
          <div className="method-section-heading">
            <span className="method-section-number">01</span>
            <div>
              <p className="method-kicker">FROM TEXT TO INTERPRETATION</p>
              <h2 id="process-title">The Research Process</h2>
            </div>
          </div>

          <p className="method-section-intro">
            The analysis follows a structured process, connecting textual
            evidence with consistent indicators before drawing comparative
            interpretations.
          </p>

          <div className="process-diagram">
            {processSteps.map(({ number, title, description, Icon }, index) => (
              <div className="process-step-wrap" key={number}>
                <article className="process-step">
                  <div className="process-step-top">
                    <span className="process-number">{number}</span>
                    <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>

                {index < processSteps.length - 1 && (
                  <div className="process-arrow" aria-hidden="true">
                    <ArrowRight size={19} />
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="method-figure-caption">
            Figure 3.1. Conceptual overview of the research analysis process.
            Confirm the figure number against the approved manuscript.
          </p>
        </section>

        <section className="method-section" aria-labelledby="indicators-title">
          <div className="method-section-heading">
            <span className="method-section-number">02</span>
            <div>
              <p className="method-kicker">THE CODING FRAMEWORK</p>
              <h2 id="indicators-title">Research Identifiers</h2>
            </div>
          </div>

          <p className="method-section-intro">
            The indicators are researcher-developed, theory-informed, and
            instrument-validated. Select an identifier to inspect its entry.
            Replace the placeholder labels and descriptions below with the
            exact approved identifiers from the research instrument.
          </p>

          <div className="identifier-groups">
            {identifierGroups.map((group) => (
              <div className="identifier-group" key={group.title}>
                <h3>{group.title}</h3>
                <div className="identifier-chips">
                  {group.items.map((item) => (
                    <button
                      type="button"
                      key={item.id}
                      className={`identifier-chip ${
                        selectedIdentifier === item.id ? 'selected' : ''
                      }`}
                      onClick={() => setSelectedIdentifier(item.id)}
                      aria-pressed={selectedIdentifier === item.id}
                    >
                      <span>{item.id}</span>
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <article className="identifier-detail" aria-live="polite">
            <div className="identifier-detail-icon">
              <Tags size={22} strokeWidth={1.5} aria-hidden="true" />
            </div>
            <div>
              <p className="method-kicker">SELECTED IDENTIFIER</p>
              <h3>{activeIdentifier?.label}</h3>
              <p>
                Add the approved operational definition, coding criteria, and
                relevant inclusion or exclusion notes for this identifier.
              </p>
            </div>
            <span className="identifier-detail-code">{selectedIdentifier}</span>
          </article>
        </section>

        <section className="method-section" aria-labelledby="tables-title">
          <div className="method-section-heading">
            <span className="method-section-number">03</span>
            <div>
              <p className="method-kicker">THE EVIDENCE RECORD</p>
              <h2 id="tables-title">Research Tables</h2>
            </div>
          </div>

          <p className="method-section-intro">
            Explore the approved tables by selecting a table label. Use the
            full-table view when comparing multiple entries.
          </p>

          <div className="table-group-strip" aria-label="Table groups">
            {tableGroups.map((group) => (
              <div className="table-group" key={group.title}>
                <span className="table-group-title">{group.title}</span>
                <span className="table-group-subtitle">{group.subtitle}</span>
              </div>
            ))}
          </div>

          <div className="table-tabs" role="group" aria-label="Select research table">
            {allTables.map((table) => (
              <button
                type="button"
                key={table}
                className={`table-tab ${
                  selectedTable === table ? 'selected' : ''
                }`}
                onClick={() => setSelectedTable(table)}
                aria-pressed={selectedTable === table}
              >
                {table}
              </button>
            ))}
          </div>

          <div className="table-reader">
            <div className="table-reader-header">
              <div>
                <p className="method-kicker">CURRENTLY VIEWING</p>
                <h3>{selectedTable}</h3>
              </div>
              <Table2 size={24} strokeWidth={1.5} aria-hidden="true" />
            </div>

            <p className="table-placeholder-note">
              Insert the exact title, column headings, and verified data from
              {` ${selectedTable}`} in the approved research document.
            </p>

            <div className="evidence-cards">
              <article className="evidence-card">
                <span className="evidence-card-label">INDICATOR</span>
                <h4>Approved indicator</h4>
                <p>Insert the exact identifier used in this table.</p>
              </article>
              <article className="evidence-card">
                <span className="evidence-card-label">TEXTUAL EVIDENCE</span>
                <h4>Verified evidence entry</h4>
                <p>
                  Add a verified quotation or a faithful textual reference,
                  with the required attribution and page or location details.
                </p>
              </article>
              <article className="evidence-card">
                <span className="evidence-card-label">INTERPRETATION</span>
                <h4>Researcher’s analysis</h4>
                <p>
                  Add the interpretation supported by the evidence and the
                  study’s approved analytical framework.
                </p>
              </article>
            </div>

            <button
              type="button"
              className="table-view-toggle"
              onClick={() => setShowFullTable((current) => !current)}
              aria-expanded={showFullTable}
            >
              <Table2 size={17} aria-hidden="true" />
              {showFullTable ? 'Hide full-table view' : 'Show full-table view'}
            </button>

            {showFullTable && (
              <div className="full-table-scroll">
                <table className="evidence-table">
                  <caption>{selectedTable} — approved research data</caption>
                  <thead>
                    <tr>
                      <th scope="col">Identifier</th>
                      <th scope="col">Text / Evidence</th>
                      <th scope="col">Interpretation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Insert approved identifier</td>
                      <td>Insert verified evidence and attribution</td>
                      <td>Insert supported analysis</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>

        <section className="method-section reading-guide" aria-labelledby="reading-title">
          <div className="method-section-heading">
            <span className="method-section-number">04</span>
            <div>
              <p className="method-kicker">A READER’S GUIDE</p>
              <h2 id="reading-title">How to Read an Evidence Entry</h2>
            </div>
          </div>

          <div className="reading-guide-grid">
            <article className="reading-guide-item">
              <span className="reading-guide-icon">
                <Tags size={21} aria-hidden="true" />
              </span>
              <h3>Identifier</h3>
              <p>
                Shows which approved research indicator is being examined.
              </p>
            </article>
            <article className="reading-guide-item">
              <span className="reading-guide-icon">
                <Quote size={21} aria-hidden="true" />
              </span>
              <h3>Textual evidence</h3>
              <p>
                Presents a verified quotation or textual reference with
                appropriate attribution. Do not publish unverified quotations.
              </p>
            </article>
            <article className="reading-guide-item">
              <span className="reading-guide-icon">
                <Search size={21} aria-hidden="true" />
              </span>
              <h3>Interpretation</h3>
              <p>
                Explains how the evidence relates to the indicator and the
                comparative research question.
              </p>
            </article>
          </div>
        </section>

        <footer className="method-footer">
          <BookOpen size={19} strokeWidth={1.5} aria-hidden="true" />
          <p>
            This section documents the analytical process. All final
            identifiers, table labels, evidence, and interpretations should
            match the approved research manuscript.
          </p>
        </footer>
      </div>
    </main>
  );
}
