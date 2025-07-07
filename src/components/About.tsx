import React from 'react';

const About: React.FC = () => {
  return (
    <section className="about-layout3 bg-dark pb-90">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
            <div className="heading-layout2 heading-light text-center mb-90">
              <h2 className="heading__subtitle">Encontre paz com nosso sistema de segurança inteligente</h2>
              <h3 className="heading__title">Soluções Integradas de Segurança & Monitoramento</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-7 col-xl-6">
            <div className="about__text">
              <div className="heading-layout1 heading-light mb-50">
                <h2 className="heading__subtitle color-primary">Controle total sobre a segurança de seus negócios</h2>
                <h3 className="heading__title mb-40">Fornecendo as melhores práticas para protocolos de segurança da indústria.</h3>
                <p className="heading__desc">Podemos fazer parceria com você para projetar e implementar um sistema integrado escalável ao mesmo tempo em que ganha eficiência em
                  seus sistemas e equipes, padronizando plataformas e implementando automação de sistemas de condução de eventos e
                  soluções poderosas</p>
              </div>
              <a href="#" className="btn btn__primary btn__primary-style2 btn__xl mb-40">
                <span>Saiba mais</span>
                <i className="icon-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-5 col-xl-5 offset-xl-1">
            <div className="about__img">
              <img src="assets/images/about/1.png" alt="about" />
              <div className="cta-banner">
                <h3 className="cta__subtitle">Não se preocupe</h3>
                <h4 className="cta__title">Todo o essencial para garantir a sua segurança!</h4>
                <ul className="list-items-layout5 list-unstyled mb-0">
                  <li className="list__item">Fácil de Configurar</li>
                  <li className="list__item">Usabilidade intuitiva</li>
                  <li className="list__item">Suporte 24 horas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;