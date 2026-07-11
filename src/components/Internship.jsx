export default function Internship() {
  return (
    <section id="internship" >
      <div className="section-wrap">
        <p className="section-label">Where I've worked</p>
        <h2 className="section-title">Internship Experience</h2>
        <div className="green-line"></div>
        <div style={{position:'relative', paddingLeft:'2rem'}}>
          {/* timeline line */}
          <div style={{
            position:'absolute', left:'6px', top:0, bottom:0,
            width:'1px',
            background:'linear-gradient(180deg, var(--green), transparent)',
          }}/>
          {/* timeline item */}
          <div style={{position:'relative', marginBottom:'3rem'}}>
            <div style={{
              position:'absolute', left:'-1.85rem', top:'4px',
              width:'10px', height:'10px',
              background:'var(--green)', borderRadius:'50%',
              boxShadow:'0 0 0 4px rgba(100,255,218,0.15)',
            }}/>
            <div style={{
              color:'var(--green)', fontSize:'0.78rem',
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
            <div style={{color:'#7ab3e0', fontSize:'0.85rem', marginBottom:'0.75rem'}}>
              MindMatrix ~ CL Infotech Pvt.Ltd, Bengaluru
            </div>
            <div style={{fontSize:'0.88rem', lineHeight:1.8, textAlign:'justify'}}>
              Developed <span className="about-highlight"><strong>Grama Urja</strong></span>,  a Kotlin-based Android application that enables community-driven monitoring of electricity availability across rural areas. Integrated Firebase Realtime Database to provide real-time power status reporting and instant synchronization among users from different villages. Designed an intuitive mobile interface for seamless outage reporting and status tracking, improving accessibility and user participation. The platform promotes transparency and faster community awareness during power disruptions through reliable, location-based power monitoring.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}