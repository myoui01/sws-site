import React from 'react';
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  slidesToShow: 1,
  arrows: true,
  dots: false,
  speed: 700,
  fade: true,
  cssEase: "linear"
};

const Slider: React.FC = () => {
  const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="slider">
      <SlickSlider {...settings} className="carousel-arrows-light carousel-dots-light m-slides-0">
        {/* Slide 1 */}
        <div className="slide-item align-v-h bg-secondary" style={{ position: 'relative', overflow: 'hidden' }}>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              zIndex: 0,
              pointerEvents: 'none',
            }}
          >
            <img
              src="/assets/images/sliders/1.png"
              alt="background"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                opacity: 0.2,
              }}
            />
          </div>
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="row align-items-center">
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-7">
                <div className="slide__content">
                  <span className="slide__subtitle">Proteja o que é mais importante para você!</span>
                  <h3 className="slide__title">Sistemas de segurança inteligentes que se adaptam ao seu negócio!</h3>
                  <p className="slide__desc">
                  Somos especializados na terceirização de logística de profissionais para controladoria de acesso, limpeza, portaria e recepção, com foco em edifícios comerciais, obras e condomínios.</p>
                  <div className="d-flex flex-wrap align-items-center">
                    <a href="#services" onClick={scrollToServices} className="btn btn__primary btn__xl mr-30">
                      <span>Nossos serviços</span>
                      <i className="icon-arrow-right"></i>
                    </a>
                    <a href="https://wa.me/5511984286333" className="btn btn__white btn__xl">Sobre nós</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-3 offset-xl-2 d-none d-xl-block">
                <div className="cta-banner">
                  <h4 className="cta__title">Proteja sua família e patrimônio.</h4>
                  <img src="/assets/images/cta/4.png" alt="cta__img" className="cta__img" />
                  <p className="cta__desc" style={{ marginTop: '-10px' }}>
                    Desde 2004, proporcionando o melhor atendimento do mercado, com foco em obras, edifícios comerciais e condomínios.
                  </p>
                  <a href="#services" onClick={scrollToServices} className="btn btn__primary btn__link">
                    <i className="icon-arrow-right icon-filled"></i>
                    <span>Nossos serviços!</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Slide 2 */}
        <div className="slide-item align-v-h bg-secondary" style={{ position: 'relative', overflow: 'hidden' }}>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              zIndex: 0,
              pointerEvents: 'none',
            }}
          >
            <img
              src="/assets/images/sliders/2.png"
              alt="background"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                opacity: 0.2,
              }}
            />
          </div>
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="row align-items-center">
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-7">
                <div className="slide__content">
                  <span className="slide__subtitle">Serviços profissionais que transformam seu ambiente!</span>
                  <h2 className="slide__title">O melhor da Manutenção e Limpeza com zero preocupação!</h2>
                  <p className="slide__desc">
                  Somos especializados na terceirização de logística de profissionais para controladoria de acesso, limpeza, portaria e recepção, com foco em edifícios comerciais, obras e condomínios.
                  </p>
                  <div className="d-flex flex-wrap align-items-center">
                    <a href="#services" onClick={scrollToServices} className="btn btn__primary btn__xl mr-30">
                      <span>Nossos serviços</span>
                      <i className="icon-arrow-right"></i>
                    </a>
                    <a href="https://wa.me/5511984286333" className="btn btn__white btn__xl">Sobre nós</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-3 offset-xl-2 d-none d-xl-block">
                <div className="cta-banner">
                  <h4 className="cta__title">Proteja sua família e patrimônio.</h4>
                  <img src="/assets/images/cta/4.png" alt="cta__img" className="cta__img" />
                  <p className="cta__desc" style={{ marginTop: '-10px' }}>
                    Desde 2004, proporcionando o melhor atendimento do mercado, com foco em obras, edifícios comerciais e condomínios.
                  </p>
                  <a href="#services" onClick={scrollToServices} className="btn btn__primary btn__link btn__white">
                    <i className="icon-arrow-right icon-filled"></i>
                    <span>Nossos serviços!</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SlickSlider>
    </section>
  );
}

export default Slider;