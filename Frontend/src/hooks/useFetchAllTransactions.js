import { setAllTransactions } from "../store/TransactionsSlice.js";
import { TRANSACTION_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


const useFetchAllTransactions = () => {
    const dispatch = useDispatch();

    useEffect(() => {

        const fetchAllTransactions = async () =>{
            try {
                const endPoint = TRANSACTION_API_END_POINT;
                const res = await axios.get(endPoint, {
                    withCredentials: true,
                });
                console.log(res, "Transactions Data")
                if(res.data.success){
                    dispatch(setAllTransactions(res.data.transactions));
                }

            } catch (error) {
                console.log(error, "ERROR IN FETCHING ALL TRANSACTIONS");
            }
        }
        fetchAllTransactions();
        }, [dispatch]) ;

}

export default useFetchAllTransactions;