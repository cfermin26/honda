import { images450 } from "@constants/450";
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

const IndexPage = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <main>
      <Container>
        <Row>
          <Col md={12}>
            <ModalVideo
              channel="youtube"
              youtube={{ mute: 0, autoplay: 0 }}
              isOpen={isOpen}
              videoId="L61p2uyiMSo"
              onClose={() => setOpen(false)}
            />
            <button className="btn-primary" onClick={() => setOpen(true)}>
              VIEW DEMO
            </button>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="bg-honda">
            <div className="pt-4 pt-md-5">
              <ReactImageTurntable
                autoRotate={{ disabled: true }}
                images={images450}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <StaticImage
              src="../images/assets/crf.png"
              alt="honda crf"
              layout="fullWidth"
            />
            <h2 className="subtitle">invencile</h2>
            <p className="text">
              Nuestra CRF450R dominó absolutamente cada carrera del Pro
              Motocross el año pasado. Además, se coronó campeona en Supercross
              450 y obtuvo el primer título de SuperMotocross 450 de la
              historia. Pero eso no es todo: nuestra nueva CRF450R 2025
              incorpora las mejoras y sugerencias basadas en la motocicleta
              ganadora del año anterior. Esto incluye un nuevo diseño exterior y
              gráficos oficiales de fábrica, un chasis reforzado para mayor
              estabilidad, una suspensión perfeccionada para un rendimiento más
              suave y constante, nuevas pinzas triples, un sistema de suspensión
              mejorado y frenos delanteros con mejor respuesta. Sin importar lo
              desafiante que sea la pista, la CRF450R está diseñada para superar
              a la competencia y mantener el liderazgo hasta el final.
            </p>
          </Col>
          <Col md={8}>
            <Container>
              <Row>
                <Col md={6}>
                  <StaticImage
                    src="../images/assets/450-logo.png"
                    alt="honda 450"
                    layout="fullWidth"
                  />
                </Col>
                <Col md={6}>
                  <h2 className="subtitle-bold">Galería</h2>
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
                  src="../images/450/galeria/450-galeria.jpg"
                  alt="honda 450"
                  layout="fullWidth"
                />
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <StaticImage
              src="../images/assets/2025.png"
              alt="honda 2025"
              layout="fullWidth"
            />
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              autoplay={{ delay: 5000 }}
              navigation={true}
              pagination={{ clickable: true }}
              loop={true}
              slidesPerView={1}
            >
              <SwiperSlide>
                <div className="video-container">
                  <iframe
                    src="https://www.youtube.com/embed/p0OH206z9Wg"
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
        <Row>
          <Col md={12}>
            <ReactCompareSlider
              itemOne={
                <ReactCompareSliderImage
                  src="https://landinghonda.curbe.com.ec/slider/450-motor.png"
                  alt="Image one"
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src="https://landinghonda.curbe.com.ec/slider/450-chasis.png"
                  alt="Image two"
                  style={{
                    backgroundColor: "black",
                  }}
                />
              }
            />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default IndexPage;
