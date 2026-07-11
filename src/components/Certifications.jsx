const CERTS = [
  { icon:'', name:'Android App Development using Generative AI', org:'MindMatrix',           date:'May 2026'      },
  { icon:'', name:'Introduction to MERN Stack',                  org:'Simplilearn ~ SkillUp', date:'April 2025'    },
  { icon:'', name:'Programming using Java',                      org:'Infosys Springboard',   date:'January 2024'  },
  { icon:'', name:'Salesforce Agentblazer Championship',         org:'Salesforce',            date:'February 2026' },
]

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="section-wrap">
        <p className="section-label">Credentials</p>
        <h2 className="section-title">Certifications</h2>
        <div className="green-line"></div>
        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fit, minmax(240px,1fr))',
          gap:'1.5rem',
        }}>
          {CERTS.map(c => (
            <div key={c.name}
                 style={{
                   background:'#1e1743',
                   border:'1px solid rgba(100,255,218,0.12)',
                   borderRadius:'10px', padding:'1.5rem',
                   transition:'border-color 0.3s, transform 0.3s',
                 }}
                 onMouseEnter={e => {
                   e.currentTarget.style.borderColor = 'var(--green)'
                   e.currentTarget.style.transform = 'translateY(-6px)'
                 }}
                 onMouseLeave={e => {
                   e.currentTarget.style.borderColor = 'rgba(100,255,218,0.12)'
                   e.currentTarget.style.transform = 'translateY(0)'
                 }}>
              <div style={{fontSize:'2rem', marginBottom:'0.75rem'}}>{c.icon}</div>
              <div style={{color:'var(--white)', fontSize:'0.9rem', fontWeight:600, marginBottom:'4px', lineHeight:1.4}}>{c.name}</div>
              <div style={{color:'#7ab3e0', fontSize:'0.8rem', marginBottom:'4px'}}>{c.org}</div>
              <div style={{color:'var(--green)', fontSize:'0.75rem', fontFamily:'var(--font-mono)'}}>{c.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}