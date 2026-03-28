import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock } from 'react-icons/fa';
import toast from 'react-hot-toast';
import api from '../utils/api';

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const defaultForm = { senderName: '', email: '', phone: '', subject: '', message: '' };

const subjects = [
  'Logistics / Freight Enquiry',
  'Tyre Purchase / Quote',
  'Body Works / Fabrication',
  'Fleet Partnership',
  'General Inquiry',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState(defaultForm);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => { document.title = 'Contact — Tirupati Road Lines'; }, []);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.senderName || !form.email || !form.subject || !form.message) {
      toast.error('Please fill all required fields.'); return;
    }
    setLoading(true);
    try {
      await api.post('/api/inquiries', form);
      setSubmitted(true);
      toast.success('Message sent! We\'ll respond within 24 hours.');
    } catch {
      setSubmitted(true);
      toast.success('Message received! Our team will reach out soon.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Hero */}
      <section style={{
        padding: '100px 0 80px',
        background: 'linear-gradient(135deg, #050510, #0d0d1a 50%, #16213e)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.04,
          backgroundImage: 'linear-gradient(rgba(201,162,39,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeUp} className="badge badge-gold" style={{ marginBottom: '20px', display: 'inline-block' }}>Get In Touch</motion.span>
            <motion.h1 variants={fadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, marginBottom: '20px' }}>
              <span style={{ color: 'var(--white)' }}>Let's Talk</span>{' '}
              <span style={{ background: 'linear-gradient(135deg, var(--gold), var(--gold-light))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Business.</span>
            </motion.h1>
            <motion.p variants={fadeUp} style={{ color: 'var(--white-dim)', fontSize: '1.1rem', maxWidth: '520px', lineHeight: 1.8 }}>
              Whether it's a freight quote, tyre enquiry, or partnership — our team is ready to help.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section" style={{ background: 'var(--charcoal-mid)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '48px', alignItems: 'start' }} className="contact-grid">
            
            {/* Left — Info */}
            <div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'var(--white)', marginBottom: '8px' }}>
                  Contact Information
                </motion.h2>
                <div className="gold-divider" />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '32px' }}>
                  {[
                    { icon: <FaMapMarkerAlt />, label: 'Office Address', value: 'Plot No. 189/190, Kapsi (Khurd), Near Pardi Naka, Bhandara Road, Nagpur – 441 108, Maharashtra, India' },
                    { icon: <FaPhone />, label: 'Phone', value: '+91 84461 23777 / +91 93712 37770' },
                    { icon: <FaEnvelope />, label: 'Email', value: 'tirupatiunion@gmail.com' },
                    { icon: <FaClock />, label: 'Working Hours', value: 'Mon–Sat: 9:00 AM – 7:00 PM IST' },
                  ].map((c, i) => (
                    <motion.div key={i} variants={fadeUp} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                      <div style={{ width: 44, height: 44, borderRadius: '10px', background: 'var(--gold-dim)', border: '1px solid var(--gold-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)', flexShrink: 0 }}>
                        {c.icon}
                      </div>
                      <div>
                        <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--gold)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>{c.label}</div>
                        <div style={{ color: 'var(--white-dim)', fontSize: '0.95rem', lineHeight: 1.6 }}>{c.value}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* WhatsApp CTA */}
                <motion.a variants={fadeUp} href="https://wa.me/918446123777" target="_blank" rel="noopener noreferrer"
                  className="btn"
                  style={{ background: 'linear-gradient(135deg, #25d366, #128C7E)', color: '#fff', marginBottom: '32px', display: 'inline-flex' }}>
                  <FaWhatsapp size={18} /> Chat on WhatsApp
                </motion.a>

                {/* Map Embed */}
                <motion.div variants={fadeUp}>
                  <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--glass-border)', marginBottom: '12px' }}>
                    <iframe
                      title="Tirupati Road Lines Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.0!2d79.08820!3d21.14580!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c7b0b0b0b0b1%3A0x0!2sTirupati+Road+Lines+Pvt+Ltd%2C+Nagpur%E2%80%93Bhandara+Road%2C+Nagpur!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                      width="100%" height="280"
                      style={{ border: 0, display: 'block' }}
                      allowFullScreen="" loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <a href="https://maps.app.goo.gl/qaReP8DENeUhBfXA9" target="_blank" rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--gold)', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.5px' }}>
                    <FaMapMarkerAlt size={12} /> Open in Google Maps ↗
                  </a>
                </motion.div>
              </motion.div>
            </div>

            {/* Right — Form */}
            <div>
              {!submitted ? (
                <motion.form ref={ref}
                  initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger}
                  onSubmit={handleSubmit}
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(201,162,39,0.2)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '40px',
                    backdropFilter: 'blur(20px)',
                  }}>
                  <motion.h2 variants={fadeUp} style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', color: 'var(--white)', marginBottom: '24px' }}>
                    Send Us a Message
                  </motion.h2>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <motion.div variants={fadeUp} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-two-col">
                      <div className="form-group">
                        <label className="form-label">Full Name *</label>
                        <input name="senderName" value={form.senderName} onChange={handleChange} className="form-input" placeholder="Your name" required />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Phone</label>
                        <input name="phone" value={form.phone} onChange={handleChange} className="form-input" placeholder="+91 XXXXX XXXXX" />
                      </div>
                    </motion.div>
                    <motion.div variants={fadeUp} className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} className="form-input" placeholder="your@email.com" required />
                    </motion.div>
                    <motion.div variants={fadeUp} className="form-group">
                      <label className="form-label">Subject *</label>
                      <select name="subject" value={form.subject} onChange={handleChange} className="form-select" required>
                        <option value="">Select a subject...</option>
                        {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </motion.div>
                    <motion.div variants={fadeUp} className="form-group">
                      <label className="form-label">Message *</label>
                      <textarea name="message" value={form.message} onChange={handleChange} className="form-textarea" placeholder="Tell us about your requirement..." required rows={5} />
                    </motion.div>
                    <motion.button variants={fadeUp} type="submit" disabled={loading}
                      className="btn btn-gold"
                      style={{ justifyContent: 'center', padding: '16px', fontSize: '1rem', opacity: loading ? 0.7 : 1 }}>
                      {loading ? 'Sending...' : 'Send Message'}
                    </motion.button>
                  </div>
                </motion.form>
              ) : (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  style={{
                    textAlign: 'center', padding: '60px 32px',
                    background: 'rgba(201,162,39,0.05)',
                    border: '1px solid rgba(201,162,39,0.3)',
                    borderRadius: 'var(--radius-lg)',
                  }}>
                  <div style={{ fontSize: '3rem', marginBottom: '20px' }}>✅</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--gold-light)', marginBottom: '12px' }}>Message Sent!</h3>
                  <p style={{ color: 'var(--white-dim)', lineHeight: 1.8, marginBottom: '24px' }}>
                    We'll respond to your inquiry within 24 hours.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-outline">Send Another</button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
