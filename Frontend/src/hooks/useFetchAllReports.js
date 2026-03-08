import { REPORT_API_END_POINT } from "@/utils/constant";
import { setAllReports } from "@/features/reports/reportsSlice";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect} from "react";

const useFetchAllReports = (page = 1) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllReports = async () => {
      try {
        const res = await axios.get(
          `${REPORT_API_END_POINT}?page=${page}`
        );

        if (res.data.success) {
          dispatch(setAllReports(res.data.data));
        }
      } catch (err) {
        console.log("ERROR WHILE FETCHING REPORTS", err);
      } 
    };

    fetchAllReports();
  }, [dispatch, page]);
};

export default useFetchAllReports;
