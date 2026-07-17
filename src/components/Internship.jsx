export default function Internship() {
  return (
    <section id="internship" >
      <div className="section-wrap">
        <p className="section-label">Where I've worked</p>
        <h2 className="section-title">Internship Experience</h2>
        <div className="grey-line"></div>
        <div style={{position:'relative', paddingLeft:'2rem'}}>
          {/* timeline line */}
          <div style={{
            position:'absolute', left:'6px', top:0, bottom:0,
            width:'1px',
            background:'linear-gradient(180deg, var(--grey), transparent)',
          }}/>
          {/* timeline item */}
          <div style={{position:'relative', marginBottom:'3rem'}}>
            <div style={{
              position:'absolute', left:'-1.85rem', top:'4px',
              width:'10px', height:'10px',
              background:'var(--grey)', borderRadius:'50%',
              boxShadow:'0 0 0 4px rgba(255, 211, 100, 0.15)',
            }}/>
            <div style={{
              color:'#f090c8', fontSize:'0.78rem',
              fontWeight:600, letterSpacing:'1px',
              marginBottom:'4px', fontFamily:'var(--font-mono)',
            }}>
              FEBRUARY 2026 – MAY 2026
            </div>
            <div style={{
              color:'var(--white)', fontSize:'1.05rem',
              fontWeight:600, marginBottom:'2px',
            }}>
              Android App Development using Generative AI
            </div>
            <div style={{color:'#f090c8', fontSize:'0.85rem', marginBottom:'0.75rem'}}>
              MindMatrix ~ CL Infotech Pvt.Ltd, Bengaluru
            </div>
            <div style={{fontSize:'0.88rem', lineHeight:1.8, textAlign:'justify'}}>
  Developed <span className="about-highlight"><strong>Grama Urja</strong></span>,
  a Kotlin-based Android application for community-driven real-time electricity
  monitoring across rural villages. Integrated{' '}
  <span className="about-highlight">Firebase Realtime Database</span> to deliver
  live power status updates within <span className="about-highlight">2 seconds</span>{' '}
  of a report, with instant data synchronization across multiple concurrent users
  from geographically distributed locations. Designed{' '}
  <span className="about-highlight">2+ multi-screen navigation flows</span> using
  Android Studio with XML layouts, ensuring an intuitive UI for non-technical
  rural users to report and track outages in under 3 taps. Leveraged{' '}
  <span className="about-highlight">Generative AI tools</span> to accelerate
  development cycles and improve overall implementation quality.
</div>
          </div>
        </div>
      </div>
    </section>
  )
}