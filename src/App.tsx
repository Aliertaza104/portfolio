import { useEffect, useState } from 'react'
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Braces, BrainCircuit, Check,
  ChevronDown, Code2, Database, Download, Github, Linkedin, Mail, Menu, Smartphone,
  Terminal, X, Zap,
} from 'lucide-react'

import { projects } from './projects'
import { organizations } from './organizations'
import type { Project } from './projects'

const expertise = [
  { icon: Database, title: 'Data Engineering', tag: 'DATA / PIPELINES', text: 'Batch data pipelines, medallion lakehouse layers, data cleaning, and analytical datasets with Python, Spark, and PostgreSQL.', skills: ['Python', 'SQL', 'Pandas', 'PySpark', 'Databricks', 'Delta Lake', 'AWS S3', 'PostgreSQL', 'ETL', 'Data quality'] },
  { icon: Smartphone, title: 'Android Development', tag: 'MOBILE / ANDROID', text: 'Native Android application development with clear separation of concerns and local data persistence.', skills: ['Kotlin', 'XML layouts', 'MVVM', 'Room', 'REST APIs', 'QR inventory'] },
  { icon: Code2, title: 'Full-Stack Web', tag: 'WEB / SYSTEMS', text: 'End-to-end web applications, REST APIs, dashboards, business rules, and third-party integrations.', skills: ['React', 'TypeScript', 'Node.js', 'Express', 'Django', 'REST APIs'] },
  { icon: BrainCircuit, title: 'Applied AI', tag: 'AI / EXPLORATION', text: 'Building on machine learning foundations and exploring practical LLM integration and retrieval-augmented workflows.', skills: ['ML foundations', 'Deep learning', 'LLM concepts', 'RAG exploration', 'Qdrant', 'Prompt design'] },
]

type Role = 'all' | 'web' | 'android' | 'data'
const profiles = {
 all: { label: 'All disciplines', title: 'Software Engineer', headline: 'Building across', accent: 'the stack.', intro: 'I turn complex problems into practical software - from data workflows and Android apps to full-stack systems.', focus: 'Data systems - Product engineering - Applied AI', about: 'My work spans an SME business-management Android app, business operations software, and backend integrations. I am also deepening my data engineering and applied AI skills through hands-on learning and projects.' },
 web: { label: 'Web development', title: 'Web Developer', headline: 'Building for', accent: 'the web.', intro: 'I build full-stack web applications, business dashboards, and REST APIs that turn complex workflows into useful software.', focus: 'React - TypeScript - Node.js - REST APIs', about: 'My web work includes the Supreme Services portal and API, Prime Finance CRM integrations, Django e-commerce and cash-flow projects, and a PageSpeed auditing dashboard. I focus on clear application architecture and practical business workflows.' },
 android: { label: 'Android development', title: 'Android Developer', headline: 'Building native', accent: 'Android apps.', intro: 'I build native Android applications with Kotlin, thoughtful architecture, and local data persistence for everyday business workflows.', focus: 'Kotlin - XML - MVVM - Room', about: 'My Android work centers on Asaan Karobar, an SME business-management app covering inventory, billing, Khata, suppliers, and expenses. I use Kotlin, XML, MVVM, and Room to organize application logic and local data.' },
 data: { label: 'Data engineering', title: 'Data Engineer', headline: 'Working with', accent: 'reliable data.', intro: 'I build data pipelines and analytical datasets, from Python and PostgreSQL ETL to Databricks lakehouses with Spark and Delta Lake.', focus: 'Python - SQL - Spark - Databricks', about: 'My data projects include CityFlow, a Databricks lakehouse with Bronze, Silver, and Gold layers for NYC taxi analytics, and a modular IMDb ETL pipeline using Python, Pandas, and PostgreSQL. I focus on data cleaning, reliable transformations, and useful analytical outputs.' },
}
function readRole(): Role {
 const value = new URLSearchParams(window.location.search).get('role')
 return value === 'web' || value === 'android' || value === 'data' ? value : 'all'
}

const nav = [ ['Work', '#work'], ['Expertise', '#expertise'], ['About', '#about'] ]

function SectionLabel({ children }: { children: string }) {
  return <div className="section-label"><span className="label-dot" />{children}</div>
}

