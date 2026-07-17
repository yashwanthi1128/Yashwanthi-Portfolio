import { useState, useEffect } from 'react'

const NAV_ITEMS = ['about','skills','projects','internship','certifications','achievements','contact']

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled,  setScrolled]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%',
      background: 'var(--purple-mid)',
      backdropFilter: 'blur(12px)',
      padding: '1rem 2rem',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      zIndex: 1000,
      borderBottom: '1px solid rgba(255, 193, 100, 0.08)',
      boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.4)' : 'none',
      transition: 'box-shadow 0.3s',
    }}>
      {/* LOGO */}
      <div style={{
        color: 'var(--grey)', fontWeight: 700,
        fontSize: '1.4rem', letterSpacing: '1px',
        fontFamily: 'var(--font-mono)'
      }}>
        YP
      </div>

      {/* NAV LINKS — desktop */}
      <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}
           className="nav-desktop">
        {NAV_ITEMS.map(item => (
          <a key={item} href={`#${item}`}
             style={{
               color: 'var(--text)', textDecoration: 'none',
               fontSize: '0.82rem', letterSpacing: '0.5px',
               padding: '6px 10px', borderRadius: '4px',
               transition: 'color 0.3s',
               fontFamily: 'var(--font-mono)',
             }}
             onMouseEnter={e => e.target.style.color = 'var(--grey)'}
             onMouseLeave={e => e.target.style.color = 'var(--text)'}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
        
      </div>

      {/* HAMBURGER — mobile */}
      <button
  onClick={() => setMenuOpen(o => !o)}
  className="hamburger-btn"
>
        {[0,1,2].map(i => (
          <span key={i} style={{
            width: '24px', height: '2px',
            background: 'var(--grey)', borderRadius: '2px',
            display: 'block',
          }}/>
        ))}
      </button>
{/* RESUME BUTTON */}
        <a
         href="/resume/YashResume.pdf"
         target="_blank"
        rel="noopener noreferrer"
        className="resume-btn"
        >
  <i className="fa-solid fa-file-arrow-down"></i>
  Resume
</a>
      {/* MOBILE MENU */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: '100%',
          left: 0, width: '100%',
          background: 'var(--purple-mid)',
          padding: '1.5rem 2rem',
          display: 'flex', flexDirection: 'column', gap: '1rem',
          borderBottom: '1px solid rgba(255, 214, 100, 0.1)',
        }}>
          {NAV_ITEMS.map(item => (
            <a key={item} href={`#${item}`}
               onClick={() => setMenuOpen(false)}
               style={{
                 color: 'var(--text)', textDecoration: 'none',
                 fontSize: '0.9rem', fontFamily: 'var(--font-mono)',
               }}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
          <a
  href="/resume/YashResume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => setMenuOpen(false)}
  className="mobile-resume"
>
  <i className="fa-solid fa-file-arrow-down"></i>
  Resume
</a>
        </div>
      )}
    </nav>
  )
}