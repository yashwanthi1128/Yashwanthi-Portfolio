import { useEffect, useRef } from 'react'

const PROJECTS = [
  {
    num: '01',
    tag: 'DevSync',
    title: 'Developers Collaboration Platform',
    desc: 'Architected DevSync ~ a production-ready MERN Stack developer collaboration platform with dual role-based access control. Admins manage full project lifecycle (create, assign, track) while collaborators browse, apply, and manage assigned tasks, all secured via JWT authentication with protected REST API routes. Built 10+ API endpoints with full CRUD, deployed live on Render with automated GitHub CI/CD.',
  
    github: 'https://github.com/yashwanthi1128/DevSync',
    live: 'https://devsync-my-frontend.onrender.com/',
  },
  {
  num: '02',
  tag: 'Grama Urja',
  title: 'Android App Development using Generative AI',
  desc: 'Built Grama Urja ~ a Kotlin-based Android app developed during my internship at MindMatrix, enabling community-driven real-time power monitoring for rural villages. Integrated Firebase Realtime Database to deliver electricity status updates within 2 seconds, with multi-screen navigation and live data synchronization across multiple users. Leveraged Generative AI tools during development to accelerate coding and improve implementation quality.',

  github: 'https://github.com/yashwanthi1128/GramaUrja-App',
  live: null,
  },
  {
    num:'03', tag:'Portfolio', title:'Portfolio Website',
    desc:'Designed and shipped a production grade full-stack portfolio using React.js + Vite (frontend), Node.js + Express.js (backend), and MongoDB Atlas (database), connecting 5+ sections, live projects, and a functional contact form into a single deployable product. Reduced build size by 40% using Vite over CRA, with automated deployment on Render via GitHub push hooks',
  
    github:'https://github.com/yashwanthi1128/Yashwanthi-Portfolio/',
    live:'https://yashwanthi-portfolio-isat.onrender.com/',
  },
  {
     num: '04',
    tag: 'Web Interface',
    title: 'Secure Blockchain-Based Protocol for CCN',
    desc: 'Contributed front-end development to a final-year group research project ~ designing responsive HTML/CSS interfaces for a blockchain-based credential verification system using Ethereum smart contracts. Research published and presented at IEEE ICBDS 2025 International Conference.',
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
        <div className="grey-line"></div>
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
                   background:'var(--purple-mid)',
                   frontSize:'0.9rem', color:'var(--slate-light)',
                   border:'1px solid var(--purple-mid)',
                   borderRadius:'18px', padding:'1.0rem',
                   position:'relative', overflow:'hidden',
                   transition:'transform 0.3s, border-color 0.3s, box-shadow 0.3s',
                   display:'flex', flexDirection:'column',
                 }}
                 onMouseEnter={e => {
                   e.currentTarget.style.transform = 'scale(1.02)'
                   e.currentTarget.style.borderColor = 'var(--grey)'
                   e.currentTarget.style.boxShadow = '0 20px 40px var(--pink-light)'
                   
                 }}
                 onMouseLeave={e => {
                   e.currentTarget.style.transform = 'scale(1)'
                   e.currentTarget.style.borderColor = 'var(--purple-mid)'
                   e.currentTarget.style.background='var(--purple-mid)'

                   e.currentTarget.style.boxShadow = 'none'
                 }}>
              {/* number */}
              <div style={{
                position:'absolute', top:'1rem', right:'1.5rem',
                fontSize:'2.5rem', fontWeight:700,
                color:'rgba(255, 206, 100, 0.06)',
                fontFamily:'var(--font-mono)',
              }}>{p.num}</div>
              {/* tag */}
              <span style={{
                background:'rgba(255, 227, 100, 0.06)',
                color:'var(--grey)', fontSize:'0.72rem',
                padding:'3px 12px', borderRadius:'20px',
                display:'inline-block', marginBottom:'0.75rem',
                border:'1px solid rgba(255, 208, 100, 0.15)',
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
              
              {/* links */}
              <div style={{
                display:'flex', gap:'10px',
                paddingTop:'1rem',
                borderTop:'1px solid rgba(255, 201, 100, 0.07)',
              }}>
                <a href={p.github} target="_blank" rel="noreferrer"
                   title="View on GitHub"
                   style={{
                     width:'34px', height:'34px',
                     display:'inline-flex', alignItems:'center', justifyContent:'center',
                     borderRadius:'8px',
                     border:'1px solid  rgba(233, 202, 109, 0.64)',
                     color:'var(--slate)', textDecoration:'none',
                     fontSize:'0.95rem', transition:'all 0.3s',
                   }}
                   onMouseEnter={e => {
                     e.currentTarget.style.color = 'var(--grey)'
                     e.currentTarget.style.borderColor = 'rgba(246, 205, 115, 0.6)'
                     e.currentTarget.style.transform = 'translateY(-3px)'
                   }}
                   onMouseLeave={e => {
                     e.currentTarget.style.color = 'var(--slate)'
                     e.currentTarget.style.borderColor = 'rgba(246, 205, 115, 0.6)'
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
                       border:'1px solid rgba(246, 205, 115, 0.6)',
                       color:'var(--grey)', textDecoration:'none',
                       fontSize:'0.95rem', transition:'all 0.3s',
                     }}
                     onMouseEnter={e => {
                       e.currentTarget.style.background = 'var(--grey)'
                       e.currentTarget.style.color = 'var(--pink-light)'
                       e.currentTarget.style.transform = 'translateY(-3px)'
                     }}
                     onMouseLeave={e => {
                       e.currentTarget.style.background = 'transparent'
                       e.currentTarget.style.color = 'var(--grey)'
                       e.currentTarget.style.transform = 'translateY(0)'
                     }}>
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                ) : (
                  <span style={{
                    width:'34px', height:'34px',
                    display:'inline-flex', alignItems:'center', justifyContent:'center',
                    borderRadius:'8px',
                    border:'1px solid rgba(255, 201, 100, 0.08)',
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