function App() {
  const [role, setRole] = useState<Role>(readRole)
  const [selected, setSelected] = useState<Project | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const profile = profiles[role]
  const resumeFile = role === 'data' ? 'Ali_Ertaza_Data_Engineer_CV.pdf' : 'Ali_Ertaza.pdf'
  const visibleProjects = projects.filter(project => role === 'all' || project.roles.includes(role))
  const visibleOrganizations = organizations.filter(organization => role === 'all' || organization.roles.includes(role))
  const currentNav = visibleOrganizations.length ? [...nav, ['Organizations', '#organizations']] : nav
  const visibleExpertise = expertise.filter(item => role === 'all' || item.title === (role === 'web' ? 'Full-Stack Web' : role === 'android' ? 'Android Development' : 'Data Engineering'))
  useEffect(() => {
    const onPopState = () => { setRole(readRole()); setSelected(null) }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])
  useEffect(() => {
    document.title = 'Ali Ertaza - ' + profile.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Ali Ertaza - ' + profile.title + '. ' + profile.intro)
  }, [profile])
  function chooseRole(next: Role) {
    const url = new URL(window.location.href)
    if (next === 'all') url.searchParams.delete('role')
    else url.searchParams.set('role', next)
    window.history.pushState({}, '', url)
    setRole(next)
    setSelected(null)
  }

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Ali Ertaza home"><img className="brand-icon" src="/portfolio-icon-transparent.png" alt="Ali Ertaza portfolio" width="44" height="44" /><span className="brand-caption">ENGINEERING PORTFOLIO</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">{currentNav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
        <a className="nav-contact" href="#contact">Let's connect <ArrowUpRight size={15} /></a>
        <button className="mobile-menu" onClick={() => setMobileOpen(v => !v)} aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}>{mobileOpen ? <X /> : <Menu />}</button>
      </header>
      {mobileOpen && <nav className="mobile-nav">{currentNav.map(([label, href]) => <a key={href} href={href} onClick={() => setMobileOpen(false)}>{label}</a>)}<a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a></nav>}

      <main>
        <div className="role-picker section-wrap">
          <span className="mono">EXPLORE MY PORTFOLIO</span>
          <div className="role-options" role="group" aria-label="Portfolio specialty">{(Object.keys(profiles) as Role[]).map(key => <a key={key} href={key === 'all' ? '?' : '?role=' + key} aria-current={role === key ? 'page' : undefined} className={role === key ? 'role-option active' : 'role-option'} onClick={event => { if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return; event.preventDefault(); chooseRole(key) }}>{profiles[key].label}<ArrowUpRight size={14} /></a>)}</div>
          <p>{role === 'all' ? 'Choose a specialty to explore the work relevant to you.' : 'Viewing my ' + profile.label.toLowerCase() + ' portfolio. Share this URL to open this view directly.'}</p>
        </div>
        <section id="home" className="hero section-wrap">
          <div className="hero-copy">
            <div className="availability"><span className="pulse-dot" /> {profile.title.toUpperCase()} &middot; PAKISTAN</div>
            <h1>{profile.headline}<br /><span className="gradient-text">{profile.accent}</span></h1>
            <p className="hero-lede">{profile.intro}</p>
            <div className="hero-actions"><a className="button-primary" href="#work">Explore my work <ArrowDownRight size={17} /></a><a className="button-quiet" href={'/resumes/' + resumeFile} download={resumeFile}>{role === 'data' ? 'Download data CV' : 'Download resume'} <Download size={16} /></a></div>
            <div className="resume-links">{role === 'all' && <a href="/resumes/Ali_Ertaza_Data_Engineer_CV.pdf" download="Ali_Ertaza_Data_Engineer_CV.pdf">Data engineering CV <Download size={13} /></a>}<a href={'/resumes/' + resumeFile} target="_blank" rel="noreferrer">View {role === 'data' ? 'data CV' : 'resume'} <ArrowUpRight size={13} /></a></div>
            <div className="hero-footnote"><span className="mono">CURRENT FOCUS</span><span>{profile.focus}</span></div>
          </div>
          <div className={"hero-visual role-" + role} aria-label="Decorative technical illustration">
            <div className="visual-grid" />
            <div className="orbit orbit-outer" /><div className="orbit orbit-inner" />
            <div className="core-node"><div className="core-glow" /><Braces size={40} strokeWidth={1.25} /><span>{role === 'all' ? 'ENGINEER' : role.toUpperCase()}<br />{role === 'all' ? 'MINDSET' : 'PORTFOLIO'}</span></div>
            <div className="orbit-node node-data"><Database size={17} /><span>DATA</span></div>
            <div className="orbit-node node-mobile"><Smartphone size={17} /><span>MOBILE</span></div>
            <div className="orbit-node node-web"><Code2 size={17} /><span>WEB</span></div>
            <div className="orbit-node node-ai"><BrainCircuit size={17} /><span>AI</span></div>
            <div className="visual-coordinate mono">31° 27' N<br />74° 16' E</div><div className="visual-index mono">FIG. 001 / SYSTEMS THINKING</div>
          </div>
          <div className="hero-bottomline"><span>CURIOUS BY DEFAULT. BUILT TO LEARN.</span><span className="scroll-cue">SCROLL TO EXPLORE <ChevronDown size={14} /></span></div>
        </section>

        <section id="work" className="work-section section-wrap section-pad">
          <div className="section-heading"><div><SectionLabel>SELECTED PROJECTS</SectionLabel><h2>Work with a <span className="muted-heading">purpose.</span></h2></div><p className="section-intro">{role === 'all' ? "A selection of products and systems I've built or am actively developing. Each project starts with a real workflow to solve." : 'Projects focused on ' + profile.label.toLowerCase() + '.'}</p></div>
          <div className="project-toolbar"><span className="mono">{String(visibleProjects.length).padStart(2, '0')} PROJECTS / {profile.title.toUpperCase()}</span></div>
          {visibleProjects.length === 0 && <div className="empty-projects"><Database size={28} /><h3>Data engineering case studies coming soon</h3><p>I am building my practice in Python, SQL, and reliable data processing. Explore my current toolkit below or get in touch to discuss an opportunity.</p><a className="button-quiet" href="#expertise">Explore data skills <ArrowRight size={16} /></a></div>}
          <div className="project-grid">{visibleProjects.map(project => <article key={project.id} className="project-card">
            <div className="project-card-top"><span className="project-number mono">/{project.number}</span><span className="project-status"><span />{project.status}</span></div>
            <div className="project-art"><div className="art-lines" /><div className="art-crosshair crosshair-a" /><div className="art-crosshair crosshair-b" /><div className="art-icon"><project.icon size={32} strokeWidth={1.3} /></div><span className="art-label mono">{project.id.toUpperCase().replace('-', ' / ')}</span><span className="art-ghost">{project.number}</span></div>
            <div className="project-content"><div className="eyebrow">{project.category}</div><h3>{project.title}</h3><p>{project.summary}</p><div className="stack-list">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
              <button className="project-link" onClick={() => setSelected(project)}>Explore project <ArrowUpRight size={16} /></button>
            </div>
          </article>)}</div>
          <div className="work-note"><Zap size={15} /><span>Explore public source repositories and project notes. Private projects are presented with summaries; shared organization work is identified in the notes.</span></div>
        </section>

        <section id="expertise" className="expertise-section section-wrap section-pad">
          <div className="section-heading"><div><SectionLabel>TECHNICAL TOOLKIT</SectionLabel><h2>{role === 'all' ? 'Different tools.' : profile.title + '.'}<br /><span className="muted-heading">{role === 'all' ? 'One engineering mindset.' : 'A focused toolkit.'}</span></h2></div><p className="section-intro">{role === 'all' ? 'I enjoy working across disciplines and understanding how the pieces connect, from data storage to the interface people use.' : visibleExpertise[0].text}</p></div>
          <div className={role === 'all' ? 'expertise-grid' : 'expertise-grid focused-expertise'}>{visibleExpertise.map((item, i) => <article className="expertise-card" key={item.title}><div className="expertise-top"><span className="expertise-icon"><item.icon size={20} /></span><span className="mono expertise-index">0{i + 1}</span></div><div className="eyebrow">{item.tag}</div><h3>{item.title}</h3><p>{item.text}</p><div className="skill-list">{item.skills.map(skill => <span key={skill}>{skill}</span>)}</div></article>)}</div>
          <div className="tooling-strip"><span className="mono">WORKING PRINCIPLES</span><div><span><Check size={14} /> Clear architecture</span><span><Check size={14} /> Maintainable code</span><span><Check size={14} /> Practical problem-solving</span><span><Check size={14} /> Continuous learning</span></div></div>
        </section>

        {visibleOrganizations.length > 0 && <section id="organizations" className="organizations-section section-wrap section-pad">
          <div className="section-heading"><div><SectionLabel>ORGANIZATIONS</SectionLabel><h2>Building <span className="muted-heading">together.</span></h2></div><p className="section-intro">Organizations I am part of, with projects related to this portfolio view.</p></div>
          <div className="organization-grid">{visibleOrganizations.map(organization => <article className="organization-card" key={organization.id}>
            <div className="organization-top"><span className="organization-mark" aria-hidden="true">{organization.name.split(' ').map(word => word[0]).slice(0, 2).join('')}</span><span className="mono">ORGANIZATION</span></div>
            <h3>{organization.name}</h3><p>{organization.description}</p>
            <div className="organization-projects">{organization.projectIds.map(id => { const project = projects.find(item => item.id === id); return project ? <button key={id} onClick={() => setSelected(project)}>{project.title}<ArrowUpRight size={14} /></button> : null })}</div>
            {organization.login && <a className="organization-link" href={'https://github.com/' + organization.login} target="_blank" rel="noreferrer"><Github size={16} /> View organization <ArrowUpRight size={14} /></a>}
          </article>)}</div>
        </section>}

        <section id="about" className="about-section section-wrap section-pad">
          <div className="about-aside"><SectionLabel>THE PERSON BEHIND THE CODE</SectionLabel><div className="about-monogram">AE<span>.</span><div className="monogram-ring" /></div><div className="about-caption mono">{profile.title.toUpperCase()}<br />{profile.focus.toUpperCase()}</div></div>
          <div className="about-copy"><h2>Engineer by training.<br /><span className="gradient-text">Builder by nature.</span></h2><p>I'm Ali Ertaza, a Software Engineering graduate from COMSATS University Islamabad, Sahiwal Campus. I enjoy building useful software and learning how systems work end-to-end.</p><p>{profile.about}</p><div className="education-card"><div className="education-symbol"><Terminal size={19} /></div><div><strong>BS Software Engineering</strong><span>COMSATS University Islamabad · Sahiwal Campus</span></div><span className="education-date mono">2026</span></div><div className="about-links"><a href="https://github.com/Aliertaza104" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={14} /></a><a href="https://www.linkedin.com/in/ali-ertaza-846972270/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} /></a></div></div>
        </section>

        <section id="contact" className="contact-section section-wrap"><div className="contact-orb" /><SectionLabel>HAVE A PROJECT IN MIND?</SectionLabel><h2>Let's build something<br /><span className="gradient-text">that matters.</span></h2><p>{role === 'all' ? 'Open to meaningful conversations, collaborative projects, and opportunities to solve real engineering problems.' : 'Let us talk about your next ' + profile.label.toLowerCase() + ' project or opportunity.'}</p><a className="button-primary contact-button" href="mailto:aliertaza104@gmail.com?subject=Let%27s%20connect">Start a conversation <Mail size={16} /></a><a className="contact-hint mono" href="mailto:aliertaza104@gmail.com">aliertaza104@gmail.com</a></section>
      </main>

      <footer className="footer section-wrap"><a className="brand footer-brand" href="#home"><img className="brand-icon" src="/portfolio-icon-transparent.png" alt="Ali Ertaza portfolio" width="44" height="44" /></a><span>Designed & built with curiosity.</span><span className="mono footer-right">© {new Date().getFullYear()} ALI ERTAZA <span className="footer-status" /></span></footer>

      {selected && <div className="modal-backdrop" role="presentation" onClick={() => setSelected(null)}><section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={e => e.stopPropagation()}><button className="modal-close" onClick={() => setSelected(null)} aria-label="Close project details"><X size={20} /></button><div className="eyebrow">{selected.category}</div><h2 id="modal-title">{selected.title}</h2><p className="modal-summary">{selected.summary}</p><div className="modal-rule" /><h4>PROJECT NOTES</h4><ul>{selected.details.map(d => <li key={d}>{d}</li>)}</ul><h4>TECH STACK</h4><div className="stack-list modal-stack">{selected.stack.map(s => <span key={s}>{s}</span>)}</div><div className="source-note mono">{selected.sourceVisibility === 'private' ? 'PRIVATE SOURCE REPOSITORY' : selected.sourceVisibility === 'unverified' ? 'REPOSITORY NOT AVAILABLE' : 'PUBLIC SOURCE REPOSITORY'}</div><div className="modal-actions">{selected.link && <a className="button-primary" href={selected.link} target="_blank" rel="noreferrer">View repository <ArrowUpRight size={15} /></a>}<button className="button-quiet" onClick={() => setSelected(null)}>Close details <X size={15} /></button></div></section></div>}
    </div>
  )
}

export default App
