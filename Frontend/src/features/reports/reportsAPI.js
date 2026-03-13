import axiosInstance from "@/api/axiosInstance";

export const fetchReportAPI = async(params = {} ) => {
    try {
        const { data } = await axiosInstance.get("/report/get", {
            params,
        })
        let dataInObj = data.data
        console.log(dataInObj, "data")
        return dataInObj;

    } catch (error) {
    console.log(error) 
    throw error;
    }
}