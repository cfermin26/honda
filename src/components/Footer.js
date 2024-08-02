import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

config.autoAddCss = false;

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col md={12} className="mt-5">
            <StaticImage
              src="../images/assets/logos-footer.png"
              alt="honda logos"
              layout="fullWidth"
              className="footer-logos"
            />
          </Col>
        </Row>
        <Row className="footer-border mt-3 py-2">
          <Col xs={6} md={4} className="my-auto">
            <h2 className="text-uppercase mb-0 subtitle-bold text-gray footer-title">
              Contacto
            </h2>
          </Col>
          <Col xs={6} md={8} className="text-end footer-social">
            <Link to="">
              <FontAwesomeIcon icon={faFacebookF} className="ms-3" />
            </Link>
            <Link to="">
              <FontAwesomeIcon icon={faInstagram} className="ms-3" />
            </Link>
            <Link to="">
              <FontAwesomeIcon icon={faYoutube} className="ms-3" />
            </Link>
            <Link to="">
              <FontAwesomeIcon icon={faTiktok} className="ms-3" />
            </Link>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-3 mt-3 mt-md-5">
            <h2 className="text-uppercase copyright text-center text-gray">
              © 2024 - 2025 · HONDA RACING · ECUADOR
            </h2>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
