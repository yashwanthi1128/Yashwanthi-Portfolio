export default function Hero() {
  return (
    <section id="hero" className="hero-section">

      <div className="hero-grid">

        {/* LEFT — TEXT */}
        <div className="hero-left">

          {/* BADGE */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(100,255,218,0.06)',
            border: '1px solid rgba(100,255,218,0.25)',
            color: 'var(--green)',
            fontSize: '0.75rem', fontFamily: 'var(--font-mono)',
            padding: '7px 16px', borderRadius: '20px',
            width: 'fit-content',
          }}>
            <span style={{
              width: '8px', height: '8px',
              background: 'var(--green)', borderRadius: '50%',
              flexShrink: 0,
              animation: 'pulseDot 1.8s ease-in-out infinite',
            }}/>
            Open to Work ~ Fresher · Full Stack Web Developer
          </div>

          {/* GREETING */}
          <p style={{
            fontFamily: 'var(--font-mono)',
            color: 'var(--green)',
            fontSize: '0.9rem',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            margin: 0,
          }}>
            Hi, I'M
          </p>

          {/* NAME */}
          <h1 style={{
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: '-1px',
            margin: 0,
          }}>
            <span style={{
              background: 'linear-gradient(135deg, #64ffda 0%, #a78bfa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 900,
              fontSize: 'clamp(2.4rem, 5.4vw, 6.5rem)',
              display: 'inline-block',
            }}>
              Yashwanthi P
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p style={{
            fontSize: '1rem',
            color: 'var(--slate-light)',
            lineHeight: 1.9,
            maxWidth: '520px',
            margin: 0,
          }}>
            A{' '}
            <span style={{ color: 'var(--green)', fontWeight: 600 }}>
              MERN Stack Developer
            </span>{' '}
            and Information Science graduate from Cambridge Institute of
            Technology, Bengaluru, with hands-on experience building
            full-stack web applications and Android apps. I work with
            React.js, Node.js, Express.js, and MongoDB to build scalable,
            user-friendly solutions — actively looking for software
            development opportunities.
          </p>

          {/* BUTTONS */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn-green">
              <i className="fa-solid fa-folder-open"></i>
              View My Work
            </a>
            <a href="#contact" className="btn-outline">
              <i className="fa-solid fa-paper-plane"></i>
              Hire Me
            </a>
          </div>

        </div>
        {/* END LEFT */}

        {/* RIGHT — PHOTO + SOCIALS */}
        <div className="hero-right">

          {/* PHOTO */}
          <div className="hero-img-wrap">

            {/* outer green ring */}
            <div style={{
              position: 'absolute', inset: '-16px',
              borderRadius: '50%',
              border: '1.5px solid rgba(100,255,218,0.15)',
              borderTopColor: 'var(--green)',
              borderRightColor: 'var(--green)',
              animation: 'spin 8s linear infinite',
            }}/>

            {/* inner purple ring */}
            <div style={{
              position: 'absolute', inset: '-6px',
              borderRadius: '50%',
              border: '1px solid rgba(150,80,255,0.2)',
              borderBottomColor: 'rgba(150,80,255,0.6)',
              borderLeftColor: 'rgba(150,80,255,0.6)',
              animation: 'spin 5s linear infinite reverse',
            }}/>

            {/* photo circle */}
            <div className="hero-img-box">
              <img
                src="/images/portfolioImg11.png"
                alt="Yashwanthi P"
                onError={e => { e.target.style.display = 'none' }}
              />
              {/* fallback initials */}
              <span className="hero-initials">YP</span>
            </div>

          </div>

          {/* SOCIAL ICONS */}
          <div className="hero-socials">
            
            {[
              { href: 'https://github.com/yashwanthi1128',            icon: 'fa-brands fa-github',      title: 'GitHub'   },
              { href: 'https://linkedin.com/in/yashwanthipasupuleti', icon: 'fa-brands fa-linkedin-in', title: 'LinkedIn' },
              { href: 'mailto:yashwanthi1128@gmail.com',              icon: 'fa-solid fa-envelope',     title: 'Email'    },
            ].map(link => (
               <a
                key={link.title}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                title={link.title}
                className="hero-social-btn"
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.background = 'rgba(100,255,218,0.08)'
                  e.currentTarget.style.borderColor = 'var(--green)'
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(100,255,218,0.15)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.borderColor = 'rgba(100,255,218,0.25)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>

        </div>
        {/* END RIGHT */}

      </div>
      {/* END GRID */}

      {/* SCROLL DOWN */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%',
        transform: 'translateX(-50%)',
        color: 'var(--green)', fontSize: '0.78rem',
        letterSpacing: '2px', fontFamily: 'var(--font-mono)',
        animation: 'bounce 2s infinite', opacity: 0.7,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: '6px',
        zIndex: 1,
      }}>
        Scroll ↓
      </div>

      {/* KEYFRAMES */}
      <style>{`
        @keyframes pulseDot {
          0%,100% { box-shadow: 0 0 0 0 rgba(100,255,218,0.6); }
          50%      { box-shadow: 0 0 0 6px rgba(100,255,218,0); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes bounce {
          0%,100% { transform: translateX(-50%) translateY(0);   }
          50%      { transform: translateX(-50%) translateY(-8px); }
        }
      `}</style>

    </section>
    
  )
}