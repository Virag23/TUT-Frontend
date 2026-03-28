import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaTruck, FaShieldAlt, FaSatelliteDish, FaHardHat, FaArrowRight } from 'react-icons/fa';
import { GiCoalWagon, GiMineExplosion, GiMetalBar } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const T1 = 'https://res.cloudinary.com/djoafwyhn/image/upload/v1774711669/Trucks_j2c2bp.jpg';
const T2 = 'https://res.cloudinary.com/djoafwyhn/image/upload/v1774711665/Truck_5_hz70rd.jpg';
const T3 = 'https://res.cloudinary.com/djoafwyhn/image/upload/v1774711663/Truck_4_xxlpdr.jpg';
const T4 = 'https://res.cloudinary.com/djoafwyhn/image/upload/v1774711660/Truck_3_gf1fwo.jpg';
const R1 = 'https://res.cloudinary.com/djoafwyhn/image/upload/v1774711658/Roller_1_buu4wm.jpg';
const R2 = 'https://res.cloudinary.com/djoafwyhn/image/upload/v1774711658/Roller_2_z2mdto.jpg';
const R3 = 'https://res.cloudinary.com/djoafwyhn/image/upload/v1774711658/Roller_3_vdvvkq.jpg';

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

const fleets = [
  { name: 'Tirupati Union Transport', type: 'Coal & Mineral Haulage', count: '40+ Vehicles', desc: 'The flagship brand of the group. Operating on the major mineral corridors — Korba, Raigarh, Jagdalpur, and Nagpur — handling bulk coal and mineral shipments for power plants and steel mills.', color: '#c9a227', img: T1 },
  { name: 'Paras Transport', type: 'Long-Haul & Inter-State', count: '30+ Vehicles', desc: 'Dedicated inter-state fleet covering major industrial belts from Central India to West Bengal, Andhra Pradesh, and Gujarat. Specialized in iron ore and limestone logistics.', color: '#4facfe', img: T2 },
  { name: 'Bahuwali Logistics', type: 'Heavy Haulage & OD Cargo', count: '30+ Vehicles', desc: 'Specializes in over-dimensional cargo — steel structures, power transformers, industrial machinery. Bahuwali operates India\'s toughest haulage routes with experienced ODC drivers.', color: '#f093fb', img: T3 },
];

const heavyVehicles = [
  { img: R1, label: 'Road Roller', desc: 'Heavy-duty road compaction equipment' },
  { img: R2, label: 'Tipper Body', desc: 'Custom SAILMA 450 grade steel body' },
  { img: R3, label: 'Compactor', desc: 'Industrial compaction machinery' },
];

const materials = [
  { icon: <GiCoalWagon size={36} />, label: 'Coal', desc: 'Mining-grade thermal and coking coal transport from Chhattisgarh, Jharkhand & Odisha coalfields to power plants and coke ovens.' },
  { icon: <GiMineExplosion size={36} />, label: 'Iron Ore', desc: 'NMDC-grade iron ore from Bailadila and other major mines to steel plants across Maharashtra, Andhra Pradesh, and West Bengal.' },
  { icon: <GiMetalBar size={36} />, label: 'Minerals & Bulk', desc: 'Bauxite, limestone, dolomite, fly ash and other bulk industrial minerals across Central and Eastern India mineral belts.' },
];

const safety = [
  { icon: <FaSatelliteDish size={22} />, label: 'GPS Tracking', desc: 'Real-time 24/7 vehicle tracking on every truck. Live location shared with clients on request.' },
  { icon: <FaShieldAlt size={22} />, label: 'Cargo Insurance', desc: 'Full transit insurance for all shipments above 10 MT. Claims processed within 7 business days.' },
  { icon: <FaHardHat size={22} />, label: 'Certified Drivers', desc: 'All drivers hold valid HMV commercial licenses with minimum 5 years of experience.' },
  { icon: <FaTruck size={22} />, label: 'Fleet Maintenance', desc: 'Regular PUC, fitness certificates, and preventive maintenance schedule every 10,000 km.' },
];

