import * as React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "../../styles.css";

import { ReactImageTurntable } from "react-image-turntable";
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
      </Container>
    </main>
  );
};

export default IndexPage;
