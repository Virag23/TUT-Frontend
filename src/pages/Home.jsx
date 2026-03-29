import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

function AnimatedNumber({ end, suffix, active }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!active) return;
    const duration = 2000;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / duration, 1);
      setDisplay(Math.floor(p * end));
      if (p < 1) requestAnimationFrame(step);
      else setDisplay(end);
    };
    requestAnimationFrame(step);
  }, [active, end]);
  return <>{display}{suffix}</>;
}
import { FaTruck, FaIndustry, FaCog, FaArrowRight, FaCheckCircle, FaStar, FaPhone, FaWhatsapp, FaQuoteLeft } from 'react-icons/fa';
import { MdLocalShipping, MdVerified, MdSpeed } from 'react-icons/md';

const TRUCKS_IMG = 'https://res.cloudinary.com/djoafwyhn/image/upload/v1774711669/Trucks_j2c2bp.jpg';
const TRUCK4_IMG = 'https://res.cloudinary.com/djoafwyhn/image/upload/v1774711663/Truck_4_xxlpdr.jpg';
const TRUCK5_IMG = 'https://res.cloudinary.com/djoafwyhn/image/upload/v1774711665/Truck_5_hz70rd.jpg';
const BODY2_IMG  = 'https://res.cloudinary.com/djoafwyhn/image/upload/v1774711652/Body_2_cbg68y.jpg';
const OFFICE_IMG = 'https://res.cloudinary.com/djoafwyhn/image/upload/v1774711654/Office_1_pe749j.jpg';
const ROLLER_IMG = 'https://res.cloudinary.com/djoafwyhn/image/upload/v1774711658/Roller_1_buu4wm.jpg';

const fadeUp  = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.13 } } };

function Section({ children, style }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} style={style}>
      {children}
    </motion.div>
  );
}

const stats = [
  { value: 200, suffix: '+',       label: 'Vehicles in Fleet',   icon: <FaTruck size={22} /> },
  { value: 12,  suffix: '+',       label: 'Years Experience',     icon: <MdVerified size={22} /> },
  { value: 70,  suffix: ' Cr+',    label: 'Annual Turnover (₹)',  icon: <MdLocalShipping size={22} /> },
  { value: 500, suffix: '+',       label: 'Satisfied Clients',    icon: <FaStar size={22} /> },
  { value: 28,  suffix: '+',       label: 'States Covered',       icon: <MdSpeed size={22} /> },
];

const verticals = [
  {
    icon: <FaTruck size={28} />, title: 'Logistics & Transport',
    desc: `PAN India bulk transport of coal, minerals & iron ore. 100+ GPS-tracked heavy vehicles operating 24/7 across India's toughest mineral corridors.`,
    link: '/fleet', linkLabel: 'Explore Fleet',
    color: '#c9a227', img: TRUCKS_IMG,
  },
  {
    icon: <FaCog size={28} />, title: 'JK Tyre Dealership',
    desc: 'Authorized JK Tyre dealer providing TBR, OTR and bias tyres for all commercial vehicles. Expert fitment for fleet operators with same-day service.',
    link: '/hub', linkLabel: 'View Products',
    color: '#4facfe', img: ROLLER_IMG,
  },
  {
    icon: <FaIndustry size={28} />, title: 'Body Works & Fabrication',
    desc: 'Custom-built tipper bodies using SAILMA 450 grade steel. CNC plasma cutting, hydraulic pressing and powder coating — all in-house at Nagpur.',
    link: '/hub', linkLabel: 'Our Workshop',
    color: '#f093fb', img: BODY2_IMG,
  },
];

