import { REQUEST_CITIES, REQUEST_LOGIN, REQUEST_PRODUCTS } from "@constants";
import endPoints from "@services/api";
import axios from "axios";

export const authenticate = async () => {
  try {
    const loginResponse = await axios.post(endPoints.auth.login, REQUEST_LOGIN);
    const auth = loginResponse.data;

    if (auth.token.length > 0) {
      const options = {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      };
      return options;
    } else {
      console.error("Autenticación fallida");
      return null;
    }
  } catch (error) {
    console.error("Error en la autenticación:", error);
    return null;
  }
};

export const fetchData = async (options) => {
  try {
    const [ciudadesResponse, productsResponse, tiemposCompraResponse] =
      await Promise.all([
        axios.post(endPoints.cities.getCities, REQUEST_CITIES, options),
        axios.post(endPoints.products.getProducts, REQUEST_PRODUCTS, options),
        axios.get(endPoints.purchaseTime.getPurchaseTime, options),
        // axios.post(
        //   endPoints.paymentMethods.getPaymentMethods,
        //   REQUEST_PAYMENT_METHODS,
        //   options
        // ),
      ]);

    const ciudades = ciudadesResponse.data;
    const productos = productsResponse.data.data;
    // const metodosPago = metodosPagoResponse.data.data;

    return { ciudades, productos };
  } catch (error) {
    console.error("Error al obtener datos:", error);
    return null;
  }
};
