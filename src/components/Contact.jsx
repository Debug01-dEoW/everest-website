import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'FRP Inquiry',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';
            const response = await fetch(`${apiBaseUrl}/api/inquiries`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: 'FRP Inquiry', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus('error');
        }
    };

    return (
        <section className="contact" id="contact" style={{ background: '#fff', paddingTop: '120px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem' }}>
                <div>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Get in Touch</h2>
                    <p style={{ color: '#64748b', marginBottom: '3rem' }}>
                        Have a project in mind? Our team of experts is ready to help you with the perfect composite solution.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            <div style={{ color: '#a85a2a' }}><Mail /></div>
                            <div>
                                <h4 style={{ marginBottom: '0.3rem' }}>Email Us</h4>
                                <p style={{ color: '#64748b' }}>info@everestfibre.com</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            <div style={{ color: '#a85a2a' }}><Phone /></div>
                            <div>
                                <h4 style={{ marginBottom: '0.3rem' }}>Call Us</h4>
                                <p style={{ color: '#64748b' }}>+91 99789 92929</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            <div style={{ color: '#a85a2a' }}><MapPin /></div>
                            <div>
                                <h4 style={{ marginBottom: '0.3rem' }}>Our Office</h4>
                                <p style={{ color: '#64748b' }}>Ankur Apartment, Jetalpur Rd, Vadodara, Gujarat</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ background: 'white', padding: '3rem', borderRadius: '24px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.05)' }}>
                    {status === 'success' ? (
                        <div style={{ textAlign: 'center', padding: '2rem' }}>
                            <CheckCircle size={64} color="#a85a2a" style={{ marginBottom: '1.5rem' }} />
                            <h3 style={{ marginBottom: '1rem' }}>Message Sent!</h3>
                            <p style={{ color: '#64748b' }}>Thank you for reaching out. We will get back to you shortly.</p>
                            <button onClick={() => setStatus('idle')} className="btn btn-outline" style={{ marginTop: '2rem' }}>Send Another</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.9rem', fontWeight: 600 }}>Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="John Doe"
                                        style={inputStyle}
                                    />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.9rem', fontWeight: 600 }}>Email</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="john@example.com"
                                        style={inputStyle}
                                    />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: 600 }}>Subject</label>
                                <select
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    style={inputStyle}
                                >
                                    <option>FRP Inquiry</option>
                                    <option>GRC Inquiry</option>
                                    <option>Prefab Structures</option>
                                    <option>Others</option>
                                </select>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: 600 }}>Message</label>
                                <textarea
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="Tell us about your project..."
                                    rows="4"
                                    style={inputStyle}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="btn btn-primary"
                                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
                            >
                                {status === 'loading' ? 'Sending...' : 'Send Inquiry'} <Send size={18} />
                            </button>
                            {status === 'error' && <p style={{ color: 'red', fontSize: '0.8rem' }}>Something went wrong. Please try again.</p>}
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

const inputStyle = {
    padding: '0.8rem 1rem',
    borderRadius: '4px',
    border: '1px solid #e2e8f0',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    fontFamily: 'inherit'
};

export default Contact;