const partners = [
  'Sunflag Steel, Bhandara', 'Jagdamba Minerals, Mumbai', 'Eshan Minerals Pvt. Ltd.', 'Eshan Calci Private Limited',
  'Omat West Limited', 'Chaman Metallics Ltd.', 'Denotics Inter. Pvt. Ltd.', 'Evonith Value Steel Ltd.',
  'Excello Fin Lea Ltd.', 'Rajura Steel & Alloys Pvt. Ltd.', 'Sanvijay Rolling & Engg. Ltd.', 'Godawari Traders',
  'Duli Trade & Commodities Ltd.', 'Grace Industries Ltd.', 'Viraj Metlinks Pvt. Ltd.', 'Shri Aandal Logistics',
  'Jai Balaji Logistics', 'Vikas Coal and Minerals Pvt. Ltd.', 'Mahalaxmi TMT Pvt. Ltd.', 'Metal India Raipur',
  'Prakash India Ltd.', 'Shri Bajrang Power & Ispat Ltd.', 'GR Minerals India Pvt. Ltd.', 'Sarda Energy & Minerals Ltd.',
  'Gopani Iron', 'Aarti Sponge & Power Ltd.', 'Sai Sponge (India) Pvt. Ltd.', 'Giriraj Enterprises',
  'Omat West Ltd.', 'Shree Lakhdataar Impex', 'Irometal Alloys India Pvt. Ltd.', 'Sanvijay Alloys & Power Limited',
  'Lloyds Metals & Energy Ltd.', 'Mahavir Coal Corporation Pvt. Ltd.', 'Passary Minerals Madhya Pvt. Ltd.',
  'G.R. Integrated Steel Pvt. Ltd.', 'Sarda Energy & Minerals Ltd. Raipur', 'Shree Shyam Sponge & Power Ltd.',
  'Shree Sita Ispat and Power Ltd.', 'Gopani Iron and Power India Pvt. Ltd.',
];

const reviews = [
  { name: 'Sunflag Steel', location: 'Bhandara', text: 'Tirupati Road Lines has been our go-to logistics partner for over 5 years. Their fleet reliability and on-time delivery record is unmatched in the region.', rating: 5 },
  { name: 'Sarda Energy & Minerals Ltd.', location: 'Nagpur', text: 'Exceptional service quality. GPS tracking on every truck gives us real-time visibility. Highly recommend for bulk mineral transport.', rating: 5 },
  { name: 'Lloyds Metals & Energy Ltd.', location: 'Chandrapur', text: 'We have been working with Tirupati Group for coal transport from Korba. Professional team, zero delays, and excellent communication throughout.', rating: 5 },
  { name: 'GR Minerals India Pvt. Ltd.', location: 'Nagpur', text: 'Their JK Tyre dealership saved us significant downtime. Same-day fitment for our entire fleet. Great value and genuine products.', rating: 5 },
  { name: 'Aarti Sponge & Power Ltd.', location: 'Maharashtra', text: 'Reliable, professional, and always on schedule. Tirupati Road Lines handles our iron ore logistics with precision every single time.', rating: 5 },
  { name: 'Chaman Metallics Ltd.', location: 'Chandrapur', text: 'The body fabrication quality from Tirupati Body Works is outstanding. SAILMA 450 grade steel bodies that last years in harsh mining conditions.', rating: 5 },
  { name: 'Evonith Value Steel Ltd.', location: 'Wardha', text: 'Trusted partner for our bulk transport needs. Their drivers are experienced, licensed, and always professional on the road.', rating: 5 },
  { name: 'Shri Bajrang Power & Ispat Ltd.', location: 'Maharashtra', text: 'From booking to delivery, the entire process is seamless. Their digital platform makes tracking shipments incredibly easy.', rating: 5 },
  { name: 'Gopani Iron', location: 'Nagpur', text: 'We have been associated with Tirupati Group for 4+ years. Their commitment to quality and timely service keeps us coming back.', rating: 5 },
  { name: 'Rajura Steel & Alloys Pvt. Ltd.', location: 'Maharashtra', text: 'Outstanding logistics partner. Their 100+ vehicle fleet ensures we never face capacity issues even during peak demand seasons.', rating: 5 },
  { name: 'Sanvijay Alloys & Power Ltd.', location: 'Chandrapur', text: 'Tirupati Road Lines delivers on every promise. Cargo insurance, GPS tracking, and dedicated account managers — truly a complete solution.', rating: 5 },
  { name: 'Jagdamba Minerals', location: 'Mumbai', text: 'Excellent service for long-haul mineral transport. Their Paras Transport division handles our inter-state routes with great efficiency.', rating: 5 },
];

