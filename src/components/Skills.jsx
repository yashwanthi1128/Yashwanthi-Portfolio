import { useEffect, useRef } from 'react'

const SKILLS = [
  'JavaScript','HTML','CSS','React.js','Vite','Node.js',
  'Express.js','MongoDB','Firebase','Git','GitHub',
  'REST API','VS Code','Thunder Client','Android Studio',
  'Responsive Design','Render','JWT Auth','Kotlin',
]

export default function Skills() {
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { ref.current.classList.add('visible'); obs.disconnect() }
    }, { threshold: 0.1 })
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills">
      <div className="section-wrap">
        <p className="section-label">What I work with</p>
        <h2 className="section-title">Technical Skills</h2>
        <div className="green-line"></div>
        <div ref={ref} className="fade-in" style={{
          display:'flex', flexWrap:'wrap', gap:'12px',
        }}>
          {SKILLS.map(skill => (
            <div key={skill}
                 style={{
                   padding:'10px 20px',
                   border:'1px solid rgba(100,255,218,0.2)',
                   background:'#1e1743',
                   borderRadius:'10px',
                   color:'var(--slate-light)',
                   fontSize:'0.88rem', fontWeight:500,
                   transition:'all 0.3s', cursor:'default',
                 }}
                 onMouseEnter={e => {
                   e.currentTarget.style.transform = 'translateY(-4px)'
                   e.currentTarget.style.borderColor = 'var(--green)'
                   e.currentTarget.style.color = 'var(--green)'
                   e.currentTarget.style.boxShadow = '0 8px 20px rgba(100,255,218,0.1)'
                 }}
                 onMouseLeave={e => {
                   e.currentTarget.style.transform = 'translateY(0)'
                   e.currentTarget.style.borderColor = 'rgba(100,255,218,0.2)'
                   e.currentTarget.style.color = 'var(--slate-light)'
                   e.currentTarget.style.boxShadow = 'none'
                 }}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}