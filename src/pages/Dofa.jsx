const Dofa = () => {
  return (
    <div style={styles.page}>
      <section style={styles.header}>
        <h1 style={styles.title}>Matriz DOFA</h1>
        <p style={styles.subtitle}>
          Análisis estratégico de MindSpace — Servicios de Salud Mental
        </p>
      </section>

      <section style={styles.matrixSection}>
        <div style={styles.container}>
          <div style={styles.matrix}>
            {/* Debilidades */}
            <div style={{...styles.quadrant, ...styles.debilidades}}>
              <div style={styles.quadrantHeader}>
                <span style={styles.quadrantIcon}>⚠️</span>
                <h3 style={styles.quadrantTitle}>Debilidades</h3>
              </div>
              <ul style={styles.list}>
                <li style={styles.listItem}>Empresa nueva sin reconocimiento de marca en el mercado</li>
                <li style={styles.listItem}>Presupuesto limitado para campañas de marketing iniciales</li>
                <li style={styles.listItem}>Dependencia de la conectividad a internet para servicios online</li>
                <li style={styles.listItem}>Equipo pequeño con capacidad limitada de atención simultánea</li>
              </ul>
            </div>

            {/* Oportunidades */}
            <div style={{...styles.quadrant, ...styles.oportunidades}}>
              <div style={styles.quadrantHeader}>
                <span style={styles.quadrantIcon}>🚀</span>
                <h3 style={styles.quadrantTitle}>Oportunidades</h3>
              </div>
              <ul style={styles.list}>
                <li style={styles.listItem}>Creciente conciencia social sobre la importancia de la salud mental</li>
                <li style={styles.listItem}>Aumento de la demanda de servicios de terapia online post-pandemia</li>
                <li style={styles.listItem}>Alianzas con empresas para programas de bienestar laboral</li>
                <li style={styles.listItem}>Mercado digital en expansión con herramientas de e-learning</li>
              </ul>
            </div>

            {/* Fortalezas */}
            <div style={{...styles.quadrant, ...styles.fortalezas}}>
              <div style={styles.quadrantHeader}>
                <span style={styles.quadrantIcon}>💪</span>
                <h3 style={styles.quadrantTitle}>Fortalezas</h3>
              </div>
              <ul style={styles.list}>
                <li style={styles.listItem}>Equipo de profesionales certificados en psicología y bienestar</li>
                <li style={styles.listItem}>Plataforma digital accesible desde cualquier dispositivo</li>
                <li style={styles.listItem}>Enfoque integral: terapia + mindfulness + herramientas digitales</li>
                <li style={styles.listItem}>Precios accesibles y diversos planes de servicio</li>
              </ul>
            </div>

            {/* Amenazas */}
            <div style={{...styles.quadrant, ...styles.amenazas}}>
              <div style={styles.quadrantHeader}>
                <span style={styles.quadrantIcon}>🛑</span>
                <h3 style={styles.quadrantTitle}>Amenazas</h3>
              </div>
              <ul style={styles.list}>
                <li style={styles.listItem}>Alta competencia de plataformas internacionales consolidadas</li>
                <li style={styles.listItem}>Estigma social que aún rodea los servicios de salud mental</li>
                <li style={styles.listItem}>Regulaciones y normativas cambiantes en el sector salud</li>
                <li style={styles.listItem}>Crisis económica que reduce el gasto en servicios no esenciales</li>
              </ul>
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
  header: {
    textAlign: 'center',
    padding: '60px 20px',
    background: 'linear-gradient(135deg, rgba(81,98,173,0.08), rgba(49,136,187,0.08))',
  },
  title: {
    fontSize: '2.8rem',
    fontWeight: '800',
    color: '#073168',
    fontFamily: "'Outfit', sans-serif",
    marginBottom: '15px',
  },
  subtitle: {
    color: '#6b7280',
    fontSize: '1.1rem',
    maxWidth: '600px',
    margin: '0 auto',
  },
  matrixSection: {
    padding: '80px 0',
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 20px',
  },
  matrix: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '25px',
  },
  quadrant: {
    padding: '30px',
    borderRadius: '16px',
    border: '2px solid',
  },
  debilidades: {
    background: 'rgba(239, 68, 68, 0.04)',
    borderColor: 'rgba(239, 68, 68, 0.2)',
  },
  oportunidades: {
    background: 'rgba(34, 197, 94, 0.04)',
    borderColor: 'rgba(34, 197, 94, 0.2)',
  },
  fortalezas: {
    background: 'rgba(59, 130, 246, 0.04)',
    borderColor: 'rgba(59, 130, 246, 0.2)',
  },
  amenazas: {
    background: 'rgba(245, 158, 11, 0.04)',
    borderColor: 'rgba(245, 158, 11, 0.2)',
  },
  quadrantHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '20px',
  },
  quadrantIcon: {
    fontSize: '1.5rem',
  },
  quadrantTitle: {
    fontSize: '1.3rem',
    fontWeight: '700',
    color: '#073168',
    fontFamily: "'Outfit', sans-serif",
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  listItem: {
    color: '#4b5563',
    fontSize: '0.95rem',
    lineHeight: '1.6',
    paddingLeft: '15px',
    borderLeft: '3px solid rgba(81, 98, 173, 0.3)',
  },
}

export default Dofa
