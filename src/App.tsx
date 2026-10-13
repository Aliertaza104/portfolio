import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ArrowUpRight, Code2, Database, Download, Github, Layers, Linkedin, Menu, Smartphone, Workflow, X } from 'lucide-react'
import { projects } from './projects'
import { organizations } from './organizations'
import type { Project } from './projects'

type Role = 'all' | 'web' | 'android' | 'data'
const profiles = {
 all: { label: 'All disciplines', title: 'Software Engineer', headline: 'Useful software.', accent: 'Thoughtfully engineered.', intro: 'I turn complex problems into practical software - from data workflows and Android apps to full-stack systems.', focus: 'Data systems - Product engineering - Applied AI', about: 'My work spans an SME business-management Android app, business operations software, and backend integrations. I am also deepening my data engineering and applied AI skills through hands-on learning and projects.' },
 web: { label: 'Web development', title: 'Web Developer', headline: 'Business software.', accent: 'Thoughtfully engineered.', intro: 'I build full-stack web applications, business dashboards, and REST APIs that turn complex workflows into useful software.', focus: 'React - TypeScript - Node.js - REST APIs', about: 'My web work includes the Supreme Services portal and API, Prime Finance CRM integrations, Django e-commerce and cash-flow projects, and a PageSpeed auditing dashboard. I focus on clear application architecture and practical business workflows.' },
 android: { label: 'Android development', title: 'Android Developer', headline: 'Everyday business.', accent: 'Made mobile.', intro: 'I build native Android applications with Kotlin, thoughtful architecture, and local data persistence for everyday business workflows.', focus: 'Kotlin - XML - MVVM - Room', about: 'My Android work centers on Asaan Karobar, an SME business-management app covering inventory, billing, Khata, suppliers, and expenses. I use Kotlin, XML, MVVM, and Room to organize application logic and local data.' },
 data: { label: 'Data engineering', title: 'Data Engineer', headline: 'Raw data.', accent: 'Clear possibilities.', intro: 'I build data pipelines and analytical datasets, from Python and PostgreSQL ETL to Databricks lakehouses with Spark and Delta Lake.', focus: 'Python - SQL - Spark - Databricks', about: 'My data projects include CityFlow, a Databricks lakehouse with Bronze, Silver, and Gold layers for NYC taxi analytics, and a modular IMDb ETL pipeline using Python, Pandas, and PostgreSQL. I focus on data cleaning, reliable transformations, and useful analytical outputs.' },
}
function readRole(): Role {
 const value = new URLSearchParams(window.location.search).get('role')
 return value === 'web' || value === 'android' || value === 'data' ? value : 'all'
}

