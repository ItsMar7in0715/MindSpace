import { useState } from 'react'

const products = [
  {
    id: 1,
    name: 'Terapia Individual Online',
    description: 'Sesión de 60 minutos con un psicólogo certificado. Aborda ansiedad, depresión, estrés laboral y manejo emocional desde la comodidad de tu hogar.',
    price: 75000,
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&h=400&fit=crop',
    features: ['60 minutos', 'Videollamada privada', 'Seguimiento semanal', 'Plan personalizado'],
  },
  {
    id: 2,
    name: 'Taller de Mindfulness Grupal',
    description: 'Programa de 4 sesiones grupales de meditación y mindfulness. Aprende técnicas de respiración, atención plena y reducción del estrés.',
    price: 120000,
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=400&fit=crop',
    features: ['4 sesiones', 'Grupos reducidos', 'Material incluido', 'Certificado'],
  },
  {
    id: 3,
    name: 'Pack Bienestar Digital',
    description: 'Acceso completo a nuestra plataforma con meditaciones guiadas, ejercicios de journaling, audios de relajación y seguimiento de hábitos por 30 días.',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&h=400&fit=crop',
    features: ['30 días acceso', '+50 meditaciones', 'Journaling diario', 'Comunidad'],
  },
]

const Store = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [showPayment, setShowPayment] = useState(false)

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price)
  }

  const handleBuy = (product) => {
    setSelectedProduct(product)
    setShowPayment(true)
  }

  const closePayment = () => {
    setShowPayment(false)
    setSelectedProduct(null)
  }

  return (
    <div style={styles.page}>
      <section style={styles.header}>
        <h1 style={styles.title}>Tienda en Línea</h1>
        <p style={styles.subtitle}>
          Invierte en tu bienestar mental. Elige el servicio que mejor se adapte a tus necesidades.
        </p>
      </section>

      <section style={styles.productsSection}>
        <div style={styles.container}>
          <div style={styles.productsGrid}>
            {products.map(product => (
              <div key={product.id} style={styles.productCard}>
                <div style={styles.productImgWrap}>
                  <img src={product.image} alt={product.name} style={styles.productImg} />
                  <div style={styles.priceBadge}>{formatPrice(product.price)}</div>
                </div>
                <div style={styles.productInfo}>
                  <h3 style={styles.productName}>{product.name}</h3>
                  <p style={styles.productDesc}>{product.description}</p>
                  <ul style={styles.featuresList}>
                    {product.features.map((f, i) => (
                      <li key={i} style={styles.featureItem}>✓ {f}</li>
                    ))}
                  </ul>
                  <button 
                    style={styles.buyBtn} 
                    onClick={() => handleBuy(product)}
                  >
                    Compra Ahora
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de pago */}
      {showPayment && selectedProduct && (
        <div style={styles.modalOverlay} onClick={closePayment}>
          <div style={styles.modal} onClick={e => e.stopPropagation()}>
            <button style={styles.closeBtn} onClick={closePayment}>✕</button>
            <h2 style={styles.modalTitle}>Métodos de Pago</h2>
            <p style={styles.modalProduct}>
              <strong>{selectedProduct.name}</strong> — {formatPrice(selectedProduct.price)}
            </p>
            
            <div style={styles.paymentMethods}>
              {/* Método 1: Tarjeta */}
              <div style={styles.paymentCard}>
                <div style={styles.paymentIcon}>💳</div>
                <h4 style={styles.paymentName}>Tarjeta de Crédito/Débito</h4>
                <p style={styles.paymentDesc}>
                  Paga de forma segura con Visa, Mastercard o American Express.
                </p>
                <div style={styles.paymentForm}>
                  <input type="text" placeholder="Número de tarjeta" style={styles.input} />
                  <div style={styles.inputRow}>
                    <input type="text" placeholder="MM/AA" style={{...styles.input, flex: 1}} />
                    <input type="text" placeholder="CVV" style={{...styles.input, flex: 1}} />
                  </div>
                  <input type="text" placeholder="Nombre del titular" style={styles.input} />
                  <button style={styles.payBtn}>Pagar {formatPrice(selectedProduct.price)}</button>
                </div>
              </div>

              {/* Método 2: Transferencia / Nequi */}
              <div style={styles.paymentCard}>
                <div style={styles.paymentIcon}>📱</div>
                <h4 style={styles.paymentName}>Nequi / Transferencia Bancaria</h4>
                <p style={styles.paymentDesc}>
                  Realiza tu pago a través de Nequi o transferencia bancaria directa.
                </p>
                <div style={styles.transferInfo}>
                  <div style={styles.transferItem}>
                    <span style={styles.transferLabel}>Nequi:</span>
                    <span style={styles.transferValue}>300 123 4567</span>
                  </div>
                  <div style={styles.transferItem}>
                    <span style={styles.transferLabel}>Banco:</span>
                    <span style={styles.transferValue}>Bancolombia</span>
                  </div>
                  <div style={styles.transferItem}>
                    <span style={styles.transferLabel}>Cuenta:</span>
                    <span style={styles.transferValue}>1234-5678-9012</span>
                  </div>
                  <div style={styles.transferItem}>
                    <span style={styles.transferLabel}>Titular:</span>
                    <span style={styles.transferValue}>MindSpace S.A.S</span>
                  </div>
                </div>
                <p style={styles.transferNote}>
                  Envía el comprobante de pago a pagos@mindspace.co para confirmar tu compra.
                </p>
                <button style={styles.payBtn}>Confirmar Transferencia</button>
              </div>
            </div>
          </div>
        </div>
      )}
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
  productsSection: {
    padding: '80px 0',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
    gap: '35px',
  },
  productCard: {
    background: '#ffffff',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 5px 30px rgba(7, 49, 104, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: '1px solid rgba(81,98,173,0.08)',
  },
  productImgWrap: {
    position: 'relative',
    width: '100%',
    height: '220px',
    overflow: 'hidden',
  },
  productImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  priceBadge: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    background: 'linear-gradient(135deg, #5162AD, #3188BB)',
    color: '#ffffff',
    padding: '8px 16px',
    borderRadius: '20px',
    fontWeight: '700',
    fontSize: '0.95rem',
  },
  productInfo: {
    padding: '30px',
  },
  productName: {
    fontSize: '1.4rem',
    fontWeight: '700',
    color: '#073168',
    fontFamily: "'Outfit', sans-serif",
    marginBottom: '12px',
  },
  productDesc: {
    color: '#6b7280',
    fontSize: '0.95rem',
    lineHeight: '1.7',
    marginBottom: '20px',
  },
  featuresList: {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 25px 0',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '8px',
  },
  featureItem: {
    color: '#5162AD',
    fontSize: '0.9rem',
    fontWeight: '500',
  },
  buyBtn: {
    width: '100%',
    padding: '14px',
    background: 'linear-gradient(135deg, #5162AD, #3188BB)',
    color: '#ffffff',
    border: 'none',
    borderRadius: '12px',
    fontSize: '1.05rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  // Modal
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(7, 49, 104, 0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000,
    padding: '20px',
    backdropFilter: 'blur(5px)',
  },
  modal: {
    background: '#ffffff',
    borderRadius: '20px',
    padding: '40px',
    maxWidth: '700px',
    width: '100%',
    maxHeight: '90vh',
    overflowY: 'auto',
    position: 'relative',
  },
  closeBtn: {
    position: 'absolute',
    top: '15px',
    right: '20px',
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: '#6b7280',
  },
  modalTitle: {
    fontSize: '1.8rem',
    fontWeight: '700',
    color: '#073168',
    fontFamily: "'Outfit', sans-serif",
    marginBottom: '10px',
  },
  modalProduct: {
    color: '#6b7280',
    fontSize: '1rem',
    marginBottom: '30px',
    paddingBottom: '20px',
    borderBottom: '1px solid #e5e7eb',
  },
  paymentMethods: {
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
  },
  paymentCard: {
    padding: '25px',
    borderRadius: '16px',
    border: '1px solid rgba(81,98,173,0.15)',
    background: 'rgba(81,98,173,0.02)',
  },
  paymentIcon: {
    fontSize: '2rem',
    marginBottom: '10px',
  },
  paymentName: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#073168',
    marginBottom: '8px',
    fontFamily: "'Outfit', sans-serif",
  },
  paymentDesc: {
    color: '#6b7280',
    fontSize: '0.9rem',
    marginBottom: '20px',
  },
  paymentForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  input: {
    padding: '12px 16px',
    borderRadius: '10px',
    border: '1px solid #e5e7eb',
    fontSize: '0.95rem',
    outline: 'none',
    width: '100%',
  },
  inputRow: {
    display: 'flex',
    gap: '12px',
  },
  payBtn: {
    padding: '14px',
    background: 'linear-gradient(135deg, #5162AD, #3188BB)',
    color: '#ffffff',
    border: 'none',
    borderRadius: '10px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '5px',
  },
  transferInfo: {
    background: '#ffffff',
    padding: '20px',
    borderRadius: '12px',
    marginBottom: '15px',
  },
  transferItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 0',
    borderBottom: '1px solid #f0f4ff',
  },
  transferLabel: {
    color: '#6b7280',
    fontSize: '0.9rem',
  },
  transferValue: {
    color: '#073168',
    fontWeight: '600',
    fontSize: '0.9rem',
  },
  transferNote: {
    color: '#6b7280',
    fontSize: '0.85rem',
    fontStyle: 'italic',
    marginBottom: '15px',
  },
}

export default Store
