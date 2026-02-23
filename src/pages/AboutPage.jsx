import React, { useEffect, useRef } from 'react';
import { Shield, Hammer, Ruler, Globe } from 'lucide-react';
import { gsap } from 'gsap';

const AboutPage = () => {
    const pageRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const ctx = gsap.context(() => {
            gsap.from('.reveal-item', {
                y: 50,
                opacity: 0,
                duration: 1.2,
                stagger: 0.3,
                ease: 'power3.out'
            });
        }, pageRef);
        return () => ctx.revert();
    }, []);

    return (
        <div className="page-about" ref={pageRef} style={{ paddingTop: '80px' }}>
            <section className="page-header" style={{
                background: 'linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop") center/cover no-repeat',
                color: 'white',
                padding: '12rem 2rem',
                textAlign: 'center'
            }}>
                <h1 className="reveal-item" style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', color: 'white', textTransform: 'uppercase', letterSpacing: '-2px' }}>Our Legacy</h1>
                <p className="reveal-item" style={{ opacity: 0.9, maxWidth: '750px', margin: '1.5rem auto', fontSize: '1.25rem', fontWeight: 500 }}>Pioneering excellence in composite engineering for over three decades.</p>
            </section>

            <section style={{ padding: '8rem 2rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '6rem', alignItems: 'start' }}>
                    <div className="reveal-item">
                        <span style={{ color: '#a85a2a', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.85rem' }}>Since 1991</span>
                        <h2 style={{ fontSize: '3rem', margin: '1.5rem 0', lineHeight: '1.1' }}>Building with Precision and Vision</h2>
                        <p style={{ color: '#64748b', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '2rem' }}>
                            Victory Composite Industries is a leader in the Indian composite construction sector.
                            We are defined by our relentless pursuit of innovation, adapting advanced technological capabilities to provide robust, high-quality architectural solutions.
                        </p>
                        <div style={{ height: '2px', width: '80px', background: '#a85a2a' }}></div>
                    </div>
                    <div className="reveal-item" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        <div className="glass-card">
                            <Shield style={{ color: '#a85a2a', marginBottom: '1.5rem' }} size={32} />
                            <h4 style={{ marginBottom: '0.75rem' }}>Durability</h4>
                            <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Engineered to withstand the most corrosive and extreme industrial environments.</p>
                        </div>
                        <div className="glass-card">
                            <Ruler style={{ color: '#a85a2a', marginBottom: '1.5rem' }} size={32} />
                            <h4 style={{ marginBottom: '0.75rem' }}>Precision</h4>
                            <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Meticulously designed elements that meet exact structural and aesthetic specifications.</p>
                        </div>
                        <div className="glass-card">
                            <Hammer style={{ color: '#a85a2a', marginBottom: '1.5rem' }} size={32} />
                            <h4 style={{ marginBottom: '0.75rem' }}>Cratfsmanship</h4>
                            <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Blending industrial strength with fine-tuned details for architectural perfection.</p>
                        </div>
                        <div className="glass-card">
                            <Globe style={{ color: '#a85a2a', marginBottom: '1.5rem' }} size={32} />
                            <h4 style={{ marginBottom: '0.75rem' }}>Global Standards</h4>
                            <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Adhering to ISO 9001:2015 standards across our entire manufacturing workflow.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
