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
        <div className="grey-line"></div>
        <ul
  className="achievement-list"
  style={{
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  }}
>
          {ACHIEVEMENTS.map((a, i) => (
            <li key={i}
                style={{
                  display:'flex', alignItems:'flex-start', gap:'1rem',
                  padding:'1.2rem 1.5rem',
                  background:'var(--purple-mid)',
                  border:'1px solid rgba(255, 216, 100, 0.12)',
                  borderRadius:'12px',
                  transition:'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
                  cursor:'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.borderColor = 'var(--grey)'
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.3)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'rgba(255, 216, 100, 0.12)'
                  e.currentTarget.style.boxShadow = 'none'
                }}>
              <span style={{color:'var(--grey)', fontSize:'1.2rem', flexShrink:0}}></span>
              <span style={{fontSize:'0.92rem', lineHeight:1.7}}>{a}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}