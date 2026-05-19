const teamMembers = [
  {
    id: 1,
    name: 'Nombre Completo Integrante 1',
    role: 'Desarrollador / Rol',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
  },
  {
    id: 2,
    name: 'Nombre Completo Integrante 2',
    role: 'Diseñador /l',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face',
  },
  {
    id: 3,
    name: 'Nombre Completo ',
    role: 'Investigador / Rol',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
  },
]

const Contact = () => {
  return (
    <div style={styles.page}>
      <section style={styles.header}>
        <h1 style={styles.title}>Nuestro Equipo</h1>
        <p style={styles.subtitle}>
          Conoce a los integrantes del grupo que hicieron posible este proyecto.
        </p>
      </section>

      <section style={styles.teamSection}>
        <div style={styles.container}>
          <div style={styles.teamGrid}>
            {teamMembers.map(member => (
              <div key={member.id} style={styles.memberCard}>
                <div style={styles.imgWrap}>
                  <img src={member.image} alt={member.name} style={styles.memberImg} />
                </div>
                <h3 style={styles.memberName}>{member.name}</h3>
                <p style={styles.memberRole}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.contactInfo}>
        <div style={styles.container}>
          <h2 style={styles.contactTitle}>Contáctanos</h2>
          <div style={styles.contactGrid}>
            <div style={styles.contactCard}>
              <span style={styles.contactIcon}>📧</span>
              <h4 style={styles.contactLabel}>Email</h4>
              <p style={styles.contactValue}>info@mindspace.co</p>
            </div>
            <div style={styles.contactCard}>
              <span style={styles.contactIcon}>📞</span>
              <h4 style={styles.contactLabel}>Teléfono</h4>
              <p style={styles.contactValue}>+57 300 123 4567</p>
            </div>
            <div style={styles.contactCard}>
              <span style={styles.contactIcon}>📍</span>
              <h4 style={styles.contactLabel}>Ubicación</h4>
              <p style={styles.contactValue}>Bogotá, Colombia</p>
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
  teamSection: {
    padding: '80px 0',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  teamGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '40px',
    justifyItems: 'center',
  },
  memberCard: {
    textAlign: 'center',
    padding: '40px 30px',
    borderRadius: '20px',
    background: '#ffffff',
    boxShadow: '0 5px 30px rgba(7, 49, 104, 0.08)',
    border: '1px solid rgba(81,98,173,0.08)',
    width: '100%',
    maxWidth: '320px',
    transition: 'transform 0.3s ease',
  },
  imgWrap: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    overflow: 'hidden',
    margin: '0 auto 20px',
    border: '4px solid #79A4E9',
    boxShadow: '0 5px 20px rgba(81, 98, 173, 0.2)',
  },
  memberImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  memberName: {
    fontSize: '1.3rem',
    fontWeight: '700',
    color: '#073168',
    fontFamily: "'Outfit', sans-serif",
    marginBottom: '8px',
  },
  memberRole: {
    color: '#5162AD',
    fontSize: '0.95rem',
    fontWeight: '500',
  },
  contactInfo: {
    padding: '80px 0',
    background: '#f0f4ff',
  },
  contactTitle: {
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: '700',
    color: '#073168',
    fontFamily: "'Outfit', sans-serif",
    marginBottom: '40px',
  },
  contactGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
  },
  contactCard: {
    textAlign: 'center',
    padding: '35px 25px',
    borderRadius: '16px',
    background: '#ffffff',
    boxShadow: '0 3px 15px rgba(7, 49, 104, 0.06)',
  },
  contactIcon: {
    fontSize: '2.5rem',
    display: 'block',
    marginBottom: '15px',
  },
  contactLabel: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#073168',
    marginBottom: '8px',
    fontFamily: "'Outfit', sans-serif",
  },
  contactValue: {
    color: '#6b7280',
    fontSize: '0.95rem',
  },
}

export default Contact
