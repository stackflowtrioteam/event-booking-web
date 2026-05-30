import api from "./axios";

export const createEvent = async (data: any) => {
  const response = await api.post("/events/create", data);
  return response.data;
};

export const getMyEvents = async () => {
  const response = await api.get("/events/my-events");
  return response.data;
};

export const getCustomerQuotations = async () => {
  const response = await api.get("/quotations/customer");
  return response.data;
};