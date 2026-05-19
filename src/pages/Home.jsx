import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Tu Espacio para el<br/><span style={styles.highlight}>Bienestar Mental</span></h1>
          <p style={styles.heroText}>
            En MindSpace creemos que la salud mental es tan importante como la salud física. 
            Ofrecemos servicios profesionales de terapia, talleres y herramientas para ayudarte 
            a encontrar equilibrio, paz y felicidad en tu vida diaria.
          </p>
          <div style={styles.heroBtns}>
            <Link to="/tienda" style={styles.btnPrimary}>Ver Servicios</Link>
            <Link to="/dofa" style={styles.btnSecondary}>Matriz DOFA</Link>
          </div>
        </div>
        <div style={styles.heroImage}>
          <img 
            src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=500&fit=crop" 
            alt="Bienestar mental" 
            style={styles.heroImg}
          />
        </div>
      </section>

      {/* Servicios Destacados */}
      <section style={styles.services}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Nuestros Servicios</h2>
          <p style={styles.sectionSubtitle}>
            Descubre cómo podemos ayudarte a mejorar tu bienestar emocional y mental
          </p>
          
          <div style={styles.servicesGrid}>
            <div style={styles.serviceCard}>
              <div style={styles.serviceImgWrap}>
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop" 
                  alt="Terapia Individual" 
                  style={styles.serviceImg}
                />
              </div>
              <div style={styles.serviceInfo}>
                <h3 style={styles.serviceTitle}>Terapia Individual</h3>
                <p style={styles.serviceDesc}>
                  Sesiones personalizadas con profesionales certificados para abordar 
                  ansiedad, depresión, estrés y más.
                </p>
              </div>
            </div>

            <div style={styles.serviceCard}>
              <div style={styles.serviceImgWrap}>
                <img 
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop" 
                  alt="Talleres Grupales" 
                  style={styles.serviceImg}
                />
              </div>
              <div style={styles.serviceInfo}>
                <h3 style={styles.serviceTitle}>Talleres Grupales</h3>
                <p style={styles.serviceDesc}>
                  Espacios seguros de aprendizaje colectivo donde compartir experiencias 
                  y adquirir herramientas prácticas.
                </p>
              </div>
            </div>

            <div style={styles.serviceCard}>
              <div style={styles.serviceImgWrap}>
                <img 
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop" 
                  alt="Meditación Guiada" 
                  style={styles.serviceImg}
                />
              </div>
              <div style={styles.serviceInfo}>
                <h3 style={styles.serviceTitle}>Meditación Guiada</h3>
                <p style={styles.serviceDesc}>
                  Programas de mindfulness y meditación para reducir el estrés 
                  y mejorar tu concentración diaria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section style={styles.whyUs}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>¿Por qué MindSpace?</h2>
          <div style={styles.statsGrid}>
            <div style={styles.statCard}>
              <span style={styles.statNumber}>500+</span>
              <span style={styles.statLabel}>Pacientes Atendidos</span>
            </div>
            <div style={styles.statCard}>
              <span style={styles.statNumber}>15+</span>
              <span style={styles.statLabel}>Profesionales</span>
            </div>
            <div style={styles.statCard}>
              <span style={styles.statNumber}>98%</span>
              <span style={styles.statLabel}>Satisfacción</span>
            </div>
            <div style={styles.statCard}>
              <span style={styles.statNumber}>24/7</span>
              <span style={styles.statLabel}>Soporte</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const styles = {
  page: {
    paddingTop: '80px',
  },
  hero: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '80px 5%',
    maxWidth: '1200px',
    margin: '0 auto',
    gap: '60px',
    flexWrap: 'wrap',
  },
  heroContent: {
    flex: '1',
    minWidth: '300px',
  },
  heroTitle: {
    fontSize: '3.2rem',
    fontWeight: '800',
    lineHeight: '1.2',
    marginBottom: '20px',
    color: '#073168',
    fontFamily: "'Outfit', sans-serif",
  },
  highlight: {
    background: 'linear-gradient(135deg, #5162AD, #3188BB)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  heroText: {
    fontSize: '1.1rem',
    color: '#6b7280',
    lineHeight: '1.8',
    marginBottom: '35px',
    maxWidth: '500px',
  },
  heroBtns: {
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap',
  },
  btnPrimary: {
    background: 'linear-gradient(135deg, #5162AD, #3188BB)',
    color: '#ffffff',
    padding: '14px 32px',
    border: 'none',
    borderRadius: '30px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'inline-block',
    textDecoration: 'none',
  },
  btnSecondary: {
    background: 'transparent',
    color: '#5162AD',
    padding: '12px 28px',
    border: '2px solid #5162AD',
    borderRadius: '30px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'inline-block',
    textDecoration: 'none',
  },
  heroImage: {
    flex: '1',
    minWidth: '300px',
    display: 'flex',
    justifyContent: 'center',
  },
  heroImg: {
    borderRadius: '20px',
    boxShadow: '0 20px 60px rgba(81, 98, 173, 0.3)',
    maxWidth: '100%',
    height: 'auto',
    maxHeight: '450px',
    objectFit: 'cover',
  },
  services: {
    padding: '100px 0',
    background: '#f0f4ff',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color: '#073168',
    fontFamily: "'Outfit', sans-serif",
  },
  sectionSubtitle: {
    textAlign: 'center',
    color: '#6b7280',
    fontSize: '1.1rem',
    marginBottom: '50px',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '30px',
  },
  serviceCard: {
    background: '#ffffff',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(7, 49, 104, 0.08)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  serviceImgWrap: {
    width: '100%',
    height: '200px',
    overflow: 'hidden',
  },
  serviceImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  serviceInfo: {
    padding: '25px',
  },
  serviceTitle: {
    fontSize: '1.3rem',
    fontWeight: '600',
    marginBottom: '10px',
    color: '#073168',
    fontFamily: "'Outfit', sans-serif",
  },
  serviceDesc: {
    color: '#6b7280',
    fontSize: '0.95rem',
    lineHeight: '1.7',
  },
  whyUs: {
    padding: '100px 0',
    background: '#ffffff',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '30px',
    marginTop: '50px',
  },
  statCard: {
    textAlign: 'center',
    padding: '40px 20px',
    borderRadius: '16px',
    background: 'linear-gradient(135deg, rgba(81,98,173,0.05), rgba(49,136,187,0.05))',
    border: '1px solid rgba(81,98,173,0.1)',
  },
  statNumber: {
    display: 'block',
    fontSize: '2.5rem',
    fontWeight: '800',
    color: '#5162AD',
    fontFamily: "'Outfit', sans-serif",
    marginBottom: '8px',
  },
  statLabel: {
    color: '#6b7280',
    fontSize: '1rem',
  },
}

export default Home
