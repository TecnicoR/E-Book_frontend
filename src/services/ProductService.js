import { apiHelper } from "./apiHelper";
export const getAllProducts = async (data) => {
  try {
    const response = await apiHelper.get(`/products`);
    return await Promise.resolve(response.data);
  } catch (err) {
    console.log("error while getting products", err);
    return await Promise.reject(err);
  }
};

export const addProductToCart = async (userId, productId) => {
  try {
    const response = await apiHelper.post(`/cart?userId=${userId}&productId=${productId}`);
    return await Promise.resolve(response.data);
  } catch (err) {
    console.log("error while adding product ", err);
    return await Promise.reject(err);
  }
};

export const getCartByUserId = async (userId) => {
  try {
    const response = await apiHelper.get(`/users/${userId}/cart`);
    return await Promise.resolve(response.data);
  } catch (err) {
    console.log("error while getting cart ", err);
    return await Promise.reject(err);
  }
};
