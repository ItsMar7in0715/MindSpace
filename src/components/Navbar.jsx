import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/tienda', label: 'Tienda' },
    { path: '/contacto', label: 'Contacto' },
  ]

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <Link to="/" style={styles.logo}>
          <span style={styles.logoIcon}>🧠</span>
          <span style={styles.logoText}>MindSpace</span>
        </Link>

        <button 
          style={styles.menuBtn} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span style={{...styles.menuLine, ...(menuOpen ? styles.menuLine1Open : {})}}></span>
          <span style={{...styles.menuLine, ...(menuOpen ? styles.menuLine2Open : {})}}></span>
          <span style={{...styles.menuLine, ...(menuOpen ? styles.menuLine3Open : {})}}></span>
        </button>

        <ul style={{...styles.navLinks, ...(menuOpen ? styles.navLinksOpen : {})}}>
          {navLinks.map(link => (
            <li key={link.path}>
              <Link 
                to={link.path} 
                style={{
                  ...styles.navLink,
                  ...(location.pathname === link.path ? styles.activeLink : {})
                }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 2px 20px rgba(7, 49, 104, 0.08)',
    zIndex: 1000,
    padding: '15px 0',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    textDecoration: 'none',
  },
  logoIcon: {
    fontSize: '2rem',
  },
  logoText: {
    fontSize: '1.5rem',
    fontWeight: '700',
    fontFamily: "'Outfit', sans-serif",
    background: 'linear-gradient(135deg, #5162AD, #3188BB)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  menuBtn: {
    display: 'none',
    flexDirection: 'column',
    gap: '5px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '5px',
    '@media (max-width: 768px)': {
      display: 'flex',
    },
  },
  menuLine: {
    width: '25px',
    height: '3px',
    background: '#073168',
    borderRadius: '3px',
    transition: 'all 0.3s ease',
  },
  menuLine1Open: { transform: 'rotate(45deg) translate(5px, 5px)' },
  menuLine2Open: { opacity: 0 },
  menuLine3Open: { transform: 'rotate(-45deg) translate(7px, -6px)' },
  navLinks: {
    display: 'flex',
    gap: '35px',
    alignItems: 'center',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navLinksOpen: {},
  navLink: {
    textDecoration: 'none',
    color: '#073168',
    fontWeight: '500',
    fontSize: '1rem',
    transition: 'color 0.3s ease',
    position: 'relative',
    padding: '5px 0',
  },
  activeLink: {
    color: '#5162AD',
    fontWeight: '600',
  },
}

export default Navbar
