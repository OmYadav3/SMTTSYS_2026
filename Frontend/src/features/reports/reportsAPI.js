import axiosInstance from "@/api/axiosInstance";

export const fetchReportAPI = async(params = {} ) => {
    try {
        const { data } = await axiosInstance.get("/report/get", {
            params,
        })
    
        return data;

    } catch (error) {
    console.log(error) 
    throw error;
    }
}