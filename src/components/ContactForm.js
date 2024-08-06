import { SAVE_LEAD } from "@constants";
import endPoints from "@services/api";
import { authenticate, fetchData } from "@services/api/utils";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Controller, useForm } from "react-hook-form";

const queryString = require("query-string");

function ContactForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({ mode: "onBlur" });

  // const [tipoProductoSeleccionado, setTipoProductoSeleccionado] = useState("");
  // const [isLoading, setLoading] = useState(false);
  const [ciudades, setCiudades] = useState([]);
  const [formasPago, setFormaPago] = useState([]);
  // const [agencias, setAgencias] = useState([]);
  const [selectedTipoProductoNombre, setSelectedTipoProductoNombre] =
    useState("");
  // const [categorias, setCategorias] = useState([]);
  // const [productos, setProductos] = useState([]);
  // const [tipoMensaje, setTipoMensaje] = useState("");
  // const [mensaje, setMensaje] = useState("");
  // const [open, setOpen] = useState(false);
  const [ciudadSeleccionada, setCiudadSeleccionada] = useState(null);
  // const [selectedProducto, setSelectedProducto] = useState("");
  const [selectedFormaPago, setSelectedFormaPago] = useState("");
  const [selectedFormaPagoNombre, setSelectedFormaPagoNombre] = useState("");
  const [token, setToken] = useState("");

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const getCities = async (ciudadCodigo) => {
  //   const options = await authenticate();
  //   if (options) {
  //     const responseAgencias = await axios.post(
  //       endPoints.agencies.getAgencies,
  //       {
  //         marca: REQUEST_AGENCIES.marca,
  //         codempresa: REQUEST_AGENCIES.codempresa,
  //         codciudad: ciudadCodigo,
  //         estado: REQUEST_AGENCIES.estado,
  //       },
  //       options
  //     );
  //     // setAgencias(responseAgencias.data);
  //   }
  // };

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
    // setMostrarCamposExtras(tipoProductoSeleccionado === 1);
    const getData = async () => {
      const options = await authenticate();
      if (options) {
        try {
          const { ciudades, formasPago } = await fetchData(options);
          setCiudades(ciudades);
          setFormaPago(formasPago);
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

  const onSubmit = async (data) => {
    // setLoading(true);

    const options = await authenticate();
    if (options) {
      try {
        // Objeto base con campos comunes
        const requestData = {
          tipo_integracion: 0,
          empresa: SAVE_LEAD.codempresa,
          almacen: data.agencia,
          plataforma: "web",
          canal: 46,
          medio: 188,
          calidad: 3,
          cedula: data.cedula,
          nombre: data.nombre,
          apellido: data.apellido,
          email: data.email,
          direccion: data.direccion,
          telefono: data.celular,
          exonerado: 0,
          token: token,
          tipo_vehiculo: 8,
          codproducto: data.producto,
          tiempo_compra: data.tiempoCompra,
          tiempo_compra_nombre: selectedFormaPagoNombre,
          aceptacion: 1,
          cod_medio_contacto: 1,
          cod_rango_ingresos: 3,
          service_type_code: data.tipoProducto,
          service_type_name: selectedTipoProductoNombre,
        };

        if (data.tipoProducto !== 1) {
          delete requestData.codproducto;
          delete requestData.tiempo_compra;
          delete requestData.tiempo_compra_nombre;
        }

        await axios.post(endPoints.lead.createLead, requestData, options);

        // setLoading(false);
        // setOpen(true);
        // setTipoMensaje("success");
        // setMensaje(MESSAGES.success);
        reset();
        // setSelectedAgencia("");
        // setTipoProductoSeleccionado("");
        setSelectedTipoProductoNombre("");
        setSelectedFormaPago("");
        setSelectedFormaPagoNombre("");
        // setCategoriaSeleccionada("");
        // setSelectedProducto("");
      } catch (error) {
        // setOpen(true);
        // setTipoMensaje("error");
        // setMensaje(MESSAGES.error);
      }
    }
  };

  const validateCedula = (value) => {
    if (!validarCedula(value)) {
      return "Ingrese una cédula válida";
    }
  };

  console.log(ciudadSeleccionada, selectedFormaPago);

  return (
    <Container className="mt-4 mt-md-5">
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
                <FloatingLabel label="Forma de pago">
                  <Controller
                    name="formasPago"
                    control={control}
                    defaultValue=""
                    rules={{ required: "La forma de pago es requerida" }}
                    render={({ field }) => (
                      <Form.Select
                        label="Ciudad"
                        id="ciudad"
                        color="warning"
                        {...field}
                        onChange={(e) => {
                          setCiudadSeleccionada(e.target.value);
                          // setSelectedAgencia("");
                          // getCities(e.target.value);
                          field.onChange(e);
                        }}
                      >
                        <option value="">- Seleccione -</option>
                        {formasPago?.map((formaPago) => (
                          <option
                            key={formaPago.fpam_id}
                            value={formaPago.fpam_id}
                          >
                            {formaPago.gtc_codigo}
                          </option>
                        ))}
                      </Form.Select>
                    )}
                  />
                </FloatingLabel>
                {errors.formasPago && <p>{errors.formasPago.message}</p>}
              </Col>
              <Col md={6}>
                <FloatingLabel label="Ciudad en la que desea ser atendido">
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
                        onChange={(e) => {
                          setCiudadSeleccionada(e.target.value);
                          // setSelectedAgencia("");
                          // getCities(e.target.value);
                          field.onChange(e);
                        }}
                      >
                        <option value="">- Seleccione -</option>
                        {ciudades?.map((ciudad) => (
                          <option
                            key={ciudad.ciudad_codigo}
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
                <FloatingLabel label="Modelo de la moto">
                  <Controller
                    name="modelo"
                    control={control}
                    defaultValue=""
                    rules={{ required: "El modelo es requerido" }}
                    render={({ field }) => (
                      <Form.Select {...field}>
                        <option value="">- Seleccione -</option>
                        <option value="CT 100">CRF250R</option>
                        <option value="CT 100">CRF450R</option>
                      </Form.Select>
                    )}
                  />
                </FloatingLabel>
                {errors.modelo && <p>{errors.modelo.message}</p>}
              </Col>
              {/* <Col md={6}>
                <Form.Group className="terminos">
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
                        label="Acepto términos y condiciones"
                        {...field}
                      />
                    )}
                  />
                </Form.Group>
              </Col> */}
              <Col md={6} className="text-center">
                {/* <Form.Group className="d-flex justify-content-center">
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
                        label="Acepto términos y condiciones"
                        {...field}
                      />
                    )}
                  />
                </Form.Group> */}
                {errors.terms && <p>{errors.terms.message}</p>}
                <div className="d-grid">
                  <Button
                    type="submit"
                    className="btn-light btn-lg btn-send px-5"
                  >
                    Enviar
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactForm;
