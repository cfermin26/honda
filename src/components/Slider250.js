import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

function Slider250() {
  return (
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
                src="https://landinghonda.curbe.com.ec/assets/slider/250-motor.png"
                alt="Image one"
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src="https://landinghonda.curbe.com.ec/assets/slider/250-chasis.png"
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
  );
}

export default Slider250;
