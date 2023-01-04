import { apiHelper } from "./apiHelper";

export const getAllCountries = async () => {
  try {
    const response = await apiHelper.get(`/csc/countries`);
    return await Promise.resolve(response.data);
  } catch (err) {
    console.log("error while getting contries", err);
    return await Promise.reject(err);
  }
};
export const getAllStates = async (country) => {
  try {
    const response = await apiHelper.get(`/csc/states?country=${country}`);
    return response.data;
  } catch (err) {
    console.log("error while getting states", err);
    return await Promise.reject(err);
  }
};
export const getAllCities = async (state) => {
  try {
    const response = await apiHelper.get(`/csc/cities?state=${state}`);
    return response.data;
  } catch (err) {
    console.log("error while getting cities", err);
    return await Promise.reject(err);
  }
};
