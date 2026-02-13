import { setAllVehicles } from "@/store/VehiclesSlice";
import { useDispatch } from "react-redux";
import { VEHICLE_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { useEffect } from "react";

const useFetchAllVehicles = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllVehicles = async () => {
      try {
        const res = await axios.get(VEHICLE_API_END_POINT, {
          withCredentials: true,
        });

        console.log(res, "VEHICLES DATA");

        if (res.data.success) {
          dispatch(setAllVehicles(res.data.vehicles));
        }

      } catch (error) {
        console.log(error, "ERROR WHILE FETCHING VEHICLES DATA");
      }
    };

    fetchAllVehicles();
  }, [dispatch]);
};

export default useFetchAllVehicles;
