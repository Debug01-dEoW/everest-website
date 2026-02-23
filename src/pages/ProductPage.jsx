import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Layers, Box, Home as HomeIcon, CheckCircle, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProductPage = () => {
    const { category } = useParams();
    const pageRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const ctx = gsap.context(() => {
            gsap.from('.reveal-item', {
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.reveal-item',
                    start: 'top 85%'
                }
            });
        }, pageRef);
        return () => ctx.revert();
    }, [category]);

    const details = {
        frp: {
            title: "FRP / GRP Products",
            desc: "High-performance Fiberglass Reinforced Polymer solutions designed for the most demanding industrial environments.",
            image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
            features: ["Chemical Resistant", "High Strength-to-Weight Ratio", "Low Maintenance", "UV Protected"],
            icon: <Layers size={48} />,
            bgColor: "#1e40af", // Deeper blue
            specs: [
                { label: "Material", value: "Isophthalic/Vinylester Resin" },
                { label: "Finish", value: "Translucent / Opaque" },
                { label: "Fire Rating", value: "Class 1 (Optional)" },
                { label: "Thickness", value: "1.0mm to 5.0mm" }
            ]
        },
        grc: {
            title: "GRC Architectural",
            desc: "Glass Reinforced Concrete elements that combine the strength of concrete with the flexibility of intricate architectural design.",
            image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
            features: ["Lightweight Concrete", "High Fire Resistance", "Unlimited Textures", "Eco-friendly"],
            icon: <HomeIcon size={48} />,
            bgColor: "#a85a2a", // Match brand bronze
            specs: [
                { label: "Composition", value: "Cem-FIL Alkali Resistant Glass Fibers" },
                { label: "Density", value: "1800 - 2100 kg/m³" },
                { label: "Flexural Strength", value: "18 - 25 MPa" },
                { label: "Finish", value: "Acid Wash / Sandblast / Natural" }
            ]
        },
        prefab: {
            title: "Prefab Solutions",
            desc: "Modern modular structures and high-end porta cabins engineered for durability and rapid deployment.",
            image: "/project1.jpg",
            features: ["Quick Installation", "Modular Flexibility", "Fully Insulated", "Weatherproof"],
            icon: <Box size={48} />,
            bgColor: "#065f46", // Deeper green
            specs: [
                { label: "Frame", value: "Heavy-duty GI Structure" },
                { label: "Insulation", value: "PUF / Rockwool (50mm - 100mm)" },
                { label: "Interior", value: "PVC / MDF / ACP Finish" },
                { label: "Electric", value: "Concealed Wiring (Standard)" }
            ]
        }
    };

    const product = details[category] || details.frp;

    return (
        <div className="page-product" ref={pageRef} style={{ paddingTop: '80px' }}>
            <section style={{
                background: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url("${product.image}") center/cover no-repeat`,
                color: 'white',
                padding: '12rem 2rem',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ position: 'relative', zIndex: 2 }}>
                    <div style={{ marginBottom: '2rem', display: 'inline-flex', padding: '1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}>{product.icon}</div>
                    <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', color: 'white', marginBottom: '1.5rem', textTransform: 'uppercase' }}>{product.title}</h1>
                    <p style={{ opacity: 0.9, maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', lineHeight: '1.6' }}>{product.desc}</p>
                </div>
            </section>

            <section style={{ padding: '8rem 2rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '6rem' }}>
                    <div className="reveal-item">
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '2.5rem', position: 'relative' }}>
                            Advanced Engineering
                            <div style={{ position: 'absolute', bottom: '-10px', left: 0, width: '60px', height: '4px', background: product.bgColor }}></div>
                        </h2>
                        <div style={{ display: 'grid', gap: '1rem' }}>
                            {product.features.map((f, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '1.5rem', background: '#fff', border: '1px solid #eee', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                                    <CheckCircle style={{ color: product.bgColor }} size={24} />
                                    <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>{f}</span>
                                </div>
                            ))}
                        </div>
                        <button className="btn btn-primary" style={{ marginTop: '3rem' }}>Request Technical Datasheet <ArrowRight size={18} /></button>
                    </div>

                    <div className="reveal-item">
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '2.5rem' }}>Technical Specs</h2>
                        <div style={{ background: '#fff', border: '1px solid #eee', padding: '2rem', borderRadius: '4px' }}>
                            {product.specs.map((spec, i) => (
                                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '1.25rem 0', borderBottom: i === product.specs.length - 1 ? 'none' : '1px solid #f1f5f9' }}>
                                    <span style={{ color: '#64748b', fontWeight: 500 }}>{spec.label}</span>
                                    <span style={{ fontWeight: 700, color: '#1e293b' }}>{spec.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductPage;
