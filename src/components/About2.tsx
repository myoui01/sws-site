import React from 'react';

const About2: React.FC = () => {
  return (
    <section id="about" className="about-layout3 bg-light pb-90 pt-90">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
            <div className="heading-layout2 text-center mb-90">
              <h2 className="heading__subtitle">Transforme seu ambiente com nossos serviços especializados</h2>
              <h3 className="heading__title">Serviços Terceirizados de Limpeza, Jardinagem & Conservação</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-5 col-xl-5">
            <div className="about__img">
              <img src="assets/images/about/2.jpg" alt="serviços de limpeza e jardinagem" />
              {/* <div className="cta-banner">
                <h3 className="cta__subtitle">Deixe conosco</h3>
                <h4 className="cta__title">Todos os cuidados que seu ambiente merece!</h4>
                <ul className="list-items-layout5 list-unstyled mb-0">
                  <li className="list__item">Equipe Especializada</li>
                  <li className="list__item">Equipamentos Modernos</li>
                  <li className="list__item">Atendimento Personalizado</li>
                </ul>
              </div> */}
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-7 col-xl-6 offset-xl-1">
            <div className="about__text">
              <div className="heading-layout1 mb-50">
                <h2 className="heading__subtitle color-primary">Cuidado completo para seus espaços corporativos</h2>
                <h3 className="heading__title mb-40">Oferecendo os melhores padrões em serviços de manutenção predial e paisagismo.</h3>
                <p className="heading__desc" style={{ color: '#2a4d55 !important' }}>Somos especializados em fornecer soluções completas de limpeza, jardinagem e conservação predial. 
                  Nossa equipe qualificada garante ambientes sempre impecáveis, áreas verdes bem cuidadas e instalações 
                  conservadas, criando espaços que transmitem profissionalismo e bem-estar.</p>
              </div>
              
              <a href="https://wa.me/5511984286333" className="btn btn__primary btn__primary-style2 btn__xl mb-40">
                <span>Solicitar Orçamento</span>
                <i className="icon-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About2; 