import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Gallery250() {
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
          <h2 className="text-uppercase text-end subtitle">
            El resto es segundo lugar
          </h2>
          <p className="text-uppercase text-justify text">
            Nuestra CRF250R arrasó con todo el año pasado, llevándose los dos
            títulos de Supercross 250 y el campeonato nacional de MX 250.
            Cualquiera de esos triunfos sería motivo de celebración, pero la
            CRF250R lo ganó todo. Y mientras nosotros celebramos, ahora tú
            también puedes hacerlo, porque nuestra nueva CRF250R 2025 está
            basada en las mejoras que desarrollamos en nuestras motos de fábrica
            la temporada pasada. Al igual que la CRF450R 2025, la CRF250R cuenta
            con un nuevo chasis diseñado para mejorar la agilidad, nuevos
            componentes de suspensión para una respuesta más suave y constante,
            nuevas pinzas triples, un sistema de suspensión mejorado y frenos
            delanteros con mejor respuesta. Nuestro control de lanzamiento HRC
            te impulsará al podio, y puedes elegir entre tres modos de
            conducción para ajustar la potencia a las condiciones de la pista.
            Para darle un toque fresco, también tiene nuevos gráficos CRF.
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
  );
}

export default Gallery250;
