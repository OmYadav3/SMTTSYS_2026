import React, { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { fetchReports } from "../../../reportThunk";
import DynamicTable from "../DynamicTable";
import {transactionColumns} from '../../../config/tableConfigs/transactionConfig.js'

/*------------------ Column Config ------------------------*/


export default function TransactionTable({ filters }) {
  const dispatch = useDispatch();

  const {
    data: reportsData,
    loading,
    nextCursor,
    prevStack,
    totalCount,
  } = useSelector((state) => state.reports.transactions);

  console.log(reportsData, "TABLE COMPONENT");

  const filtersRef = useRef(filters);

  useEffect(() => {
    filtersRef.current = filters;
  }, [filters]);

  /*---------------- Pagination Handlers ----------------*/

  const handleNext = () => {
    // if last page is not exist
    if (!nextCursor) return;

    //We said to the backend give me data after this pointer or point
    dispatch(
      fetchReports({
        ...filtersRef.current,
        cursor: nextCursor,
        isBack: false,
      }),
    );
  };

  const handlePrev = () => {
    // If page is not exist like you are on the first page
    if (prevStack.length === 0) return;

    // Take page from prevStack
    const prevCursor = prevStack[prevStack.length - 1];

    //Calling to the backend give me the data before prevCursor
    dispatch(
      fetchReports({
        ...filtersRef.current,
        cursor: prevCursor,
        isBack: true,
      }),
    );
  };

  /*------------------ loading ------------------------*/

  if (loading) {
    return (
      <div className="p-10 text-center text-xl font-semibold">
        Loading Data...
      </div>
    );
  }

  return (
    <>
      <div className="overflow-auto rounded-xl border">
        {/*--------------- PAGINATION SETUP------------------- */}

        <div className="flex items-center justify-between">
          {/* LEFT */}
          <div className="p-4 ">
            <p className="font-bold">
              Total Transaction Count: {totalCount || 0}{" "}
            </p>
            <p className="font-bold">
              Showing: {reportsData?.length || 0} Transaction Per Page
            </p>
          </div>

          {/* RIGHT */}
          <div className=" p-4 flex justify-between items-center gap-4 ">
            <button
              onClick={handlePrev}
              // disabled={prevStack.length === 0}
              className="flex items-center justify-center border pr-3 pl-2 py-2 text- rounded-md cursor-pointer hover:scale-103 hover:text-blue-600 duration-200 
            "
            >
              <ChevronLeft />
              Prev
            </button>
            <button
              onClick={handleNext}
              disabled={!nextCursor}
              className="flex items-center justify-center border pl-3 pr-2 py-2 text- rounded-md cursor-pointer hover:scale-103 hover:text-blue-600 duration-200"
            >
              Next
              <ChevronRight className="" />
            </button>
          </div>
        </div>

        {/*--------------- TABLE SETUP------------------- */}

        {/* ⭐ Body */}
        <DynamicTable columns={transactionColumns} data={reportsData} />
      </div>
    </>
  );
}
