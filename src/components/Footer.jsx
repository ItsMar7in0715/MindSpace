import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.grid}>
          {/* Logo y descripción */}
          <div style={styles.column}>
            <div style={styles.logoSection}>
              <span style={styles.logoIcon}>🧠</span>
              <span style={styles.logoText}>MindSpace</span>
            </div>
            <p style={styles.description}>
              Tu espacio seguro para el bienestar mental. Cuidamos de tu salud emocional con profesionales dedicados.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div style={styles.column}>
            <h4 style={styles.columnTitle}>Enlaces</h4>
            <ul style={styles.linkList}>
              <li><Link to="/" style={styles.link}>Inicio</Link></li>
              <li><Link to="/tienda" style={styles.link}>Tienda</Link></li>
              <li><Link to="/contacto" style={styles.link}>Contacto</Link></li>
              <li><Link to="/dofa" style={styles.link}>Matriz DOFA</Link></li>
            </ul>
          </div>

          {/* Servicios */}
          <div style={styles.column}>
            <h4 style={styles.columnTitle}>Servicios</h4>
            <ul style={styles.linkList}>
              <li style={styles.linkItem}>Terapia Individual</li>
              <li style={styles.linkItem}>Talleres Grupales</li>
              <li style={styles.linkItem}>Meditación Guiada</li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div style={styles.column}>
            <h4 style={styles.columnTitle}>Síguenos</h4>
            <div style={styles.socialLinks}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon} title="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon} title="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon} title="Twitter">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer" style={styles.socialIcon} title="WhatsApp">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div style={styles.bottom}>
          <p style={styles.copyright}>
            © 2026 MindSpace. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    background: 'linear-gradient(135deg, #073168, #20269A)',
    color: '#ffffff',
    padding: '60px 0 30px',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '40px',
    marginBottom: '40px',
  },
  column: {},
  logoSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '15px',
  },
  logoIcon: {
    fontSize: '1.8rem',
  },
  logoText: {
    fontSize: '1.4rem',
    fontWeight: '700',
    fontFamily: "'Outfit', sans-serif",
    color: '#ffffff',
  },
  description: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: '0.95rem',
    lineHeight: '1.7',
  },
  columnTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    marginBottom: '15px',
    color: '#79A4E9',
    fontFamily: "'Outfit', sans-serif",
  },
  linkList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  link: {
    color: 'rgba(255,255,255,0.7)',
    textDecoration: 'none',
    fontSize: '0.95rem',
    transition: 'color 0.3s ease',
  },
  linkItem: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: '0.95rem',
  },
  socialLinks: {
    display: 'flex',
    gap: '15px',
  },
  socialIcon: {
    color: 'rgba(255,255,255,0.7)',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.1)',
  },
  bottom: {
    borderTop: '1px solid rgba(255,255,255,0.1)',
    paddingTop: '25px',
    textAlign: 'center',
  },
  copyright: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: '0.9rem',
  },
}

export default Footer
