import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer" style={{ background: "#f8f9fa", padding: "32px 0" }}>
      <div className="container text-center">
        <img src="assets/images/logo/logo2.svg" alt="Grupo SWS" style={{ width: 120, marginBottom: 16 }} />
        <div style={{ marginBottom: 12, fontWeight: 700, fontSize: 23, color: 'black' }}>GRUPO SWS</div>
        <div style={{ marginBottom: 8 }}>
          <a href="mailto:comercial@swsseguranca.com.br" style={{ color: "#315f68", textDecoration: "none" }}>
            comercial@swsseguranca.com.br
          </a>
          {" | "}
          <a href="tel:00201061245741" style={{ color: "#315f68", textDecoration: "none" }}>
            11 5686-5049
          </a>
        </div>
        <div style={{ marginBottom: 8 }}>
          <a href="https://www.instagram.com/grupo_sws" target="_blank" rel="noopener noreferrer" style={{ margin: "0 8px", color: "#315f68" }}>
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://wa.me/5511984286333" target="_blank" rel="noopener noreferrer" style={{ margin: "0 8px", color: "#315f68" }}>
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
        <div style={{ fontSize: 14, color: "#888" }}>
          &copy; {new Date().getFullYear()} Grupo SWS. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;