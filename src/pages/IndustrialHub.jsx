import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCog, FaCheckCircle, FaPhone, FaArrowRight } from 'react-icons/fa';
import { MdBuild, MdLocalShipping } from 'react-icons/md';
import { Link } from 'react-router-dom';

const B1 = 'https://res.cloudinary.com/djoafwyhn/image/upload/v1774711652/Body_2_cbg68y.jpg';
const B2 = 'https://res.cloudinary.com/djoafwyhn/image/upload/v1774711653/Body_5_mw3xpg.jpg';
const B3 = 'https://res.cloudinary.com/djoafwyhn/image/upload/v1774711652/Body_4_i9di05.jpg';
const B4 = 'https://res.cloudinary.com/djoafwyhn/image/upload/v1774711653/Body_7_b8nqhl.jpg';
const ROLLER = 'https://res.cloudinary.com/djoafwyhn/image/upload/v1774711658/Roller_2_z2mdto.jpg';

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

const tyreProducts = [
  { name: 'TBR — Truck & Bus Radial', sizes: '295/80 R22.5 · 11 R22.5 · 9 R20', use: 'Long Haul & Highway', color: '#c9a227' },
  { name: 'OTR — Off-the-Road', sizes: '23.5-25 · 20.5-25 · 17.5-25', use: 'Mining & Quarry', color: '#4facfe' },
  { name: 'Bias Tyres', sizes: '10.00-20 · 11.00-20 · 12.00-20', use: 'Urban & Short Haul', color: '#43e97b' },
  { name: 'Solid / Industrial Tyres', sizes: 'Multiple sizes available', use: 'Forklifts & Industrial', color: '#f093fb' },
];

const bodySpecs = [
  { label: 'Steel Grade', value: 'SAILMA 350 / SAILMA 450' },
  { label: 'Max Payload Capacity', value: 'Up to 40 MT' },
  { label: 'Hydraulic Tipping Angle', value: '45° to 55°' },
  { label: 'Side Sheet Thickness', value: '5mm – 8mm Plates' },
  { label: 'Floor Thickness', value: '8mm – 12mm Abrasion Resistant' },
  { label: 'Surface Treatment', value: 'Shot Blast + Powder Coat' },
  { label: 'Standard Lead Time', value: '20 – 30 Business Days' },
  { label: 'Custom Build', value: 'Available on Request' },
];

const machinery = [
  'CNC Plasma Cutting Machine', 'Hydraulic Press – 300 Tonne',
  'MIG/MAG Welding Stations', 'Shot Blasting Unit',
  'Powder Coating Chamber', 'Overhead Crane – 5 Tonne',
  '3D Jig & Fixture Setup', 'Hydraulic Cylinder Testing Rig',
];

const bodyGallery = [
  { img: B1, label: 'Coal Tipper Body' },
  { img: B2, label: 'Mineral Carrier' },
  { img: B3, label: 'Steel Tipper' },
  { img: B4, label: 'Custom Build' },
];

