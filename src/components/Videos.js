import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Videos() {
  return (
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
  );
}

export default Videos;