const features: Record<Role, string[]> = { all: ['supreme-app', 'cityflow-databricks', 'asaan-karobar'], web: ['supreme-app', 'prime-finance'], android: ['asaan-karobar'], data: ['cityflow-databricks', 'imdb-data-etl'] }
const capabilitySets = {
 web: [
  { title: 'Interfaces people can use', skills: 'React / TypeScript / Material UI', text: 'Dashboards, feature screens, and typed API connections.', evidence: 'supreme-app', icon: Code2 },
  { title: 'Services that connect', skills: 'Node.js / Express / MongoDB', text: 'REST APIs, CRM integrations, and webhook-driven workflows.', evidence: 'prime-finance', icon: Workflow },
  { title: 'Business rules in code', skills: 'PostgreSQL / OpenAPI / Vitest', text: 'Persistent business data, API contracts, and database tests.', evidence: 'supreme-api', icon: Database },
 ],
 android: [
  { title: 'Native mobile experiences', skills: 'Kotlin / XML layouts', text: 'Inventory, billing, and everyday business workflows on Android.', evidence: 'asaan-karobar', icon: Smartphone },
  { title: 'Clear application structure', skills: 'MVVM / Separation of concerns', text: 'Organizing interface and application logic into distinct responsibilities.', evidence: 'asaan-karobar', icon: Layers },
  { title: 'Local data persistence', skills: 'Room / QR inventory', text: 'Working with business records and local application storage.', evidence: 'asaan-karobar', icon: Database },
 ],
 data: [
  { title: 'Lakehouse pipelines', skills: 'PySpark / Databricks / Delta Lake', text: 'Bronze, Silver, and Gold layers for analytical datasets.', evidence: 'cityflow-databricks', icon: Layers },
  { title: 'Clean, structured data', skills: 'Python / Pandas / ETL', text: 'Validation, missing values, duplicate removal, and type conversion.', evidence: 'imdb-data-etl', icon: Workflow },
  { title: 'Useful analytical outputs', skills: 'SQL / PostgreSQL / AWS S3', text: 'Data loading, business aggregations, and query result exports.', evidence: 'imdb-data-etl', icon: Database },
 ],
}
function ProjectVisual({ project }: { project: Project }) {
 const flows: Record<string, string[]> = {
  'supreme-app': ['Sales & stock', 'React portal', 'Typed API', 'Business data'],
  'cityflow-databricks': ['S3 / Raw', 'Bronze', 'Silver', 'Gold'],
  'imdb-data-etl': ['Movie data', 'Validate & clean', 'PostgreSQL', 'SQL / CSV'],
  'prime-finance': ['Fillout', 'Express API', 'HubSpot', 'MongoDB'],
  'asaan-karobar': ['Business tasks', 'Android / XML', 'ViewModel', 'Room'],
 }
 const labels = flows[project.id] || ['Interface', 'Application', 'Data']
 return <figure className={'project-visual visual-' + project.roles[0]}>
   <div className="visual-heading"><span className="eyebrow">{project.roles[0] === 'data' ? 'DATA FLOW' : 'SYSTEM OVERVIEW'}</span><project.icon size={22} /></div>
   <div className="flow-nodes">{labels.map((label, i) => <div className="flow-step" key={label}><div className="flow-node"><span className="flow-index">0{i + 1}</span>{project.roles[0] === 'data' ? <Database size={28} /> : i === 0 ? <Workflow size={28} /> : i === labels.length - 1 ? <Database size={28} /> : <Code2 size={28} />}<strong>{label}</strong></div>{i < labels.length - 1 && <ArrowRight className="flow-arrow" size={18} />}</div>)}</div>
   <div className="visual-details">{project.stack.slice(0, 3).map(item => <span key={item}>{item}</span>)}</div>
   <figcaption>Architecture overview / {project.title}</figcaption>
 </figure>
}
function ProjectDialog({ project, onClose }: { project: Project; onClose: () => void }) {
 const ref = useRef<HTMLDialogElement>(null)
 useEffect(() => { const dialog = ref.current; const previous = document.body.style.overflow; dialog?.showModal(); document.body.style.overflow = 'hidden'; return () => { dialog?.close(); document.body.style.overflow = previous } }, [])
 return <dialog ref={ref} className="project-dialog" aria-labelledby="project-title" onCancel={event => { event.preventDefault(); onClose() }} onClick={event => { if (event.target === event.currentTarget) { const bounds = event.currentTarget.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose() } }}>
  <button className="dialog-close" onClick={onClose} aria-label="Close project"><X size={22} /></button><span className="eyebrow">{project.category}</span><h2 id="project-title">{project.title}</h2><p>{project.summary}</p><ProjectVisual project={project} /><h3>Project details</h3><ul>{project.details.map(detail => <li key={detail}>{detail}</li>)}</ul><div className="tags">{project.stack.map(skill => <span key={skill}>{skill}</span>)}</div><div className="dialog-actions">{project.link ? <a className="button primary" href={project.link} target="_blank" rel="noreferrer">View source <Github size={16} /></a> : <span className="eyebrow">{project.sourceVisibility === 'private' ? 'Private source' : 'Source unavailable'}</span>}<button className="text-link" onClick={onClose}>Back to portfolio <ArrowRight size={16} /></button></div>
 </dialog>
}
function App() {
 const [role, setRole] = useState<Role>(readRole)
 const [selected, setSelected] = useState<Project | null>(null)
 const [mobileOpen, setMobileOpen] = useState(false)
 const profile = profiles[role]
 const resume = role === 'data' ? 'Ali_Ertaza_Data_Engineer_CV.pdf' : 'Ali_Ertaza.pdf'
 const visible = projects.filter(project => role === 'all' || project.roles.includes(role))
 const featured = features[role].map(id => visible.find(project => project.id === id)).filter((project): project is Project => Boolean(project))
 const remaining = visible.filter(project => !features[role].includes(project.id))
 const orgs = organizations.filter(org => role === 'all' || org.roles.includes(role))
 const capabilities = role === 'all' ? [capabilitySets.web[0], capabilitySets.android[0], capabilitySets.data[0]] : capabilitySets[role]
 const nav = [['Work', '#work'], ['Capabilities', '#capabilities'], ['About', '#about']]
 useEffect(() => { const onPop = () => { setRole(readRole()); setSelected(null); setMobileOpen(false) }; window.addEventListener('popstate', onPop); return () => window.removeEventListener('popstate', onPop) }, [])
 useEffect(() => { document.title = 'Ali Ertaza - ' + profile.title; document.querySelector('meta[name="description"]')?.setAttribute('content', 'Ali Ertaza - ' + profile.title + '. ' + profile.intro) }, [profile])
 function chooseRole(next: Role) { const url = new URL(window.location.href); if (next === 'all') url.searchParams.delete('role'); else url.searchParams.set('role', next); window.history.pushState({}, '', url); setRole(next); setSelected(null); setMobileOpen(false) }
 return <>
  <a className="skip-link" href="#main">Skip to content</a>
  <header className="header wrap"><a className="brand" href="#home"><img src="/portfolio-icon-transparent.png" width="42" height="42" alt="" /><span>Ali Ertaza<span className="brand-dot">.</span></span></a><nav className="desktop-nav" aria-label="Main navigation">{nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav><a className="header-resume" href={'/resumes/' + resume} target="_blank" rel="noreferrer"><Download size={16} /> Resume</a><button className="menu-button" aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={mobileOpen} aria-controls="mobile-nav" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X /> : <Menu />}</button></header>
  {mobileOpen && <nav id="mobile-nav" className="mobile-nav wrap" aria-label="Mobile navigation">{nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMobileOpen(false)}>{label}</a>)}<a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a></nav>}
  <main id="main"><div className="role-bar wrap"><span className="role-prompt">Explore my work</span><nav aria-label="Portfolio specialty">{(Object.keys(profiles) as Role[]).map(key => <a key={key} href={key === 'all' ? '?' : '?role=' + key} aria-current={role === key ? 'page' : undefined} onClick={event => { if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return; event.preventDefault(); chooseRole(key) }}>{profiles[key].label}</a>)}</nav></div>
  <section id="home" className="hero wrap"><div className="hero-copy"><div className="eyebrow">ALI ERTAZA / {profile.title.toUpperCase()}</div><h1>{profile.headline}<br /><span>{profile.accent}</span></h1><p>{profile.intro}</p><div className="hero-actions"><a className="button primary" href="#work">Explore my work <ArrowRight size={17} /></a><a className="button secondary" href={'/resumes/' + resume} download={resume}><Download size={17} />{role === 'data' ? 'Download data CV' : 'Download resume'}</a></div>{role === 'all' && <a className="alternate-resume text-link" href="/resumes/Ali_Ertaza_Data_Engineer_CV.pdf" download>Data engineering CV <ArrowUpRight size={14} /></a>}</div>
  <aside className="hero-system" aria-label="Technical focus"><div className="eyebrow">FROM IDEA TO IMPLEMENTATION</div>{(role === 'android' ? [['EXPERIENCE', 'Kotlin / XML'], ['STRUCTURE', 'MVVM'], ['PERSISTENCE', 'Room']] : role === 'data' ? [['INGEST', 'Python / AWS S3'], ['TRANSFORM', 'Pandas / PySpark'], ['ANALYZE', 'SQL / Delta Lake']] : role === 'all' ? [['WEB', 'React / TypeScript'], ['ANDROID', 'Kotlin / Room'], ['DATA', 'Spark / PostgreSQL']] : [['INTERFACES', 'React / TypeScript'], ['SERVICES', 'Node.js / Express'], ['DATA', 'PostgreSQL / MongoDB']]).map(([label, tools], index) => <div className="system-layer" key={label}><span className="system-number">0{index + 1}</span><div><span className="eyebrow">{label}</span><strong>{tools}</strong></div>{index === 2 ? <Database size={24} /> : index === 1 ? <Layers size={24} /> : <Code2 size={24} />}</div>)}<span className="system-caption">Practical tools. Connected thinking.</span></aside></section>
  <div className="hero-meta wrap"><span>Based in Pakistan</span><span>{profile.focus}</span><a href="mailto:aliertaza104@gmail.com">Available for a conversation <ArrowUpRight size={14} /></a></div>
  <section id="work" className="section wrap"><div className="section-heading"><div><span className="eyebrow">01 / PROJECTS</span><h2>Selected work<span className="accent">.</span></h2></div><p>Practical problems.<br />Working software.</p></div><div className="featured-list">{featured.map((project, i) => <article className="featured-project" key={project.id}><div className="project-copy"><span className="eyebrow">0{i + 1} / {project.category}</span><h3>{project.title}</h3><p>{project.summary}</p><div className="tags">{project.stack.slice(0, 5).map(item => <span key={item}>{item}</span>)}</div><div className="project-bottom"><span className="project-source">{project.sourceVisibility === 'private' ? 'Private source' : project.sourceVisibility === 'public' ? 'Public repository' : 'MVP project'}</span><button className="text-link" onClick={() => setSelected(project)}>Explore the project <ArrowUpRight size={17} /></button></div></div><button className="visual-button" aria-label={'Explore ' + project.title} onClick={() => setSelected(project)}><ProjectVisual project={project} /></button></article>)}</div>
  {remaining.length > 0 && <div className="more-work"><div className="more-heading"><h3>More from my work</h3><span className="eyebrow">{remaining.length} MORE PROJECTS</span></div>{remaining.map(project => <button className="project-row" key={project.id} onClick={() => setSelected(project)}><span className="row-icon"><project.icon size={21} /></span><span className="row-title">{project.title}<span>{project.category}</span></span><span className="row-stack">{project.stack.slice(0, 3).join(' / ')}</span><ArrowUpRight size={18} /></button>)}</div>}</section>
  <section id="capabilities" className="section capabilities-section"><div className="wrap"><div className="section-heading"><div><span className="eyebrow">02 / CAPABILITIES</span><h2>Skills, backed by work<span className="accent">.</span></h2></div><p>The tools I use.<br />The work they support.</p></div><div className="capability-grid">{capabilities.map(item => <article className="capability" key={item.title}><item.icon size={30} strokeWidth={1.5} /><h3>{item.title}</h3><strong>{item.skills}</strong><p>{item.text}</p><button className="evidence-link" onClick={() => setSelected(projects.find(project => project.id === item.evidence)!)}>See {projects.find(project => project.id === item.evidence)!.title}<ArrowUpRight size={14} /></button></article>)}</div></div></section>
  <section id="about" className="section wrap about-section"><div><span className="eyebrow">03 / ABOUT</span><h2>Ali Ertaza.<br /><span className="muted">Engineer. Builder.</span></h2><div className="about-social"><a href="https://github.com/Aliertaza104" target="_blank" rel="noreferrer"><Github size={18} />GitHub<ArrowUpRight size={14} /></a><a href="https://www.linkedin.com/in/ali-ertaza-846972270/" target="_blank" rel="noreferrer"><Linkedin size={18} />LinkedIn<ArrowUpRight size={14} /></a></div></div><div className="about-copy"><p>I am a Software Engineering graduate from COMSATS University Islamabad, Sahiwal Campus. I enjoy turning real workflows into useful software and understanding the systems behind them.</p><p>{profile.about}</p><div className="education"><span className="eyebrow">EDUCATION / 2026</span><strong>BS Software Engineering</strong><span>COMSATS University Islamabad / Sahiwal Campus</span></div></div></section>
  {orgs.length > 0 && <section id="organizations" className="organization-section wrap"><div className="section-heading"><div><span className="eyebrow">ORGANIZATIONS</span><h2>Building together<span className="accent">.</span></h2></div><p>Teams and organizations<br />I am part of.</p></div><div className="organization-grid">{orgs.map(org => <article key={org.id}><span className="org-initials" aria-hidden="true">{org.name.split(' ').map(word => word[0]).slice(0, 2).join('')}</span><h3>{org.name}</h3><p>{org.description}</p><div className="org-projects">{org.projectIds.map(id => <button key={id} onClick={() => setSelected(projects.find(project => project.id === id)!)}>{projects.find(project => project.id === id)!.title}<ArrowUpRight size={13} /></button>)}</div>{org.login && <a className="text-link" href={'https://github.com/' + org.login} target="_blank" rel="noreferrer">View organization<ArrowUpRight size={14} /></a>}</article>)}</div></section>}
  <section id="contact" className="contact wrap"><div><span className="eyebrow">LET'S TALK</span><h2>Have a problem<br />worth solving?</h2><p>For a project, a role, or a conversation about {role === 'all' ? 'software engineering' : profile.label.toLowerCase()}.</p></div><a className="contact-email" href="mailto:aliertaza104@gmail.com?subject=Let%27s%20connect">aliertaza104@gmail.com<ArrowUpRight size={26} /></a></section></main>
  <footer className="footer wrap"><span>Ali Ertaza / {new Date().getFullYear()}</span><span>Built with React & TypeScript</span><a href="#home">Back to top <ArrowUpRight size={14} /></a></footer>
  <a className="whatsapp-contact" href="https://wa.me/923198239211" target="_blank" rel="noopener noreferrer" aria-label="Chat with Ali Ertaza on WhatsApp at +92 319 8239211" title="Chat on WhatsApp">
    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/><path d="M8.2 6.8c-.3-.6-.6-.6-.9-.6h-.6c-.3 0-.7.1-1 .5-.4.4-1.2 1.1-1.2 2.7s1.2 3.1 1.4 3.3c.2.2 2.3 3.6 5.7 4.9 2.8 1.1 3.4.9 4 .8.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.3.2-1.5-.1-.1-.3-.2-.7-.4l-2.2-1c-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.3-.7.1-.4-.2-1.5-.6-2.8-1.8-1-1-1.7-2.1-1.9-2.5-.2-.3 0-.5.2-.7l.5-.6.3-.5c.1-.2.1-.4 0-.6l-.8-1.9Z" fill="currentColor" transform="translate(1 0) scale(.9)"/></svg>
    <span>WhatsApp</span>
  </a>
  {selected && <ProjectDialog key={selected.id} project={selected} onClose={() => setSelected(null)} />}
 </>
}
export default App
