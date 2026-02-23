import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FeaturedProjects = () => {
    const sectionRef = useRef(null);
    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        // Fetch projects from the SQLite database via API
        const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';
        fetch(`${apiBaseUrl}/api/projects`)
            .then(res => res.json())
            .then(data => {
                setProjectList(data);
            })
            .catch(err => console.error("Error fetching projects:", err));
    }, []);

    useEffect(() => {
        if (projectList.length === 0) return;

        const ctx = gsap.context(() => {
            gsap.from('.project-item', {
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%'
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, [projectList]);

    return (
        <section ref={sectionRef} style={{ background: '#fff', padding: '10rem 2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                <span style={{ color: '#a85a2a', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.85rem' }}>Portfolio</span>
                <h2 style={{ fontSize: '3.5rem', marginTop: '1rem' }}>Architectural Landmarks</h2>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gridTemplateRows: 'auto',
                gap: '20px',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {projectList.map((project, i) => (
                    <div
                        key={i}
                        className="project-item"
                        style={{
                            gridColumn: project.size === 'large' ? 'span 2' : 'span 1',
                            gridRow: project.size === 'large' ? 'span 2' : 'span 1',
                            position: 'relative',
                            overflow: 'hidden',
                            borderRadius: '4px',
                            height: project.size === 'large' ? '600px' : '290px',
                            cursor: 'pointer',
                            background: '#eee'
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundImage: `url(${project.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                transition: 'transform 0.5s ease'
                            }}
                            className="project-bg"
                        />
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)',
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            opacity: 0.9
                        }}>
                            <span style={{ color: '#a85a2a', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px' }}>{project.category}</span>
                            <h3 style={{ color: 'white', fontSize: '1.5rem', margin: '0.5rem 0' }}>{project.title}</h3>
                            <div style={{ position: 'absolute', top: '2rem', right: '2rem', color: 'white' }}>
                                <ArrowUpRight size={20} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
        .project-item:hover .project-bg {
          transform: scale(1.05);
        }
      `}</style>
        </section>
    );
};

export default FeaturedProjects;
