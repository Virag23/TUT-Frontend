import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const fadeUp  = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };

const images = [
  { src: 'https://res.cloudinary.com/djoafwyhn/image/upload/v1774711669/Trucks_j2c2bp.jpg',      label: 'Fleet Overview',        cat: 'Fleet' },
  { src: 'https://res.cloudinary.com/djoafwyhn/image/upload/v1774711665/Truck_5_hz70rd.jpg',     label: 'Tipper Truck',          cat: 'Fleet' },
  { src: 'https://res.cloudinary.com/djoafwyhn/image/upload/v1774711663/Truck_4_xxlpdr.jpg',     label: 'Heavy Hauler',          cat: 'Fleet' },
  { src: 'https://res.cloudinary.com/djoafwyhn/image/upload/v1774711660/Truck_3_gf1fwo.jpg',     label: 'Mineral Transport',     cat: 'Fleet' },
  { src: 'https://res.cloudinary.com/djoafwyhn/image/upload/v1774715441/new_3_glngts.jpg',       label: 'Fleet on Road',         cat: 'Fleet' },
  { src: 'https://res.cloudinary.com/djoafwyhn/image/upload/v1774711654/Office_1_pe749j.jpg',    label: 'Head Office',           cat: 'Office' },
  { src: 'https://res.cloudinary.com/djoafwyhn/image/upload/v1774711654/off_znurb5.jpg',         label: 'Office Exterior',       cat: 'Office' },
  { src: 'https://res.cloudinary.com/djoafwyhn/image/upload/v1774715440/new_1_yjmknd.jpg',       label: 'Achievement Award',     cat: 'Achievements' },
  { src: 'https://res.cloudinary.com/djoafwyhn/image/upload/v1774715441/new_2_zholwf.jpg',       label: 'Recognition Ceremony',  cat: 'Achievements' },
  { src: 'https://res.cloudinary.com/djoafwyhn/image/upload/v1774711652/Body_2_cbg68y.jpg',      label: 'Coal Tipper Body',      cat: 'Body Works' },
  { src: 'https://res.cloudinary.com/djoafwyhn/image/upload/v1774711653/Body_5_mw3xpg.jpg',      label: 'Mineral Carrier',       cat: 'Body Works' },
  { src: 'https://res.cloudinary.com/djoafwyhn/image/upload/v1774711652/Body_4_i9di05.jpg',      label: 'Steel Tipper',          cat: 'Body Works' },
  { src: 'https://res.cloudinary.com/djoafwyhn/image/upload/v1774711653/Body_7_b8nqhl.jpg',      label: 'Custom Build',          cat: 'Body Works' },
  { src: 'https://res.cloudinary.com/djoafwyhn/image/upload/v1774711658/Roller_1_buu4wm.jpg',    label: 'Road Roller',           cat: 'Equipment' },
  { src: 'https://res.cloudinary.com/djoafwyhn/image/upload/v1774711658/Roller_2_z2mdto.jpg',    label: 'Tipper Body',           cat: 'Equipment' },
  { src: 'https://res.cloudinary.com/djoafwyhn/image/upload/v1774711658/Roller_3_vdvvkq.jpg',    label: 'Compactor',             cat: 'Equipment' },
];

const cats = ['All', 'Fleet', 'Office', 'Achievements', 'Body Works', 'Equipment'];

