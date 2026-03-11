import axiosInstance from "@/api/axiosInstance";

export const fetchReportAPI = async(params) => {
    const response = await axiosInstance.get("/report", {
        params,
    })

    return response.data;
}