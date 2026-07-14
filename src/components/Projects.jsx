import { useEffect, useRef } from 'react'

const PROJECTS = [
  {
    num: '01',
    tag: 'DevSync',
    title: 'Developers Collaboration Platform',
    desc: 'Architected DevSync ~ a production-ready MERN Stack developer collaboration platform with dual role-based access control. Admins manage full project lifecycle (create, assign, track) while collaborators browse, apply, and manage assigned tasks, all secured via JWT authentication with protected REST API routes. Built 10+ API endpoints with full CRUD, deployed live on Render with automated GitHub CI/CD.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'REST API', 'Render', 'GitHub CI/CD'],
    github: 'https://github.com/yashwanthi1128/DevSync',
    live: 'https://devsync-my-frontend.onrender.com/',
  },
  {
  num: '02',
  tag: 'Grama Urja',
  title: 'Android App Development using Generative AI',
  desc: 'Built Grama Urja ~ a Kotlin-based Android app developed during my internship at MindMatrix, enabling community-driven real-time power monitoring for rural villages. Integrated Firebase Realtime Database to deliver electricity status updates within 2 seconds, with multi-screen navigation and live data synchronization across multiple users. Leveraged Generative AI tools during development to accelerate coding and improve implementation quality.',
  tech: ['Kotlin', 'Firebase Realtime DB', 'Android Studio', 'XML', 'Gen AI', 'Multi-screen Nav'],
  github: 'https://github.com/yashwanthi1128/GramaUrja-App',
  live: null,
  },
  {
    num:'03', tag:'Portfolio', title:'Portfolio Website',
    desc:'Designed and shipped a production grade full-stack portfolio using React.js + Vite (frontend), Node.js + Express.js (backend), and MongoDB Atlas (database), connecting 5+ sections, live projects, and a functional contact form into a single deployable product. Reduced build size by 40% using Vite over CRA, with automated deployment on Render via GitHub push hooks',
    tech: ['React.js','Vite','Node.js','Express.js','MongoDB','REST API','GitHub CI/CD','Render'],
    github:'https://github.com/yashwanthi1128/Yashwanthi-Portfolio/',
    live:'https://yashwanthi-portfolio-isat.onrender.com/',
  },
  {
     num: '04',
    tag: 'Web Interface',
    title: 'Secure Blockchain-Based Protocol for CCN',
    desc: 'Contributed front-end development to a final-year group research project ~ designing responsive HTML/CSS interfaces for a blockchain-based credential verification system using Ethereum smart contracts. Research published and presented at IEEE ICBDS 2025 International Conference.',
    tech: ['HTML', 'CSS', 'Responsive UI/UX', 'Ethereum', 'IEEE Research'],
    github: null,
    live: null,
  },
]

export default function Projects() {
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { ref.current.classList.add('visible'); obs.disconnect() }
    }, { threshold: 0.05 })
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="projects">
      <div className="section-wrap">
        <p className="section-label">What I've built</p>
        <h2 className="section-title">Projects</h2>
        <div className="green-line"></div>
        <div
  ref={ref}
  className="fade-in projects-grid"
  style={{
    display: "grid",
    gap: "2rem"
  }}
