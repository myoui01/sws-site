import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const features = [
  { number: "01", title: "Obras Públicas" },
  { number: "02", title: "Manufatura e Logística" },
  { number: "03", title: "Prédios Comerciais" },
  { number: "04", title: "Condomínios Residenciais" },
  { number: "05", title: "Escolas e Faculdades" },
  { number: "06", title: "Hospitais e Postos" },
];

const sliderSettings = {
  slidesToShow: 5,
  arrows: false,
  dots: false,
  autoplay: false,
  infinite: false,
  responsive: [
    { breakpoint: 992, settings: { slidesToShow: 3 } },
    { breakpoint: 767, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 2 } },
  ],
};

const Features: React.FC = () => {
  return (
    <section className="features-layout2 bg-overlay bg-overlay-gradient pt-130">
      <div className="bg-img" style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        backgroundColor: 'rgb(0, 0, 0)',
      }}>
        <img src="assets/images/banners/11.png" alt="background" style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          opacity: 0.2
        }} />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="heading-layout2 heading-light mb-140" style={{ marginTop: '0px', }}>
              <h3 className="heading__title">Proteja o que mais importa!</h3>
              <p className="heading__desc" style={{ fontWeight: 300 }}>
                Isso não apenas reduzirá a probabilidade de crimes acontecerem em sua propriedade,
                como também reduzirá ou eliminará qualquer responsabilidade que recaia sobre você se você puder mostrar que possui sistemas de segurança de edifícios comerciais sólidos e
                bem projetados.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Slider {...sliderSettings} className="slick-carousel" style={{ marginTop: '-50px', }}>
              {features.map((feature) => (
                <div className="feature-item" key={feature.number}>
                  <h3 className="feature__number">{feature.number}</h3>
                  <div className="feature__body">
                    <h4 className="feature__title">{feature.title}</h4>
                    <a href="#" className="btn btn__link btn__white">
                      <i className="icon-arrow-right icon-filled"></i>
                      <span>Saiba mais</span>
                    </a>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <button className="btn__download d-flex align-items-center">
              <span className="text-right mx-2">
                <span className="color-body d-block">Garanta sua segurança</span>
                <strong className="color-white d-block fz-15">Download apresentação - 2024</strong>
              </span>
              <span className="download__icon">
                <i className="icon-download"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;