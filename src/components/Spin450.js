import { frames450 } from "@constants/frames";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { ReactImageTurntable } from "react-image-turntable";

const Spin450 = ({ onSwitch }) => {
  return (
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
              <div className="image-container">
                <div className="btn-left">
                  <figure className="size">
                    <StaticImage
                      src="../images/assets/450-button.png"
                      alt="honda crf"
                      layout="fullWidth"
                    />
                  </figure>
                </div>
                <div
                  className="btn-right"
                  onClick={() => onSwitch(false)}
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
  );
};

export default Spin450;
