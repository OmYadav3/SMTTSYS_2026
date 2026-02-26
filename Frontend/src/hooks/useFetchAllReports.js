import { REPORT_API_END_POINT } from "@/utils/constant";
import { setAllReports } from "@/features/reports/reportsSlice";
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { useEffect } from "react";

const useFetchAllReports = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchAllReports = async() => {
            try {
                // const endpoint = REPORT_API_END_POINT;
                // console.log(endpoint)
                const res = await axios.get('http://localhost:8000/api/v1/transactions?page=1')
                console.log("RESPONSE OF REPORT: ", res.data)
                if(res.data.success){
                    dispatch(setAllReports(res.data))
                }
            } catch (error) {
                console.log(error, "ERROR WHILE FETCHING THE REPORTS ")
            }
        }
        fetchAllReports();
    },[dispatch])
}

export default useFetchAllReports