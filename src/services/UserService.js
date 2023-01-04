import { apiHelper } from "./apiHelper";
export const createUser = async (data) => {
  try {
    const response = await apiHelper.post(`/users`, data);
    return await Promise.resolve(response.data);
  } catch (err) {
    console.log("error while getting contries", err);
    return await Promise.reject(err);
  }
};
