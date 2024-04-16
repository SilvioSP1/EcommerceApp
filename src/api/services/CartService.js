import { axiosPrivate } from "../axios";

class CartService {
    static async addToCart(product, token) {
      const headers = {
        Authorization: `Bearer ${token}` // Aquí estableces el rol como el valor del encabezado de autorización
      };

      const res = await axiosPrivate.post("/api/Car/addtocar", product, { headers });
      return res.data;
    }

    static async addToReservation(reservation, token) {
      const headers = {
        Authorization: `Bearer ${token}` // Aquí estableces el rol como el valor del encabezado de autorización
      };

      const res = await axiosPrivate.post("/api/Car/addreservation", reservation, { headers });
      return res.data;
    }

    static async getReservationByUser(token) {
      const headers = {
        Authorization: `Bearer ${token}` // Aquí estableces el rol como el valor del encabezado de autorización
      };

      const res = await axiosPrivate.post("/api/Car/getReservationbyUser",{ headers });
      return res.data;
    }
  }
  
  export default CartService;