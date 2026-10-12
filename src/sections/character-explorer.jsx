import { useState } from 'react';
import {
  UsersRound,
  ArrowLeftRight,
  ChevronDown,
  FileText,
  BookOpen,
  Lightbulb,
  Leaf,
  Info,
  Search,
} from 'lucide-react';

import '../design/character-explorer.css';

const characters = [
  {
    id: 'lita',
    name: 'Lita',
    story: 'Good Husbands and Obedient Wives',
    tradition: 'Philippine',
    description: 'Character from a selected Philippine short story.',
  },
  {
    id: 'diva',
    name: 'Diva',
    story: 'Good Husbands and Obedient Wives',
    tradition: 'Philippine',
    description: 'Character from a selected Philippine short story.',
  },
  {
    id: 'liza',
    name: 'Liza',
    story: 'Sinigang',
    tradition: 'Philippine',
    description: 'Character from a selected Philippine short story.',
  },
  {
    id: 'corrie',
    name: 'Corrie',
    story: 'Corrie',
    tradition: 'Western',
    description: 'Character from a selected Western short story.',
  },
  {
    id: 'callie',
    name: 'Callie',
    story: 'Puppy',
    tradition: 'Western',
    description: 'Character from a selected Western short story.',
  },
  {
    id: 'marie',
    name: 'Marie',
    story: 'Puppy',
    tradition: 'Western',
    description: 'Character from a selected Western short story.',
  },
];

const dimensions = [
  {
    id: 'self-expression',
    number: '01',
    title: 'Self-Expression',
    description:
      'Explore how the character communicates thoughts, feelings, desires, and personal beliefs.',
  },
  {
    id: 'gender-roles',
    number: '02',
    title: 'Gender Roles',
    description:
      'Examine how the character is represented in relation to gender expectations and social norms.',
  },
  {
    id: 'independence',
    number: '03',
    title: 'Independence and Agency',
    description:
      'Consider the character’s ability to make decisions, act independently, and influence events.',
  },
  {
    id: 'social-context',
    number: '04',
    title: 'Social Context',
    description:
      'Consider how family, culture, relationships, and other social circumstances shape the character.',
  },
];

/*
 * Add verified findings from the approved research manuscript here.
 *
 * Example:
 * 'self-expression': {
 *   lita: {
 *     summary: 'Approved interpretation from the research.',
 *     evidence: 'Verified passage or paraphrased textual evidence.',
 *     reference: 'Table 1.1',
 *   },
 * }
 *
 * Keep entries empty until the findings and table references have
 * been checked against the manuscript.
 */
const characterAnalysis = {};

function getCharacter(id) {
  return characters.find((character) => character.id === id);
}

function getAnalysis(dimensionId, characterId) {
  return characterAnalysis[dimensionId]?.[characterId] ?? null;
}

