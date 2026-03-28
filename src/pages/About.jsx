import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaShieldAlt, FaTruck, FaIndustry } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import { Link } from 'react-router-dom';

const OFF1 = 'https://res.cloudinary.com/djoafwyhn/image/upload/v1774711654/Office_1_pe749j.jpg';
const OFF2 = 'https://res.cloudinary.com/djoafwyhn/image/upload/v1774711654/off_znurb5.jpg';
const TRUCK = 'https://res.cloudinary.com/djoafwyhn/image/upload/v1774711669/Trucks_j2c2bp.jpg';

const fadeUp  = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

function Section({ children, style }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} style={style}>
      {children}
    </motion.div>
  );
}

const timeline = [
  { year: '2013', title: 'Company Incorporated', desc: 'Tirupati Road Lines Pvt. Ltd. was incorporated at Nagpur with a founding fleet of 5 heavy trucks. Initial focus was on local coal transport from Wardha and Yavatmal districts.' },
  { year: '2015', title: 'Fleet Expansion', desc: 'Grew to 25+ vehicles. Secured first major long-term contract with regional coal mining operations in Korba, Chhattisgarh — marking our entry into the Central Indian mineral corridor.' },
  { year: '2017', title: 'JK Tyre Dealership', desc: 'Became an authorized JK Tyre & Industries dealership, launching the group\'s industrial diversification. This brought in a new revenue stream and reduced fleet downtime through in-house tyre supply.' },
  { year: '2019', title: 'Body Works Division Launched', desc: 'Tirupati Body Works was established with a dedicated fabrication unit at Nagpur equipped with CNC plasma cutting, hydraulic presses, and MIG welding stations.' },
  { year: '2021', title: 'Multi-Brand Operations', desc: 'Paras Transport and Bahuwali Logistics were launched as independent subsidiaries to address long-haul and heavy haulage requirements — taking total fleet strength beyond 80 vehicles.' },
  { year: '2023', title: '100+ Vehicle Milestone', desc: 'Crossed the 100+ vehicle milestone with annual turnover surpassing ₹33.75 Crore. Active operations across 28+ states. Added GPS tracking to the entire fleet.' },
  { year: '2025', title: 'Digital & Online Presence', desc: 'Launched a digital operations platform with online truck booking, live cargo tracking, and client dashboards. Expanded partnerships with Cavendish Industries and Avanish Logistics.' },
];

const directors = [
  {
    name: 'Bharat Rajkumar Jain',
    role: 'Managing Director & CEO',
    initials: 'BJ',
    color: '#c9a227',
    bio: 'A first-generation entrepreneur who founded Tirupati Road Lines in 2013 with a vision to modernize bulk commodity transport from Central India. With 12+ years of hands-on experience in fleet operations and business development, Bharat has grown the company from 5 trucks to a 100+ vehicle conglomerate. He leads strategic partnerships, fleet acquisition, and business expansion.',
    achievements: ['Founded TRL in 2013 with seed capital', 'Secured Coal India & NMDC contracts', 'Led JK Tyre dealership tie-up', 'Expanded to PAN India operations'],
  },
  {
    name: 'Bahuwali Rajkumar Jain',
    role: 'Director — Operations & Technical',
    initials: 'BJ',
    color: '#4facfe',
    bio: 'The operational force behind Tirupati Group, Bahuwali oversees day-to-day fleet management, driver recruitment, workshop operations, and the Body Works fabrication unit. His deep technical expertise in vehicle mechanics, body fabrication, and logistics routing has built the group\'s reputation for reliability and zero-compromise quality standards.',
    achievements: ['Heads Body Works fabrication unit', 'Manages 100+ vehicle operations', 'Pioneered GPS fleet tracking rollout', 'Oversees driver training program'],
  },
];

const legalCards = [
  { label: 'PAN Number', value: 'XXXXX0000X', icon: <MdVerified size={20} />, desc: 'Permanent Account Number — Income Tax Dept.' },
  { label: 'GST Registration', value: '27XXXXX0000X1ZX', icon: <FaShieldAlt size={18} />, desc: 'Maharashtra State GST' },
  { label: 'Udyam Aadhar', value: 'UDYAM-MH-XX-0000000', icon: <MdVerified size={20} />, desc: 'MSME Ministry Registration' },
  { label: 'CIN Number', value: 'U60232MH2013PTC000000', icon: <FaShieldAlt size={18} />, desc: 'MCA Company Identification No.' },
];

