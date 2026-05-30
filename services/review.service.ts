import api from "./axios";

export const addReview = async (data: any) => {
  const response = await api.post("/reviews/add", data);
  return response.data;
};

export const getVendorReviews = async (vendorId: string) => {
  const response = await api.get(`/reviews/vendor/${vendorId}`);
  return response.data;
};