>
          {PROJECTS.map(p => (
            <div key={p.num}
                 style={{
                   background:'#1e1743',
                   border:'1px solid rgba(100,255,218,0.12)',
                   borderRadius:'12px', padding:'1.8rem',
                   position:'relative', overflow:'hidden',
                   transition:'transform 0.3s, border-color 0.3s, box-shadow 0.3s',
                   display:'flex', flexDirection:'column',
                 }}
                 onMouseEnter={e => {
                   e.currentTarget.style.transform = 'scale(1.02)'
                   e.currentTarget.style.borderColor = 'var(--green)'
                   e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)'
                 }}
                 onMouseLeave={e => {
                   e.currentTarget.style.transform = 'scale(1)'
                   e.currentTarget.style.borderColor = 'rgba(100,255,218,0.12)'
                   e.currentTarget.style.boxShadow = 'none'
                 }}>
              {/* number */}
              <div style={{
                position:'absolute', top:'1rem', right:'1.5rem',
                fontSize:'2.5rem', fontWeight:700,
                color:'rgba(100,255,218,0.06)',
                fontFamily:'var(--font-mono)',
              }}>{p.num}</div>
              {/* tag */}
              <span style={{
                background:'rgba(100,255,218,0.06)',
                color:'var(--green)', fontSize:'0.72rem',
                padding:'3px 12px', borderRadius:'20px',
                display:'inline-block', marginBottom:'0.75rem',
                border:'1px solid rgba(100,255,218,0.15)',
                width:'fit-content', fontFamily:'var(--font-mono)',
              }}>{p.tag}</span>
              {/* title */}
              <h3 style={{
                color:'var(--white)', fontSize:'1rem',
                marginBottom:'0.75rem', lineHeight:1.4, fontWeight:600,
              }}>{p.title}</h3>
              {/* desc */}
              <p style={{
                fontSize:'0.88rem', lineHeight:1.7,
                textAlign:'justify', flex:1, marginBottom:'1rem',
              }}>{p.desc}</p>
              {/* tech chips */}
              <div style={{display:'flex', flexWrap:'wrap', gap:'6px', marginBottom:'1rem'}}>
                {p.tech.map(t => (
                  <span key={t} style={{
                    background:'rgba(10,5,30,0.8)',
                    color:'#7ab3e0', fontSize:'0.7rem',
                    padding:'3px 10px', borderRadius:'4px',
                    border:'1px solid rgba(30,58,95,0.8)',
                    fontFamily:'var(--font-mono)',
                  }}>{t}</span>
                ))}
              </div>
              {/* links */}
              <div style={{
                display:'flex', gap:'10px',
                paddingTop:'1rem',
                borderTop:'1px solid rgba(100,255,218,0.07)',
              }}>
                <a href={p.github} target="_blank" rel="noreferrer"
                   title="View on GitHub"
                   style={{
                     width:'34px', height:'34px',
                     display:'inline-flex', alignItems:'center', justifyContent:'center',
                     borderRadius:'8px',
                     border:'1px solid rgba(100,255,218,0.15)',
                     color:'var(--slate)', textDecoration:'none',
                     fontSize:'0.95rem', transition:'all 0.3s',
                   }}
                   onMouseEnter={e => {
                     e.currentTarget.style.color = '#fff'
                     e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'
                     e.currentTarget.style.transform = 'translateY(-3px)'
                   }}
                   onMouseLeave={e => {
                     e.currentTarget.style.color = 'var(--slate)'
                     e.currentTarget.style.borderColor = 'rgba(100,255,218,0.15)'
                     e.currentTarget.style.transform = 'translateY(0)'
                   }}>
                  <i className="fa-brands fa-github"></i>
                </a>
                {p.live ? (
                  <a href={p.live} target="_blank" rel="noreferrer"
                     title="Live Demo"
                     style={{
                       width:'34px', height:'34px',
                       display:'inline-flex', alignItems:'center', justifyContent:'center',
                       borderRadius:'8px',
                       border:'1px solid rgba(100,255,218,0.25)',
                       color:'var(--green)', textDecoration:'none',
                       fontSize:'0.95rem', transition:'all 0.3s',
                     }}
                     onMouseEnter={e => {
                       e.currentTarget.style.background = 'var(--green)'
                       e.currentTarget.style.color = 'var(--navy)'
                       e.currentTarget.style.transform = 'translateY(-3px)'
                     }}
                     onMouseLeave={e => {
                       e.currentTarget.style.background = 'transparent'
                       e.currentTarget.style.color = 'var(--green)'
                       e.currentTarget.style.transform = 'translateY(0)'
                     }}>
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                ) : (
                  <span style={{
                    width:'34px', height:'34px',
                    display:'inline-flex', alignItems:'center', justifyContent:'center',
                    borderRadius:'8px',
                    border:'1px solid rgba(100,255,218,0.08)',
                    color:'var(--slate)', fontSize:'0.95rem',
                    opacity:0.25, cursor:'not-allowed',
                  }}>
                    <i className="fa-solid fa-mobile-screen"></i>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}