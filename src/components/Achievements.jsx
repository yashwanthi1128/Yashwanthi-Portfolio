const ACHIEVEMENTS = [
  'Co-Author at IEEE ICBDS 2025 for research on A Secure Blockchain-Based Protocol for Content Centric Networks.',
  'Certified in Salesforce Agentblazer Championship 2026 through Salesforce.',
]

export default function Achievements() {
  return (
    <section id="achievements" >
      <div className="section-wrap">
        <p className="section-label">Recognition</p>
        <h2 className="section-title">Achievements</h2>
        <div className="green-line"></div>
        <ul style={{listStyle:'none', display:'flex', flexDirection:'column', gap:'1rem'}}>
          {ACHIEVEMENTS.map((a, i) => (
            <li key={i}
                style={{
                  display:'flex', alignItems:'flex-start', gap:'1rem',
                  padding:'1.2rem 1.5rem',
                  background:'#1e1743',
                  border:'1px solid rgba(100,255,218,0.12)',
                  borderRadius:'12px',
                  transition:'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
                  cursor:'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.borderColor = 'var(--green)'
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.3)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'rgba(100,255,218,0.12)'
                  e.currentTarget.style.boxShadow = 'none'
                }}>
              <span style={{color:'var(--green)', fontSize:'1.2rem', flexShrink:0}}></span>
              <span style={{fontSize:'0.92rem', lineHeight:1.7}}>{a}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}