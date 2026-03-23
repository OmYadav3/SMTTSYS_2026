import React, { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { fetchReports } from "../../reportThunk";


/*------------------ Column Config ------------------------*/
const columns = [
  { key: "PLAZA_CODE", label: "PLAZA CODE" },
  { key: "PLAZE_NAME", label: "PLAZA NAME" },
  {
    key: "image",
    label: "IMAGE",
    render: (value) => (
      <img src={value} alt="" className="h-8 w-8 mx-auto text-center" />
    ),
  },
  { key: "CCH_TRANS_ID", label: "CCH TRANS ID" },
  { key: "LANE_TRANS_ID", label: "LANE TRANS ID" },
  { key: "TAG", label: "TAG" },
  { key: "VEH_PLATE", label: "VEH PLATE" },
  { key: "IS_ANPR", label: "IS ANPR" },
  { key: "ANPR_PLATE", label: "ANPR PLATE" },
  { key: "LANE_ID", label: "LANE ID" },
  { key: "LANE_TYPE", label: "LANE TYPE" },
  { key: "DIRECTION", label: "DIRECTION" },
  { key: "VEH_CLASS", label: "VEH CLASS" },
  { key: "AVC_CLASS", label: "AVC CLASS" },
];


export default function TransactionReportFormTable({filters}) {
  const dispatch = useDispatch()

  const {
    data: reportsData,
    loading,
    nextCursor,
    prevStack,
    totalCount
  } = useSelector((state) => state.reports);

  console.log(reportsData, "TABLE COMPONENT");

  const filtersRef = useRef(filters)

    useEffect(() => {
    filtersRef.current = filters;
  }, [filters]);


  /*---------------- Pagination Handlers ----------------*/
  const handleNext = () => {
    
    // if last page is not exist
    if (!nextCursor) return; 

    //We said to the backend give me data after this pointer or point 
    dispatch(fetchReports({
       ...filtersRef.current,
      cursor: nextCursor,
    }))
  }

  const handlePrev = () => {

    // If page is not exist like you are on the first page
    if (prevStack.length === 0) return;

    // Take page from prevStack 
    const prevCursor = prevStack[prevStack.length -1];

    //Calling to the backend give me the data before prevCursor 
    dispatch(fetchReports({
      ...filtersRef.current,
      cursor: prevCursor,
      isBack:true
    }))
  }


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
            <p className="font-bold">Total Transaction Count: {totalCount || 0} </p>
            <p className="font-bold">Showing: {reportsData?.length || 0} Transaction Per Page</p>
          </div>

          {/* RIGHT */}
          <div className=" p-4 flex justify-between items-center gap-4 ">
            <button
              onClick={handlePrev}
              disabled={prevStack.length === 0}
              className="flex items-center justify-center border pr-3 pl-2 py-2 text- rounded-md cursor-pointer hover:scale-103 hover:text-blue-600 duration-200 
            "
            >
              <ChevronLeft />
              Prev
            </button>
            <button 
              onClick={handleNext}
              disabled={!nextCursor}
              className="flex items-center justify-center border pl-3 pr-2 py-2 text- rounded-md cursor-pointer hover:scale-103 hover:text-blue-600 duration-200">
              Next
              <ChevronRight className="" />
            </button>
          </div>
        </div>

        {/*--------------- TABLE SETUP------------------- */}

        <table className="w-full text-sm">
          {/* ⭐ Header */}
          <thead className="bg-blue-400/60 text-white">
            <tr>
              {columns.map((col) => (
                <th key={col.key} className="p-4 border-r whitespace-nowrap">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>

          {/* ⭐ Body */}
          <tbody>
            {reportsData?.length > 0 ? (
              reportsData.map((row, rowIndex) => (
                <tr key={row.id || rowIndex} className="hover:text-gray-100 ">
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      className="p-2 text-center border-t hover:scale-x-103"
                    >
                      {col.render
                        ? col.render(row[col.key], row)
                        : (row[col.key] ?? "-")}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="p-10 text-center text-xl font-semibold"
                >
                  Data Not Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
