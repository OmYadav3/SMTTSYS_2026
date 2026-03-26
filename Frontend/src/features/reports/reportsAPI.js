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

export const fetchSummaryReportAPI = async (params ={}) => {
  try {
    const { data } = await axiosInstance.get("/report/summary", {
      params,
    } )

    return data;
  } catch (error) {
    console.error("API Error :", error.response?.data || error.message);
    throw error;
  }
}
