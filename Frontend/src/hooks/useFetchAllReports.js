import { REPORT_API_END_POINT } from "@/utils/constant";
import { setAllReports } from "@/store/ReportsSlice";
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { useEffect } from "react";

const useFetchAllReports = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchAllReports = async() => {
            try {
                const endpoint = REPORT_API_END_POINT;
                const res = await axios.get(endpoint, {
                    withCredentials: true
                })
                console.log("RESPONSE OF REPORT: ", res)
                if(res.data.success){
                    dispatch(setAllReports(res.data.reports))
                }
            } catch (error) {
                console.log(error, "ERROR WHILE FETCHING THE REPORTS ")
            }
        }
        fetchAllReports();
    },[dispatch])
}

export default useFetchAllReports