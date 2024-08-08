import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import endPoints from "@services/api";
import { authenticate, fetchData } from "@services/api/utils";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Controller, useForm } from "react-hook-form";
import Swal from "sweetalert2";

const queryString = require("query-string");

function ContactForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({ mode: "onBlur" });

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const [isLoading, setLoading] = useState(false);
  // eslint-disable-next-line
  const [ciudades, setCiudades] = useState([]);
  const [selectedProducto, setSelectedProducto] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCiudad, setSelectedCiudad] = useState(null);
  const [tiemposCompra, setTiemposCompra] = useState([]);
  const [selectedTiempoCompra, setSelectedTiempoCompra] = useState("");
  const [selectedTiempoCompraNombre, setSelectedTiempoCompraNombre] =
    useState("");
  const [token, setToken] = useState("");

  const handleChangeCelular = (e) => {
    const re = /^[0-9\b]+$/; // reglas
    if (e.target.value === "" || re.test(e.target.value)) {
      setValue("celular", e.target.value);
    }
  };

  const validarCedula = (value) => {
    if (value.length !== 10) {
      return "Ingrese una cédula válida";
    }

    const digitos = value.split("").map(Number);

    const verificador = digitos[9];
    const suma = digitos.slice(0, 9).reduce((acc, curr, index) => {
      if (index % 2 === 0) {
        let resultado = curr * 2;
        if (resultado > 9) {
          resultado -= 9;
        }
        return acc + resultado;
      } else {
        return acc + curr;
      }
    }, 0);

    const modulo = suma % 10;
    const digitoVerificadorCalculado = modulo === 0 ? 0 : 10 - modulo;

    return verificador === digitoVerificadorCalculado;
  };

  const handleInputChange = (event) => {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode !== 8 && charCode !== 0 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
    }
  };

  useEffect(() => {
    const getData = async () => {
      const options = await authenticate();
      if (options) {
        try {
          const { ciudades, tiemposCompra } = await fetchData(options);
          setCiudades(ciudades);
          setTiemposCompra(tiemposCompra);
          const uniqueCities = [
            ...new Map(
              ciudades.map((item) => [item.ciudad_codigo, item])
            ).values(),
          ];

          uniqueCities.sort((a, b) =>
            a.ciudad_nombre.localeCompare(b.ciudad_nombre)
          );
          setCities(uniqueCities);
        } catch (error) {
          console.error("Error al obtener datos", error);
        }
      }
    };

    const parsed = queryString.parse(window.location.search);
    if (parsed.tk === "" || parsed.tk === undefined) {
    } else {
      setToken(parsed.tk.split("?")[0]);
    }

    getData();
  }, []);

  if (selectedCiudad) {
    // eslint-disable-next-line
    const { emp_codigo, alm_codigo, ciudad_codigo } = selectedCiudad;
  }

  const onSubmit = async (data) => {
    setLoading(true);

    const options = await authenticate();
    if (options) {
      try {
        const requestData = {
          tipo_integracion: 0,
          codciudad: selectedCiudad.ciudad_codigo,
          plataforma: "web",
          canal: 48,
          medio: 219,
          calidad: 3,
          cedula: data.cedula,
          nombre: data.nombre,
          apellido: data.apellido,
          email: data.email,
          direccion: "",
          telefono: data.telefono,
          token: token,
          tipo_vehiculo: 27,
          codproducto: parseInt(data.producto),
          tiempo_compra: parseInt(data.tiempoCompra),
          tiempo_compra_nombre: selectedTiempoCompraNombre,
          aceptacion: 1,
        };

        await axios.post(endPoints.lead.createLead, requestData, options);

        Toast.fire({
          icon: "success",
          title: "Gracias por registrar tus datos",
        });

        setLoading(false);
        reset();
        setSelectedProducto("");
        setSelectedTiempoCompra("");
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "Error al enviar la información",
        });
      }
    }
  };

  const handleCityChange = (event) => {
    const ciudad_codigo = event.target.value;
    const city = cities.find(
      (city) => city.ciudad_codigo === parseInt(ciudad_codigo)
    );
    setSelectedCiudad(city);
    setValue("ciudad", ciudad_codigo);
  };

  const validateCedula = (value) => {
    if (!validarCedula(value)) {
      return "Ingrese una cédula válida";
    }
  };

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h2 className="text-uppercase text-center mt-5 mb-4 mt-md-5 mb-md-4 subtitle-bold ">
            Cotización
          </h2>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Form
            className="contact-form mx-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Row className="gy-3">
              <Col md={6}>
                <FloatingLabel label="Nombres" size="sm">
                  <Controller
                    name="nombres"
                    control={control}
                    defaultValue=""
                    rules={{ required: "El nombre es requerido" }}
                    render={({ field }) => (
                      <Form.Control
                        size="sm"
                        type="text"
                        placeholder="Nombres"
                        {...field}
                      />
                    )}
                  />
                </FloatingLabel>
                {errors.nombres && <p>{errors.nombres.message}</p>}
              </Col>
              <Col md={6}>
                <FloatingLabel label="Apellidos">
                  <Controller
                    name="apellidos"
                    control={control}
                    defaultValue=""
                    rules={{ required: "El apellido es requerido" }}
                    render={({ field }) => (
                      <Form.Control
                        type="text"
                        placeholder="Apellidos"
                        {...field}
                      />
                    )}
                  />
                </FloatingLabel>
                {errors.apellidos && <p>{errors.apellidos.message}</p>}
              </Col>
              <Col md={6}>
                <FloatingLabel label="Cédula">
                  <Controller
                    name="cedula"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "La cédula es requerida",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Longitud inválida",
                      },
                      validate: validateCedula,
                    }}
                    render={({ field }) => (
                      <Form.Control
                        type="text"
                        placeholder="Cédula"
                        {...field}
                        onInput={handleInputChange}
                      />
                    )}
                  />
                </FloatingLabel>
                {errors.cedula && <p>{errors.cedula.message}</p>}
              </Col>
              <Col md={6}>
                <FloatingLabel label="Email">
                  <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "El email es requerido",
                      pattern: {
                        value: /^[^@]+@[^@]+\.[^@]+$/,
                        message: "Email no es válido",
                      },
                    }}
                    render={({ field }) => (
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        {...field}
                      />
                    )}
                  />
                </FloatingLabel>
                {errors.email && <p>{errors.email.message}</p>}
              </Col>
              <Col md={6}>
                <FloatingLabel label="Teléfono">
                  <Controller
                    name="telefono"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "El teléfono es requerido",
                      minLength: {
                        value: 10,
                        message: "Ingrese un teléfono válido",
                      },
                      maxLength: {
                        value: 10,
                        message: "Ingrese un teléfono válido",
                      },
                      pattern: {
                        value: /^[0]{1}[8-9]{1}[0-9]{8}$/,
                        message: "Ingrese un teléfono válido",
                      },
                    }}
                    render={({ field }) => (
                      <Form.Control
                        type="text"
                        placeholder="Telefono"
                        {...field}
                        maxLength={10}
                        onChange={(e) => {
                          field.onChange(e);
                          handleChangeCelular(e);
                        }}
                      />
                    )}
                  />
                </FloatingLabel>
                {errors.telefono && <p>{errors.telefono.message}</p>}
              </Col>
              <Col md={6}>
                <FloatingLabel label="Ciudad">
                  <Controller
                    name="ciudad"
                    control={control}
                    defaultValue=""
                    rules={{ required: "La ciudad es requerida" }}
                    render={({ field }) => (
                      <Form.Select
                        label="Ciudad"
                        id="ciudad"
                        color="warning"
                        {...field}
                        onChange={handleCityChange}
                      >
                        <option value="">- Seleccione -</option>
                        {cities?.map((ciudad) => (
                          <option
                            key={ciudad.alm_codigo}
                            value={ciudad.ciudad_codigo}
                          >
                            {ciudad.ciudad_nombre}
                          </option>
                        ))}
                      </Form.Select>
                    )}
                  />
                </FloatingLabel>
                {errors.ciudad && <p>{errors.ciudad.message}</p>}
              </Col>
              <Col md={6}>
                <FloatingLabel label="Modelo">
                  <Controller
                    name="producto"
                    control={control}
                    defaultValue=""
                    rules={{ required: "El modelo es requerido" }}
                    render={({ field }) => (
                      <Form.Select
                        label="Modelo"
                        id="producto"
                        color="warning"
                        {...field}
                        value={selectedProducto}
                        onChange={(e) => {
                          setSelectedProducto(e.target.value);
                          field.onChange(e);
                        }}
                      >
                        <option value="">- Seleccione -</option>
                        <option value="2146">CRF250R</option>
                        <option value="2148">CRF450R</option>
                      </Form.Select>
                    )}
                  />
                </FloatingLabel>
                {errors.producto && <p>{errors.producto.message}</p>}
              </Col>
              <Col md={6}>
                <FloatingLabel label="Tiempo estimado de compra">
                  <Controller
                    name="tiempoCompra"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "El tiempo estimado de compra es requerido",
                    }}
                    render={({ field }) => (
                      <Form.Select
                        label="Tiempo de compra"
                        id="tiempoCompra"
                        color="warning"
                        {...field}
                        value={selectedTiempoCompra}
                        onChange={(e) => {
                          const selectedValue = e.target.value;
                          const selectedOption = tiemposCompra.find(
                            (option) =>
                              option.gtc_codigo === parseInt(selectedValue, 10)
                          );
                          setSelectedTiempoCompra(selectedValue);
                          setSelectedTiempoCompraNombre(
                            selectedOption ? selectedOption.gtc_nombre : ""
                          );
                          field.onChange(e);
                        }}
                      >
                        <option value="">- Seleccione -</option>
                        {tiemposCompra?.map((tiempoCompra) => (
                          <option
                            key={tiempoCompra.gtc_codigo}
                            value={tiempoCompra.gtc_codigo}
                          >
                            {tiempoCompra.gtc_nombre}
                          </option>
                        ))}
                      </Form.Select>
                    )}
                  />
                </FloatingLabel>
                {errors.tiempoCompra && <p>{errors.tiempoCompra.message}</p>}
              </Col>
              <Col md={12} className="text-center legal">
                <Form.Group className="d-flex justify-content-center">
                  <Controller
                    name="terms"
                    control={control}
                    defaultValue={false}
                    rules={{
                      required: "Debes aceptar los términos y condiciones",
                    }}
                    render={({ field }) => (
                      <Form.Check
                        type="checkbox"
                        label="Acepto los términos y condiciones"
                        id="terms"
                        {...field}
                        isInvalid={!!errors.terms}
                      />
                    )}
                  />
                </Form.Group>
                {errors.terms && <p>{errors.terms.message}</p>}
                <Form.Group className="mt-3">
                  {!isLoading && (
                    <Button type="submit" className="btn-light btn-send px-5">
                      Enviar
                    </Button>
                  )}
                  {isLoading && (
                    <Button
                      type="submit"
                      className="btn-light btn-send px-5"
                      disabled
                    >
                      <FontAwesomeIcon icon={faSpinner} className="fa-spin" />{" "}
                      Enviando...
                    </Button>
                  )}
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactForm;
