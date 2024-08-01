import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { ReactImageTurntable } from "react-image-turntable";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../styles.css";
import { images450 } from "../constants/450";

const IndexPage = () => {
  return (
    <main>
      <Container>
        <Row>
          <Col md={12} className="bg-honda">
            <div className="pt-4 pt-md-5">
              <ReactImageTurntable
                autoRotate={{ disabled: true }}
                images={images450}
              />
            </div>
            {/* <StaticImage
              src="../../images/modelos/creta/exterior/creta-banner.jpg"
              alt="creta exterior"
              layout="fullWidth"
            /> */}
          </Col>
        </Row>
        <Row>
          <Col md={6}></Col>
          <Col md={6}>
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
                  src="../images/galeria/450/450-galeria.jpg"
                  alt="honda 450"
                  layout="fullWidth"
                />
              </SwiperSlide>
              <SwiperSlide>
                <StaticImage
                  src="../images/galeria/450/450-galeria.jpg"
                  alt="honda 450"
                  layout="fullWidth"
                />
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
            ;
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default IndexPage;
