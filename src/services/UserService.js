import { apiHelper } from "./apiHelper";
export const createUser = async (data) => {
  try {
    const response = await apiHelper.post(`/users/initialize`, data);
    return await Promise.resolve(response.data);
  } catch (err) {
    console.log("error while getting contries", err);
    return await Promise.reject(err);
  }
};

export const getVerification = async (id, data) => {
  try {
    const response = await apiHelper.post(`/users/verify/${id}`, data);
    return await Promise.resolve(response.data);
  } catch (err) {
    console.log("error while getting contries", err);
    return await Promise.reject(err);
  }
};

export const confirmAccount = async (id, data) => {
  try {
    const response = await apiHelper.post(`/users/create/${id}`, data);
    return await Promise.resolve(response.data);
  } catch (err) {
    console.log("error while getting contries", err);
    return await Promise.reject(err);
  }
};

