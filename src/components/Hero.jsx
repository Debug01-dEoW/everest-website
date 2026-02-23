import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
    {
        image: "/project1.jpg",
        tagline: "Global Landmark Projects",
        title: "Signature Structural Excellence",
        btnText: "Explore Projects"
    },
    {
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2070&auto=format&fit=crop",
        tagline: "Modern Residential Luxury",
        title: "We Build Your Dream Shape",
        btnText: "View Villa Designs"
    },
    {
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        tagline: "Industrial Tech Centers",
        title: "High-Performance Facades",
        btnText: "Our GRC Solutions"
    }
];

const Hero = () => {
    const [current, setCurrent] = useState(0);
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const tagRef = useRef(null);
    const bgRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 6000);
        return () => clearInterval(interval);
    }, [current]);

    useEffect(() => {
        // Animation for content change
        gsap.killTweensOf([tagRef.current, titleRef.current, '.hero-btn-anim']);

        gsap.fromTo(tagRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'back.out(1.7)' }
        );

        gsap.fromTo(titleRef.current,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: 0.2, ease: 'power4.out' }
        );

        gsap.fromTo('.hero-btn-anim',
            { scale: 0.9, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.6, delay: 0.5, ease: 'power2.out' }
        );

        // Ken Burns effect on background
        gsap.fromTo(bgRef.current,
            { scale: 1.15 },
            { scale: 1, duration: 6, ease: 'power1.inOut' }
        );
    }, [current]);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className="hero" ref={heroRef} style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: '#000'
        }}>
            {/* Background Image with Ken Burns Effect */}
            <div
                ref={bgRef}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url("${slides[current].image}")`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    zIndex: 0
                }}
            />

            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 2, padding: '0 2rem' }}>
                <p ref={tagRef} className="hero-tagline" style={{
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    letterSpacing: '4px',
                    textTransform: 'uppercase',
                    marginBottom: '1.5rem',
                    color: '#fff',
                    opacity: 0.9
                }}>
                    {slides[current].tagline}
                </p>
                <h1 ref={titleRef} className="hero-title" style={{
                    fontSize: 'clamp(3rem, 10vw, 5.5rem)',
                    lineHeight: '1',
                    marginBottom: '3rem',
                    color: 'white',
                    textTransform: 'uppercase',
                    fontWeight: 900,
                    letterSpacing: '-1px'
                }}>
                    {slides[current].title}
                </h1>
                <div className="hero-btns" style={{ display: 'flex', gap: '1.5rem', position: 'relative', zIndex: 10 }}>
                    <button className="btn btn-primary hero-btn-anim" style={{
                        backgroundColor: '#a85a2a',
                        color: 'white',
                        boxShadow: '0 4px 15px rgba(168, 90, 42, 0.3)'
                    }}>
                        {slides[current].btnText} <ArrowRight size={18} />
                    </button>
                    <button className="btn btn-outline hero-btn-anim" style={{
                        borderColor: 'white',
                        color: 'white',
                        background: 'rgba(255,255,255,0.05)',
                        backdropFilter: 'blur(5px)'
                    }}>
                        Our Legacy
                    </button>
                </div>
            </div>

            {/* Slider Controls with Previews (Hover to Reveal) */}
            <div className="slider-controls-wrapper" style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                padding: '40px',
                zIndex: 10,
                display: 'flex',
                gap: '20px',
                alignItems: 'center',
                justifyContent: 'flex-end',
                minWidth: '300px',
                minHeight: '160px'
            }}>
                {/* Prev Slide Preview */}
                <button
                    onClick={prevSlide}
                    className="slider-nav-btn"
                    style={{
                        ...controlBtnStyle,
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("${slides[(current - 1 + slides.length) % slides.length].image}")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        border: '2px solid rgba(255,255,255,0.5)'
                    }}
                >
                    <ChevronLeft size={24} style={{ position: 'relative', zIndex: 2 }} />
                </button>

                {/* Next Slide Preview */}
                <button
                    onClick={nextSlide}
                    className="slider-nav-btn"
                    style={{
                        ...controlBtnStyle,
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("${slides[(current + 1) % slides.length].image}")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        border: '2px solid rgba(255,255,255,0.5)'
                    }}
                >
                    <ChevronRight size={24} style={{ position: 'relative', zIndex: 2 }} />
                </button>
            </div>

            <style>{`
                .slider-controls-wrapper .slider-nav-btn {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
                    pointer-events: none;
                }
                .slider-controls-wrapper:hover .slider-nav-btn {
                    opacity: 1;
                    transform: translateY(0);
                    pointer-events: auto;
                }
                .slider-nav-btn {
                    position: relative;
                    width: 140px;
                    height: 80px;
                    border-radius: 4px; /* Rectangular shape */
                    cursor: pointer;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .slider-nav-btn:hover {
                    transform: scale(1.05) !important;
                    border-color: #a85a2a !important;
                }
                .slider-nav-btn::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,0.4);
                    transition: background 0.3s ease;
                }
                .slider-nav-btn:hover::after {
                    background: rgba(0,0,0,0.2);
                }
            `}</style>

            {/* Slide Progress Dots */}
            <div style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', zIndex: 10, display: 'flex', gap: '12px' }}>
                {slides.map((_, i) => (
                    <div
                        key={i}
                        style={{
                            width: current === i ? '40px' : '10px',
                            height: '10px',
                            background: current === i ? '#a85a2a' : 'rgba(255,255,255,0.5)',
                            borderRadius: '4px',
                            transition: 'all 0.3s ease'
                        }}
                    />
                ))}
            </div>
        </section>
    );
};

const controlBtnStyle = {
    background: 'rgba(255,255,255,0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.2)',
    color: 'white',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
};

export default Hero;
