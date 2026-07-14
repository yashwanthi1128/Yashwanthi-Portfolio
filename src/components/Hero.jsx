import { useEffect, useRef } from 'react'

export default function Hero() {

  return (
    <section
  id="hero"
  className="hero-section"
  style={{
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
  }}
>
  <div className="hero-grid">
        {/* LEFT */}
        <div style={{display:'flex', flexDirection:'column', gap:'20px'}}>

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
              width:'8px', height:'8px',
              background:'var(--green)', borderRadius:'50%',
              animation:'pulseDot 1.8s ease-in-out infinite',
            }}/>
            Open to Work ~ Full Stack Web Developer
          </div>

          <p style={{
            fontFamily: 'var(--font-sans)',
            color: 'var(--green)',
            fontSize: '0.9rem',
            letterSpacing: '3px',
            textTransform: 'uppercase',
          }}>
            Hi, I'M
          </p>

          <h1 style={{
            fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
            fontWeight: 900,
            color: 'var(--white)',
            lineHeight: 1.05,
            letterSpacing: '-1px',
          }}>
            <span style={{
              background: 'linear-gradient(135deg, #64ffda 0%, #a78bfa 100%)',
              WebkitBackgroundClip: 'text',
              fontWeight: 900,
              fontSize: 'clamp(2.8rem, 5.4vw, 6.5rem)',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Yashwanthi P</span>
          </h1>

          {/* SINGLE PARAGRAPH — no animation */}
          <p style={{
            fontSize: '1rem',
            color: 'var(--slate-light)',
            lineHeight: 1.9,
            
            maxWidth: '560px',
            textAlign: 'justify',
          }}>
            A{' '}
<span style={{ color: 'var(--green)', fontWeight: 600 }}>
  MERN Stack Developer
</span>{' '}
who enjoys turning ideas into fast, scalable, and user-friendly web applications with clean code and thoughtful design.
          </p>

          {/* BUTTONS */}
          <div className="hero-buttons">
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
        <div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: "1.5rem",
  }}
>
          <div
  className="hero-photo-wrapper"
  style={{
    position: "relative",
    width: "260px",
    height: "260px",
    margin: "0 auto",
  }}
>

            {/* rotating rings */}
            <div style={{
              position: "absolute",
              top: "-16px",
              left: "-16px",
              right: "-16px",
              bottom: "-16px",
              borderRadius: "50%",
              border: "1.5px solid rgba(100,255,218,0.15)",
              borderTopColor: "var(--green)",
              borderRightColor: "var(--green)",
              animation: "spin 8s linear infinite",
            }}/>

            <div style={{
              position: "absolute",
              inset: "-6px",
              borderRadius: "50%",
              border: "1px solid rgba(150,80,255,0.2)",
              borderBottomColor: "rgba(150,80,255,0.6)",
              borderLeftColor: "rgba(150,80,255,0.6)",
              animation: "spin 5s linear infinite reverse",
            }}/>

            <div style={{
              width: "260px",
              height: "260px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "3px solid rgba(100,255,218,0.25)",
              background: "var(--navy-light)",
              boxShadow: "0 0 40px rgba(100,255,218,0.08), 0 0 80px rgba(120,40,255,0.06)",
              position: "relative",
              zIndex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <img
                src="/images/portfolioImg11.png"
                alt="Portfolio"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition:  "48% top",
                }}
                onError={(e) => (e.target.style.display = "none")}
              />
              <span style={{
                position: "absolute",
                fontSize: "4rem",
                fontWeight: 700,
                color: "var(--green)",
                fontFamily: "var(--font-mono)",
              }}>
                
              </span>
            </div>

          </div>

          {/* SOCIAL LINKS */}
          <div
  className="hero-socials"
  style={{
    display: "flex",
    gap: "14px",
    justifyContent: "center",
    flexWrap: "wrap",
  }}
>
            {[
              { href: "https://github.com/yashwanthi1128",            icon: "fa-brands fa-github"      },
              { href: "https://linkedin.com/in/yashwanthipasupuleti", icon: "fa-brands fa-linkedin-in" },
              { href: "mailto:yashwanthi1128@gmail.com",              icon: "fa-solid fa-envelope"     },
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--green)",
                  border: "1px solid rgba(100,255,218,0.25)",
                  textDecoration: "none",
                  fontSize: "1.2rem",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.background = "rgba(100,255,218,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.background = "transparent";
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
      <div className="scroll-indicator">
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
        @keyframes floatBadge {
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(-8px); }
        }
        @keyframes bounce {
          0%,100% { transform: translateX(-50%) translateY(0); }
          50%     { transform: translateX(-50%) translateY(-8px); }
        }
      `}</style>

    </section>
  )

}