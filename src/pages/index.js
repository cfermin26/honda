import ContactForm from "@components/ContactForm";
import Footer from "@components/Footer";
import Gallery250 from "@components/Gallery250";
import Gallery450 from "@components/Gallery450";
import Interviews from "@components/Interviews";
import Slider450 from "@components/Slider450";
import Spin250 from "@components/Spin250";
import Spin450 from "@components/Spin450";
import Videos from "@components/Videos";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "react-modal-video/css/modal-video.min.css";

const IndexPage = () => {
  const [mostrarComponente, setMostrarComponente] = useState(true);
  const handleClick = (componente) => {
    setMostrarComponente(componente);
  };

  return (
    <main>
      <Helmet>
        <title>{mostrarComponente ? "Honda CRF450R" : "Honda CRF250R"}</title>
        <meta
          name="description"
          content="Descubre la nueva CRF450R, la máquina MX completa con control total para el piloto. Rediseño de ruedas liderado por HRC y arranque eléctrico de serie."
        />
        <meta name="keywords" content="Honda, 250, 450, racing, crf" />
        <meta property="og:url" content="https://landinghonda.curbe.com.ec" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Honda" />
        <meta
          property="og:description"
          content="Descubre la nueva CRF450R, la máquina MX completa con control total para el piloto. Rediseño de ruedas liderado por HRC y arranque eléctrico de serie."
        />
        <meta
          property="og:image"
          content="https://landinghonda.curbe.com.ec/assets/social/honda-social.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="landinghonda.curbe.com.ec" />
        <meta
          property="twitter:url"
          content="https://landinghonda.curbe.com.ec"
        />
        <meta name="twitter:title" content="Honda" />
        <meta
          name="twitter:description"
          content="Descubre la nueva CRF450R, la máquina MX completa con control total para el piloto. Rediseño de ruedas liderado por HRC y arranque eléctrico de serie."
        />
        <meta
          name="twitter:image"
          content="https://landinghonda.curbe.com.ec/assets/social/honda-social.jpg"
        />
        <script
          defer
          type="text/javascript"
          src="//cdn.evgnet.com/beacon/astaramobilitysl/colombia/scripts/evergage.min.js"
        ></script>
      </Helmet>

      {mostrarComponente ? (
        <Spin450 onSwitch={handleClick} />
      ) : (
        <Spin250 onSwitch={handleClick} />
      )}

      {mostrarComponente ? <Gallery450 /> : <Gallery250 />}

      <Videos />
      <Slider450 />
      <Interviews />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default IndexPage;
