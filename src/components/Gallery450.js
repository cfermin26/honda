import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Gallery450() {
  return (
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
            Nuestra CRF450R dominó absolutamente cada carrera del Pro Motocross
            el año pasado. Además, se coronó campeona en Supercross 450 y obtuvo
            el primer título de SuperMotocross 450 de la historia. Pero eso no
            es todo: nuestra nueva CRF450R 2025 incorpora las mejoras y
            sugerencias basadas en la motocicleta ganadora del año anterior.
            Esto incluye un nuevo diseño exterior y gráficos oficiales de
            fábrica, un chasis reforzado para mayor estabilidad, una suspensión
            perfeccionada para un rendimiento más suave y constante, nuevas
            pinzas triples, un sistema de suspensión mejorado y frenos
            delanteros con mejor respuesta. Sin importar lo desafiante que sea
            la pista, la CRF450R está diseñada para superar a la competencia y
            mantener el liderazgo hasta el final.
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
  );
}

export default Gallery450;
