import React, { useState } from 'react';

const useScrollToSection = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return scrollToSection;
};

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollToSection = useScrollToSection();

  return (
    <header className="header header-layout1">
      <nav className="navbar navbar-expand-lg sticky-navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">
            <img src="./favicon.svg" className="logo-dark" alt="logo" style={{ width: 30, marginLeft: 30 }} />
            <span className="logotext" style={{ marginLeft: 10 }}>GRUPO  SWS</span>          
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            aria-controls="mainNavigation"
            onClick={() => setMenuOpen(true)}
          >
          <span className="menu-lines"><span></span></span>
          </button>
          <div
            className={`collapse navbar-collapse${menuOpen ? ' menu-opened' : ''}`}
            id="mainNavigation"
            style={{ paddingLeft: 200 }}
          >
            <ul className="navbar-nav mx-auto">
              <li className="nav__item has-dropdown">
                <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="nav__item-link active">Home</a>
              </li>
              <li className="nav__item has-dropdown">
                <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="nav__item-link">Sobre nós</a>
              </li>
              <li className="nav__item has-dropdown">
                <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="dropdown-toggle nav__item-link" style={{ paddingRight: 15 }}>Serviços</a>
                <ul className="dropdown-menu wide-dropdown-menu">
                  <li className="nav__item">
                    <div className="row mx-0">
                      <div className="col-sm-6 dropdown-menu-col">
                        <a href="https://www.instagram.com/grupo_sws" className="nav__item-link dropdown-menu-title">Serviços</a>
                        <ul className="nav flex-column">
                          <li className="nav__item">
                            <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="nav__item-link">Controladoria de Acesso</a>
                          </li>
                          <li className="nav__item">
                            <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="nav__item-link">Manutenção e Limpeza</a>
                          </li>
                          <li className="nav__item">
                            <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="nav__item-link">Outros terceirizados</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="nav__item has-dropdown">
                <a href="https://www.instagram.com/grupo_sws" target="_blank" rel="noopener noreferrer" className="nav__item-link">Redes</a>
              </li>
              <li className="nav__item has-dropdown">
                <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="nav__item-link">Apresentação</a>
              </li>
            </ul>
            <button
              className="close-mobile-menu d-block d-lg-none"
              onClick={() => setMenuOpen(false)}
              aria-label="Fechar menu"
              style={{ background: "transparent", border: "none" }} 
            >
              <i className="fas fa-times" style={{ color: "#222", fontSize: 17 }}></i> 
            </button>
          </div>
          <ul className="navbar-actions d-none d-xl-flex align-items-center list-unstyled mb-0">
            <li><button className="action__btn action__btn-search"><i className="icon-search"></i></button></li>
            <li>
              <a href="https://www.instagram.com/grupo_sws" target="_blank" rel="noopener noreferrer" className="action__btn action__btn-cart">
                <i className="fab fa-instagram" style={{ fontSize: 16, marginLeft: -5 }}></i>
              </a>
            </li>
            <li>
              <a href="https://wa.me/5511984286333" className="btn btn__white action__btn action__btn-contact">Contato</a>
            </li>
            <li>
              <div className="phone__number">
                <div className="phone__icon">
                  <i className="icon-phone"></i>
                </div>
                <div style={{ marginRight: 40 }}>
                  <a className="phone__link d-block" href="tel:5511984286333" style={{ fontSize: 12 }}>11 98428-6333</a>
                  <a className="email__link d-block" href="https://www.instagram.com/grupo_sws">@gruposws_</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;