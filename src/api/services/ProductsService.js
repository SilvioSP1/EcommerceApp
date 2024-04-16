import axiosPublic from "../axios";

class ProductsService {
  static async getProducts() {
    const res = await axiosPublic.get(
      `/api/PostSearch/getall`
    );
    return res.data;
  }

  static async getProductById(id) {
    const res = await axiosPublic.get(`/api/PostSearch/getpost/${id}`);
    return res.data;
  }

}

export default ProductsService;
