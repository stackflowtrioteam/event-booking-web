import api from "./axios";

// =========================
// Upload Portfolio
// =========================

export const uploadPortfolio = async (
  data: FormData
) => {
  const response = await api.post(
    "/web/vendor/portfolio",
    data,
    {
      headers: {
        "Content-Type":
          "multipart/form-data",
      },
    }
  );

  return response.data;
};

// =========================
// Get Event Categories
// =========================

export const getEventCategories =
  async () => {
    const response = await api.get(
      "/web/eventCategories"
    );

    return response.data;
  };

// =========================
// Get Cities
// =========================

export const getCities = async () => {
  const response = await api.get(
    "/web/cities"
  );

  return response.data;
};

// =========================
// Get Vendor Leads
// =========================

export const getVendorLeads =
  async () => {
    const response = await api.get(
      "/vendor/leads"
    );

    return response.data;
  };

// =========================
// Send Quotation
// =========================

export const sendQuotation = async (
  data: any
) => {
  const response = await api.post(
    "/vendor/send-quotation",
    data
  );

  return response.data;
};