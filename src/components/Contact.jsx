import { useState } from 'react'


export default function Contact() {
  const [form,    setForm]    = useState({ name:'', email:'', message:'' })
  const [status,  setStatus]  = useState({ msg:'', type:'' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
  setForm((prev) => ({
    ...prev,
    [e.target.name]: e.target.value,
  }));
};

  const handleSubmit = async () => {
  // Validation
  if (!form.name || !form.email || !form.message) {
    setStatus({
      msg: "Please fill in all fields.",
      type: "error",
    });
    return;
  }

  setLoading(true);
  setStatus({
    msg: "",
    type: "",
  });

  try {
    
    const API_URL = import.meta.env.VITE_API_URL;

    const res = await fetch(`${API_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    // Check if response is valid
    if (!res.ok) {
      throw new Error("Failed to send message");
    }

    const data = await res.json();

    if (data.success) {
      setStatus({
        msg: "Message sent! I'll get back to you soon.",
        type: "success",
      });

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } else {
      setStatus({
        msg: data.message || "Something went wrong. Please try again.",
        type: "error",
      });
    }
  } catch (err) {
    console.error("Contact Form Error:", err);

    setStatus({
      msg: "Could not connect. Please try again later.",
      type: "error",
    });
  } finally {
    // This ALWAYS runs
    setLoading(false);
  }
};

  const inputStyle = {
    width:'100%', background:'#1e1743',
    border:'1px solid rgba(30,58,95,0.8)',
    color:'var(--white)', padding:'0.9rem 1.1rem',
    borderRadius:'8px', fontFamily:'var(--font-sans)',
    fontSize:'0.88rem', marginBottom:'1rem',
    outline:'none', transition:'border-color 0.3s',
  }

  return (
    <section id="contact">
      <div className="section-wrap">
        <p className="section-label">Let's connect</p>
        <h2 className="section-title">Get In Touch</h2>
        <div className="green-line"></div>
        <div
  className="contact-grid"
  style={{
    display: "grid",
    gap: "4rem",
  }}
>

          {/* INFO */}
          <div>
            {[
              { icon:'fa-solid fa-envelope',     href:'mailto:yashwanthi1128@gmail.com',              text:'yashwanthi1128@gmail.com'           },
              { icon:'fa-solid fa-phone',         href:'tel:+918088125846',                            text:'+91 8088125846'                      },
              { icon:'fa-brands fa-github',       href:'https://github.com/yashwanthi1128',            text:'github.com/yashwanthi1128'           },
              { icon:'fa-brands fa-linkedin-in',  href:'https://linkedin.com/in/yashwanthipasupuleti', text:'linkedin.com/in/yashwanthipasupuleti' },
              { icon:'fa-solid fa-location-dot',  href:null,                                           text:'Budigere Cross, Bengaluru — 560049'  },
            ].map(c => (
              <div key={c.text} style={{
                display:'flex', alignItems:'center',
                gap:'12px', marginBottom:'0.95rem',
              }}>
                <div style={{
                  width:'38px', height:'38px',
                  background:'#1e1743',
                  border:'1px solid rgba(100,255,218,0.15)',
                  borderRadius:'8px',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  color:'var(--green)', fontSize:'1rem', flexShrink:0,
                  transition:'all 0.3s',
                }}>
                  <i className={c.icon}></i>
                </div>
                <div style={{fontSize:'0.9rem'}}>
                  {c.href ? (
  <a
    href={c.href}
    target={c.href.startsWith("http") ? "_blank" : undefined}
    rel="noreferrer"
    style={{
      color: "var(--text)",
      textDecoration: "none",
      transition: "color 0.3s",
    }}
    onMouseEnter={(e) => (e.target.style.color = "var(--green)")}
    onMouseLeave={(e) => (e.target.style.color = "var(--text)")}
  >
    {c.text}
  </a>
) : (
  <span>{c.text}</span>
)}
                </div>
              </div>
            ))}
          </div>

          {/* FORM */}
          <div>
            <input type="text" name="name"    placeholder="Your Name"    value={form.name}
                   onChange={handleChange} style={inputStyle}
                   onFocus={e => e.target.style.borderColor = 'var(--green)'}
                   onBlur={e  => e.target.style.borderColor = '#1e1743'}/>
            <input type="email" name="email"   placeholder="Your Email"   value={form.email}
                   onChange={handleChange} style={inputStyle}
                   onFocus={e => e.target.style.borderColor = 'var(--green)'}
                   onBlur={e  => e.target.style.borderColor = '#1e1743'}/>
            <textarea name="message" placeholder="Your Message" value={form.message}
                      onChange={handleChange}
                      style={{...inputStyle, minHeight:'130px', resize:'vertical'}}
                      onFocus={e => e.target.style.borderColor = 'var(--green)'}
                      onBlur={e  => e.target.style.borderColor = '#1e1743'}/>
            <button type="button" onClick={handleSubmit} disabled={loading}
                    style={{
                      width:'100%', background:'#1e1743',
                      color:'var(--text)', border:'none',
                      padding:'0.9rem', borderRadius:'8px',
                      fontWeight:700, fontSize:'0.95rem',
                      cursor: loading ? 'not-allowed' : 'pointer',
                      opacity: loading ? 0.7 : 1,
                      transition:'transform 0.2s, box-shadow 0.2s',
                      fontFamily:'var(--font-sans)',
                    }}
                    onMouseEnter={e => { if (!loading) e.currentTarget.style.transform = 'translateY(-3px)' }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {status.msg && (
              <p style={{
                marginTop:'0.75rem', fontSize:'0.88rem', textAlign:'center',
                color: status.type === 'success' ? '#4ade80' : '#f87171',
              }}>{status.msg}</p>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}