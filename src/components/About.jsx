import { useEffect, useRef } from 'react'

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { ref.current.classList.add('visible'); obs.disconnect() }
    }, { threshold: 0.1 })
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about">
      <div className="section-wrap">
        <p className="section-label">Get to know me</p>
        <h2 className="section-title">About Me</h2>
        <div className="grey-line"></div>
        <div
  ref={ref}
  className="fade-in about-grid"
>
          <div>
  <p style={{lineHeight:1.9, marginBottom:'1rem', fontSize:'0.95rem', textAlign:'justify'}}>
    I'm an <span className="about-highlight">Information Science graduate</span> from
    Cambridge Institute of Technology, Bengaluru ~ passionate about
    building things that actually work. I write clean, scalable code and turn
    ideas into fully deployed, real-world applications.
  </p>
  <p style={{lineHeight:1.9, marginBottom:'0.5rem', fontSize:'0.95rem', textAlign:'justify'}}>
    I work across the <span className="about-highlight">MERN stack</span> ~ React.js,
    Node.js, Express.js, and MongoDB, building secure backends with JWT authentication
    and RESTful APIs alongside clean, responsive frontends. I also develop{' '}
    <span className="about-highlight">Android applications</span> using Kotlin and
    Firebase, and have experience with Git, GitHub, and deploying applications on
    cloud platforms.
  </p>
</div>
          <div className="about-stats">
            {[
              { num:'4',    label:'Projects Built'   },
              { num:'7.48', label:'CGPA'             },
              { num:'4',    label:'Certifications'   },
              { num:'1',    label:'IEEE Publication' },
            ].map(s => (
              <div key={s.label} style={{
                background:'var(--purple-mid)',
                border:'1px solid var(--grey-light)',
                borderRadius:'10px', padding:'1.5rem',
                textAlign:'center',
                transition:'border-color 0.3s, transform 0.3s',
                cursor:'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--grey)'
                e.currentTarget.style.transform = 'scale(1.05)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--grey-light)'
                e.currentTarget.style.transform = 'scale(1)'
              }}>
                <div style={{fontSize:'2.2rem', color:'var(--grey)', fontWeight:700}}>{s.num}</div>
                <div style={{fontSize:'0.78rem', color:'var(--text)', marginTop:'4px'}}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}