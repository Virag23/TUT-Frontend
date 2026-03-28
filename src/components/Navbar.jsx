import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const LOGO = 'https://res.cloudinary.com/djoafwyhn/image/upload/v1774711669/tut_vn6j0w.png';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Fleet', path: '/fleet' },
  { label: 'Industrial Hub', path: '/hub' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  const isActive = path => location.pathname === path;

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      height: 'var(--nav-height)',
      background: scrolled ? 'rgba(10,10,20,0.97)' : 'rgba(10,10,20,0.75)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: scrolled ? '1px solid rgba(201,162,39,0.2)' : '1px solid transparent',
      transition: 'all 0.35s ease',
    }}>
      <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo + Name */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <img src={LOGO} alt="Tirupati Road Lines Logo" style={{ height: '44px', width: 'auto', objectFit: 'contain' }} />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.05rem', color: 'var(--white)', letterSpacing: '0.5px' }}>TIRUPATI</span>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.62rem', color: 'var(--gold)', letterSpacing: '2px', textTransform: 'uppercase' }}>Road Lines Pvt. Ltd.</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {navLinks.map(l => (
            <Link key={l.path} to={l.path} style={{
              padding: '8px 18px',
              borderRadius: '8px',
              fontSize: '0.9rem',
              fontWeight: isActive(l.path) ? 600 : 500,
              color: isActive(l.path) ? 'var(--gold)' : 'var(--white-dim)',
              background: isActive(l.path) ? 'rgba(201,162,39,0.12)' : 'transparent',
              border: `1px solid ${isActive(l.path) ? 'rgba(201,162,39,0.3)' : 'transparent'}`,
              transition: 'all 0.25s ease',
              textDecoration: 'none',
            }}
            onMouseEnter={e => { if (!isActive(l.path)) { e.currentTarget.style.color = 'var(--white)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}}
            onMouseLeave={e => { if (!isActive(l.path)) { e.currentTarget.style.color = 'var(--white-dim)'; e.currentTarget.style.background = 'transparent'; }}}>
              {l.label}
            </Link>
          ))}
          <Link to="/book" style={{
            marginLeft: '8px', padding: '10px 24px', borderRadius: '8px',
            background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
            color: '#0d0d1a', fontWeight: 700, fontSize: '0.88rem',
            textDecoration: 'none', transition: 'all 0.25s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(201,162,39,0.4)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
            Book a Truck
          </Link>
        </div>

        {/* Hamburger */}
        <button className="nav-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          style={{ background: 'none', border: 'none', color: 'var(--white)', cursor: 'pointer', padding: '8px', display: 'none' }}
          aria-label="Toggle menu">
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div style={{ background: 'rgba(10,10,20,0.99)', borderBottom: '1px solid rgba(201,162,39,0.2)', padding: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {navLinks.map(l => (
            <Link key={l.path} to={l.path} style={{ padding: '12px 16px', borderRadius: '8px', fontSize: '1rem', fontWeight: 500, color: isActive(l.path) ? 'var(--gold)' : 'var(--white)', background: isActive(l.path) ? 'rgba(201,162,39,0.1)' : 'transparent', textDecoration: 'none' }}>
              {l.label}
            </Link>
          ))}
          <Link to="/book" style={{ marginTop: '8px', padding: '14px', borderRadius: '8px', background: 'linear-gradient(135deg, var(--gold), var(--gold-light))', color: '#0d0d1a', fontWeight: 700, textAlign: 'center', textDecoration: 'none' }}>
            Book a Truck
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
