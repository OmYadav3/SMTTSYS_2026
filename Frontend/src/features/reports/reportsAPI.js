import axiosInstance from "@/api/axiosInstance";

export const fetchReportAPI = async (params = {}) => {
  try {
    const { data } = await axiosInstance.get("/report/get", {
      params,
    });
    // console.log(data, "FULL API RESPONSE");

    return data; // ✅ return full response
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
