import React from 'react';

const Services: React.FC = () => {
  return (
    <section className="services-layout2 pb-70">
      <div className="container">
        <div className="row heading mb-70">
          <div className="col-12">
            <h2 className="heading__subtitle">Encontre paz com monitoramento 24 horas por dia</h2>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-5">
            <h3 className="heading__title">Sistemas de segurança inteligentes que se adaptam ao seu negócio!</h3>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-1">
            <p className="heading__desc">
              Somos especializados na terceirização de logística de profissionais para
              controladoria de acesso, limpeza, portaria e recepção, com foco em edifícios comerciais, obras e condomínios.
            </p>
            <div className="d-flex flex-wrap align-items-center mt-30">
              <a href="https://wa.me/5511984286333" className="btn btn__secondary btn__xl my-1 mr-30">
                <span>Como funciona? </span>
                <i className="icon-arrow-right"></i>
              </a>
              <a href="https://wa.me/5511984286333" className="btn btn__secondary btn__link my-1">
                <i className="icon-arrow-right icon-outlined"></i>
                <span>Outros serviços</span>
              </a>
            </div>
          </div>
        </div>
        <div className="services-wrapper">
          <div className="row row-gutter-0">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="service-item">
                <div className="service__body">
                  <div className="service__icon">
                    <i className="icon-smart-control"></i>
                  </div>
                  <h4 className="service__title">Controladoria de Acesso</h4>
                  <p className="service__desc">
                    Aumentar a eficiência do serviço de portaria e permitir um melhor controle de acesso é um sonho para todos os síndicos.
                  </p>
                  <a href="services-single.html" className="btn btn__primary btn__link">
                    <i className="icon-arrow-right icon-filled"></i>
                    <span>Saiba mais</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="service-item">
                <div className="service__body">
                  <div className="service__icon">
                    <i className="icon-fire-alarm"></i>
                  </div>
                  <h4 className="service__title">Conservação & <br /> Limpeza</h4>
                  <p className="service__desc">
                    Temos as melhores condições para oferecer na
                    Conservação, Limpeza e Higienização de sua propriedade.
                  </p>
                  <a href="services-single.html" className="btn btn__primary btn__link">
                    <i className="icon-arrow-right icon-filled"></i>
                    <span>Saiba mais</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="service-item">
                <div className="service__body">
                  <div className="service__icon">
                    <i className="icon-home-automation"></i>
                  </div>
                  <h4 className="service__title">Portaria Virtual inteligente</h4>
                  <p className="service__desc">
                    Gerenciamento a distância de acessos, que amplia a segurança de quem entra e sai do prédio 24 horas por dia.
                  </p>
                  <a href="services-single.html" className="btn btn__primary btn__link">
                    <i className="icon-arrow-right icon-filled"></i>
                    <span>Saiba mais</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="service-item">
                <div className="service__body">
                  <div className="service__icon">
                    <i className="icon-cctv-camera2"></i>
                  </div>
                  <h4 className="service__title">Outros Serviços Terceirizados</h4>
                  <p className="service__desc">
                    Nossos profissionais são habilitados e aptos para atender as necessidades de nossos clientes.
                  </p>
                  <a href="services-single.html" className="btn btn__primary btn__link">
                    <i className="icon-arrow-right icon-filled"></i>
                    <span>Saiba mais</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="cta-layout3 bg-white d-flex flex-wrap align-items-center justify-content-between p-40">
                <div className="d-flex align-items-center">
                  <div className="cta__icon"><i className="icon-alert"></i></div>
                  <p className="cta__desc font-weight-bold my-2">
                    Como líder em segurança residencial, podemos ajudar você a personalizar um sistema de segurança residencial para atender às suas necessidades de segurança.
                    <a href="contact-us.html" className="text-underlined">Agende uma visita</a>
                  </p>
                </div>
                <a href="https://wa.me/5511984286333" className="btn btn__secondary btn__outlined btn__xl">
                  <span>Entre em contato</span>
                  <i className="icon-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;