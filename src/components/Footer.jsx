import { Link } from 'react-router-dom';
import { FaTruck, FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(180deg, #0d0d1a 0%, #050510 100%)',
      borderTop: '1px solid rgba(201,162,39,0.15)',
      padding: '70px 0 30px',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '48px',
          marginBottom: '60px',
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: 40, height: 40,
                background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
                borderRadius: '8px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <FaTruck color="#0d0d1a" size={18} />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--white)' }}>TIRUPATI</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', color: 'var(--gold)', letterSpacing: '2px' }}>ROAD LINES PVT. LTD.</div>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '20px' }}>
              Redefining Indian logistics since 2013. PAN India transport, tyre dealership & body fabrication under one trusted group.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="https://wa.me/918446123777" target="_blank" rel="noopener noreferrer" style={{
                width: 38, height: 38, borderRadius: '8px',
                background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#25d366', transition: 'var(--transition)',
              }}>
                <FaWhatsapp size={16} />
              </a>
              <a href="mailto:tirupatiunion@gmail.com" style={{
                width: 38, height: 38, borderRadius: '8px',
                background: 'var(--gold-dim)', border: '1px solid var(--gold-border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--gold)', transition: 'var(--transition)',
              }}>
                <FaEnvelope size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: 'var(--gold)', marginBottom: '20px', letterSpacing: '1px' }}>
              QUICK LINKS
            </h4>
            {[
              { label: 'Home', path: '/' },
              { label: 'Our Fleet', path: '/fleet' },
              { label: 'Industrial Hub', path: '/hub' },
              { label: 'Book a Truck', path: '/book' },
              { label: 'About Us', path: '/about' },
              { label: 'Contact', path: '/contact' },
            ].map(l => (
              <Link key={l.path} to={l.path} style={{
                display: 'block', padding: '6px 0',
                color: 'var(--white-dim)', fontSize: '0.9rem',
                transition: 'var(--transition)',
                borderBottom: '1px solid transparent',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.paddingLeft = '8px'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--white-dim)'; e.currentTarget.style.paddingLeft = '0'; }}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: 'var(--gold)', marginBottom: '20px', letterSpacing: '1px' }}>
              OUR SERVICES
            </h4>
            {['Mineral & Coal Transport', 'PAN India Logistics', 'JK Tyre Dealership', 'Custom Body Fabrication', 'Fleet GPS Tracking', 'Heavy Haulage'].map(s => (
              <div key={s} style={{ padding: '6px 0', color: 'var(--white-dim)', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--gold)', marginRight: '8px' }}>▸</span>{s}
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: 'var(--gold)', marginBottom: '20px', letterSpacing: '1px' }}>
              CONTACT US
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <FaMapMarkerAlt color="var(--gold)" size={14} style={{ marginTop: '3px', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem', color: 'var(--white-dim)' }}>
                  Nagpur – Bhandara Road, Nagpur, Maharashtra, India
                </span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <FaPhone color="var(--gold)" size={14} />
                <span style={{ fontSize: '0.9rem', color: 'var(--white-dim)' }}>+91 84461 23777 / +91 93712 37770</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <FaEnvelope color="var(--gold)" size={14} />
                <a href="mailto:tirupatiunion@gmail.com" style={{ fontSize: '0.9rem', color: 'var(--white-dim)' }}>tirupatiunion@gmail.com</a>
              </div>
            </div>

            {/* Legal IDs */}
            <div style={{
              marginTop: '24px', padding: '16px',
              background: 'var(--glass-bg)', border: '1px solid var(--glass-border)',
              borderRadius: '8px', fontSize: '0.78rem',
            }}>
              <div style={{ color: 'var(--gold)', fontWeight: 600, marginBottom: '8px', letterSpacing: '1px' }}>LEGAL DETAILS</div>
              <div style={{ color: 'var(--white-dim)', lineHeight: 2 }}>
                GST: 27AMLPJ9316K2ZJ<br />
                Udyam: UDYAM-MH-20-0015355<br />
                PAN: AMLPJ9316K
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(201,162,39,0.1)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{ fontSize: '0.85rem', color: 'rgba(245,245,240,0.4)' }}>
            © {new Date().getFullYear()} Tirupati Road Lines Pvt. Ltd. All rights reserved.
          </p>
          <p style={{ fontSize: '0.85rem', color: 'rgba(245,245,240,0.4)' }}>
            Est. 2013 · Nagpur, Maharashtra
          </p>
        </div>
      </div>
    </footer>
  );
}
