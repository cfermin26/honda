import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ModalVideo from "react-modal-video";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Interviews() {
  const [isOpen, setOpen] = useState(false);
  const [isOpen2, setOpen2] = useState(false);
  const [isOpen3, setOpen3] = useState(false);
  const [isOpen4, setOpen4] = useState(false);
  const [isOpen5, setOpen5] = useState(false);

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
            autoplay
            isOpen={isOpen}
            videoId="zjUPfrrN630"
            onClose={() => setOpen(false)}
          />
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen2}
            videoId="oPgW1FRtQIY"
            onClose={() => setOpen2(false)}
          />
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen3}
            videoId="oPgW1FRtQIY"
            onClose={() => setOpen3(false)}
          />
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen4}
            videoId="oPgW1FRtQIY"
            onClose={() => setOpen4(false)}
          />
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen5}
            videoId="oPgW1FRtQIY"
            onClose={() => setOpen5(false)}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Interviews;
