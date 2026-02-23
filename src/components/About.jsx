import React from 'react';
import { Target, Award, Users } from 'lucide-react';

const About = () => {
    return (
        <section className="about" id="about">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                <div>
                    <span style={{ color: '#a85a2a', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.85rem' }}>Established 1991</span>
                    <h2 style={{ fontSize: '3rem', margin: '1.5rem 0', lineHeight: '1.2' }}>Legacy of Victory & Quality</h2>
                    <p style={{ fontSize: '1.1rem', color: '#64748b', marginBottom: '2rem' }}>
                        Victory Composite Industries is an Indian manufacturer of composite construction products.
                        We are known for our technological capabilities and adaptability in providing innovative,
                        high-quality solutions to meet the evolving needs of the construction industry.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <div style={{ color: '#a85a2a' }}>
                                <Target size={24} />
                            </div>
                            <div>
                                <h4 style={{ marginBottom: '0.2rem' }}>Our Mission</h4>
                                <p style={{ color: '#64748b' }}>To deliver robust industrial products through research and best-in-class processes.</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <div style={{ color: '#a85a2a' }}>
                                <Award size={24} />
                            </div>
                            <div>
                                <h4 style={{ marginBottom: '0.2rem' }}>Quality Assurance</h4>
                                <p style={{ color: '#64748b' }}>ISO 9001:2015 certified maintaining excellence in every square inch.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="glass-card" style={{ background: '#f8fafc', border: 'none', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ marginBottom: '1.5rem' }}>Core Specializations</h3>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <li style={{ padding: '1rem', background: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                            <strong>FRP / GRP</strong> - Industrial Roofing & Cladding
                        </li>
                        <li style={{ padding: '1rem', background: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                            <strong>GRC / GFRC</strong> - Architectural Elements
                        </li>
                        <li style={{ padding: '1rem', background: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                            <strong>Prefab</strong> - Modular structures & Porta Cabins
                        </li>
                        <li style={{ padding: '1rem', background: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                            <strong>Turnkey</strong> - End-to-end Project Solutions
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