const groupEntities = [
  { icon: <FaTruck size={20} />, name: 'Tirupati Union Transport Pvt. Ltd.', type: 'Coal & Mineral Haulage', color: '#c9a227' },
  { icon: <FaTruck size={20} />, name: 'Paras Transport', type: 'Long-Haul & Inter-State Logistics', color: '#4facfe' },
  { icon: <FaTruck size={20} />, name: 'Bahuwali Logistics', type: 'Heavy Haulage & ODC Cargo', color: '#f093fb' },
  { icon: <FaIndustry size={20} />, name: 'Tirupati Body Works', type: 'Truck Body Fabrication', color: '#43e97b' },
];

export default function About() {
  useEffect(() => { document.title = 'About Us — Tirupati Road Lines Pvt. Ltd.'; }, []);

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>

      {/* Hero */}
      <section style={{ minHeight: '65vh', position: 'relative', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <img src={OFF2} alt="Tirupati Office" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(5,5,16,0.94) 0%, rgba(13,13,26,0.85) 55%, rgba(22,33,62,0.65) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, opacity: 0.025, backgroundImage: 'linear-gradient(rgba(201,162,39,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,1) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '40px', paddingBottom: '60px' }}>
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeUp} className="badge badge-gold" style={{ marginBottom: '20px', display: 'inline-block' }}>Our Story</motion.span>
            <motion.h1 variants={fadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: 900, lineHeight: 1.05, marginBottom: '20px' }}>
              <span style={{ color: 'var(--white)' }}>Built on Trust.</span><br />
              <span style={{ background: 'linear-gradient(135deg, var(--gold), var(--gold-light))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Driven by Ambition.</span>
            </motion.h1>
            <motion.p variants={fadeUp} style={{ color: 'var(--white-dim)', fontSize: '1.1rem', maxWidth: '540px', lineHeight: 1.85 }}>
              From 5 trucks in 2013 to 100+ vehicles and ₹33.75 Cr+ in annual turnover — a family-built enterprise powering India's industrial backbone.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Office Showcase */}
      <section style={{ padding: '0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '340px' }}>
          <div style={{ overflow: 'hidden', position: 'relative' }}>
            <img src={OFF1} alt="Office" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(13,13,26,0.3)' }} />
            <div style={{ position: 'absolute', bottom: '20px', left: '20px', color: 'white', fontFamily: 'var(--font-heading)', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Head Office</div>
          </div>
          <div style={{ overflow: 'hidden', position: 'relative' }}>
            <img src={TRUCK} alt="Fleet" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(13,13,26,0.3)' }} />
            <div style={{ position: 'absolute', bottom: '20px', left: '20px', color: 'white', fontFamily: 'var(--font-heading)', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Our Fleet</div>
          </div>
        </div>
      </section>

      {/* Group Overview */}
      <section className="section" style={{ background: 'var(--charcoal-mid)' }}>
        <Section>
          <div className="container">
            <motion.div variants={fadeUp} style={{ marginBottom: '56px' }}>
              <span className="section-label">The Tirupati Group</span>
              <h2 className="section-title">Four Entities. One Vision.</h2>
              <div className="gold-divider" />
              <p className="section-subtitle">The Tirupati Group is a multi-entity industrial conglomerate headquartered in Nagpur, operating across transport, tyres and fabrication.</p>
            </motion.div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
              {groupEntities.map((e, i) => (
                <motion.div key={i} variants={fadeUp} className="glass-card" style={{ padding: '28px 24px', borderTop: `3px solid ${e.color}` }}>
                  <div style={{ color: e.color, marginBottom: '14px' }}>{e.icon}</div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--white)', marginBottom: '6px', lineHeight: 1.3 }}>{e.name}</div>
                  <div style={{ color: 'var(--white-dim)', fontSize: '0.82rem' }}>{e.type}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      </section>

      {/* Timeline */}
      <section className="section" style={{ background: 'var(--charcoal)' }}>
        <Section>
          <div className="container">
            <motion.div variants={fadeUp} style={{ marginBottom: '60px' }}>
              <span className="section-label">Company Timeline</span>
              <h2 className="section-title">12 Years of Consistent Growth</h2>
              <div className="gold-divider" />
            </motion.div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(560px, 1fr))', gap: '0 60px' }}>
              <div style={{ position: 'relative', paddingLeft: '28px' }}>
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '2px', background: 'linear-gradient(180deg, var(--gold) 0%, rgba(201,162,39,0.1) 100%)' }} />
                {timeline.map((t, i) => (
                  <motion.div key={i} variants={fadeUp} style={{ position: 'relative', marginBottom: '36px' }}>
                    <div style={{ position: 'absolute', left: -34, top: 6, width: 14, height: 14, borderRadius: '50%', background: 'var(--gold)', border: '3px solid var(--charcoal)', boxShadow: '0 0 0 4px rgba(201,162,39,0.2)' }} />
                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                      <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.15rem', color: 'var(--gold)', minWidth: '48px' }}>{t.year}</span>
                      <div>
                        <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--white)', fontSize: '1.05rem', marginBottom: '6px', fontWeight: 700 }}>{t.title}</h4>
                        <p style={{ color: 'var(--white-dim)', lineHeight: 1.8, fontSize: '0.9rem', maxWidth: '480px' }}>{t.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </section>

      {/* Leadership */}
      <section className="section" style={{ background: 'var(--charcoal-mid)' }}>
        <Section>
          <div className="container">
            <motion.div variants={fadeUp} style={{ marginBottom: '60px' }}>
              <span className="section-label">Leadership</span>
              <h2 className="section-title">The People Behind the Fleet</h2>
              <div className="gold-divider" />
              <p className="section-subtitle">Led by two brothers who built the Tirupati Group from the ground up — with zero outside capital and 100% dedication.</p>
            </motion.div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '28px' }}>
              {directors.map((d, i) => (
                <motion.div key={i} variants={fadeUp} className="glass-card" style={{ padding: '40px 32px', borderTop: `3px solid ${d.color}` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                    <div style={{ width: 72, height: 72, borderRadius: '50%', background: `linear-gradient(135deg, ${d.color}, ${d.color}99)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.5rem', color: '#0d0d1a', boxShadow: `0 0 0 4px ${d.color}25`, flexShrink: 0 }}>
                      {d.initials}
                    </div>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: 'var(--white)', marginBottom: '4px', lineHeight: 1.2 }}>{d.name}</h3>
                      <div style={{ color: d.color, fontSize: '0.8rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>{d.role}</div>
                    </div>
                  </div>
                  <div className="gold-divider" style={{ width: '40px', background: `linear-gradient(90deg, ${d.color}, transparent)` }} />
                  <p style={{ color: 'var(--white-dim)', lineHeight: 1.9, fontSize: '0.92rem', marginBottom: '24px' }}>{d.bio}</p>
                  <h5 style={{ fontFamily: 'var(--font-heading)', color: d.color, fontSize: '0.85rem', letterSpacing: '1.5px', marginBottom: '12px' }}>KEY ACHIEVEMENTS</h5>
                  {d.achievements.map((a, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: d.color, flexShrink: 0 }} />
                      <span style={{ color: 'var(--white-dim)', fontSize: '0.88rem' }}>{a}</span>
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      </section>

      {/* Legal */}
      <section className="section" style={{ background: 'var(--charcoal)' }}>
        <Section>
          <div className="container">
            <motion.div variants={fadeUp} style={{ marginBottom: '56px' }}>
              <span className="section-label">Compliance & Transparency</span>
              <h2 className="section-title">Legal Registration Details</h2>
              <div className="gold-divider" />
              <p className="section-subtitle">Fully registered and compliant with all Indian regulatory frameworks. Complete transparency in all dealings.</p>
            </motion.div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '18px', marginBottom: '36px' }}>
              {legalCards.map((card, i) => (
                <motion.div key={i} variants={fadeUp} className="glass-card" style={{ padding: '28px 24px', borderTop: '2px solid rgba(201,162,39,0.4)' }}>
                  <div style={{ color: 'var(--gold)', marginBottom: '10px' }}>{card.icon}</div>
                  <div style={{ color: 'rgba(245,245,240,0.5)', fontSize: '0.72rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '6px' }}>{card.label}</div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--gold-light)', letterSpacing: '1px', marginBottom: '6px' }}>{card.value}</div>
                  <div style={{ color: 'rgba(245,245,240,0.4)', fontSize: '0.78rem' }}>{card.desc}</div>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp} style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-gold">Contact Leadership</Link>
              <Link to="/book" className="btn btn-outline">Book a Truck</Link>
            </motion.div>
          </div>
        </Section>
      </section>

    </div>
  );
}