export default function IndustrialHub() {
  useEffect(() => { document.title = 'Industrial Hub — Tyres & Body Works — Tirupati Road Lines'; }, []);

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>

      {/* Hero */}
      <section style={{ minHeight: '60vh', position: 'relative', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <img src={B1} alt="Tirupati Body Works" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(5,5,16,0.94) 0%, rgba(13,13,26,0.85) 55%, rgba(22,33,62,0.65) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, opacity: 0.025, backgroundImage: 'linear-gradient(rgba(201,162,39,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,1) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '40px', paddingBottom: '60px' }}>
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeUp} className="badge badge-gold" style={{ marginBottom: '20px', display: 'inline-block' }}>Industrial Hub</motion.span>
            <motion.h1 variants={fadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: 900, lineHeight: 1.05, marginBottom: '20px' }}>
              <span style={{ color: 'var(--white)' }}>Tyres. Bodies.</span><br />
              <span style={{ background: 'linear-gradient(135deg, var(--gold), var(--gold-light))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Built to Last.</span>
            </motion.h1>
            <motion.p variants={fadeUp} style={{ color: 'var(--white-dim)', fontSize: '1.1rem', maxWidth: '540px', lineHeight: 1.85 }}>
              JK Tyre authorized dealership + state-of-the-art truck body fabrication — two industrial divisions delivering quality from Nagpur.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── TYRE DIVISION ── */}
      <section className="section" style={{ background: 'var(--charcoal-mid)' }}>
        <Section>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '56px', alignItems: 'start' }}>

              {/* Left — Info */}
              <motion.div variants={fadeUp}>
                <span className="section-label">Tyre Division</span>
                <h2 className="section-title">JK Tyre Authorized Dealer</h2>
                <div className="gold-divider" />
                <p style={{ color: 'var(--white-dim)', lineHeight: 1.9, marginBottom: '24px' }}>
                  Tirupati Road Lines Pvt. Ltd. is an authorized dealer of JK Tyre & Industries — India's No.1 commercial tyre brand. We stock and supply the complete range of TBR, OTR, bias, and solid tyres for all commercial vehicle applications.
                </p>
                <p style={{ color: 'var(--white-dim)', lineHeight: 1.9, marginBottom: '28px' }}>
                  Our expert technicians provide professional fitment, wheel alignment, balancing, and tyre retreading services. Fleet operators get dedicated pricing and priority fulfillment.
                </p>
                {['Genuine JK Tyre products with full manufacturer warranty', 'Expert technical consultation & fitment service', 'Bulk fleet pricing for operators with 10+ vehicles', 'Same-day fitment for most commercial sizes', 'Tyre retreading and maintenance contracts available'].map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}>
                    <FaCheckCircle color="var(--gold)" size={14} style={{ marginTop: '3px', flexShrink: 0 }} />
                    <span style={{ color: 'var(--white-dim)', fontSize: '0.93rem', lineHeight: 1.6 }}>{f}</span>
                  </div>
                ))}
                <div style={{ display: 'flex', gap: '14px', marginTop: '32px', flexWrap: 'wrap' }}>
                  <a href="tel:+918446123777" className="btn btn-gold"><FaPhone /> Call for Quote</a>
                  <Link to="/contact" className="btn btn-outline">Send Enquiry</Link>
                </div>
              </motion.div>

              {/* Right — Products */}
              <motion.div variants={fadeUp}>
                {/* JK Tyre Badge */}
                <div className="glass-card" style={{ padding: '28px', marginBottom: '24px', background: 'linear-gradient(135deg, rgba(201,162,39,0.08), rgba(201,162,39,0.02))', borderColor: 'rgba(201,162,39,0.3)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '14px' }}>
                    <div style={{ width: 56, height: 56, borderRadius: '12px', background: 'linear-gradient(135deg, var(--gold), var(--gold-light))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <FaCog color="#0d0d1a" size={26} />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--white)', fontWeight: 700 }}>JK Tyre & Industries</div>
                      <div style={{ color: 'var(--gold)', fontSize: '0.75rem', letterSpacing: '2.5px', textTransform: 'uppercase', fontWeight: 700 }}>Authorized Dealership</div>
                    </div>
                  </div>
                  <p style={{ color: 'var(--white-dim)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                    India's No. 1 commercial tyre brand. Trusted by 30+ Lakh vehicles across 100+ countries. 
                  </p>
                </div>
                <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--gold)', fontSize: '1rem', letterSpacing: '1px', marginBottom: '16px' }}>PRODUCT RANGE</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {tyreProducts.map((t, i) => (
                    <div key={i} className="glass-card" style={{ padding: '16px 20px', borderLeft: `3px solid ${t.color}` }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                        <div>
                          <div style={{ fontWeight: 600, color: 'var(--white)', fontSize: '0.95rem', marginBottom: '3px' }}>{t.name}</div>
                          <div style={{ color: 'var(--white-dim)', fontSize: '0.8rem' }}>{t.sizes}</div>
                        </div>
                        <span style={{ padding: '4px 12px', borderRadius: '20px', background: `${t.color}15`, border: `1px solid ${t.color}30`, color: t.color, fontSize: '0.75rem', fontWeight: 700, height: 'fit-content' }}>{t.use}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </Section>
      </section>

      {/* ── BODY WORKS GALLERY ── */}
      <section className="section" style={{ background: 'var(--charcoal)' }}>
        <Section>
          <div className="container">
            <motion.div variants={fadeUp} style={{ marginBottom: '56px' }}>
              <span className="section-label">Fabrication Division</span>
              <h2 className="section-title">Tirupati Body Works</h2>
              <div className="gold-divider" />
              <p className="section-subtitle">Custom-engineered tipper and carrier bodies built to withstand India's harshest mining and construction environments.</p>
            </motion.div>

            {/* Photo Gallery */}
            <motion.div variants={fadeUp} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '56px' }}>
              {bodyGallery.map((g, i) => (
                <div key={i} style={{ borderRadius: 'var(--radius-sm)', overflow: 'hidden', position: 'relative', aspectRatio: '4/3' }}>
                  <img src={g.img} alt={g.label} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.07)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px 16px 14px', background: 'linear-gradient(0deg, rgba(13,13,26,0.85) 0%, transparent 100%)' }}>
                    <span style={{ color: 'var(--gold-light)', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.9rem' }}>{g.label}</span>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Specs + Machinery */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '40px' }}>
              <motion.div variants={fadeUp}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: 'var(--gold)', marginBottom: '20px', letterSpacing: '1px' }}>TECHNICAL SPECIFICATIONS</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {bodySpecs.map((s, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 18px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '8px', gap: '16px', flexWrap: 'wrap' }}>
                      <span style={{ color: 'var(--white-dim)', fontSize: '0.88rem' }}>{s.label}</span>
                      <span style={{ color: 'var(--gold-light)', fontWeight: 700, fontSize: '0.88rem' }}>{s.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: 'var(--gold)', marginBottom: '20px', letterSpacing: '1px' }}>WORKSHOP MACHINERY</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '28px' }}>
                  {machinery.map((m, i) => (
                    <div key={i} className="glass-card" style={{ padding: '14px 16px', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <MdBuild color="var(--gold)" size={13} style={{ marginTop: '3px', flexShrink: 0 }} />
                      <span style={{ color: 'var(--white-dim)', fontSize: '0.82rem', lineHeight: 1.55 }}>{m}</span>
                    </div>
                  ))}
                </div>

                {/* Body Works intro image + CTA */}
                <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', position: 'relative', marginBottom: '24px' }}>
                  <img src={ROLLER} alt="Heavy equipment" style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 30%, rgba(13,13,26,0.85) 100%)' }} />
                  <div style={{ position: 'absolute', bottom: '20px', left: '20px' }}>
                    <div style={{ color: 'var(--gold)', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '4px' }}>Also Available</div>
                    <div style={{ fontFamily: 'var(--font-heading)', color: 'var(--white)', fontSize: '1.1rem', fontWeight: 700 }}>Road Rollers & Compactors</div>
                  </div>
                </div>

                <div className="glass-card" style={{ padding: '24px', background: 'linear-gradient(135deg, rgba(201,162,39,0.07), transparent)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <MdLocalShipping color="var(--gold)" size={22} />
                    <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--white)', fontSize: '1.05rem' }}>Custom Orders Welcome</h4>
                  </div>
                  <p style={{ color: 'var(--white-dim)', lineHeight: 1.8, marginBottom: '20px', fontSize: '0.9rem' }}>
                    We design and fabricate bodies for any truck make — Tata, Ashok Leyland, Bharat Benz, Mahindra, Eicher. Delivery across India.
                  </p>
                  <Link to="/contact" className="btn btn-gold" style={{ display: 'inline-flex' }}>Get a Quote <FaArrowRight size={12} /></Link>
                </div>
              </motion.div>
            </div>
          </div>
        </Section>
      </section>

    </div>
  );
}