const whyUs = [
  'Real-time GPS tracking on every vehicle in our fleet',
  'Experienced drivers with valid HMV commercial licenses',
  'Full cargo transit insurance for all shipments above 10 MT',
  'Dedicated account managers for high-volume clients',
  'Timely delivery SLAs with 95%+ on-time record',
  'End-to-end visibility from loading to delivery',
];

export default function Home() {
  const statsRef  = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-60px' });

  useEffect(() => { document.title = 'Tirupati Road Lines Pvt. Ltd. — Redefining Indian Logistics Since 2013'; }, []);

  return (
    <div>
      {/* ══════════════ HERO ══════════════ */}
      <section style={{ minHeight: '100vh', position: 'relative', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <img src={TRUCKS_IMG} alt="Tirupati fleet" style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(5,5,16,0.94) 0%, rgba(13,13,26,0.88) 55%, rgba(22,33,62,0.7) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%, rgba(201,162,39,0.07) 0%, transparent 60%)' }} />
        <div style={{ position: 'absolute', inset: 0, opacity: 0.025, backgroundImage: 'linear-gradient(rgba(201,162,39,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,1) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />

        <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '140px', paddingBottom: '100px' }}>
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} style={{ marginBottom: '24px' }}>
              <span className="badge badge-gold">EST. 2013 · NAGPUR, MAHARASHTRA</span>
            </motion.div>

            <motion.h1 variants={fadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.8rem, 8vw, 6rem)', fontWeight: 900, lineHeight: 1.02, marginBottom: '28px', maxWidth: '820px' }}>
              <span style={{ color: 'var(--white)' }}>Redefining</span>{' '}
              <span style={{ background: 'linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Indian Logistics</span>
              <br />
              <span style={{ color: 'var(--white)' }}>Since 2013.</span>
            </motion.h1>

            <motion.p variants={fadeUp} style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', color: 'var(--white-dim)', maxWidth: '580px', lineHeight: 1.85, marginBottom: '20px' }}>
              From the mineral belts of Chhattisgarh to every corner of India — Tirupati Road Lines moves coal, iron ore, and machinery with precision, safety, and 12 years of proven reliability.
            </motion.p>

            <motion.p variants={fadeUp} style={{ fontSize: '0.92rem', color: 'rgba(201,162,39,0.7)', marginBottom: '40px', fontWeight: 500 }}>
              Nagpur · Chhattisgarh · Odisha · Maharashtra · PAN India
            </motion.p>

            <motion.div variants={fadeUp} style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
              <Link to="/book" className="btn btn-gold" style={{ fontSize: '1rem', padding: '16px 36px' }}>
                <FaTruck /> Book a Truck
              </Link>
              <Link to="/fleet" className="btn btn-outline" style={{ fontSize: '1rem', padding: '16px 36px' }}>
                Explore Fleet <FaArrowRight />
              </Link>
              <a href="https://wa.me/918446123777" target="_blank" rel="noopener noreferrer"
                className="btn"
                style={{ fontSize: '1rem', padding: '16px 28px', background: 'rgba(37,211,102,0.15)', border: '1.5px solid rgba(37,211,102,0.4)', color: '#25d366' }}>
                <FaWhatsapp size={18} />
              </a>
            </motion.div>

            <motion.div variants={fadeUp} style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
              {['GPS Tracked Fleet', 'Cargo Insured', 'PAN India Delivery', '24/7 Support'].map(b => (
                <div key={b} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--white-dim)', fontSize: '0.88rem' }}>
                  <FaCheckCircle color="var(--gold)" size={13} /> {b}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        
      </section>

      {/* ══════════════ STATS TICKER ══════════════ */}
      <section style={{ padding: '72px 0', background: 'linear-gradient(180deg, #0a0a18 0%, var(--charcoal-mid) 100%)', borderBottom: '1px solid rgba(201,162,39,0.12)' }}>
        <div className="container">
          <div ref={statsRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '20px' }} className="stats-grid">
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 28 }} animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.55 }}
                style={{ textAlign: 'center', padding: '28px 16px', borderRight: i < stats.length - 1 ? '1px solid rgba(201,162,39,0.12)' : 'none' }}>
                <div style={{ color: 'var(--gold)', marginBottom: '10px' }}>{s.icon}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: 'var(--gold-light)', lineHeight: 1 }}>
                  <AnimatedNumber end={s.value} suffix={s.suffix} active={statsInView} />
                </div>
                <div style={{ color: 'var(--white-dim)', fontSize: '0.82rem', marginTop: '8px', fontWeight: 500, letterSpacing: '0.5px' }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ BUSINESS VERTICALS ══════════════ */}
      <section className="section" style={{ background: 'var(--charcoal-mid)' }}>
        <Section>
          <div className="container">
            <motion.div variants={fadeUp} style={{ marginBottom: '64px' }}>
              <span className="section-label">Our Business Verticals</span>
              <h2 className="section-title">Three Divisions. One Trusted Group.</h2>
              <div className="gold-divider" />
              <p className="section-subtitle">
                Tirupati Group operates across transport, tyres and fabrication — giving you a complete industrial partner under one roof.
              </p>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
              {verticals.map((v, i) => (
                <motion.div key={i} variants={fadeUp}
                  style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', background: 'var(--charcoal-card)', border: '1px solid rgba(255,255,255,0.06)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                  whileHover={{ y: -6, boxShadow: `0 20px 50px rgba(0,0,0,0.5)` }}>
                  <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                    <img src={v.img} alt={v.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                    <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, transparent 30%, rgba(13,13,26,0.9) 100%)` }} />
                  </div>
                  <div style={{ padding: '28px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                      <div style={{ width: 44, height: 44, borderRadius: '10px', background: `${v.color}20`, border: `1px solid ${v.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: v.color }}>
                        {v.icon}
                      </div>
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--white)', fontWeight: 700 }}>{v.title}</h3>
                    </div>
                    <p style={{ color: 'var(--white-dim)', lineHeight: 1.82, fontSize: '0.92rem', marginBottom: '24px' }}>{v.desc}</p>
                    <Link to={v.link} style={{ color: v.color, fontWeight: 600, fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      {v.linkLabel} <FaArrowRight size={11} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      </section>

      {/* ══════════════ FLEET SHOWCASE ══════════════ */}
      <section className="section" style={{ background: 'var(--charcoal)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '100%', overflow: 'hidden' }}>
          <img src={TRUCK4_IMG} alt="Fleet" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.25 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, var(--charcoal) 0%, transparent 60%)' }} />
        </div>
        <Section>
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ maxWidth: '580px' }}>
              <motion.div variants={fadeUp}>
                <span className="section-label">Why Choose Us</span>
                <h2 className="section-title">The Backbone of Central India's Mineral Corridors</h2>
                <div className="gold-divider" />
                <p style={{ color: 'var(--white-dim)', lineHeight: 1.9, marginBottom: '32px' }}>
                  For over 12 years, Tirupati Road Lines has served India's mining, steel, and energy sectors with absolute reliability.
                  Our vertically integrated operations — from tyre supply to custom truck fabrication and bulk transport — make us the most complete logistics partner in the region.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '36px' }}>
                  {whyUs.map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <FaCheckCircle color="var(--gold)" size={13} style={{ marginTop: '4px', flexShrink: 0 }} />
                      <span style={{ color: 'var(--white-dim)', fontSize: '0.88rem', lineHeight: 1.6 }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <Link to="/about" className="btn btn-gold">Our Story</Link>
                  <Link to="/contact" className="btn btn-outline">Get in Touch</Link>
                </div>
              </motion.div>
            </div>
          </div>
        </Section>
      </section>

      {/* ══════════════ IMAGE SHOWCASE STRIP ══════════════ */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', height: '300px' }} className="home-strip">
        {[TRUCK5_IMG, OFFICE_IMG, BODY2_IMG].map((src, i) => (
          <div key={i} style={{ overflow: 'hidden', position: 'relative' }}>
            <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(13,13,26,0.35)' }} />
            <div style={{ position: 'absolute', bottom: '16px', left: '16px', color: 'white', fontFamily: 'var(--font-heading)', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
              {['Our Fleet', 'Our Office', 'Body Works'][i]}
            </div>
          </div>
        ))}
      </div>

      {/* ══════════════ REVIEWS ══════════════ */}
      <section className="section" style={{ background: 'var(--charcoal)' }}>
        <Section>
          <div className="container">
            <motion.div variants={fadeUp} style={{ marginBottom: '60px', textAlign: 'center' }}>
              <span className="section-label">Client Testimonials</span>
              <h2 className="section-title">Trusted by India's Leading Industries</h2>
              <div className="gold-divider" style={{ margin: '16px auto 20px' }} />
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                40+ companies across steel, mining, and energy sectors trust Tirupati Road Lines for their logistics needs.
              </p>
            </motion.div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
              {reviews.map((r, i) => (
                <motion.div key={i} variants={fadeUp} className="glass-card"
                  style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <FaQuoteLeft size={20} color="rgba(201,162,39,0.4)" />
                  <p style={{ color: 'var(--white-dim)', fontSize: '0.92rem', lineHeight: 1.8, flex: 1, margin: 0 }}>
                    {r.text}
                  </p>
                  <div style={{ display: 'flex', gap: '3px', marginTop: '4px' }}>
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <FaStar key={j} size={12} color="var(--gold)" />
                    ))}
                  </div>
                  <div style={{ borderTop: '1px solid rgba(201,162,39,0.15)', paddingTop: '14px' }}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--white)' }}>{r.name}</div>
                    <div style={{ color: 'var(--gold)', fontSize: '0.75rem', letterSpacing: '1px', marginTop: '2px' }}>{r.location}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      </section>

      {/* ══════════════ PARTNER TRUST BAR ══════════════ */}
      <section style={{ padding: '56px 0', background: 'var(--charcoal-mid)', borderTop: '1px solid rgba(201,162,39,0.1)', borderBottom: '1px solid rgba(201,162,39,0.1)' }}>
        <div className="container">
          <p style={{ textAlign: 'center', color: 'var(--gold)', fontSize: '0.75rem', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '32px' }}>
            Trusted & Associated With
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '14px' }}>
            {partners.map(p => (
              <div key={p} style={{ padding: '10px 24px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '8px', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.95rem', color: 'var(--white-dim)', letterSpacing: '0.5px' }}>
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ CTA ══════════════ */}
      <section className="section" style={{ background: 'var(--charcoal)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${ROLLER_IMG})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.08 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(201,162,39,0.08) 0%, transparent 70%)' }} />
        <Section>
          <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
            <motion.div variants={fadeUp}>
              <span className="section-label">Start Moving</span>
              <h2 className="section-title">Ready to Book Your First Shipment?</h2>
              <div className="gold-divider" style={{ margin: '16px auto 24px' }} />
              <p className="section-subtitle" style={{ margin: '0 auto 40px', maxWidth: '500px' }}>
                Whether it's 5 MT or 500 MT, our team is ready to plan and execute your shipment with zero hassle.
              </p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/book" className="btn btn-gold" style={{ fontSize: '1.05rem', padding: '16px 40px' }}>
                  <FaTruck /> Book a Truck Now
                </Link>
                <a href="tel:+918446123777" className="btn btn-outline" style={{ fontSize: '1.05rem', padding: '16px 36px' }}>
                  <FaPhone /> Call Us Now
                </a>
              </div>
            </motion.div>
          </div>
        </Section>
      </section>
    </div>
  );
}
