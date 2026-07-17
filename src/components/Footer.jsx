export default function Footer() {
  return (
    <footer style={{
      background:'#220014 linear-gradient(380deg, rgb(56, 7, 34) 0%, rgb(57, 25, 44) 100%)',
      borderTop:'1px solid rgba(255, 216, 100, 0.08)',
      padding:'60px 40px 30px',
      width:'100%', boxSizing:'border-box',
    }}>
      <div style={{maxWidth:'1100px', margin:'0 auto'}}>
      <div
  className="footer-grid"
  style={{
    marginBottom: "48px",
  }}
>
          {/* BRAND */}
          <div>
            <div style={{
              color:'var(--grey)', fontSize:'2rem',
              fontWeight:700, letterSpacing:'2px',
              fontFamily:'var(--font-mono)', marginBottom:'12px',
            }}>YP</div>
            <p style={{color:'var(--text)', fontSize:'0.82rem', lineHeight:1.7, maxWidth:'200px'}}>
              Building things for the web & mobile.
            </p>
          </div>
          {/* QUICK LINKS */}
          <div>
            <p style={{color:'var(--grey)', fontSize:'0.75rem', fontWeight:700,
                       letterSpacing:'2px', textTransform:'uppercase', marginBottom:'16px'}}>
              Quick Links
            </p>
            <ul style={{listStyle:'none', display:'flex', flexDirection:'column', gap:'10px'}}>
              {['about','skills','projects','internship','contact'].map(item => (
                <li key={item}>
                  <a href={`#${item}`} style={{
                    color:'var(--text)', textDecoration:'none',
                    fontSize:'0.85rem', transition:'all 0.3s',
                  }}
                  onMouseEnter={e => { e.target.style.color = 'var(--grey)'; e.target.style.paddingLeft = '6px' }}
                  onMouseLeave={e => { e.target.style.color = 'var(--text)';       e.target.style.paddingLeft = '0' }}>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* CONTACT */}
          <div>
            <p style={{color:'var(--grey)', fontSize:'0.75rem', fontWeight:700,
                       letterSpacing:'2px', textTransform:'uppercase', marginBottom:'16px'}}>
              Contact
            </p>
            <ul style={{listStyle:'none', display:'flex', flexDirection:'column', gap:'10px'}}>
              {[
                { icon:'fa-solid fa-envelope',    text:'yashwanthi1128@gmail.com', href:'mailto:yashwanthi1128@gmail.com' },
                { icon:'fa-solid fa-phone',        text:'+91 8088125846',           href:'tel:+918088125846'               },
                { icon:'fa-solid fa-location-dot', text:'Bengaluru, Karnataka',     href: null                            },
              ].map(c => (
                <li key={c.text} style={{display:'flex', alignItems:'center', gap:'10px', color:'var(--text)', fontSize:'0.82rem'}}>
                  <i className={c.icon} style={{color:'var(--grey)', width:'14px'}}></i>
                  {c.href
                    ? <a href={c.href} style={{color:'var(--text)', textDecoration:'none', transition:'color 0.3s'}}
                         onMouseEnter={e => e.target.style.color = 'var(--grey)'}
                         onMouseLeave={e => e.target.style.color = 'var(--text)'}>{c.text}</a>
                    : <span>{c.text}</span>
                  }
                </li>
              ))}
            </ul>
          </div>
          {/* SOCIALS */}
          <div>
            <p style={{color:'var(--grey)', fontSize:'0.75rem', fontWeight:700,
                       letterSpacing:'2px', textTransform:'uppercase', marginBottom:'16px'}}>
              Find Me On
            </p>
            <div
            className="footer-socials"
            style={{
            display: "flex",
            gap: "12px",
            marginBottom: "24px",
            }}>
              {[
                { icon:'fa-brands fa-github',      href:'https://github.com/yashwanthi1128',            title:'GitHub'   },
                { icon:'fa-brands fa-linkedin-in',  href:'https://linkedin.com/in/yashwanthipasupuleti', title:'LinkedIn' },
                { icon:'fa-solid fa-envelope',      href:'mailto:yashwanthi1128@gmail.com',              title:'Email'    },
              ].map(s => (
                <a key={s.title} href={s.href} target="_blank" rel="noreferrer" title={s.title}
                   style={{
                     width:'38px', height:'38px',
                     border:'1px solid rgba(255, 214, 100, 0.15)',
                     borderRadius:'8px', display:'flex',
                     alignItems:'center', justifyContent:'center',
                     color:'var(--text)', textDecoration:'none',
                     fontSize:'0.95rem', transition:'all 0.3s',
                     background:'rgb(44, 10, 38)',
                   }}
                   onMouseEnter={e => {
                     e.currentTarget.style.color = 'var(--grey)'
                     e.currentTarget.style.borderColor = 'var(--grey)'
                     e.currentTarget.style.transform = 'translateY(-3px)'
                   }}
                   onMouseLeave={e => {
                     e.currentTarget.style.color = 'var(--text)'
                     e.currentTarget.style.borderColor = 'rgba(255, 214, 100, 0.15)'
                     e.currentTarget.style.transform = 'translateY(0)'
                   }}>
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
            <a href="#hero" style={{
              display:'inline-flex', alignItems:'center', gap:'8px',
              color:'var(--text)', textDecoration:'none', fontSize:'0.78rem',
              border:'1px solid rgba(255, 214, 100, 0.15)', padding:'7px 14px',
              borderRadius:'20px', transition:'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--grey)'; e.currentTarget.style.borderColor = 'var(--grey)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--text)';       e.currentTarget.style.borderColor = 'rgba(255, 214, 100, 0.15)' }}>
              <i className="fa-solid fa-arrow-up"></i> Back to top
            </a>
          </div>
        </div>

        {/* DIVIDER */}
        <div style={{
          height:'1px',
          background:'linear-gradient(90deg, transparent, rgba(255, 214, 100, 0.15), transparent)',
          marginBottom:'28px',
        }}/>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <p style={{fontSize:'0.78rem', color:'var(--text)'}}>
            © 2026 <span style={{color:'var(--grey)'}}>Yashwanthi P</span> · All rights reserved.
          </p>
          <p style={{fontSize:'0.78rem', color:'var(--text)'}}>
            Designed & Built with <span style={{color:'#e94560'}}>♥</span> in Bengaluru, India
          </p>
          <p style={{fontSize:'0.72rem', color:'var(--text)', fontFamily:'var(--font-mono)'}}>
            React · Node.js · MongoDB · Express
          </p>
        </div>
      </div>
    </footer>
  )
}