export default function Gallery() {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState(null); // index into filtered

  useEffect(() => { document.title = 'Gallery — Tirupati Road Lines'; }, []);

  // close on Escape, navigate with arrow keys
  useEffect(() => {
    if (lightbox === null) return;
    const handler = e => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') setLightbox(i => (i + 1) % filtered.length);
      if (e.key === 'ArrowLeft')  setLightbox(i => (i - 1 + filtered.length) % filtered.length);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  });

  const filtered = active === 'All' ? images : images.filter(img => img.cat === active);

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>

      {/* Hero */}
      <section style={{ padding: '80px 0 60px', background: 'linear-gradient(135deg, #050510, #0d0d1a 50%, #16213e)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'linear-gradient(rgba(201,162,39,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeUp} className="badge badge-gold" style={{ marginBottom: '20px', display: 'inline-block' }}>Our Gallery</motion.span>
            <motion.h1 variants={fadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 6vw, 4rem)', fontWeight: 900, marginBottom: '16px' }}>
              <span style={{ color: 'var(--white)' }}>A Glimpse of</span>{' '}
              <span style={{ background: 'linear-gradient(135deg, var(--gold), var(--gold-light))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Our Operations.</span>
            </motion.h1>
            <motion.p variants={fadeUp} style={{ color: 'var(--white-dim)', fontSize: '1rem', maxWidth: '500px', lineHeight: 1.8 }}>
              Fleet, fabrication, office, and achievements — captured from across the Tirupati Group.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section style={{ background: 'var(--charcoal-mid)', padding: '32px 0 0' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {cats.map(c => (
              <button key={c} onClick={() => setActive(c)}
                style={{
                  padding: '8px 20px', borderRadius: '100px', border: 'none', cursor: 'pointer',
                  fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.5px',
                  background: active === c ? 'linear-gradient(135deg, var(--gold), var(--gold-light))' : 'var(--glass-bg)',
                  color: active === c ? '#0d0d1a' : 'var(--white-dim)',
                  border: active === c ? 'none' : '1px solid var(--glass-border)',
                  transition: 'all 0.25s ease',
                }}>
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section style={{ background: 'var(--charcoal-mid)', padding: '32px 0 80px' }}>
        <div className="container">
          <motion.div
            key={active}
            initial="hidden" animate="visible" variants={stagger}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
            {filtered.map((img, i) => (
              <motion.div key={img.src} variants={fadeUp}
                onClick={() => setLightbox(i)}
                style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', position: 'relative', aspectRatio: '4/3', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.06)' }}>
                <img src={img.src} alt={img.label}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease', display: 'block' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.07)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(13,13,26,0.75) 0%, transparent 50%)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', bottom: '14px', left: '16px', right: '16px' }}>
                  <div style={{ color: 'var(--white)', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.95rem' }}>{img.label}</div>
                  <div style={{ color: 'var(--gold)', fontSize: '0.72rem', letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: '2px' }}>{img.cat}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(5,5,16,0.96)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>

            {/* Close */}
            <button onClick={() => setLightbox(null)}
              style={{ position: 'absolute', top: '20px', right: '20px', background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', width: 44, height: 44, borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
              <FaTimes size={18} />
            </button>

            {/* Prev */}
            <button onClick={e => { e.stopPropagation(); setLightbox(i => (i - 1 + filtered.length) % filtered.length); }}
              style={{ position: 'absolute', left: '16px', background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', width: 48, height: 48, borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
              <FaChevronLeft size={18} />
            </button>

            {/* Image */}
            <motion.div key={lightbox} initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.92, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              style={{ maxWidth: '90vw', maxHeight: '85vh', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
              <img src={filtered[lightbox].src} alt={filtered[lightbox].label}
                style={{ maxWidth: '100%', maxHeight: '75vh', objectFit: 'contain', borderRadius: '12px', boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }} />
              <div style={{ textAlign: 'center' }}>
                <div style={{ color: 'var(--white)', fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 600 }}>{filtered[lightbox].label}</div>
                <div style={{ color: 'var(--gold)', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '4px' }}>{filtered[lightbox].cat}</div>
                <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem', marginTop: '8px' }}>{lightbox + 1} / {filtered.length}</div>
              </div>
            </motion.div>

            {/* Next */}
            <button onClick={e => { e.stopPropagation(); setLightbox(i => (i + 1) % filtered.length); }}
              style={{ position: 'absolute', right: '16px', background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', width: 48, height: 48, borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
              <FaChevronRight size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