export default function Fleet() {
  useEffect(() => { document.title = 'Fleet & Transport — Tirupati Road Lines'; }, []);

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>

      {/* Hero */}
      <section style={{ minHeight: '70vh', position: 'relative', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <img src={T4} alt="Tirupati Fleet" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(5,5,16,0.92) 0%, rgba(13,13,26,0.82) 55%, rgba(22,33,62,0.6) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, opacity: 0.025, backgroundImage: 'linear-gradient(rgba(201,162,39,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,1) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '40px', paddingBottom: '60px' }}>
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeUp} className="badge badge-gold" style={{ marginBottom: '20px', display: 'inline-block' }}>The Fleet</motion.span>
            <motion.h1 variants={fadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: 900, lineHeight: 1.05, marginBottom: '20px' }}>
              <span style={{ color: 'var(--white)' }}>100+ Vehicles.</span><br />
              <span style={{ background: 'linear-gradient(135deg, var(--gold), var(--gold-light))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>One Trusted Network.</span>
            </motion.h1>
            <motion.p variants={fadeUp} style={{ color: 'var(--white-dim)', fontSize: '1.1rem', maxWidth: '540px', lineHeight: 1.85 }}>
              Heavy tippers, trailers, and ODC carriers — operating across India's most critical mineral and industrial corridors since 2013.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Fleet Division Cards */}
      <section className="section" style={{ background: 'var(--charcoal-mid)' }}>
        <Section>
          <div className="container">
            <motion.div variants={fadeUp} style={{ marginBottom: '60px' }}>
              <span className="section-label">Our Three Brands</span>
              <h2 className="section-title">Three Divisions, One Group</h2>
              <div className="gold-divider" />
              <p className="section-subtitle">Each division serves a specialized segment — together forming a complete, PAN India logistics solution.</p>
            </motion.div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {fleets.map((f, i) => (
                <motion.div key={i} variants={fadeUp}
                  style={{ display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1.2fr 1fr' : '1fr 1.2fr', gap: '0', borderRadius: 'var(--radius-md)', overflow: 'hidden', background: 'var(--charcoal-card)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  {i % 2 !== 0 && (
                    <div style={{ overflow: 'hidden' }}>
                      <img src={f.img} alt={f.name} style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '260px' }} />
                    </div>
                  )}
                  <div style={{ padding: '40px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                      <div style={{ width: 12, height: 12, borderRadius: '50%', background: f.color, boxShadow: `0 0 10px ${f.color}60` }} />
                      <span style={{ color: f.color, fontSize: '0.78rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>{f.type}</span>
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 3vw, 1.7rem)', color: 'var(--white)', marginBottom: '8px', fontWeight: 700 }}>{f.name}</h3>
                    <span style={{ display: 'inline-block', padding: '4px 14px', background: `${f.color}15`, border: `1px solid ${f.color}30`, borderRadius: '20px', color: f.color, fontSize: '0.82rem', fontWeight: 700, marginBottom: '20px', width: 'fit-content' }}>{f.count}</span>
                    <p style={{ color: 'var(--white-dim)', lineHeight: 1.85, marginBottom: '28px', fontSize: '0.95rem' }}>{f.desc}</p>
                    <Link to="/book" style={{ color: f.color, fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      Book this fleet <FaArrowRight size={12} />
                    </Link>
                  </div>
                  {i % 2 === 0 && (
                    <div style={{ overflow: 'hidden' }}>
                      <img src={f.img} alt={f.name} style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '260px' }} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      </section>

      {/* What We Carry */}
      <section className="section" style={{ background: 'var(--charcoal)' }}>
        <Section>
          <div className="container">
            <motion.div variants={fadeUp} style={{ marginBottom: '60px' }}>
              <span className="section-label">Cargo Specialization</span>
              <h2 className="section-title">What We Transport</h2>
              <div className="gold-divider" />
              <p className="section-subtitle">Specialists in bulk commodity and heavy industrial cargo across Central and Eastern India's mineral belt.</p>
            </motion.div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
              {materials.map((m, i) => (
                <motion.div key={i} variants={fadeUp} className="glass-card" style={{ padding: '40px 28px', textAlign: 'center' }}>
                  <div style={{ color: 'var(--gold)', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>{m.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--white)', marginBottom: '12px' }}>{m.label}</h3>
                  <p style={{ color: 'var(--white-dim)', lineHeight: 1.85, fontSize: '0.92rem' }}>{m.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      </section>

      {/* Heavy Vehicles Gallery */}
      <section className="section" style={{ background: 'var(--charcoal-mid)' }}>
        <Section>
          <div className="container">
            <motion.div variants={fadeUp} style={{ marginBottom: '48px' }}>
              <span className="section-label">Heavy Equipment</span>
              <h2 className="section-title">Beyond Trucks — Heavy Industrial Vehicles</h2>
              <div className="gold-divider" />
              <p className="section-subtitle">Our fleet includes road rollers, compactors, and heavy construction vehicles for industrial project support.</p>
            </motion.div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {heavyVehicles.map((v, i) => (
                <motion.div key={i} variants={fadeUp} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ height: '220px', overflow: 'hidden' }}>
                    <img src={v.img} alt={v.label} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                  </div>
                  <div style={{ padding: '20px 24px', background: 'var(--charcoal-card)' }}>
                    <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--white)', fontSize: '1.1rem', marginBottom: '6px' }}>{v.label}</h4>
                    <p style={{ color: 'var(--white-dim)', fontSize: '0.88rem' }}>{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      </section>

      {/* Location Map */}
      <section className="section" style={{ background: 'var(--charcoal)' }}>
        <div className="container">
          <Section>
            <motion.div variants={fadeUp} style={{ marginBottom: '40px' }}>
              <span className="section-label">Operational Base</span>
              <h2 className="section-title">Powered from Nagpur — PAN India Reach</h2>
              <div className="gold-divider" />
              <p className="section-subtitle">Our headquarters on Nagpur–Bhandara Road is the nerve center for operations covering 28+ states.</p>
            </motion.div>
          </Section>
          <div style={{ height: '440px', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--glass-border)' }}>
            <iframe
              title="Tirupati Road Lines — Nagpur HQ"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238095.63!2d79.0882!3d21.1458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf7b%3A0x17a8c76e4b9c5a2e!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%" height="100%"
              style={{ border: 0, display: 'block', filter: 'invert(90%) hue-rotate(180deg) brightness(0.85)' }}
              allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Safety Standards */}
      <section className="section" style={{ background: 'var(--charcoal-mid)' }}>
        <Section>
          <div className="container">
            <motion.div variants={fadeUp} style={{ marginBottom: '56px' }}>
              <span className="section-label">Safety & Compliance</span>
              <h2 className="section-title">Zero-Compromise Safety Standards</h2>
              <div className="gold-divider" />
            </motion.div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '24px' }}>
              {safety.map((s, i) => (
                <motion.div key={i} variants={fadeUp} className="glass-card" style={{ padding: '32px 24px' }}>
                  <div style={{ width: 52, height: 52, borderRadius: '12px', background: 'rgba(201,162,39,0.1)', border: '1px solid rgba(201,162,39,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)', marginBottom: '20px' }}>
                    {s.icon}
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: 'var(--white)', marginBottom: '10px' }}>{s.label}</h4>
                  <p style={{ color: 'var(--white-dim)', fontSize: '0.9rem', lineHeight: 1.75 }}>{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      </section>

    </div>
  );
}
