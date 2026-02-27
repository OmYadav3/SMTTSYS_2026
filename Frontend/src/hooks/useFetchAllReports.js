import { REPORT_API_END_POINT } from "@/utils/constant";
import { setAllReports } from "@/features/reports/reportsSlice";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const useFetchAllReports = (page = 1) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllReports = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await axios.get(
          `${REPORT_API_END_POINT}?page=${page}`
        );

        if (res.data.success) {
          dispatch(setAllReports(res.data.data));
        }
      } catch (err) {
        setError(err.message);
        console.log("ERROR WHILE FETCHING REPORTS", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllReports();
  }, [dispatch, page]);

  return { loading, error };
};

export default useFetchAllReports;
