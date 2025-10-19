import React, { useState, useRef } from 'react';
import curveLine from '../assets/curveLine.png';
import { Stage, Layer, Line } from 'react-konva';

const GitHubProjects = () => {
  // Component styles - Easy to customize!
  const styles = {
    section: {
      padding: '80px 0',
      background: 'linear-gradient(180deg, rgba(212,175,55,0.02), transparent)',
      overflow: 'hidden',
    },
    container: {
      width: '100%',
      margin: '0 auto',
      padding: '0 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    sectionHeader: {
      textAlign: 'center',
      marginBottom: '48px'
    },
    sectionTitle: {
      fontSize: '36px',
      fontWeight: '700',
      margin: '0 0 16px',
      background: 'linear-gradient(135deg, #ece4e4, #FFD700)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    sectionSubtitle: {
      fontSize: '18px',
      color: '#cfcfcf',
      margin: '0',
      maxWidth: '600px',
      margin: '0 auto'
    },
    projectsContainer: {
      position: 'relative',
      margin: '0 auto',
      width: '100%',
      maxWidth: '1400px'
    },
    projectsScrollContainer: {
      overflowX: 'auto',
      overflowY: 'hidden',
      scrollBehavior: 'smooth',
      padding: '20px 0',
      margin: '0',
      width: '100%',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none'
    },
    projectsGrid: {
      display: 'flex',
      gap: '24px',
      padding: '0 60px',
      minWidth: 'max-content',
      justifyContent: 'center'
    },
    projectCard: {
      flex: '0 0 320px',
      background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))',
      borderRadius: '16px',
      overflow: 'hidden',
      border: '1px solid rgba(255,255,255,0.05)',
      transition: 'all 0.3s ease',
      position: 'relative',
      backdropFilter: 'blur(10px)',
      cursor: 'pointer'
    },
    projectImageContainer: {
      position: 'relative',
      height: '200px',
      overflow: 'hidden'
    },
    projectImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.3s ease'
    },
    projectOverlay: {
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      background: 'linear-gradient(180deg, rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: '0',
      transition: 'opacity 0.3s ease'
    },
    githubLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      background: 'rgba(255,255,255,0.1)',
      padding: '12px 20px',
      borderRadius: '8px',
      color: '#ffffff',
      textDecoration: 'none',
      fontWeight: '600',
      fontSize: '14px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.2)',
      transition: 'all 0.3s ease'
    },
    projectContent: {
      padding: '24px'
    },
    projectName: {
      fontSize: '20px',
      fontWeight: '700',
      margin: '0 0 12px',
      color: '#ffffff'
    },
    projectDescription: {
      color: '#cfcfcf',
      fontSize: '14px',
      lineHeight: '1.6',
      margin: '0 0 20px',
      display: '-webkit-box',
      WebkitLineClamp: '3',
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    },
    projectTech: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      marginBottom: '20px'
    },
    techTag: {
      background: 'rgba(212,175,55,0.1)',
      color: '#ece4e4',
      padding: '4px 10px',
      borderRadius: '12px',
      fontSize: '12px',
      fontWeight: '600',
      border: '1px solid rgba(212,175,55,0.2)'
    },
    projectStats: {
      display: 'flex',
      gap: '16px',
      alignItems: 'center'
    },
    stat: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      color: '#cfcfcf',
      fontSize: '14px',
      fontWeight: '600'
    },
    scrollBtn: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'rgba(255,255,255,0.1)',
      border: '1px solid rgba(255,255,255,0.2)',
      color: '#ffffff',
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)',
      zIndex: '10'
    },
    scrollLeft: {
      left: '0'
    },
    scrollRight: {
      right: '0'
    },
    projectsCta: {
      textAlign: 'center',
      marginTop: '48px'
    },
    ctaButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      background: 'linear-gradient(135deg, #ece4e4, #FFD700)',
      color: '#000',
      padding: '16px 32px',
      borderRadius: '12px',
      textDecoration: 'none',
      fontWeight: '700',
      fontSize: '16px',
      transition: 'all 0.3s ease',
      border: 'none',
      cursor: 'pointer'
    }
  };

  // Responsive styles
  const getResponsiveStyles = () => {
    const isMobile = window.innerWidth <= 768;
    const isSmallMobile = window.innerWidth <= 480;
    
    if (isSmallMobile) {
      return {
        ...styles,
        sectionTitle: { ...styles.sectionTitle, fontSize: '24px' },
        sectionSubtitle: { ...styles.sectionSubtitle, fontSize: '14px' },
        projectsScrollContainer: { ...styles.projectsScrollContainer, margin: '0' },
        projectsGrid: { ...styles.projectsGrid, padding: '0 40px' },
        projectCard: { ...styles.projectCard, flex: '0 0 260px' },
        projectImageContainer: { ...styles.projectImageContainer, height: '140px' },
        projectContent: { ...styles.projectContent, padding: '16px' },
        projectName: { ...styles.projectName, fontSize: '16px' },
        scrollBtn: { ...styles.scrollBtn, width: '32px', height: '32px' },
        ctaButton: { ...styles.ctaButton, padding: '12px 24px', fontSize: '14px' }
      };
    }
    
    if (isMobile) {
      return {
        ...styles,
        sectionTitle: { ...styles.sectionTitle, fontSize: '28px' },
        sectionSubtitle: { ...styles.sectionSubtitle, fontSize: '16px' },
        projectsScrollContainer: { ...styles.projectsScrollContainer, margin: '0' },
        projectsGrid: { ...styles.projectsGrid, padding: '0 50px' },
        projectCard: { ...styles.projectCard, flex: '0 0 280px' },
        projectImageContainer: { ...styles.projectImageContainer, height: '160px' },
        projectContent: { ...styles.projectContent, padding: '20px' },
        projectName: { ...styles.projectName, fontSize: '18px' },
        scrollBtn: { ...styles.scrollBtn, width: '36px', height: '36px' },
        ctaButton: { ...styles.ctaButton, padding: '14px 28px', fontSize: '14px' }
      };
    }
    
    return styles;
  };

  const [responsiveStyles, setResponsiveStyles] = useState(getResponsiveStyles());

  // Update responsive styles on window resize
  React.useEffect(() => {
    const handleResize = () => {
      setResponsiveStyles(getResponsiveStyles());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const scrollContainerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  // Sample GitHub projects data - replace with your actual projects
  const projects = [
    {
      id: 1,
      name: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      stars: 45,
      forks: 12
    },
    {
      id: 2,
      name: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      githubUrl: "https://github.com/yourusername/task-manager",
      technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
      stars: 32,
      forks: 8
    },
    {
      id: 3,
      name: "Weather Dashboard",
      description: "Beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop",
      githubUrl: "https://github.com/yourusername/weather-dashboard",
      technologies: ["React", "Chart.js", "OpenWeather API", "CSS3"],
      stars: 28,
      forks: 15
    },
    {
      id: 4,
      name: "Social Media Analytics",
      description: "Advanced analytics platform for social media metrics with data visualization, reporting, and insights generation.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      githubUrl: "https://github.com/yourusername/social-analytics",
      technologies: ["Python", "Django", "D3.js", "Redis"],
      stars: 67,
      forks: 23
    },
    {
      id: 5,
      name: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication, transaction history, and financial planning tools.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
      githubUrl: "https://github.com/yourusername/mobile-banking",
      technologies: ["React Native", "Firebase", "Biometric Auth", "SQLite"],
      stars: 89,
      forks: 34
    },
    {
      id: 6,
      name: "AI Chatbot Platform",
      description: "Intelligent chatbot platform with natural language processing, multi-language support, and conversation analytics.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      githubUrl: "https://github.com/yourusername/ai-chatbot",
      technologies: ["Python", "TensorFlow", "FastAPI", "WebSocket"],
      stars: 156,
      forks: 42
    }
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -320,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 320,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    setIsScrolling(true);
    setTimeout(() => setIsScrolling(false), 150);
  };

  return (
    <section style={responsiveStyles.section}>
      <div style={responsiveStyles.container}>
        <div style={responsiveStyles.sectionHeader}>
          <h2 style={responsiveStyles.sectionTitle}>Work We've Delivered</h2>
          {/* <img src={curveLine} /> */}
          <Stage width={window.innerWidth} height={80}>
          <Layer>
            <Line points={[0, 50, 150, 0, 250, 100, 400, 50]} stroke="green" strokeWidth={3} tension={0.6} />
          </Layer>
        </Stage>
          <p style={responsiveStyles.sectionSubtitle}>
            Explore our open-source contributions and innovative projects
          </p>
        </div>

        <div style={responsiveStyles.projectsContainer}>
          <button 
            style={{...responsiveStyles.scrollBtn, ...responsiveStyles.scrollLeft}} 
            onClick={scrollLeft}
            aria-label="Scroll left"
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(212,175,55,0.2)';
              e.target.style.borderColor = 'rgba(212,175,55,0.4)';
              e.target.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.1)';
              e.target.style.borderColor = 'rgba(255,255,255,0.2)';
              e.target.style.transform = 'translateY(-50%)';
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div 
            style={responsiveStyles.projectsScrollContainer}
            ref={scrollContainerRef}
            onScroll={handleScroll}
          >
            <div style={responsiveStyles.projectsGrid}>
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  style={responsiveStyles.projectCard}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.borderColor = 'rgba(212,175,55,0.3)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(212,175,55,0.1)';
                    const image = e.currentTarget.querySelector('img');
                    if (image) image.style.transform = 'scale(1.05)';
                    const overlay = e.currentTarget.querySelector('[data-overlay]');
                    if (overlay) overlay.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.boxShadow = 'none';
                    const image = e.currentTarget.querySelector('img');
                    if (image) image.style.transform = 'scale(1)';
                    const overlay = e.currentTarget.querySelector('[data-overlay]');
                    if (overlay) overlay.style.opacity = '0';
                  }}
                >
                  <div style={responsiveStyles.projectImageContainer}>
                    <img 
                      src={project.image} 
                      alt={project.name}
                      style={responsiveStyles.projectImage}
                      loading="lazy"
                    />
                    <div 
                      style={responsiveStyles.projectOverlay}
                      data-overlay
                    >
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={responsiveStyles.githubLink}
                        onMouseEnter={(e) => {
                          e.target.style.background = 'rgba(255,255,255,0.2)';
                          e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'rgba(255,255,255,0.1)';
                          e.target.style.transform = 'translateY(0)';
                        }}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                        View on GitHub
                      </a>
                    </div>
                  </div>
                  
                  <div style={responsiveStyles.projectContent}>
                    <h3 style={responsiveStyles.projectName}>{project.name}</h3>
                    <p style={responsiveStyles.projectDescription}>{project.description}</p>
                    
                    <div style={responsiveStyles.projectTech}>
                      {project.technologies.map((tech, index) => (
                        <span key={index} style={responsiveStyles.techTag}>{tech}</span>
                      ))}
                    </div>
                    
                    <div style={responsiveStyles.projectStats}>
                      <div style={responsiveStyles.stat}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="#ece4e4">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        <span>{project.stars}</span>
                      </div>
                      <div style={responsiveStyles.stat}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="#ece4e4">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <span>{project.forks}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            style={{...responsiveStyles.scrollBtn, ...responsiveStyles.scrollRight}} 
            onClick={scrollRight}
            aria-label="Scroll right"
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(212,175,55,0.2)';
              e.target.style.borderColor = 'rgba(212,175,55,0.4)';
              e.target.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.1)';
              e.target.style.borderColor = 'rgba(255,255,255,0.2)';
              e.target.style.transform = 'translateY(-50%)';
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div style={responsiveStyles.projectsCta}>
          <a 
            href="https://github.com/mond-tech" 
            target="_blank" 
            rel="noopener noreferrer"
            style={responsiveStyles.ctaButton}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 10px 30px rgba(212,175,55,0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            View All Projects on GitHub
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GitHubProjects;