function CharacterSelect({
  label,
  value,
  selectedOther,
  onChange,
}) {
  return (
    <div className="ce-select-group">
      <label className="ce-label" htmlFor={`character-${label}`}>
        {label}
      </label>

      <div className="ce-select-wrap">
        <select
          id={`character-${label}`}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          aria-label={`Select ${label}`}
        >
          {characters.map((character) => (
            <option
              key={character.id}
              value={character.id}
              disabled={character.id === selectedOther}
            >
              {character.name} — {character.story}
            </option>
          ))}
        </select>

        <ChevronDown
          className="ce-select-icon"
          size={17}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

function CharacterProfile({ character, position }) {
  return (
    <article className="ce-profile-card">
      <div className="ce-profile-main">
        <div className="ce-monogram" aria-hidden="true">
          {character.name.charAt(0)}
        </div>

        <div className="ce-profile-details">
          <span className="ce-profile-label">
            CHARACTER {position}
          </span>

          <h3>{character.name}</h3>

          <p className="ce-profile-story">
            {character.story}
          </p>
        </div>
      </div>

      <div className="ce-profile-footer">
        <BookOpen size={16} aria-hidden="true" />
        <span>{character.tradition} literature</span>
      </div>
    </article>
  );
}

function EvidenceEntry({ character, analysis }) {
  return (
    <article className="ce-evidence-entry">
      <h5>{character.name}</h5>

      <p>
        {analysis?.evidence ||
          'Textual evidence has not yet been added. Insert a verified quotation or a faithful paraphrase from the approved research manuscript.'}
      </p>

      <p className="ce-table-reference">
        <strong>Research reference:</strong>{' '}
        {analysis?.reference || 'To be confirmed against the manuscript'}
      </p>
    </article>
  );
}

function DimensionCard({
  dimension,
  characterA,
  characterB,
  expanded,
  onToggle,
}) {
  const analysisA = getAnalysis(dimension.id, characterA.id);
  const analysisB = getAnalysis(dimension.id, characterB.id);

  const hasFindings = Boolean(analysisA || analysisB);

  return (
    <article className="ce-dimension-card">
      <div className="ce-dimension-heading">
        <span className="ce-dimension-number">
          {dimension.number}
        </span>

        <div>
          <h3>{dimension.title}</h3>
          <p>{dimension.description}</p>
        </div>
      </div>

      <div className="ce-comparison-columns">
        <div className="ce-analysis-cell">
          <span className="ce-cell-label">
            {characterA.name}
          </span>

          <p>
            {analysisA?.summary ||
              'The approved research interpretation for this character has not yet been added.'}
          </p>
        </div>

        <div className="ce-analysis-cell">
          <span className="ce-cell-label">
            {characterB.name}
          </span>

          <p>
            {analysisB?.summary ||
              'The approved research interpretation for this character has not yet been added.'}
          </p>
        </div>
      </div>

      {hasFindings && (
        <div className="ce-highlight-box ce-highlight-box--insight ce-dimension-insight">
          <span className="ce-highlight-label">
            Research insight
          </span>

          <p>
            Use the verified findings above to explain the similarities
            or differences between these characters. Do not infer a
            conclusion without supporting evidence.
          </p>
        </div>
      )}

      <button
        className="ce-evidence-button"
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        aria-controls={`evidence-${dimension.id}`}
      >
        <FileText size={17} aria-hidden="true" />

        <span>
          {expanded ? 'Hide textual evidence' : 'View textual evidence'}
        </span>

        <ChevronDown
          className={`ce-chevron ${expanded ? 'ce-chevron-open' : ''}`}
          size={18}
          aria-hidden="true"
        />
      </button>

      {expanded && (
        <div
          className="ce-evidence-panel"
          id={`evidence-${dimension.id}`}
        >
          <div className="ce-evidence-heading">
            <BookOpen size={18} aria-hidden="true" />
            <h4>Supporting Evidence</h4>
          </div>

          <div className="ce-evidence-grid">
            <EvidenceEntry
              character={characterA}
              analysis={analysisA}
            />

            <EvidenceEntry
              character={characterB}
              analysis={analysisB}
            />
          </div>

          <div className="ce-highlight-box ce-highlight-box--evidence">
            <span className="ce-highlight-label">
              Evidence verification
            </span>

            <p>
              Confirm all quotations, interpretations, and table
              references against the approved manuscript before
              publishing the final research findings.
            </p>
          </div>
        </div>
      )}
    </article>
  );
}

export function CharacterExplorer() {
  const [characterAId, setCharacterAId] = useState('lita');
  const [characterBId, setCharacterBId] = useState('corrie');
  const [expandedDimensions, setExpandedDimensions] = useState([]);

  const characterA = getCharacter(characterAId);
  const characterB = getCharacter(characterBId);

  function handleCharacterAChange(nextId) {
    setCharacterAId(nextId);

    if (nextId === characterBId) {
      const alternative = characters.find(
        (character) => character.id !== nextId,
      );

      if (alternative) {
        setCharacterBId(alternative.id);
      }
    }

    setExpandedDimensions([]);
  }

  function handleCharacterBChange(nextId) {
    setCharacterBId(nextId);

    if (nextId === characterAId) {
      const alternative = characters.find(
        (character) => character.id !== nextId,
      );

      if (alternative) {
        setCharacterAId(alternative.id);
      }
    }

    setExpandedDimensions([]);
  }

  function toggleDimension(dimensionId) {
    setExpandedDimensions((current) =>
      current.includes(dimensionId)
        ? current.filter((id) => id !== dimensionId)
        : [...current, dimensionId],
    );
  }

  let comparisonType = 'Cross-character comparison';
  let comparisonDescription =
    'Explore how the two selected characters are represented across the chosen analytical dimensions.';

  if (characterA.story === characterB.story) {
    comparisonType = 'Same-story comparison';
    comparisonDescription =
      'Both characters belong to the same selected story. Compare their representations within a shared narrative context.';
  } else if (characterA.tradition === characterB.tradition) {
    comparisonType = 'Same literary tradition';
    comparisonDescription =
      'The characters come from different stories within the same literary tradition.';
  } else {
    comparisonType = 'Cross-cultural comparison';
    comparisonDescription =
      'The characters come from different literary traditions. Interpret similarities and differences using the approved research framework.';
  }

  return (
    <main className="ce-page">
      <div className="ce-container">
        <header className="ce-header">
          <div className="ce-overline">
            <span className="ce-overline-line" />
            RESEARCH INTERACTIVE
          </div>

          <h1>Character Explorer</h1>

          <p className="ce-subtitle">
            Looking closer at the women behind the stories.
          </p>

          <p className="ce-intro">
            Explore selected female characters from Philippine and
            Western short stories. Select two characters to examine
            their representation through self-expression, gender roles,
            independence, and social context.
          </p>
        </header>

        <section
          className="ce-selector-panel"
          aria-labelledby="ce-selector-title"
        >
          <div className="ce-selector-heading">
            <div className="ce-section-icon">
              <UsersRound size={21} aria-hidden="true" />
            </div>

            <div>
              <h2 id="ce-selector-title">
                Choose two characters
              </h2>

              <p>
                Select the characters you would like to compare.
              </p>
            </div>
          </div>

          <div className="ce-selector-grid">
            <CharacterSelect
              label="Character A"
              value={characterAId}
              selectedOther={characterBId}
              onChange={handleCharacterAChange}
            />

            <div className="ce-compare-icon" aria-hidden="true">
              <ArrowLeftRight size={22} />
            </div>

            <CharacterSelect
              label="Character B"
              value={characterBId}
              selectedOther={characterAId}
              onChange={handleCharacterBChange}
            />
          </div>

          <div className="ce-comparison-type" aria-live="polite">
            <span className="ce-status-dot" />
            {comparisonType}
          </div>

          <div className="ce-highlight-box ce-highlight-box--insight">
            <span className="ce-highlight-label">
              About this comparison
            </span>

            <p>{comparisonDescription}</p>
          </div>
        </section>

        <section
          className="ce-profiles"
          aria-label="Selected character profiles"
        >
          <CharacterProfile
            character={characterA}
            position="A"
          />

          <CharacterProfile
            character={characterB}
            position="B"
          />
        </section>

        <section className="ce-analysis">
          <div className="ce-analysis-heading">
            <span className="ce-small-label">
              COMPARATIVE ANALYSIS
            </span>

            <h2>
              Understanding their representation
            </h2>

            <p>
              Use the four dimensions below to organize the comparison.
              Open each evidence section to review the supporting text
              and the relevant research reference.
            </p>
          </div>

          <div className="ce-highlight-grid">
            <div className="ce-highlight-stat">
              <strong>Self-expression</strong>
              <span>
                Thoughts, feelings, desires, and personal beliefs.
              </span>
            </div>

            <div className="ce-highlight-stat">
              <strong>Gender roles</strong>
              <span>
                Expectations, social norms, and gendered experiences.
              </span>
            </div>

            <div className="ce-highlight-stat">
              <strong>Independence</strong>
              <span>
                Agency, choices, and the ability to influence events.
              </span>
            </div>
          </div>

          <div className="ce-dimension-list">
            {dimensions.map((dimension) => (
              <DimensionCard
                key={dimension.id}
                dimension={dimension}
                characterA={characterA}
                characterB={characterB}
                expanded={expandedDimensions.includes(dimension.id)}
                onToggle={() => toggleDimension(dimension.id)}
              />
            ))}
          </div>
        </section>

        <aside className="ce-editorial-note">
          <div className="ce-note-mark" aria-hidden="true">
            <Info size={21} />
          </div>

          <div>
            <p>
              <strong>Editorial note</strong>
            </p>

            <p>
              This explorer is an interactive presentation of the
              research framework. Character descriptions, interpretations,
              quotations, and table references must be verified against
              the approved thesis before being presented as research
              findings.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default CharacterExplorer;