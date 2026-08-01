import { useState } from 'react'
import { BriefcaseBusiness, Check, CircleHelp, Clipboard, ExternalLink, NotebookPen } from 'lucide-react'
import { experiences } from './data/experiences'
import { careerProjects } from './data/projects'
import './App.css'

type View = 'overview' | 'projects' | 'prep' | 'portfolio'

const tabs: { id: View; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'projects', label: 'Project details' },
  { id: 'prep', label: 'Interview prep' },
  { id: 'portfolio', label: 'Projects' },
]

function App() {
  const [view, setView] = useState<View>('overview')
  const [selectedId, setSelectedId] = useState(experiences[0].id)
  const experience = experiences.find((item) => item.id === selectedId) ?? experiences[0]
  const notesKey = `${experience.id}-interview-notes`
  const [notesByExperience, setNotesByExperience] = useState<Record<string, string>>(() =>
    Object.fromEntries(experiences.map((item) => [item.id, localStorage.getItem(`${item.id}-interview-notes`) ?? ''])),
  )
  const notes = notesByExperience[experience.id] ?? ''
  const [copied, setCopied] = useState(false)

  const updateNotes = (value: string) => {
    setNotesByExperience((current) => ({ ...current, [experience.id]: value }))
    localStorage.setItem(notesKey, value)
  }

  const copySummary = async () => {
    await navigator.clipboard.writeText(experience.summary)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark">JY</span>
          <div>
            <strong>Career Archive</strong>
            <span>Private interview notebook</span>
          </div>
        </div>

        <nav aria-label="Experience list">
          <p className="nav-label">Experiences</p>
          {experiences.map((item) => (
            <button key={item.id} className={`experience-link ${item.id === selectedId ? 'active' : ''}`}
              type="button" onClick={() => { setSelectedId(item.id); setView('overview') }}>
              <BriefcaseBusiness size={17} />
              <span><strong>{item.company}</strong><small>{item.period}</small></span>
            </button>
          ))}
        </nav>

        <p className="privacy-note">Stored locally on this Mac. Personal notes stay in this browser.</p>
      </aside>

      <main>
        <header className="topbar">
          <div><span className="status-dot" />Experience record</div>
          {experience.productUrl && (
            <a href={experience.productUrl} target="_blank" rel="noreferrer">
              Product site <ExternalLink size={14} />
            </a>
          )}
        </header>

        <div className="content">
          <section className="experience-header">
            <p className="overline">{experience.employmentType} · {experience.duration}</p>
            <h1>{experience.role}</h1>
            <div className="role-meta">
              <strong>{experience.company}</strong>
              <span>{experience.period}</span>
            </div>
          </section>

          <div className="tabs" role="tablist" aria-label="Experience views">
            {tabs.map((tab) => (
              <button key={tab.id} type="button" role="tab" aria-selected={view === tab.id}
                className={view === tab.id ? 'active' : ''} onClick={() => setView(tab.id)}>
                {tab.label}
              </button>
            ))}
          </div>

          {view === 'overview' && (
            <section className="view-panel overview-grid">
              <div className="main-column">
                <section className="content-section">
                  <div className="section-title-row">
                    <h2>Role summary</h2>
                    <button className="icon-button" type="button" onClick={copySummary} title="Copy summary" aria-label="Copy role summary">
                      {copied ? <Check size={16} /> : <Clipboard size={16} />}
                    </button>
                  </div>
                  <p className="lead">{experience.summary}</p>
                </section>

                <section className="content-section">
                  <h2>Projects</h2>
                  <div className="project-summary-list">
                    {experience.projects.map((project) => (
                      <button key={project.name} type="button" onClick={() => setView('projects')}>
                        <span><strong>{project.name}</strong><small>{project.description}</small></span>
                        <span aria-hidden="true">→</span>
                      </button>
                    ))}
                  </div>
                </section>
              </div>

              <aside className="facts-column">
                <section className="content-section compact">
                  <h2>Technology</h2>
                  <ul className="tag-list">
                    {experience.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                  </ul>
                </section>
                <section className="content-section compact">
                  <h2>Ways of working</h2>
                  <ul className="plain-list">
                    {experience.practices.map((practice) => <li key={practice}>{practice}</li>)}
                  </ul>
                </section>
              </aside>
            </section>
          )}

          {view === 'projects' && (
            <section className="view-panel project-details">
              {experience.projects.map((project) => (
                <article key={project.name} className="project-record">
                  <div className="project-intro">
                    <p className="overline">Production project</p>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                    <p className="role-note"><strong>Your role:</strong> {project.role}</p>
                  </div>
                  <div className="contribution-list">
                    {project.contributions.map((contribution) => (
                      <div className="contribution" key={contribution.title}>
                        <span className={`evidence-icon ${contribution.status}`} title={contribution.status === 'confirmed' ? 'Confirmed detail' : 'Needs clarification'}>
                          {contribution.status === 'confirmed' ? <Check size={14} /> : <CircleHelp size={14} />}
                        </span>
                        <div><h3>{contribution.title}</h3><p>{contribution.detail}</p></div>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </section>
          )}

          {view === 'prep' && (
            <section className="view-panel prep-grid">
              <div>
                <section className="content-section">
                  <h2>Stories to prepare</h2>
                  <ol className="prompt-list">
                    {experience.storyPrompts.map((prompt) => <li key={prompt}>{prompt}</li>)}
                  </ol>
                </section>
                <section className="content-section">
                  <h2>Details to recover</h2>
                  <p className="section-description">Answering these will turn good descriptions into credible interview stories.</p>
                  <ul className="question-list">
                    {experience.openQuestions.map((question) => <li key={question}><CircleHelp size={15} /><span>{question}</span></li>)}
                  </ul>
                </section>
              </div>

              <aside className="notes-panel">
                <div className="notes-heading">
                  <NotebookPen size={17} />
                  <div><h2>Working notes</h2><span>Saved automatically</span></div>
                </div>
                <textarea value={notes} onChange={(event) => updateNotes(event.target.value)}
                  placeholder="Add memories, metrics, architecture details, interview questions, or corrections here..."
                  aria-label="Interview preparation notes" />
              </aside>
            </section>
          )}

          {view === 'portfolio' && (
            <section className="view-panel portfolio-records">
              {careerProjects.map((project) => (
                <article className="portfolio-record" key={project.id}>
                  <div className="project-intro">
                    <p className="overline">{project.context} · {project.period}</p>
                    <h2>{project.name}</h2>
                    {project.status && <p className="project-status">{project.status}</p>}
                    <p>{project.description}</p>
                    <p className="role-note"><strong>Your role:</strong> {project.role}</p>
                    <ul className="tag-list">
                      {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                    </ul>
                    <div className="record-links">
                      {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer">Demo <ExternalLink size={13} /></a>}
                      {project.sourceUrl && <a href={project.sourceUrl} target="_blank" rel="noreferrer">Source <ExternalLink size={13} /></a>}
                    </div>
                  </div>
                  <div>
                    <div className="record-block">
                      <h3>Verified contributions</h3>
                      <ul className="record-list">
                        {project.contributions.map((contribution) => <li key={contribution}><Check size={14} /><span>{contribution}</span></li>)}
                      </ul>
                    </div>
                    <div className="record-block prompts">
                      <h3>Interview prompts</h3>
                      <ul className="record-list">
                        {project.interviewPrompts.map((prompt) => <li key={prompt}><CircleHelp size={14} /><span>{prompt}</span></li>)}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </section>
          )}
        </div>
      </main>
    </div>
  )
}

export default App
