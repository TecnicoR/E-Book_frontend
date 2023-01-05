import { apiHelper } from "./apiHelper";
export const getAllProducts = async (data) => {
  try {
    const response = await apiHelper.get(`/products`);
    return await Promise.resolve(response.data);
  } catch (err) {
    console.log("error while getting contries", err);
    return await Promise.reject(err);
  }
};

export const addProductToCart = async (id) => {
  try {
    const response = await apiHelper.post(`/cart?userId=${id}&productId=${id}`);
    return await Promise.resolve(response.data);
  } catch (err) {
    console.log("error while adding product ", err);
    return await Promise.reject(err);
  }
};
