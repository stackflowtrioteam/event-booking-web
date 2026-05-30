import api from "./axios";

export const createBooking = async (data: any) => {
  const response = await api.post("/bookings/create", data);
  return response.data;
};

export const getBookings = async () => {
  const response = await api.get("/bookings");
  return response.data;
};