import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ModalVideo from "react-modal-video";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

config.autoAddCss = false;

function Interviews() {
  const [isOpen, setOpen] = useState(false);
  const [isOpen2, setOpen2] = useState(false);
  const [isOpen3, setOpen3] = useState(false);
  const [isOpen4, setOpen4] = useState(false);
  const [isOpen5, setOpen5] = useState(false);
  const [isOpen6, setOpen6] = useState(false);

  return (
    <Container>
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
            slidesPerView={6}
          >
            <SwiperSlide>
              <div onClick={() => setOpen(true)} aria-hidden="true">
                <Card className="border-0 card-interview">
                  <StaticImage
                    src="../images/assets/entrevistas/andres-feican.jpg"
                    alt="Andrés Feicán"
                    layout="fullWidth"
                    role="button"
                  />
                  <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon
                      icon={faCirclePlay}
                      className="ms-3 icon-play"
                    />
                  </Card.ImgOverlay>
                </Card>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div onClick={() => setOpen2(true)} aria-hidden="true">
                <Card className="border-0 card-interview">
                  <StaticImage
                    src="../images/assets/entrevistas/dani-aleman.jpg"
                    alt="Dani Alemán"
                    layout="fullWidth"
                    role="button"
                  />
                  <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon
                      icon={faCirclePlay}
                      className="ms-3 icon-play"
                    />
                  </Card.ImgOverlay>
                </Card>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div onClick={() => setOpen3(true)} aria-hidden="true">
                <Card className="border-0 card-interview">
                  <StaticImage
                    src="../images/assets/entrevistas/niki-merchan.jpg"
                    alt="Niki Merchán"
                    layout="fullWidth"
                    role="button"
                  />
                  <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon
                      icon={faCirclePlay}
                      className="ms-3 icon-play"
                    />
                  </Card.ImgOverlay>
                </Card>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div onClick={() => setOpen4(true)} aria-hidden="true">
                <Card className="border-0 card-interview">
                  <StaticImage
                    src="../images/assets/entrevistas/italo-medina.jpg"
                    alt="Ítalo Medina"
                    layout="fullWidth"
                    role="button"
                  />
                  <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon
                      icon={faCirclePlay}
                      className="ms-3 icon-play"
                    />
                  </Card.ImgOverlay>
                </Card>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div onClick={() => setOpen5(true)} aria-hidden="true">
                <Card className="border-0 card-interview">
                  <StaticImage
                    src="../images/assets/entrevistas/jose-cardenas.jpg"
                    alt="José Cárdenas"
                    layout="fullWidth"
                    role="button"
                  />
                  <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon
                      icon={faCirclePlay}
                      className="ms-3 icon-play"
                    />
                  </Card.ImgOverlay>
                </Card>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div onClick={() => setOpen6(true)} aria-hidden="true">
                <Card className="border-0 card-interview">
                  <StaticImage
                    src="../images/assets/entrevistas/personal.jpg"
                    alt="Personal"
                    layout="fullWidth"
                    role="button"
                  />
                  <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon
                      icon={faCirclePlay}
                      className="ms-3 icon-play"
                    />
                  </Card.ImgOverlay>
                </Card>
              </div>
            </SwiperSlide>
          </Swiper>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="oPgW1FRtQIY"
            onClose={() => setOpen(false)}
          />
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen2}
            videoId="zjUPfrrN630"
            onClose={() => setOpen2(false)}
          />
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen3}
            videoId="AXy7jHn8Azs"
            onClose={() => setOpen3(false)}
          />
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen4}
            videoId="WlVV5hjyy0w"
            onClose={() => setOpen4(false)}
          />
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen5}
            videoId="g9gjuutlZmY"
            onClose={() => setOpen5(false)}
          />
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen6}
            videoId="q7E4NOzHrkc"
            onClose={() => setOpen6(false)}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Interviews;
