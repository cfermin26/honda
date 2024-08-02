import { frames250, frames450 } from "@constants/frames";
import "@styles/styles.css";
import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { ReactImageTurntable } from "react-image-turntable";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../components/Footer";

const IndexPage = () => {
  const [mostrarComponente, setMostrarComponente] = useState(false);
  const handleClick = (componente) => {
    setMostrarComponente(componente);
  };
  const [isOpen, setOpen] = useState(false);
  const [isOpen2, setOpen2] = useState(false);
  const [isOpen3, setOpen3] = useState(false);
  const [isOpen4, setOpen4] = useState(false);
  const [isOpen5, setOpen5] = useState(false);

  return (
    <main>
      {mostrarComponente ? (
        <Container>
          <Row>
            <Col md={12} className="bg-450">
              <Container>
                <Row>
                  <Col md={12}>
                    <div className="pt-4 pt-md-5">
                      <ReactImageTurntable
                        autoRotate={{ disabled: true }}
                        images={frames450}
                      />
                    </div>
                  </Col>
                  <div class="image-container">
                    <div class="btn-left">
                      <figure className="size">
                        <StaticImage
                          src="../images/assets/450-button.png"
                          alt="honda crf"
                          layout="fullWidth"
                        />
                      </figure>
                    </div>
                    <div
                      class="btn-right"
                      onClick={() => handleClick(false)}
                      aria-hidden="true"
                    >
                      <figure className="size">
                        <StaticImage
                          src="../images/assets/250-button.png"
                          alt="honda crf"
                          layout="fullWidth"
                        />
                      </figure>
                    </div>
                  </div>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      ) : (
        <Container>
          <Row>
            <Col md={12} className="bg-250">
              <Container>
                <Row>
                  <Col md={12}>
                    <div className="pt-4 pt-md-5">
                      <ReactImageTurntable
                        autoRotate={{ disabled: true }}
                        images={frames250}
                      />
                    </div>
                  </Col>
                  <div class="image-container">
                    <div
                      class="btn-left"
                      onClick={() => handleClick(true)}
                      aria-hidden="true"
                    >
                      <figure className="size">
                        <StaticImage
                          src="../images/assets/450-button.png"
                          alt="honda crf"
                          layout="fullWidth"
                        />
                      </figure>
                    </div>
                    <div class="btn-right">
                      <figure className="size">
                        <StaticImage
                          src="../images/assets/250-button.png"
                          alt="honda crf"
                          layout="fullWidth"
                        />
                      </figure>
                    </div>
                  </div>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      )}
      {mostrarComponente ? (
        <Container>
          <Row className="mt-4 mt-md-0 py-4 py-md-5">
            <Col md={4} className="pe-md-4">
              <div className="px-5">
                <StaticImage
                  src="../images/assets/crf.png"
                  alt="honda crf"
                  layout="fullWidth"
                  class="crf-logo"
                />
              </div>
              <h2 className="text-uppercase text-end subtitle">invencible</h2>
              <p className="text-uppercase text-justify text">
                Nuestra CRF450R dominó absolutamente cada carrera del Pro
                Motocross el año pasado. Además, se coronó campeona en
                Supercross 450 y obtuvo el primer título de SuperMotocross 450
                de la historia. Pero eso no es todo: nuestra nueva CRF450R 2025
                incorpora las mejoras y sugerencias basadas en la motocicleta
                ganadora del año anterior. Esto incluye un nuevo diseño exterior
                y gráficos oficiales de fábrica, un chasis reforzado para mayor
                estabilidad, una suspensión perfeccionada para un rendimiento
                más suave y constante, nuevas pinzas triples, un sistema de
                suspensión mejorado y frenos delanteros con mejor respuesta. Sin
                importar lo desafiante que sea la pista, la CRF450R está
                diseñada para superar a la competencia y mantener el liderazgo
                hasta el final.
              </p>
            </Col>
            <Col md={8} className="pe-md-0 carousel">
              <Container>
                <Row className="py-3 mt-5 mt-md-0">
                  <Col md={4} className="text-start px-md-0">
                    <StaticImage
                      src="../images/450/assets/450r-logo.png"
                      alt="honda 450"
                      layout="fullWidth"
                      class="modelo-logo"
                    />
                  </Col>
                  <Col md={8} className="px-md-0">
                    <h2 className="text-uppercase subtitle subtitle-bold text-end">
                      Galería
                    </h2>
                  </Col>
                </Row>
              </Container>
              <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                autoplay={{ delay: 5000 }}
                navigation={true}
                pagination={{ clickable: true }}
                loop={true}
                slidesPerView={1}
              >
                <SwiperSlide>
                  <StaticImage
                    src="../images/450/galeria/450-galeria.jpg"
                    alt="honda 450"
                    layout="fullWidth"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <StaticImage
                    src="../images/450/galeria/crf450r.jpg"
                    alt="honda 450"
                    layout="fullWidth"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <StaticImage
                    src="../images/450/galeria/crf450r-2.jpg"
                    alt="honda 450"
                    layout="fullWidth"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <StaticImage
                    src="../images/450/galeria/crf450r-3.jpg"
                    alt="honda 450"
                    layout="fullWidth"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <StaticImage
                    src="../images/450/galeria/crf450r-4.jpg"
                    alt="honda 450"
                    layout="fullWidth"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <StaticImage
                    src="../images/450/galeria/crf450r-5.jpg"
                    alt="honda 450"
                    layout="fullWidth"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <StaticImage
                    src="../images/450/galeria/crf450r-6.jpg"
                    alt="honda 450"
                    layout="fullWidth"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <StaticImage
                    src="../images/450/galeria/crf450r-7.jpg"
                    alt="honda 450"
                    layout="fullWidth"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <StaticImage
                    src="../images/450/galeria/crf450r-8.jpg"
                    alt="honda 450"
                    layout="fullWidth"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <StaticImage
                    src="../images/450/galeria/crf450r-9.jpg"
                    alt="honda 450"
                    layout="fullWidth"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <StaticImage
                    src="../images/450/galeria/crf450r-10.jpg"
                    alt="honda 450"
                    layout="fullWidth"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <StaticImage
                    src="../images/450/galeria/crf450r-11.jpg"
                    alt="honda 450"
                    layout="fullWidth"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <StaticImage
                    src="../images/450/galeria/crf450r-12.jpg"
                    alt="honda 450"
                    layout="fullWidth"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <StaticImage
                    src="../images/450/galeria/crf450r-13.jpg"
                    alt="honda 450"
                    layout="fullWidth"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <StaticImage
                    src="../images/450/galeria/crf450r-14.jpg"
                    alt="honda 450"
                    layout="fullWidth"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <StaticImage
                    src="../images/450/galeria/crf450r-15.jpg"
                    alt="honda 450"
                    layout="fullWidth"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <StaticImage
                    src="../images/450/galeria/crf450r-16.jpg"
                    alt="honda 450"
                    layout="fullWidth"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <StaticImage
                    src="../images/450/galeria/crf450r-17.jpg"
                    alt="honda 450"
                    layout="fullWidth"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <StaticImage
                    src="../images/450/galeria/crf450r-18.jpg"
                    alt="honda 450"
                    layout="fullWidth"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <StaticImage
                    src="../images/450/galeria/crf450r-19.jpg"
                    alt="honda 450"
                    layout="fullWidth"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <StaticImage
                    src="../images/450/galeria/crf450r-20.jpg"
                    alt="honda 450"
                    layout="fullWidth"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <StaticImage
                    src="../images/450/galeria/crf450r-21.jpg"
                    alt="honda 450"
                    layout="fullWidth"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <StaticImage
                    src="../images/450/galeria/crf450r-22.jpg"
                    alt="honda 450"
                    layout="fullWidth"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <StaticImage
                    src="../images/450/galeria/crf450r-23.jpg"
                    alt="honda 450"
                    layout="fullWidth"
                  />
                </SwiperSlide>
              </Swiper>
            </Col>
          </Row>
        </Container>
      ) : (
        <Container>
          <Row className="mt-4 mt-md-0 py-4 py-md-5">
            <Col md={4} className="pe-md-4">
              <div className="px-5">
                <StaticImage
                  src="../images/assets/crf.png"
                  alt="honda crf"
                  layout="fullWidth"
                  class="crf-logo"
                />
              </div>
              <h2 className="text-uppercase text-end subtitle">
                El resto es segundo lugar
              </h2>
              <p className="text-uppercase text-justify text">
                Nuestra CRF250R arrasó con todo el año pasado, llevándose los
                dos títulos de Supercross 250 y el campeonato nacional de MX
                250. Cualquiera de esos triunfos sería motivo de celebración,
                pero la CRF250R lo ganó todo. Y mientras nosotros celebramos,
                ahora tú también puedes hacerlo, porque nuestra nueva CRF250R
                2025 está basada en las mejoras que desarrollamos en nuestras
                motos de fábrica la temporada pasada. Al igual que la CRF450R
                2025, la CRF250R cuenta con un nuevo chasis diseñado para
                mejorar la agilidad, nuevos componentes de suspensión para una
                respuesta más suave y constante, nuevas pinzas triples, un
                sistema de suspensión mejorado y frenos delanteros con mejor
                respuesta. Nuestro control de lanzamiento HRC te impulsará al
                podio, y puedes elegir entre tres modos de conducción para
                ajustar la potencia a las condiciones de la pista. Para darle un
                toque fresco, también tiene nuevos gráficos CRF.
              </p>
            </Col>
            <Col md={8} className="pe-md-0 carousel">
              <Container>
                <Row className="py-3 mt-5 mt-md-0">
                  <Col md={4} className="text-start px-md-0">
                    <StaticImage
                      src="../images/250/assets/250-logo.png"
                      alt="honda 250"
                      layout="fullWidth"
                      class="modelo-logo"
                    />
                  </Col>
                  <Col md={8} className="px-md-0">
                    <h2 className="text-uppercase subtitle subtitle-bold text-end">
                      Galería
                    </h2>
                  </Col>
                </Row>
              </Container>
              <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                autoplay={{ delay: 5000 }}
                navigation={true}
                pagination={{ clickable: true }}
                loop={true}
                slidesPerView={1}
              >
                <SwiperSlide>
                  <StaticImage
                    src="../images/250/galeria/crf250r.jpg"
                    alt="honda 250"
                    layout="fullWidth"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <StaticImage
                    src="../images/250/galeria/crf250r-2.jpg"
                    alt="honda 250"
                    layout="fullWidth"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <StaticImage
                    src="../images/250/galeria/crf250r-3.jpg"
                    alt="honda 250"
                    layout="fullWidth"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <StaticImage
                    src="../images/250/galeria/crf250r-4.jpg"
                    alt="honda 250"
                    layout="fullWidth"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <StaticImage
                    src="../images/250/galeria/crf250r-5.jpg"
                    alt="honda 250"
                    layout="fullWidth"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <StaticImage
                    src="../images/250/galeria/crf250r-6.jpg"
                    alt="honda 250"
                    layout="fullWidth"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <StaticImage
                    src="../images/250/galeria/crf250r-7.jpg"
                    alt="honda 250"
                    layout="fullWidth"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <StaticImage
                    src="../images/250/galeria/crf250r-8.jpg"
                    alt="honda 250"
                    layout="fullWidth"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <StaticImage
                    src="../images/250/galeria/crf250r-9.jpg"
                    alt="honda 250"
                    layout="fullWidth"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <StaticImage
                    src="../images/250/galeria/crf250r-10.jpg"
                    alt="honda 250"
                    layout="fullWidth"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <StaticImage
                    src="../images/250/galeria/crf250r-11.jpg"
                    alt="honda 250"
                    layout="fullWidth"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <StaticImage
                    src="../images/250/galeria/crf250r-12.jpg"
                    alt="honda 250"
                    layout="fullWidth"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <StaticImage
                    src="../images/250/galeria/crf250r-13.jpg"
                    alt="honda 250"
                    layout="fullWidth"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <StaticImage
                    src="../images/250/galeria/crf250r-14.jpg"
                    alt="honda 250"
                    layout="fullWidth"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <StaticImage
                    src="../images/250/galeria/crf250r-15.jpg"
                    alt="honda 250"
                    layout="fullWidth"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <StaticImage
                    src="../images/250/galeria/crf250r-16.jpg"
                    alt="honda 250"
                    layout="fullWidth"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <StaticImage
                    src="../images/250/galeria/crf250r-17.jpg"
                    alt="honda 250"
                    layout="fullWidth"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <StaticImage
                    src="../images/250/galeria/crf250r-18.jpg"
                    alt="honda 250"
                    layout="fullWidth"
                  />
                </SwiperSlide>
              </Swiper>
            </Col>
          </Row>
        </Container>
      )}

      <Container>
        <Row className="pt-4 pt-md-0 my-md-5">
          <Col xs={8} md={6} className="my-4 mx-auto">
            <StaticImage
              src="../images/assets/2025.png"
              alt="honda 2025"
              layout="fullWidth"
            />
          </Col>
        </Row>

        <Row>
          <Col md={12} className="mb-3">
            <h2 className="text-uppercase subtitle subtitle-bold text-end">
              Videos
            </h2>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="carousel">
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              navigation={true}
              pagination={{ clickable: true }}
              loop={true}
              slidesPerView={1}
            >
              <SwiperSlide>
                <div className="video-container">
                  <iframe
                    src="https://www.youtube.com/embed/BkSUjyFGjS0"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="video-container">
                  <iframe
                    src="https://www.youtube.com/embed/HD5tV4gkQgI"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="video-container">
                  <iframe
                    src="https://www.youtube.com/embed/2pvhDxrLEJM"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="video-container">
                  <iframe
                    src="https://www.youtube.com/embed/GqEG1BD4AaU"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col md={12}>
            <h2 className="text-uppercase text-end mt-5 mt-md-5 mb-md-4 subtitle-bold ">
              Slider
            </h2>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <ReactCompareSlider
              itemOne={
                <ReactCompareSliderImage
                  src="https://landinghonda.curbe.com.ec/assets/slider/450-motor.png"
                  alt="Image one"
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src="https://landinghonda.curbe.com.ec/assets/slider/450-chasis.png"
                  alt="Image two"
                  style={{
                    backgroundColor: "black",
                  }}
                />
              }
            />
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <h2 className="text-uppercase text-center mt-5 mb-4 mt-md-5 mb-md-4 subtitle-bold ">
              Entrevistas
            </h2>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="carousel">
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              autoplay={{ delay: 5000 }}
              navigation={true}
              pagination={{ clickable: true }}
              loop={true}
              slidesPerView={5}
            >
              <SwiperSlide>
                <div onClick={() => setOpen(true)} aria-hidden="true">
                  <StaticImage
                    src="../images/assets/cover1.jpg"
                    alt="honda entrevista"
                    layout="fullWidth"
                    role="button"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div onClick={() => setOpen2(true)} aria-hidden="true">
                  <StaticImage
                    src="../images/assets/cover2.jpg"
                    alt="honda entrevista"
                    layout="fullWidth"
                    role="button"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div onClick={() => setOpen3(true)} aria-hidden="true">
                  <StaticImage
                    src="../images/assets/cover3.jpg"
                    alt="honda entrevista"
                    layout="fullWidth"
                    role="button"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div onClick={() => setOpen4(true)} aria-hidden="true">
                  <StaticImage
                    src="../images/assets/cover4.jpg"
                    alt="honda entrevista"
                    layout="fullWidth"
                    role="button"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div onClick={() => setOpen5(true)} aria-hidden="true">
                  <StaticImage
                    src="../images/assets/cover5.jpg"
                    alt="honda entrevista"
                    layout="fullWidth"
                    role="button"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <ModalVideo
              channel="youtube"
              youtube={{ mute: 0, autoplay: 0 }}
              isOpen={isOpen}
              videoId="zjUPfrrN630"
              onClose={() => setOpen(false)}
            />
            <ModalVideo
              channel="youtube"
              youtube={{ mute: 0, autoplay: 0 }}
              isOpen={isOpen2}
              videoId="oPgW1FRtQIY"
              onClose={() => setOpen2(false)}
            />
            <ModalVideo
              channel="youtube"
              youtube={{ mute: 0, autoplay: 0 }}
              isOpen={isOpen3}
              videoId="oPgW1FRtQIY"
              onClose={() => setOpen3(false)}
            />
            <ModalVideo
              channel="youtube"
              youtube={{ mute: 0, autoplay: 0 }}
              isOpen={isOpen4}
              videoId="oPgW1FRtQIY"
              onClose={() => setOpen4(false)}
            />
            <ModalVideo
              channel="youtube"
              youtube={{ mute: 0, autoplay: 0 }}
              isOpen={isOpen5}
              videoId="oPgW1FRtQIY"
              onClose={() => setOpen5(false)}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </main>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>Honda</title>
    <meta
      name="description"
      content="Descubre la nueva CRF450R, la máquina MX completa con control total para el piloto. Rediseño de ruedas liderado por HRC y arranque eléctrico de serie."
    />
    <meta property="og:title" content="Honda" />
    <meta
      property="og:description"
      content="Descubre la nueva CRF450R, la máquina MX completa con control total para el piloto. Rediseño de ruedas liderado por HRC y arranque eléctrico de serie."
    />
    <meta
      property="og:image"
      content="https://landinghonda.curbe.com.ec/assets/social/honda-social.jpg"
    />
  </>
);
