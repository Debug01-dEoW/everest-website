import React from 'react';
import { Box, Layers, Home, Ruler, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
    const productCategories = [
        {
            title: "FRP / GRP Products",
            desc: "Robust composite solutions for industrial roofing, cladding, and corrosive environments.",
            icon: <Layers size={40} />,
            color: "#a85a2a",
            path: "/products/frp",
            items: ["Roofing Sheets", "Industrial Cladding", "FRP Gutters", "Manhole Covers"]
        },
        {
            title: "GRC Architectural",
            desc: "Lightweight glass-reinforced concrete for intricate facade designs and decorative elements.",
            icon: <Home size={40} />,
            color: "#a85a2a",
            path: "/products/grc",
            items: ["Specialized Facades", "Cornices & Moulding", "Architectural Arches", "Custom Planters"]
        },
        {
            title: "Prefab Solutions",
            desc: "Rapid-deployment modular structures and premium cabins for diverse industrial needs.",
            icon: <Box size={40} />,
            color: "#a85a2a",
            path: "/products/prefab",
            items: ["Modular Offices", "Security Cabins", "Portable Units", "PUF Panels"]
        },
        {
            title: "Turnkey Projects",
            desc: "End-to-end composite engineering, design, and installation services for major infrastructure.",
            icon: <Ruler size={40} />,
            color: "#a85a2a",
            path: "/contact",
            items: ["System Engineering", "Design & Drafting", "Site Installation", "Project Management"]
        }
    ];

    return (
        <section className="products" id="products" style={{ background: '#f8f8f8' }}>
            <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                <span style={{ color: '#a85a2a', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.85rem' }}>Our Expertise</span>
                <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', marginTop: '1rem' }}>Engineering Solutions</h2>
                <div style={{ width: '60px', height: '4px', background: '#a85a2a', margin: '0 auto' }}></div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                {productCategories.map((cat, idx) => (
                    <div key={idx} className="glass-card" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        textDecoration: 'none',
                        color: 'inherit'
                    }}>
                        <div style={{ color: cat.color, marginBottom: '2rem' }}>{cat.icon}</div>
                        <h3 style={{ marginBottom: '1.25rem', fontSize: '1.5rem' }}>{cat.title}</h3>
                        <p style={{ color: '#64748b', marginBottom: '2.5rem', fontSize: '1rem', lineHeight: '1.7', flexGrow: 1 }}>{cat.desc}</p>

                        <Link to={cat.path} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#a85a2a', fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            Learn More <ArrowRight size={16} />
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Products;
