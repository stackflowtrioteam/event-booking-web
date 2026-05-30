
import api from "./axios";

export const createPayment = async (data: any) => {
  const response = await api.post("/payments/create", data);
  return response.data;
};

export const paymentHistory = async () => {
  const response = await api.get("/payments/history");
  return response.data;
};